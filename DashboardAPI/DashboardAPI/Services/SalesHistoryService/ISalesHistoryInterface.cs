using DashboardAPI.Dtos;
using DashboardAPI.Models;

namespace DashboardAPI.Services.SalesHistoryService
{
    public interface ISalesHistoryInterface
    {
        public Task<Response<SalesHistoryDto>> SaveHistory(SalesHistoryDto salesHistory, int userId);
        public Task<Response<IEnumerable<SalesHistoryDto>>> GetHistoryByUserId(int userId);

    }
}
