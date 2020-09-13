import wolframalpha
import ssl

ssl._create_default_https_context = ssl._create_unverified_context
client = wolframalpha.Client("PY2VE6-7L9AV92EH9") 
# Instance of wolf ram alpha  
country = input('Country: ') 

res = client.query('What is the population of ' + country + '?')
answer = next(res.results).text 
print(answer)
res = client.query('What is the life expectancy of ' + country + '?')
answer = next(res.results).text 
print(answer)
res = client.query('What is the capital of ' + country + '?')
answer = next(res.results).text 
print(answer)
res = client.query('What is the GDP of ' + country + '?')
answer = next(res.results).text 
print(answer)
res = client.query('What are the three largest cities in ' + country + '?')
answer = next(res.results).text 
print(answer)