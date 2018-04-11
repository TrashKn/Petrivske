namespace Petrivske.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class IsDelete : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "IsDelete", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "IsDelete");
        }
    }
}
