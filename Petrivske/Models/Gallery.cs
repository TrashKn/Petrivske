namespace Petrivske
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Gallery")]
    public partial class Gallery
    {
        public int id { get; set; }

        public string title { get; set; }

        public string text { get; set; }

        public string minitext { get; set; }
    }
}
