class NewController {
    // get >> news
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('news details !!!');
    }
}
// chu phuong thuc export dung cho require trong file khac de dung
// export cai gi thi require vai do

module.exports = new NewController();
