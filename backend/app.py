"""
Flask Backend Template for Smart Agri-Crop Recommendation System
-----------------------------------------------------------------
This Flask REST API serves machine learning model predictions for the React frontend application.

To run:
1. cd backend
2. pip install -r requirements.txt
3. python app.py

API Endpoint: POST http://127.0.0.1:5000/api/predict
Payload:
{
  "nitrogen": 90,
  "phosphorus": 42,
  "potassium": 43,
  "temperature": 25.0,
  "humidity": 80.0,
  "ph": 6.5,
  "rainfall": 200.0
}
Response:
{
  "crop": "rice",
  "confidence": 96.8
}
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing for React frontend

# Load trained Scikit-learn Random Forest model (place model.pkl in this directory)
try:
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
    print("✓ ML Model loaded successfully.")
except Exception as e:
    model = None
    print("⚠️ model.pkl not found. Running in fallback mode. Place your trained pickle model in backend/model.pkl.")

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "online",
        "service": "Smart Agri-Crop Recommendation ML API",
        "model_loaded": model is not None
    })

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        
        # Extract 7 input parameters
        nitrogen = float(data.get('nitrogen', 0))
        phosphorus = float(data.get('phosphorus', 0))
        potassium = float(data.get('potassium', 0))
        temperature = float(data.get('temperature', 0))
        humidity = float(data.get('humidity', 0))
        ph = float(data.get('ph', 0))
        rainfall = float(data.get('rainfall', 0))

        input_vector = np.array([[nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall]])

        if model is not None:
            prediction = model.predict(input_vector)[0]
            return jsonify({"crop": str(prediction).lower()})
        else:
            # Fallback mock rule if pickle file isn't uploaded yet
            crop = "rice"
            if rainfall < 100 and temperature > 22:
                crop = "watermelon"
            elif nitrogen < 35 and phosphorus > 100:
                crop = "apple"
            elif temperature < 22 and humidity < 40:
                crop = "chickpea"
            elif potassium < 30:
                crop = "maize"

            return jsonify({"crop": crop})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    print("Starting Smart Agri-Crop Flask Backend Server on port 5000...")
    app.run(host='0.0.0.0', port=5000, debug=True)
