using DashboardAPI.Data.Context;
using DashboardAPI.Dtos;
using DashboardAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace DashboardAPI.Services.UserService
{
    public class UserService : IUserInterface
    {
        private readonly DashboardContext _context;
        public UserService(DashboardContext context)
        {
            _context = context;
        }
        public async Task<Response<IEnumerable<UserDto>>> GetUserById(int id)
        {
            var response = new Response<IEnumerable<UserDto>>();
            try
            {
                var users = await _context.
                    Users.Where(x => x.Id == id).ToListAsync();

                var usersDto = users.Select(u => new UserDto
                {
                    FirstName = u.FirstName,
                    LastName = u.LastName,
                });

                response.Data = usersDto;
                response.Status = HttpStatusCode.OK;
            }
            catch(Exception ex)
            {
                response.Message = ex.Message;
            }

            return response;
        }
    }
}
