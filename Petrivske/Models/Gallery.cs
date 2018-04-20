using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Petrivske.Models
{
    public class Gallery
    {
        public int Id { get; set; }
        [Display(Name = "Назва галереї")]
        public string Title { get; set; }
        public virtual ICollection <GalleryItem> GalleryItems { get; set; }
    }

    public class GalleryItem
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public virtual Gallery Gallery { get; set; }
    }
}
