using DashboardAPI.Dtos;
using DashboardAPI.Helpers;
using DashboardAPI.Services.SalesHistoryService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DashboardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryController : ControllerBase
    {

        private readonly ISalesHistoryInterface _salesHistory;
        public HistoryController(ISalesHistoryInterface salesHistory)
        {
            _salesHistory = salesHistory;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetHistoryByUserId()
        {
            var userId = UserUtils.GetCurrentUserId(User);

            var response = await _salesHistory.GetHistoryByUserId(userId);
            return Ok(response);
        }
    }
}
