# Required libraries
import requests
import json
import pprint

# Return data
'''
"aqius": //AQI value based on US EPA standard
"aqicn": //AQI value based on China MEP standard
"tp": //temperature in Celsius
"tp_min": //minimum temperature in Celsius
"pr": //atmospheric pressure in hPa
"hu": //humidity %
"ws": //wind speed (m/s)
"wd": //wind direction, as an angle of 360° (N=0, E=90,S=180, W=270)
"ic": //weather icon code, see below for icon index
'''

API='567f8e29-f9b3-4d77-af2e-02ea9dc39294'

## Code to extract AQI Infromation
def stationlocator(Latitude,Longtitude):
    # dt = requests.get('http://api.airvisual.com/v2/countries?key='+API)
    dt = requests.get('http://api.airvisual.com/v2/nearest_city?lat='+str(Latitude)+'&lon='+str(Longtitude)+'&key='+API)
    doc = dt.text
    j = json.loads(doc)

    pprint.pprint(j['data'])
    return j['data']

air = stationlocator(35.98,140.33)

# Get AQI American one
print(air['current']['pollution']['aqius'])
