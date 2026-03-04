namespace Backend_API.Data
{
    using Microsoft.EntityFrameworkCore;
    using Backend_API.Models.Entities;

    public class ApplicationDbcontext : DbContext
    {
        public ApplicationDbcontext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
    }
}
