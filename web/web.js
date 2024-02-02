const express = require('express');
const { spawn } = require('child_process');
const bodyParser = require('body-parser');
const { dirname } = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 使用 body-parser 中间件来解析 JSON 请求体
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/express_try.html')
})

// 处理 POST 请求的 '/search' 路由
app.post('/search', (req, res) => {
    const searchData = req.body;
    console.log('Received search data:', searchData);

    // 调用另一个 Python 脚本，并将搜索数据作为参数传递给它
    const pythonProcess = spawn('python', ['food.py', JSON.stringify(searchData)]);

    // 监听 Python 脚本的标准输出
    pythonProcess.stdout.on('data', (data) => {
        const responseData = JSON.parse(data.toString().trim());
        console.log('Python script response:', responseData);
        res.json(responseData);
    });

    // 监听 Python 脚本的错误输出
    pythonProcess.stderr.on('data', (data) => {
        console.error('Error executing Python script:', data.toString());
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
