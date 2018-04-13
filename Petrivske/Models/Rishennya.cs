using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Petrivske.Models
{
    public class Rishennya
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
      
        [Display(Name = "Назва рішення")]
        public string Name { get; set; }

        [Display(Name = "Дата рішення")]
        public DateTime Date { get; set; }

        [Display(Name = "Номер рішення")]
        public string Number { get; set; }

        [AllowHtml]
        [Display(Name = "Текст рішення")]
        public string Content { get; set; }
    }
}