using DashboardAPI.Helpers;
using DashboardAPI.Services.UserService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DashboardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserInterface _userInterface;
        public UserController(IUserInterface userInterface)
        {
            _userInterface = userInterface;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetUserId()
        {
            var userId = UserUtils.GetCurrentUserId(User);

            var response = await _userInterface.GetUserById(userId);
            return Ok(response);
        }

    }
}
