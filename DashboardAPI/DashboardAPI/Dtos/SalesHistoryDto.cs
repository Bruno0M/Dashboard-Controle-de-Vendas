namespace DashboardAPI.Dtos
{
    public class SalesHistoryDto
    {
        public string ProductName { get; set; }
        public int QuantityProductsSold { get; set; }
        public decimal AmountSale { get; set; }
        public DateTime DateSale { get; set; }
    }
}
