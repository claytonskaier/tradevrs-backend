const unitNameMap = {
  'WAT': 'Watts',
  'KGM': 'Kilograms',
  'MTR': 'Meters',
  'TNE': 'Tonnes',
  'NAR': 'Items',
  'LTR': 'Litres',
  'GRM': 'Grams',
  'MGM': 'Milligrams',
  'MCG': 'Micrograms',
  'MLT': 'Millilitres',
  'MCL': 'Microlitres',
  'MWH': 'Megawatt hours',
  'KMA': 'kg of methylamines',
  'KNI': 'kg of nitrogen',
  'GFI': 'g of fissile isotopes',
  'KAC': 'kg of acesulfame potassium',
  'LPA': 'Litres of pure alcohol',
  'MTK': 'Square meters',
  'HLT': 'Hectolitres',
  'KUR': 'kg of uranium',
  'MPR': '1000 pairs',
  'NCL': 'Number of cells',
  'KLT': '1000 litres',
  'NPR': 'Number of pairs',
  'KPO': 'kg of potassium oxide',
  'EUR': 'Euro',
  'CEN': 'Hundreds of items',
  'KCL': 'Ton of potassium chloride',
  'DTN': 'Hectokilograms',
  'CTM': 'Carats',
  'KTC': 'kg of tobacco',
  'TCO': 'Tonnes of CO2',
  'KMT': 'Kilometres',
  'W': 'Watts'
};

module.exports = (req, res) => {
  const apiKey = req.headers['x-api-key'];
  const validKeys = process.env.API_KEYS?.split(',') || ['test-key-123'];
  
  if (!apiKey || !validKeys.includes(apiKey)) {
    return res.status(401).json({ error: 'Invalid or missing API key' });
  }
  
  res.status(200).json(unitNameMap);
};