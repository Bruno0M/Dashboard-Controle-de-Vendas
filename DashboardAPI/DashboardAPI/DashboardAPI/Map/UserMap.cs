using DashboardAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DashboardAPI.Map
{
    public class UserMap : IEntityTypeConfiguration<UserModel>
    {
        public void Configure(EntityTypeBuilder<UserModel> builder)
        {
            builder.ToTable("tb_users");
            builder.HasKey(x => x.Id);

            builder.Property(x => x.FirstName)
                .HasColumnName("name")
                .IsRequired();

            builder.Property(x => x.LastName)
                .HasColumnName("surname")
                .IsRequired();

            builder.Property(x => x.Email)
                .HasColumnName("email")
                .IsRequired();

            builder.HasIndex(x => x.Email)
                .IsUnique();

            builder.Property(x => x.PasswordSalt)
                .HasColumnName("password_salt");

            builder.Property(x => x.PasswordHash)
                .HasColumnName("password_hash");



        }
    }
}
