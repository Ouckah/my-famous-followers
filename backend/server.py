from flask import Flask

app = Flask(__name__)

# Test API Route
@app.route("/tests")
def tests():
    return {"tests": ["Test", "Complete!"]}


if __name__ == "__main__":
    app.run(debug=True)