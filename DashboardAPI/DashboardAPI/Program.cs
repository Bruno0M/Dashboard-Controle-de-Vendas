
using DashboardAPI.Data.Context;
using DashboardAPI.Dto;
using DashboardAPI.Dtos;
using DashboardAPI.Services.ProductService;
using DashboardAPI.Services.SalesHistoryService;
using DashboardAPI.Services.TokenService;
using DashboardAPI.Services.UserService;
using DashboardAPI.Validators;
using FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System.Text;

namespace DashboardAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddAuthentication();
            builder.Services.AddAuthorization();

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //Fluent Validation
            builder.Services.AddTransient<IValidator<AuthLoginDto>, UserLoginValidator>();
            builder.Services.AddTransient<IValidator<AuthCreationDto>, UserCreationValidator>();
            builder.Services.AddTransient<IValidator<ProductDto>, ProductValidator>();


            builder.Services.AddScoped<IAuthInterface, AuthService>();
            builder.Services.AddTransient<ITokenInterface, TokenService>();
            builder.Services.AddScoped<IProductInterface, ProductService>();
            builder.Services.AddScoped<IUserInterface, UserService>();
            builder.Services.AddScoped<ISalesHistoryInterface, SalesHistoryService>();


            builder.Services.AddDbContext<DashboardContext>(options =>
            {
                options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
            });

            builder.Services.AddSwaggerGen(options =>
            {
                options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                {
                    Description = "Using the Bearer scheme (\"bearer {token}\")",
                    In = ParameterLocation.Header,
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey
                });

                options.OperationFilter<SecurityRequirementsOperationFilter>();
            });

            builder.Services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    RequireExpirationTime = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration.GetSection("AppSettings:PrivateKey").Value)),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero,
                };

            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();

                app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());
            }

            //Configure Cors.
            var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Value;

            app.UseCors(x => x
            .WithOrigins(allowedOrigins)
            .AllowAnyMethod()
            .AllowAnyHeader());

            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
