using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Petrivske.Models
{
    public class Page
    {
        public string Id { get; set; }

        [Display(Name = "Назва сторінки")]
        public string Title { get; set; }

        [AllowHtml]
        [Display(Name = "Текст сторінки")]
        public string Content { get; set; }
    }
}