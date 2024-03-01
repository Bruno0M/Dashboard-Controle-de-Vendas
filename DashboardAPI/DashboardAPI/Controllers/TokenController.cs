using DashboardAPI.Dto;
using DashboardAPI.Services.TokenService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DashboardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private readonly ITokenInterface _tokenInterface;
        public TokenController(ITokenInterface tokenInterface)
        {
            _tokenInterface = tokenInterface;
        }

        [HttpPost("GenerateToken")]
        public async Task<ActionResult> Login(UserLoginDto user)
        {
            var response = _tokenInterface.GenerateToken(user);
            return Ok(response);
        }
    }
}
