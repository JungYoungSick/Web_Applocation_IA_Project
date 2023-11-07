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
  res.sendFile(__dirname + 'index.html');
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
        return res.status(500).json({ error: "asdas" });
      }
      res.json(Datas)
    })
  })
})





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