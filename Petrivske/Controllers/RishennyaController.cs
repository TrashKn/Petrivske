using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Petrivske.Models;

namespace Petrivske.Controllers
{
    public class RishennyaController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Rishennyas
        public ActionResult Index()
        {
            return View(db.Rishennyas.ToList());
        }

        //// GET: /Account/UserList
        //public ActionResult UserList()
        //{
        //    return View(UserManager.Users.Where(a => a.IsDelete == false).ToList());
        //}

        // GET: Rishennyas/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Rishennya rishennya = db.Rishennyas.Find(id);
            if (rishennya == null)
            {
                return HttpNotFound();
            }
            return View(rishennya);
        }

        // GET: Rishennyas/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Rishennyas/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,Date,Number,Content")] Rishennya rishennya)
        {
            if (ModelState.IsValid)
            {
                db.Rishennyas.Add(rishennya);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(rishennya);
        }

        // GET: Rishennyas/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Rishennya rishennya = db.Rishennyas.Find(id);
            if (rishennya == null)
            {
                return HttpNotFound();
            }
            return View(rishennya);
        }

        // POST: Rishennyas/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,Date,Number,Content")] Rishennya rishennya)
        {
            if (ModelState.IsValid)
            {
                db.Entry(rishennya).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(rishennya);
        }

        // GET: Rishennyas/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Rishennya rishennya = db.Rishennyas.Find(id);
            if (rishennya == null)
            {
                return HttpNotFound();
            }
            return View(rishennya);
        }

        // POST: Rishennyas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int? id)
        {
            Rishennya rishennya = db.Rishennyas.Find(id);
            db.Rishennyas.Remove(rishennya);
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
