
import requests
from threading import Event, Thread
import time
import json
def call_repeatedly(interval, func, *args):
    stopped = Event()
    def loop():
        while not stopped.wait(interval): # the first call is in `interval` secs
            func(*args)
    Thread(target=loop).start()    
    return stopped.set


userName = "argon"
url = "https://alphanode.onrender.com"

def sendMessage(message):
    data = {
        "name": userName,
        "message": message,
        "address": "neon"
    }
    
    response = requests.post(url, json=data)
def getMessage():
    try:
        response = json.loads(requests.get(f'https://alphanode.onrender.com/new?name={userName}').text)
        m = response["m"]
        if(m == 0):
            pass
        if(m == 1):
            print(f'\n{response["name"]}: {response["message"]}\n')
    except ValueError:
        pass

    # time.sleep(1)
# stop = call_repeatedly(1, getMessage)
call_repeatedly(1, getMessage)
def prompt(txt):
    print(txt,end=" ")
    return input()
while (True):
   sendMessage(prompt("\n"))