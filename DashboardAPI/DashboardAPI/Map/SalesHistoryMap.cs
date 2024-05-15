using DashboardAPI.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace DashboardAPI.Map
{
    public class SalesHistoryMap : IEntityTypeConfiguration<SalesHistoryModel>
    {
        public void Configure(EntityTypeBuilder<SalesHistoryModel> builder)
        {
            builder.ToTable("tb_history");
            builder.HasKey(x => x.Id);

            builder.Property(x => x.ProductName)
                .HasColumnName("product_name")
                .IsRequired();

            builder.Property(x => x.QuantityProductsSold)
                .HasColumnName("quantity_product_sold")
                .IsRequired();

            builder.Property(x => x.AmountSale)
                .HasColumnName("amount_sale")
                .HasPrecision(12, 2)
                .IsRequired();

            builder.Property(x => x.DateSale)
                .HasColumnType("date")
                .HasColumnName("date_sale")
                .IsRequired();
        }
    }
}