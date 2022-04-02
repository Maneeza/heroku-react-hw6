import os

from flask import Flask, jsonify
from flask.helpers import send_from_directory

#from flask_cors.extension import CORS
# comment out on deployment
#from flask_cors import CORS

app = Flask(__name__, static_folder="client/build", static_url_path="")

#CORS(app)

@app.route("/text/<text>", methods=["GET", "POST"])
def userCheck(text: str):
    if text == "Maneeza":
        output = "Kalim"
    else:
        output = "User Not Found"
    return jsonify(last_name=output)

@app.route("/")
def index():
    #return app.send_static_file('index.html')
    return send_from_directory(app.static_folder, "index.html")
    #return send from directory(app.static_folder = "index.html")

if __name__=="__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
    #app.run(debug=True)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')