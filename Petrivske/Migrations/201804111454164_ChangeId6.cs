namespace Petrivske.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeId6 : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Rishennyas");
            AddColumn("dbo.Rishennyas", "IdKey", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Rishennyas", "Id", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.Rishennyas", "IdKey");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Rishennyas");
            AlterColumn("dbo.Rishennyas", "Id", c => c.Int(nullable: false, identity: true));
            DropColumn("dbo.Rishennyas", "IdKey");
            AddPrimaryKey("dbo.Rishennyas", "Id");
        }
    }
}
