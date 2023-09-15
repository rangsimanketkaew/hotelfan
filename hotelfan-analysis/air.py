# Required libraries
import requests
import json
import pprint

API='567f8e29-f9b3-4d77-af2e-02ea9dc39294'

## Code to extract AQI Infromation
def stationlocator(Latitude,Longtitude):
    # dt = requests.get('http://api.airvisual.com/v2/countries?key='+API)
    dt = requests.get('http://api.airvisual.com/v2/nearest_city?lat='+str(Latitude)+'&lon='+str(Longtitude)+'&key='+API)
    doc = dt.text
    j = json.loads(doc)

    pprint.pprint(j)
    # return j

stationlocator(35.98,140.33)
