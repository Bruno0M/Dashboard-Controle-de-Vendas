using DashboardAPI.Dto;

namespace DashboardAPI.Services.TokenService
{
    public interface ITokenInterface
    {
        string GenerateToken(UserLoginDto user);
    }
}
