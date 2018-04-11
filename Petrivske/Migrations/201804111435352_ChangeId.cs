namespace Petrivske.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeId : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Rishennyas");
            AlterColumn("dbo.Rishennyas", "Id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Rishennyas", "Id");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Rishennyas");
            AlterColumn("dbo.Rishennyas", "Id", c => c.String(nullable: false, maxLength: 128));
            AddPrimaryKey("dbo.Rishennyas", "Id");
        }
    }
}
