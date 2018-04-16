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

        public static List<Tag> GetAllTags()
        {
            ApplicationDbContext db = new ApplicationDbContext();
            OldDatabase oldDb = new OldDatabase();
            var tags = db.Tags.ToList();
            foreach (var i in tags)
            {
                var newsTags = db.TagNews.Where(a => a.IdTag == i.Id).ToList();
                i.News = new List<News>();
                foreach (var j in newsTags)
                {
                    i.News.Add(oldDb.News.Where(a => a.id == j.IdNews).FirstOrDefault());
                }
                
            }
            return tags;
        }

        public List<News> News { get; set; }
    }

    public class TagNews
    {
        public int Id { get; set; }
        public int IdTag { get; set; }
        public int IdNews { get; set; }
    }
}
