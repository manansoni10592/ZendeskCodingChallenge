from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from core.models.login import LoginData
from core.models.request import RequestData
import dataAccess

app = FastAPI()

@app.get("/login")
def login():
    token_response = LoginData()
    client_response = dataAccess.getClient()
    if client_response.status == 200:
        token_response = dataAccess.getToken(client_response.client_id)
    else:
        token_response.status = client_response.status
        token_response.error = client_response.error
        token_response.auth_token = ""
    return token_response


@app.get("/getRequests")
def getRequests(auth_token):    
    req_response = RequestData()
    req_response = dataAccess.getAllRequests(auth_token)
    if req_response.status != 200:
        req_response.status = req_response.status
        req_response.error = req_response.error
        req_response.requests = None
    return req_response

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)