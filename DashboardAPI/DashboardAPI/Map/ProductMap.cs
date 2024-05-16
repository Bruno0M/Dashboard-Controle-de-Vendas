using DashboardAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DashboardAPI.Map
{
    public class ProductMap : IEntityTypeConfiguration<ProductModel>
    {
        public void Configure(EntityTypeBuilder<ProductModel> builder)
        {
            builder.ToTable("tb_products");
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .HasColumnName("name")
                .IsRequired();

            builder.Property(x => x.Price)
                .HasColumnName("price")
                .IsRequired();

            builder.Property(x => x.Category)
                .HasColumnName("category")
                .IsRequired();

            builder.Property(x => x.Quantity)
                .HasColumnName("quantity")
                .IsRequired();

            builder.Property(x => x.CreationDate)
                .HasColumnName("creation_date")
                .HasColumnType("date")
                .IsRequired();
        }
    }
}