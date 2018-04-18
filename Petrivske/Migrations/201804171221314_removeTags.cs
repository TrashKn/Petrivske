namespace Petrivske.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class removeTags : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.NewsTags", "News_id", "dbo.News");
            DropForeignKey("dbo.NewsTags", "Tag_Id", "dbo.Tags");
            DropIndex("dbo.NewsTags", new[] { "News_id" });
            DropIndex("dbo.NewsTags", new[] { "Tag_Id" });
            DropTable("dbo.TagNews");
            DropTable("dbo.Tags");
          
            DropTable("dbo.NewsTags");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.NewsTags",
                c => new
                    {
                        News_id = c.Int(nullable: false),
                        Tag_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.News_id, t.Tag_Id });
            
            //CreateTable(
            //    "dbo.News",
            //    c => new
            //        {
            //            id = c.Int(nullable: false, identity: true),
            //            dateBegin = c.DateTime(nullable: false),
            //            dateEnd = c.DateTime(nullable: false),
            //            title = c.String(nullable: false),
            //            text = c.String(nullable: false),
            //            minitext = c.String(nullable: false),
            //            visible = c.Boolean(nullable: false),
            //            category = c.String(),
            //        })
            //    .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Tags",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Keyword = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TagNews",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IdTag = c.Int(nullable: false),
                        IdNews = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("dbo.NewsTags", "Tag_Id");
            CreateIndex("dbo.NewsTags", "News_id");
            AddForeignKey("dbo.NewsTags", "Tag_Id", "dbo.Tags", "Id", cascadeDelete: true);
            AddForeignKey("dbo.NewsTags", "News_id", "dbo.News", "id", cascadeDelete: true);
        }
    }
}
