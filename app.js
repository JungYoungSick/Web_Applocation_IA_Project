const express = require('express');
const app = express();
const port = 8080;


app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/Login.html');
});
// app.post('/', (req, res) => {
//   const userID = req.body.userID;
//   const userPW = req.body.userPW;
//   const realUserID = 'green';
//   const realUserPW = '1234';
//   if (userID === realUserID && userPW === realUserPW) {
//     app.get('/static/index.html', (req, res) => {
//       // 현재 작업이 여기로 바로 연결이 되는 문제가 있다.
//       res.sendFile(__dirname + '/static/index.html'),
//         app.get('/static/index.css', (req, res) => {
//           res.sendFile(__dirname + '/static/index.css'),
//             app.get('/static/index.js', (req, res) => {
//               res.sendFile(__dirname + '/static/index.js')
//             });
//         });
//     });
//   } else {
//     res.send('로그인 실패')
//   }
// });
app.listen(port, () => {
  console.log(`
서버가 포트 ${port}에서 실행 중입니다.
http://localhost:${port}
`);
});