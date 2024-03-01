using DashboardAPI.Data.Context;
using DashboardAPI.Dto;
using DashboardAPI.Models;
using System.Security.Cryptography;
using System.Text;

namespace DashboardAPI.Services.UserService
{
    public class UserService : IUserInterface
    {
         private readonly DashboardContext _context;
        public UserService(DashboardContext context)
        {
            _context = context;
        }

        public async Task<UserLoginDto> Login(UserLoginDto userLoginDto)
        {
            throw new NotImplementedException();
        }

        public async Task<Response<UserCreationDto>> UserCreation(UserCreationDto userCreationDto)
        {
            Response<UserCreationDto> response = new Response<UserCreationDto>();

           try
           {
                if(!VerifyUserAndEmailExist(userCreationDto))
                {
                    response.Message = "Registered Email";
                    response.Status = false;
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
                response.Status = true;
           }
           catch (Exception ex)
           {
                response.Message = ex.Message;
                response.Status = false;
           }

            return response;
        }

        private void CreateHashPassword(string password, out byte[] senhaHash, out byte[] senhaSalt)
        {
            using(HMACSHA512 hmac =  new HMACSHA512())
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
            
            if(user != null) return false;

            return true;
        }

    }
}
