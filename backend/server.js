// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors())



app.get('/api/covid', async (req, res) => {
  try {
    const {data} = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/countries`);
    console.log(typeof data.data)

    res.json(data.data)

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});