namespace Petrivske.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Rishennya : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Rishennyas",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        Date = c.DateTime(nullable: false),
                        Number = c.String(),
                        Content = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Rishennyas");
        }
    }
}
