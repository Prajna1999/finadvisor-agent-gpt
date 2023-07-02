# Fin Advisor GPT

Fin Advisor GPT is a sophisticated financial assistant powered by OpenAI API, Langchain Agent SQLChain, Google SERP API, and OpenAI Functions. It is designed to handle your queries regarding financial data, perform complex mathematical calculations, and fetch relevant internet-based information. The application serves you through its primary endpoint, which is designed to accept POST requests containing your queries.

## Table of Contents

- [Endpoints](#endpoints)
- [Capabilities](#capabilities)
- [How to Make a POST Request](#how-to-make-a-post-request)
- [Response Format](#response-format)
- [Example Query](#example-query)
- [Note on Database Queries](#note-on-database-queries)

## Endpoints

Main endpoint: `https://acorn-py.onrender.com/process-prompt`

### POST `/process-prompt`

This endpoint accepts JSON data in a POST request where the `text` key contains your query. The content of the `text` field will be processed by the Fin Advisor GPT and the appropriate tool will be selected to handle your request.

**Request Format:**

```json
{
    "text": "<Your query goes here>"
}
```

Replace `<Your query goes here>` with your actual query.

## Capabilities

The Fin Advisor GPT is equipped with three primary tools to serve your requests:

1. **Search**: This tool utilizes Google SERP API to fetch internet-based information relevant to your query.
2. **SQLDatabaseChain**: This tool is part of the Langchain framework and is used to query the underlying SQL database for precise data points.
3. **LLMMathChain**: This tool allows the agent to perform complex mathematical calculations based on your query.

These tools are automatically selected based on the context of your query. The agent decides the most appropriate tool for handling your request. Whether it's querying the database, searching the internet, or doing mathematical calculations, all decisions are taken by the agent itself.

## How to Make a POST Request

Depending on your preferred language or tool, there are several ways to make a POST request to the endpoint mentioned above. Here's an example using `curl`:

```bash
curl -X POST https://acorn-py.onrender.com/process-prompt -H "Content-Type: application/json" -d '{"text":"<Your query goes here>"}'
```

Replace `<Your query goes here>` with your actual query.

And here's an example using Python's `requests` library:

```python
import requests

url = 'https://acorn-py.onrender.com/process-prompt'
data = {"text": "<Your query goes here>"}
response = requests.post(url, json=data)

print(response.json())
```

Replace `<Your query goes here>` with your actual query.

Or you can make a Postman POST request to the endpoint 'https://acorn-py.onrender.com/process-prompt' with the prompt in a similar fashion.

## Response Format

The response will be a JSON object containing the result of your query, including information on which tool was utilized to process the request, as well as any relevant output data.

The specific structure and content of the response will depend on your query and the tool that was used to process it.

## Example Query

Let's consider a simple query: "My name is Robyn Vecard. What is 10 raised to power 2?"

This query can be executed using the `requests` library in Python as follows:

```python
import requests

url = 'https://acorn-py.onrender.com/process-prompt'
data = {"text": "My name is Robyn Vecard. What is 10 raised to power 2?"}
response = requests.post(url, json=data)

print(response.json())
```

This will result in a POST request being made to the endpoint. The Fin Advisor GPT will identify the mathematical operation in the query and use the LLMMathChain tool to calculate the result. 

The response from the server will be a JSON object containing the result of the calculation, which tool was used (in this case, LLMMathChain), and any other relevant output data.

## Note on Database Queries

It's important to note that if your query requires accessing financial data from the SQLDatabaseChain and if the specific data is not present in the database, the agent will not be able to return the requested information. The server response in such cases may vary depending on the implementation, but typically you'll receive a message indicating that the data couldn't be retrieved.

However, the agent does not stop processing there. It will try to fetch relevant information from the internet using the Search tool. Although this might not give you the specific data point you were seeking, it can often provide useful related information.

Always ensure that the data you are querying for exists within the database for precise results.


## Product Roadmap

As we continue to develop and expand the capabilities of Fin Advisor GPT, we have several exciting new features planned for the future:

### Full Stack Application

We aim to deliver a comprehensive full stack application that will allow users to interact with Fin Advisor GPT via a user-friendly and intuitive interface. This application will seamlessly integrate all the current features while paving the way for additional functionality.

### User Authentication

Security is paramount in financial applications. We are planning to implement a secure user authentication system. This will not only protect the user's data but also provide a personalized experience for each user.

### Auto Tagging of Expenses

To enhance the financial data analysis, we will introduce an auto-tagging feature. This will automatically categorize your expenses into predefined categories like groceries, entertainment, bills, and more, providing deeper insight into your spending habits.

### Dashboard

A comprehensive dashboard is in the pipeline that will provide users with a holistic view of their financial health. It will display key metrics, charts, and trends derived from the user's financial data.

### AI Recommendation

We are working on AI-powered recommendations to help users make more informed financial decisions. This feature will analyze your financial behavior, goals, and market trends to provide personalized investment and saving advice.

### User-Friendly Elements

Ease of use is a key focus area for us. We aim to continually enhance the user experience with intuitive design elements, seamless navigation, and helpful features. This includes expanding the functionality of the application to provide support for more financial operations, better data visualization, and comprehensive help and guidance features.

These features form the backbone of our upcoming development work, and we look forward to providing these enhancements to all our users in the future. Stay tuned for updates as we continue to improve and expand the Fin Advisor GPT!

## Conclusion

Fin Advisor GPT is a powerful financial assistant capable of handling a wide variety of queries and tasks. By simply making a POST request to our endpoint, you can have complex calculations handled, specific database information fetched, or general internet data sourced. This service is intuitive and designed to be as user-friendly as possible, making your financial analysis and decision-making processes more efficient and informed.

## License

This project is licensed under the terms of the MIT license.

```markdown
MIT License

Copyright (c) [2023] [prajna] [aditya]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```




