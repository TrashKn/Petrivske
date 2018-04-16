namespace Petrivske.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddTags : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Tags",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Keyword = c.String(),
                    })
                .PrimaryKey(t => t.Id);
                       
            
            CreateTable(
                "dbo.NewsTags",
                c => new
                    {
                        News_id = c.Int(nullable: false),
                        Tag_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.News_id, t.Tag_Id })             
                .ForeignKey("dbo.Tags", t => t.Tag_Id, cascadeDelete: true)
                .Index(t => t.News_id)
                .Index(t => t.Tag_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.NewsTags", "Tag_Id", "dbo.Tags");
            DropForeignKey("dbo.NewsTags", "News_id", "dbo.News");
            DropIndex("dbo.NewsTags", new[] { "Tag_Id" });
            DropIndex("dbo.NewsTags", new[] { "News_id" });
            DropTable("dbo.NewsTags");
            DropTable("dbo.News");
            DropTable("dbo.Tags");
        }
    }
}
