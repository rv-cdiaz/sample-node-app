const express = require('express');
const mysql = require('mysql2/promise');

const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST || 'db';

async function run () {
  const app = express();
  const connection = await mysql.createConnection({host: dbHost, user: 'root', password: 'example'});

  app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
  });

  app.get('/mysql', async (req, res) => {
    const [rows] = await connection.execute('SELECT 2+2');
    res.json(rows);
  });

  function shutdown() {
    console.log('Shutting down....');
    process.exit(0);
  }

  process.removeAllListeners('SIGINT').on('SIGINT', shutdown).removeAllListeners('SIGTERM').on('SIGTERM', shutdown);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});