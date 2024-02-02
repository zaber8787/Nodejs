# This file is an auto-generated Python example
import requests
import json
import sys
# URL to send the request
URL = "https://superiorapis-creator.cteam.com.tw/manager/feature/proxy/1abf355f1bc6ba25d7efc65b7c3d22993f/pub_6f64187b1eea7d9b065b7c3fce14fa"

# HTTP method to use for the request
httpMethod = "post"

# Data to be sent with the request
ingredients = json.loads(sys.argv[1])
postData = json.dumps({
    "ingredients": ingredients['searchData']
})

# token token to be sent with the request
token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjZXJ0IjoiODM5MzdjZmI0Nzc1NWI1ODBmOTJiODExZWY3NjlkZDQ5MzJkMWVlYiIsImlhdCI6MTcwNjU0MjAzNH0.w7gIsmhZOsP5AV6YLdmjt71UUZdZY0QjB3koaBHFIsA"


# Query parameters to be sent with the request
params = {}

# Headers to be sent with the request
headers = {
    'Content-type': 'application/json',
    'token': token,

}

# Send the request using requests library
response = requests.post(URL, params=params, data=postData, headers=headers)

# Print the response received from the server
if response:
    response = response.json()
    json.dump(response, sys.stdout)
    with open('response.json', 'w', encoding='utf-8')as file:
        json.dump(response, file, ensure_ascii=False)
else:
    json.dump({"message": "No result"}, sys.stdout)
