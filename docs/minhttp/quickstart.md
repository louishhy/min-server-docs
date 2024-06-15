---
sidebar_position: 2
description: Try a quickstart for MinHTTP!
---

# Quickstart!

[Flask](https://flask.palletsprojects.com) is one of the most famous Python-based Web frameworks.

Here is the code provided in the Flask documentation [quickstart](https://flask.palletsprojects.com/en/3.0.x/quickstart/):
```py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'
```

Let's also see how we can do the same thing in MinHTTP.

To do this though, you need a few more steps:
1. `cd` into the MinHTTP directory.
```sh
cd minhttp
```
2. Create a new file called `app.py` and add the following code:
```py
from minhttpserver import MinHTTPServer
from response import text_response

app = MinHTTPServer(host="localhost", port=8080)

@app.get("/")
def hello_world(request):
    return text_response("Hello, World!")

if __name__ == "__main__":
    app.run()
```

3. Run the server:
```sh
python app.py
```

Voila! You have a simple web server running on `http://localhost:8080` that returns `Hello, World!` when you visit `localhost:8080/`. You can check it with your browser, or with HTTP tools like HTTPie!

:::tip[Note]
In this small demo the SSL/TLS is not enabled. So, be sure you are using HTTP instead of HTTPS when you are testing. We will talk about enabling SSL/TLS in later sections.
:::