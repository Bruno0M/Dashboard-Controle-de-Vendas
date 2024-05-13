namespace DashboardAPI.Dtos
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Categoria { get; set; }
        public decimal Price { get; set; }
        public int Quantidade { get; set; }
    }
}
