using DashboardAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DashboardAPI.Data.Context
{
    public class DashboardContext : DbContext
    {
        public DashboardContext(DbContextOptions<DashboardContext> options) : base(options) 
        { 
        }

        public DbSet<UserModel> Users { get; set; }

    }
}
