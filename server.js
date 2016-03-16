const express = require('express');
const path = require('path');

const server = express();
const PORT = process.env.PORT || 8080;

/** Easy-peasy server */
server
  .use(express.static(path.resolve(__dirname, 'build')))
  .get('*', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
  .listen(PORT, () => console.log(
    `Server is running on http://localhost:${PORT}`
  ));
