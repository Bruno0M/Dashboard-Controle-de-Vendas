using DashboardAPI.Dto;
using DashboardAPI.Models;

namespace DashboardAPI.Services.UserService
{
    public interface IAuthInterface
    {
        Task<Response<AuthCreationDto>> UserCreation(AuthCreationDto userCreationDto);
        Task<Response<object>> Login(AuthLoginDto user);
    }
}
