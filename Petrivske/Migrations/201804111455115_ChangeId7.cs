namespace Petrivske.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeId7 : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Rishennyas");
            AlterColumn("dbo.Rishennyas", "Id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Rishennyas", "Id");
            DropColumn("dbo.Rishennyas", "IdKey");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Rishennyas", "IdKey", c => c.Int(nullable: false, identity: true));
            DropPrimaryKey("dbo.Rishennyas");
            AlterColumn("dbo.Rishennyas", "Id", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.Rishennyas", "IdKey");
        }
    }
}
