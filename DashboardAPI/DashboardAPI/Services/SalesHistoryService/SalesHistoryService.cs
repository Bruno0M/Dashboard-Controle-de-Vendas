using DashboardAPI.Data.Context;
using DashboardAPI.Dtos;
using DashboardAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace DashboardAPI.Services.SalesHistoryService
{
    public class SalesHistoryService : ISalesHistoryInterface
    {
        private readonly DashboardContext _context;
        public SalesHistoryService(DashboardContext context)
        {
            _context = context;
        }

        public async Task<Response<IEnumerable<SalesHistoryDto>>> GetHistoryByUserId(int userId)
        {
            var response = new Response<IEnumerable<SalesHistoryDto>>();
            try
            {
                var history = await _context.
                    SalesHistory.Where(x => x.UserId == userId).ToListAsync();

                var historyDto = history.Select(p => new SalesHistoryDto
                {
                    ProductName = p.ProductName,
                    AmountSale = p.AmountSale,
                    QuantityProductsSold = p.QuantityProductsSold,
                    DateSale = p.DateSale
                });

                response.Data = historyDto;
                response.Status = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }

            return response;
        }

        public async Task<Response<SalesHistoryDto>> SaveHistory(SalesHistoryDto salesHistory, int userId)
        {
            var response = new Response<SalesHistoryDto>();
            try
            {
                var history = new SalesHistoryModel()
                {
                    ProductName = salesHistory.ProductName,
                    AmountSale = salesHistory.AmountSale,
                    QuantityProductsSold = salesHistory.QuantityProductsSold,
                    DateSale = salesHistory.DateSale,
                    UserId = userId
                };

                _context.Add(history);
                await _context.SaveChangesAsync();

                response.Data = salesHistory;
                response.Message = "History Created";
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }

            return response;
        }
    }
}
