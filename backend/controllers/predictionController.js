const joblib = require('joblib');
const path = require('path');

exports.predictSurplus = async (req, res) => {
  const { feature1, feature2, feature3 } = req.body;
  const model = joblib.load(path.join(__dirname, '../model_training/surplus_model.pkl'));

  const prediction = model.predict([[feature1, feature2, feature3]]);
  res.json({ prediction: prediction[0] });
};
