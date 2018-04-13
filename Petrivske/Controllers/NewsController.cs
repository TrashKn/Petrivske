using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Petrivske;
using System.IO;

namespace Petrivske.Controllers
{
    public class NewsController : Controller
    {
        private OldDatabase db = new OldDatabase();

        public string UploadImage(HttpPostedFileBase upload)
        {
            if (Request.Files.Count > 0)
            {
                var file = Request.Files[0];
                if (file != null && file.ContentLength > 0)
                {
                    var fileName = Guid.NewGuid() + Path.GetFileName(file.FileName);
                    var path = Path.Combine(Server.MapPath("~/Images/"),  fileName);
                    file.SaveAs(path);
                    return "../../Images/" + fileName;
                }
            }
            return "";
        }

        // GET: News
        public ActionResult Index(int? page, bool? showNotVisible, bool? ShowDateExpired)
        {
            if (page == null)
                page = 0;
            ViewBag.currentPage = page;
            return View(db.News.Where(a => a.id != 6 && (a.id < 171 || a.id > 181) && a.visible == true && a.dateBegin <= DateTime.Now && a.dateEnd > DateTime.Now).OrderByDescending(a => a.dateBegin).Skip(page.Value*4).Take(4).ToList());
        }

        // GET: News/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            News news = db.News.Find(id);
            if (news == null)
            {
                return HttpNotFound();
            }
            return View(news);
        }

        // GET: News/Create
        public ActionResult Create()
        {
            News news = new News() { dateBegin = DateTime.Now, dateEnd = DateTime.Now.AddYears(5), category="News", visible=true };
            return View(news);
        }

        // POST: News/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,dateBegin,dateEnd,title,text,minitext,visible,category")] News news)
        {
            if (ModelState.IsValid)
            {
                news.category = "News";
                db.News.Add(news);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(news);
        }

        // GET: News/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            News news = db.News.Find(id);
            if (news == null)
            {
                return HttpNotFound();
            }
            return View(news);
        }

        // POST: News/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,dateBegin,dateEnd,title,text,minitext,visible,category")] News news)
        {
            if (ModelState.IsValid)
            {
                db.Entry(news).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(news);
        }

        // GET: News/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            News news = db.News.Find(id);
            if (news == null)
            {
                return HttpNotFound();
            }
            return View(news);
        }

        // POST: News/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            News news = db.News.Find(id);
            db.News.Remove(news);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
