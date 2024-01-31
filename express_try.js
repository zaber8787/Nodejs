//導入 express
const express = require('express');

//創見應用對象
const app = express();

//創建路由
app.get('/request', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);
    //express操作
    console.log(req.path);
    console.log(req.query);
    //用戶 ip
    console.log(req.ip)
    //獲取請求頭
    console.log(req.get('host'))
    res.end('hello')
});

// app.get('/', (req, res) => {
//     res.end('home');
// });

// app.post('/login', (req, res) => {
//     res.end('login');
// });

// app.all('/test', (req, res) => {
//     res.end('test');
// });

// app.all('*', (req, res) => {
//     res.end('404 not found')
// })

//監聽端口，啟動服務
app.listen(3000, () => {
    console.log("ready")
}) 