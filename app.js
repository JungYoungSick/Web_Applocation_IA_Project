const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/Login.html');
});

app.post('/', (req, res) => {
  const userID = req.body.userID;
  const userPW = req.body.userPW;
  const realUserID = 'green';
  const realUserPW = '1234';
  if (userID === realUserID && userPW === realUserPW) {
    res.json({ success: false })
    res.sendFile(__dirname + './static/index.html')

  } else {
    res.json({ success: true })
  }
});
app.listen(port, () => {
  console.log(`
서버가 포트 ${port}에서 실행 중입니다.
http://localhost:${port}
`);
});