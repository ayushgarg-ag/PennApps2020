from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/world_map')
def world_map():
    return render_template('world.html')

@app.route('/us_map')
def us_map():
    return render_template('us.html')


if __name__ == "__main__":
    app.run(debug=True, port=4500)
