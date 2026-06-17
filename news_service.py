import requests

API_KEY = "4c9caeffdcfc42cdb38540bf6debf59f"

url = f"https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey={API_KEY}"

data = requests.get(url).json()

for article in data["articles"][:5]:
    print(article["title"])
