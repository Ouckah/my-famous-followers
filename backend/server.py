from flask import Flask

app = Flask(__name__)

# Test API Route
@app.route("/test")
def test():
    return {"foo": ["bar1", "bar2", "bar3"]}


if __name__ == "__main__":
    app.run(debug=True)