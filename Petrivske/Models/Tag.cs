using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Petrivske.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public String Keyword { get; set; }
        public virtual ICollection<News> News { get; set; }

        public static List<Tag> GetAllTags()
        {
         
            OldDatabase oldDb = new OldDatabase();
            var tags = oldDb.Tags.ToList();            
            return tags;
        }

        
    }

   
}
