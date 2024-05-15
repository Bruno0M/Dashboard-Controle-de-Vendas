using System.Text.Json.Serialization;

namespace DashboardAPI.Models
{
    public class SalesHistoryModel
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public int QuantityProductsSold { get; set; }
        public decimal AmountSale { get; set; }
        public DateTime DateSale { get; set; }
        public int UserId { get; set; }
        [JsonIgnore]
        public UserModel User { get; set; }
    }
}
