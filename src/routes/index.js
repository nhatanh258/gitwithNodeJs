const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    // Route trang chủ
    // app.get('/', (req, res) => {
    //   res.render('home'); // Mặc định sẽ tìm 'home.hbs' trong thư mục views
    // });
    // app.get('/news', (req, res) => {
    //   res.render('news'); // Mặc định sẽ tìm 'home.hbs' trong thư mục views
    // });
    //CAI Phuong thuoc tra ve tu post data len serve
    // app.post('/search', (req, res) => {
    //   console.log(req.body)
    //   res.send('chung toi da nhan duoc yeu cau cua ban ');
    // });
}

module.exports = route;
