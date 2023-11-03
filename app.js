const express = require('express');
const app = express();
const port = 8080;


app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/Login.html');
});
app.post('/', (req, res) => {
  const submittedUsername = req.body.userID;
  const submittedPassword = req.body.userPW;
  const realUsername = 'green';
  const realPassword = '1234';
  if (submittedUsername === realUsername && submittedPassword === realPassword) {
    app.post('/static/index.html', (req, res) => {
      res.sendFile(__dirname + '/static/index.html'),
        app.get('/static/index.css', (req, res) => {
          res.sendFile(__dirname + '/static/index.css'),
            app.get('/static/index.js', (req, res) => {
              res.sendFile(__dirname + '/static/index.js')
            });
        });
    });
  } else {
    res.send('로그인 실패')
  }
});
app.listen(port, () => {
  console.log(`
서버가 포트 ${port}에서 실행 중입니다.
http://localhost:${port}
`);
});