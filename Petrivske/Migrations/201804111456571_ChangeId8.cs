namespace Petrivske.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeId8 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Rishennyas", "Id", c => c.Int(nullable: false, identity: true));
        }
        
        public override void Down()
        {
        }
    }
}
