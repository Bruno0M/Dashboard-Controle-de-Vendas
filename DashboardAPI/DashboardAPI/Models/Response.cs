namespace DashboardAPI.Models
{
    public class Response <T>
    {
        public string Message { get; set; } = string.Empty;
        public bool Status { get; set; }
    }
}
