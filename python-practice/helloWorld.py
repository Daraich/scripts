print("Hello, world!")

what_to_do = ["Go to class", "Do your homework", "Eat at the dining hall"]
print(what_to_do)
what_to_do.append("Learn japanese")
print(what_to_do)

i = 0
while i < len(what_to_do):
    flag = False
    for character in what_to_do[i]:
        if character == "h":
            flag = True
    if flag == True:
        what_to_do.remove(what_to_do[i])
        i -= 1
    i += 1
print(what_to_do)
