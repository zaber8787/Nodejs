//導入 express
const express = require('express');

//創見應用對象
const app = express();

//創建路由
app.get('/request', (req, res) => {
    res.end('home');
})

app.get('/:id.html', (req, res) => {
    console.log(req.params.id);
    res.setHeader('content-type', 'text/html;charset=utf-8')
    res.end('try')
})

//監聽端口，啟動服務
app.listen(3000, () => {
    console.log("ready")
}) 