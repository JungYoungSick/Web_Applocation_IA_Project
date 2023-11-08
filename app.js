const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
const notData = path.join(__dirname, 'notData.json')
const port = 3000;



app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/jys/text', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(500).json({ error: 'content are required.' });
  }

  fs.readFile(notData, 'utf8', (err, data) => {
    if (err) {
      return res._construct(500).s = json({ error: 'content are required.' })
    }

    const datas = JSON.parse(data);
    const Datas = { text };
    datas.push(Datas);

    fs.writeFile(notData, JSON.stringify(datas, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "errer" });
      }
      res.json(Datas)
    })
  })
})
// app.get('index/prompt', (req, res) => {
//   fs.writeFile(notData,'utf-8', (err,data) => {
//     if(err) {
//       return res._con
//     }
//   })
//   res.

// })
// script.js

// 함수: JSON 데이터 불러오기
// function loadData() {
//   fetch('notData.json')
//     .then(response => response.json())
//     .then(data => {
//       // 데이터를 Local Storage에 저장
//       localStorage.setItem('text', JSON.stringify(data));
//       displayData(data);
//     })
//     .catch(error => {
//       console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
//     });
// }
// const prompt = document.getElementById('prompt');
// console.log("prompt")

// // 함수: JSON 데이터 표시
// function displayData(data) {
//   prompt.textContent = JSON.stringify(data, null, 2);
// }

// 페이지 로드 시 실행
// document.addEventListener('DOMContentLoaded', () => {
//   const promptData = localStorage.getItem('text');
//   if (promptData) {
//     // Local Storage에 데이터가 이미 저장되어 있는 경우
//     displayData(JSON.parse(promptData));
//   } else {
//     // Local Storage에 데이터가 없는 경우, JSON 데이터를 불러오기
//     loadData();
//   }
// });

app.listen(port, () => {
  console.log(`
  서버가 포트 ${port}에서 실행 중입니다.
  http://localhost:${port}
  `);
});



// app.post('/', (req, res) => {
//   const userID = req.body.userID;
//   const userPW = req.body.userPW;
//   const realUserID = 'green';
//   const realUserPW = '1234';
//   if (userID === realUserID && userPW === realUserPW) {
//     res.json({ success: false })
//     res.sendFile(__dirname + './static/index.html')

//   } else {
//     res.json({ success: true })
//   }
// });