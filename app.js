const http = require('http');
const fs = require('fs')
const path = require('path')
const qs = require('querystring')

const guestsPath = path.join(__dirname, 'guests.txt');

const server = http.createServer(function(req, res){
  if (req.method === 'GET') {
    fs.readFile(guestsPath , (err, data) => {
      const names= (data.toString())
      const namesList = names.split('|')
      namesList.pop()
      res.write(
        `<html>
          <head></head>
          <body>
            <ul>
      ${namesList.map(name => `<li>${name}</li>`).join(' ')}
            </ul>
            <form method='POST'>
              <input name='name'> </input>
              <button type='submit'>Add Name</button>
            </form>
          </body>
        </html>`
      );
      res.end()
    });
  };
  if (req.method === 'POST') {
    req.on('data', (chunk) => {
      console.log(chunk)
    })
  };
})


server.listen(3000)
