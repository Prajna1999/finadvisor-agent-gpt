from dotenv import dotenv_values
import psycopg2
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from urllib.parse import quote_plus
from langchain import LLMMathChain, OpenAI, SerpAPIWrapper, SQLDatabase, SQLDatabaseChain
from langchain.agents import initialize_agent, Tool
from langchain.agents import AgentType
from langchain.chat_models import ChatOpenAI

class Prompt(BaseModel):
    text: str

config = dotenv_values('.env')

password = quote_plus("giggity@1234")

db = SQLDatabase.from_uri(
    f"postgresql+psycopg2://postgres:{password}@db.ffukbbseygykvzirelar.supabase.co:5432/postgres",
)

llm = ChatOpenAI(temperature=0, model="gpt-3.5-turbo-0613", openai_api_key=config['OPENAI_API_KEY'])
search = SerpAPIWrapper(serpapi_api_key=config['SERPER_API_KEY'])
llm_math_chain = LLMMathChain.from_llm(llm=llm, verbose=True)
db_chain = SQLDatabaseChain.from_llm(llm, db, verbose=True)



tools = [
    Tool(name="Search", func=search.run, description="useful for when you need to answer questions about current events. You should ask targeted questions"),
    Tool(name="Calculator", func=llm_math_chain.run, description="useful for when you need to answer questions about math"),
    Tool(name="PostgreSQL-DB", func=db_chain.run, description="useful for when you need to answer questions about PostgresQL-DB. Input should be in the form of a question containing full context")
]

agent = initialize_agent(tools, llm, agent=AgentType.OPENAI_FUNCTIONS, verbose=True)

app = FastAPI()

@app.post("/process-prompt")
def process_prompt(prompt: Prompt):
    try:
        question = prompt.text
        result = agent.run(question)
        return JSONResponse(content=result)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
