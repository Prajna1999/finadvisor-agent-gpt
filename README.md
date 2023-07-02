# Acrons

Description:

## Features

- Can analyze user's Finance details such as expenses, incomes, subscriptions
- User can use our chatbot for more analofy on their finance details
- User can

## Tech

Acrons uses number of open source projects to work properly:

- [NextJS] - HTML enhanced for web apps!
- [NextJS Rest API] - REST API service
- [Fast API] - Serves AI Requests and response
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [Supabase] - Online Cloud PostgreSQL database
- [OpenAI] - AI models to process data

## Installation

Acorn requires [Node.js](https://nodejs.org/), Python to run.

### Environment Setup

To use application we have to setup below environment variables

1. FASTAPI Required Environment variables

```.env
SUPABASE_URL=
SUPABASE_KEY=
OPENAI_API_KEY=
SERPER_API_KEY=
```

2. Proxy Server Required Environment Variables

```.env
SUPABASE_URL=
SUPABASE_KEY=
```

### Setup AI REST Service

Make sure `python` and `pip` is installed and updated.

```sh
cd acron/langchain-service
# if virtualenv is not installed install by running `pip install venv`
python -m venv venv
./venv/Scripts/activate
# Once Virtualenv is activated then run below command to bring up the server
uvicorn app:app --reload
# Applicaton will be available by default on localhost:8000
```

### Setup Node Proxy REST Service and Frontend to consume API

```sh
cd acron
npm install
npm run start
```

### Test the Application

Before accessing the application check if all the database connection is working as expected and ai prompt is working as expected.

`For running the tests both the backend servers should be up and running`

```sh
npm run test
```

### Access the Application

To access the application and consume the backend UI go to Web browser and go to `localhost:5001/dashboad`

## Functionalities

## API Documentation

| API route                     | Request                                                                                                                                   | Response                                                                                                                                                                                                                                                                                                                                                                                          | Description |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| localhost:8000/process-prompt | POST `{"prompt":"Hi My user id is {} and my name is {}. What are my top 3 expenses and top 3 incomes and what is the total difference."}` | `{data: [    "The top 3 expenses for Lorilyn Custard (user ID: f9a39d19-23d2-4cc6-99ef-34e8ba2e11d2) are as follows:","1. Expense name: structure",    "   Total amount: $95,952.00",    "2. Expense name: tangible",    "   Total amount: $71,889.00",    "3. Expense name: 3rd generation",    "   Total amount:$48,477.10","These expenses are the highest in terms of total amount spent."]}` |             |

### Limitations

### Improvements
