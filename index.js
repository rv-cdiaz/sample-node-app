const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({message: 'Hello World!'});
});

const port = process.env.PORT || 3000;

function shutdown() {
  console.log('Shutting down....');
  process.exit(0);
}

process.removeAllListeners('SIGINT').on('SIGINT', shutdown).removeAllListeners('SIGTERM').on('SIGTERM', shutdown);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});