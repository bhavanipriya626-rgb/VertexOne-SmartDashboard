import requests

API_KEY = "pub_28e85a6a70d24c94a3d035dde1c4a13a"

city = "Visakhapatnam"

url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"

data = requests.get(url).json()

print("City:", data["name"])
print("Temperature:", data["main"]["temp"], "°C")
print("Weather:", data["weather"][0]["description"])
print("Humidity:", data["main"]["humidity"], "%")
