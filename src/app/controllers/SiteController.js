class SiteController {
    // class site controller dung cho caca trang trung gian
    // cac trang nhu home hay contact
    //
    index(req, res) {
        res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
