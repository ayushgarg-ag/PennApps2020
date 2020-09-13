import wolframalpha

from flask import Flask, request, render_template
app = Flask(__name__)

client = wolframalpha.Client("PY2VE6-7L9AV92EH9") 

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/world_map', methods=['POST', 'GET'])
def world_map():
    if request.method == 'POST':
        print(request)

        client = wolframalpha.Client("PY2VE6-7L9AV92EH9")
        country = input('Country: ')
        res = client.query('What is the population of ' + country + '?')
        answer = next(res.results).text
    
    return render_template('world.html')

@app.route('/us_map')
def us_map():
    return render_template('us.html')

def api():
    # Stores the response from  
    # wolf ram alpha 
    country = input('Country: ') 

    list = []
    res = client.query('What is the population of ' + country + '?')
    answer = next(res.results).text 
    list.append(answer)
    res = client.query('What is the life expectancy of ' + country + '?')
    answer = next(res.results).text 
    list.append(answer)
    res = client.query('What is the capital of ' + country + '?')
    answer = next(res.results).text 
    list.append(answer)
    res = client.query('What is the GDP of ' + country + '?')
    answer = next(res.results).text 
    list.append(answer)
    res = client.query('What are the three largest cities in ' + country + '?')
    answer = next(res.results).text 
    list.append(answer)

if __name__ == "__main__":
    app.run(debug=True, port=4500)
