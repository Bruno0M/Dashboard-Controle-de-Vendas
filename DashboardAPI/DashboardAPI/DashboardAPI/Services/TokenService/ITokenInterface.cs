using DashboardAPI.Dto;
using DashboardAPI.Models;

namespace DashboardAPI.Services.TokenService
{
    public interface ITokenInterface
    {
        string GenerateToken(UserModel user);
    }
}
