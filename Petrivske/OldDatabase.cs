namespace Petrivske
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class OldDatabase : DbContext
    {
        public OldDatabase()
            : base("name=OldDatabase")
        {
        }

        public virtual DbSet<Gallery> Gallery { get; set; }
        public virtual DbSet<News> News { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
