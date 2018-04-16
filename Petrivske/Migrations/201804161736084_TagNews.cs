namespace Petrivske.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TagNews : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TagNews",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdTag = c.Int(nullable: false),
                        IdNews = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.TagNews");
        }
    }
}
