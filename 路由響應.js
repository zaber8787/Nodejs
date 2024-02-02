//導入 express
const express = require('express');

//創見應用對象
const app = express();

//創建路由
app.get('/other', (req, res) => {
    //重定向
    //res.redirect('https://www.google.com/')
    //下載
    //res.download(__dirname + '/package.json')
    //json響應
    // res.json({
    //     name: 'zaber',
    //     bot: 'kanada'
    // })
    //檔案響應
    res.sendFile(__dirname + '/express_try.html')
})


//監聽端口，啟動服務
app.listen(3000, () => {
    console.log("ready")
}) 