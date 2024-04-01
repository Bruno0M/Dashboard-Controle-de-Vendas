using DashboardAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DashboardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        [Authorize]
        public ActionResult<string> GetTest()
        {
            Response<string> response = new Response<string>();
            response.Message = "Acessei!";

            return Ok(response);
        }
    }
}
