import requests
import json

API_KEY = 'Ugob4OHghBVmtw3VUMmWw'  

url = "https://www.carboninterface.com/api/v1/estimates"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

data = {
    "type": "flight",
    "passengers": 2,
    "legs": [
        {"departure_airport": "sfo", "destination_airport": "yyz"},
        {"departure_airport": "yyz", "destination_airport": "sfo"}
    ]
}

response = requests.post(url, headers=headers, data=json.dumps(data))

print(response.text)