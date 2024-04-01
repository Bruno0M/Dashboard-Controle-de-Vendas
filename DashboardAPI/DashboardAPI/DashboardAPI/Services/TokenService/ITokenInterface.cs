using DashboardAPI.Dto;
using DashboardAPI.Models;

namespace DashboardAPI.Services.TokenService
{
    public interface ITokenInterface
    {
        object GenerateToken(UserModel user);
    }
}
