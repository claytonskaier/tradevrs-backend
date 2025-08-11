const allowCors = require('./_middleware');

const handler = (req, res) => {
  res.status(200).json({ 
    status: 'ok',
    message: 'TradeVRS Backend API',
    timestamp: new Date().toISOString()
  });
};

module.exports = allowCors(handler);