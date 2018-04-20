namespace Petrivske
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using Petrivske.Models;

    public partial class OldDatabase : DbContext
    {
        public OldDatabase()
            : base("name=OldDatabase")
        {
        }
        
        public virtual DbSet<News> News { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }
      

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
