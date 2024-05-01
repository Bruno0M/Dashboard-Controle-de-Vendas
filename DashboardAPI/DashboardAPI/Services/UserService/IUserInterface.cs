using DashboardAPI.Dtos;
using DashboardAPI.Models;

namespace DashboardAPI.Services.UserService
{
    public interface IUserInterface
    {
        public Task<Response<IEnumerable<UserDto>>> GetUserById(int id);
    }
}
