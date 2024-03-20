const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/model', async (req, res) => {
  try {
    const { data } = await axios.get('https://assets.meshy.ai/google-oauth2%7C111128537788921410434/tasks/018e55b6-bc6c-7913-81b2-0902ddfd48c6/output/model.glb');
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching model');
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
