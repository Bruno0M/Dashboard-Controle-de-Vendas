﻿using System.Text.Json.Serialization;

namespace DashboardAPI.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Categoria { get; set; }
        public decimal Price { get; set; }
        public int Quantidade { get; set; }
        public int UserId { get; set; }
        [JsonIgnore]
        public UserModel User { get; set; }
    }
}