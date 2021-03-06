namespace Petrivske
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using Petrivske.Models;
    using System.Linq;
    using System.Web.Mvc;

    public partial class News
    {
        public int id { get; set; }

        [DataType(DataType.Date), Required]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Дата початку показу новини")]
        public DateTime? dateBegin { get; set; }

        [DataType(DataType.Date), Required]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Дата закінчення показу новини")]
        public DateTime? dateEnd { get; set; }

        [Display(Name = "Назва новини")]
        [Required]
        public string title { get; set; }

        [Display(Name = "Основний текст")]
        [AllowHtml]
        [Required]
        public string text { get; set; }

        [Display(Name = "Короткий текст")]
        [AllowHtml]
        [Required]
        public string minitext { get; set; }

        [Display(Name = "Показувати цю новину")]
        public bool visible { get; set; }

        public string category { get; set; }

        public virtual ICollection<Tag> Tags { get; set; }

        public static List<News> GetNewsForHomepage()
        {
            OldDatabase db = new OldDatabase();            
            return db.News.Where(a=>a.id!=6 && (a.id < 171 || a.id> 181) && a.visible == true && a.dateBegin <= DateTime.Now && a.dateEnd > DateTime.Now).OrderByDescending(a => a.dateBegin).Take(4).ToList();            
        }
    }
}
