using DashboardAPI.Dto;
using DashboardAPI.Models;

namespace DashboardAPI.Services.UserService
{
    public interface IUserInterface
    {
        Task<Response<UserCreationDto>> UserCreation(UserCreationDto userCreationDto);
        Task<Response<string>> Login(UserLoginDto user);
    }
}
