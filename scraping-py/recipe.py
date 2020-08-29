import urllib2
from bs4 import BeautifulSoup

file = open("recipes.txt", "r")
lines = [s.strip() for s in file.readlines()]

# print lines

recipe = {}
for num in range(1, 340):
    page = urllib2.urlopen(lines[num])
    soup = BeautifulSoup(page, "html.parser")

    title = soup.find("h1", {
    "class": "title"
    })

    print title
