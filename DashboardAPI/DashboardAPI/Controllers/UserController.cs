using DashboardAPI.Dto;
using DashboardAPI.Models;
using DashboardAPI.Services.UserService;
using Microsoft.AspNetCore.Http;
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


        [HttpPost]
        public async Task<ActionResult> Register(UserCreationDto userCreationDto)
        {
            var response = await _userInterface.UserCreation(userCreationDto);
            return Ok(response);
        }

            
    }
}
