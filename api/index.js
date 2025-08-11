module.exports = (req, res) => {
  res.status(200).json({ 
    status: 'ok',
    message: 'TradeVRS Backend API',
    timestamp: new Date().toISOString()
  });
};