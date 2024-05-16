﻿namespace DashboardAPI.Dtos
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public DateTime CreationDate { get; set; }

    }
}
