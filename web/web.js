const express = require('express');
const { spawn } = require('child_process');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 显示搜索页面
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 处理搜索请求
app.post('/search', (req, res) => {
    const { searchQuery } = req.body;
    console.log('Received search query:', searchQuery);

    // 调用 Python 脚本，并传递搜索词作为参数
    const pythonProcess = spawn('python', ['food.py', searchQuery], {
        encoding: 'utf-8' // 设置字符编码为 UTF-8
    });

    // 监听 Python 脚本的标准输出
    pythonProcess.stdout.on('data', (data) => {
        const responseData = data.toString().trim();
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
