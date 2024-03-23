using DashboardAPI.Data.Context;
using DashboardAPI.Dto;
using DashboardAPI.Models;
using DashboardAPI.Services.TokenService;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Security.Cryptography;
using System.Text;

namespace DashboardAPI.Services.UserService
{
    public class UserService : IUserInterface
    {
        private readonly DashboardContext _context;
        private readonly ITokenInterface _tokenInterface;
        public UserService(DashboardContext context, ITokenInterface tokenInterface)
        {
            _context = context;
            _tokenInterface = tokenInterface;
        }

        public async Task<Response<object>> Login(UserLoginDto user)
        {
            var response = new Response<object>();

            try
            {
                var userData = await _context.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
                if (userData == null)
                {
                    response.Data = null;
                    response.Message = "Invalid Credentials";
                    response.Status = HttpStatusCode.BadRequest;

                    return response;
                }

                if (!VerifyPassword(user.Password, userData.PasswordHash, userData.PasswordSalt))
                {

                    response.Data = null;
                    response.Message = "Invalid Credentials";
                    response.Status = HttpStatusCode.BadRequest;

                    return response;
                }

                object token = new { Token = _tokenInterface.GenerateToken(userData) };

                response.Data = token;
                response.Message = "Successful login";
                response.Status = HttpStatusCode.OK;

            }
            catch (Exception ex) 
            { 
                response.Message = ex.Message;
            };
            return response;
        }

        public async Task<Response<UserCreationDto>> UserCreation(UserCreationDto userCreationDto)
        {
            Response<UserCreationDto> response = new Response<UserCreationDto>();

            try
            {
                if (!VerifyUserAndEmailExist(userCreationDto))
                {
                    response.Message = "Registered Email";
                    response.Status = HttpStatusCode.BadRequest;
                    return response;
                }

                CreateHashPassword(userCreationDto.Password, out byte[] passwordHash, out byte[] passwordSalt);

                UserModel user = new UserModel()
                {
                    Name = userCreationDto.Name,
                    Surname = userCreationDto.Surname,
                    Email = userCreationDto.Email,
                    PasswordHash = passwordHash,
                    PasswordSalt = passwordSalt
                };

                _context.Add(user);
                await _context.SaveChangesAsync();

                response.Message = "Successfully registered";
                response.Status = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }

            return response;
        }

        private void CreateHashPassword(string password, out byte[] senhaHash, out byte[] senhaSalt)
        {
            using (HMACSHA512 hmac = new HMACSHA512())
            {
                senhaSalt = hmac.Key;
                senhaHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPassword(string password, byte[] senhaHash, byte[] senhaSalt)
        {
            using (var hmac = new HMACSHA512(senhaSalt))
            {
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(senhaHash);
            }
        }

        private bool VerifyUserAndEmailExist(UserCreationDto userCreationDto)
        {
            var user = _context.Users.FirstOrDefault(userData => userData.Email == userCreationDto.Email);

            if (user != null) return false;

            return true;
        }

    }
}
