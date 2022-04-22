const expess = require('express');
const axios = require('axios');

const app = expess()

const PORT = process.env.PORT || 80;

app.get(`/`, (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const p24apiData = axios(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${req.query.date}`)
  
  p24apiData.then(data => res.send(data.data));
  
})

app.listen(PORT)