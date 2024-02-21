from flask import Flask, render_template, request, url_for, redirect
import websockets 
import json
from src.src import src

app = Flask(__name__)

model = src()
# "Type of place", "Price", "Location", "Age", "Gender", "Budget"
df = ['Attraction', 25, 'Agra', 30, 'Male', 150]
res = model.predict_visit(df)
print(res)

@app.route('/')
def Root():
    return render_template("index.html")

if __name__=="__main__":
    app.run(debug=True)