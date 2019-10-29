import os
import requests
import json
from flask import Flask, request, redirect, url_for, render_template, abort, Markup, make_response, send_from_directory, jsonify

thispath = os.path.dirname(os.path.realpath(__file__))
BASEPATH = os.path.join(thispath)

app = Flask(__name__, static_url_path='/static')
app.url_map.strict_slashes = False

@app.route('/actors/<sub>/<action>', methods=['GET', 'POST'])
def actors_sub(sub, action):
    # url = "https://bcdb.dev.grid.tf/%s" % sub
    url = "https://bcdb.test.grid.tf/api/actors/%s/%s" % (sub, action)
    print("Fetching: %s" % url)

    # data = requests.get(url)
    data = requests.post(url)
    temp = json.loads(data.text)
    # output = {sub: temp}
    # value = json.dumps(output)
    value = json.dumps(temp)

    response = make_response(value)
    response.headers["Content-Type"] = "application/json"
    response.headers["Access-Control-Allow-Origin"] = "*"

    return response

print("[+] listening")
app.run(host="0.0.0.0", port=9999, debug=True, threaded=True)
