from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

def get_directions(start_location, end_location, api_key):
    base_url = "https://maps.googleapis.com/maps/api/directions/json?"
    params = {
        "origin": start_location,
        "destination": end_location,
        "key": api_key
    }

    response = requests.get(base_url, params=params)
    data = response.json()

    if data["status"] == "OK":
        routes = data["routes"][0] #1st route
        legs = routes["legs"][0] 

        start_address = legs["start_address"]
        end_address = legs["end_address"]
        steps = legs["steps"]

        directions = []
        for step in steps:
            # html in text
            directions.append(step["html_instructions"])

        return {
            "start": start_address,
            "end": end_address,
            "directions": directions
        }
    else:
        print("Error:", data["status"])
        return None

@app.route('/get-directions', methods=['POST'])
def fetch_directions():
    start_location = request.json['start']
    end_location = request.json['end']
    # g4e maps platform api key
    result = get_directions(start_location, end_location, "AIzaSyC-ImkMTyNGeLrTAKvAzcBLN3ti7oXt2e8")
    
    if result:
        return jsonify(result)
    else:
        return jsonify({"error": "Failed to fetch directions"}), 400

if __name__ == "__main__":
    app.run(port=5000, debug=True)
