import requests
from core.models.request import RequestData
from core.models.login import LoginData
from core.models.client import Client

base_api_url = 'https://{subdomain}.zendesk.com/api/v2'
header = {'Content-Type' : 'application/json'}
username = '{username}'
api_token = '{api_token}'

def getClient():
    client_res = requests.get(base_api_url + '/oauth/clients.json', headers=header, auth=(username + '/token', api_token) )
    client_data = Client()
    client_data.status = client_res.status_code
    client_data.error = client_res.reason
    if (client_res.status_code == 200):
        client = client_res.json()
        client_data.client_id = client["clients"][0]["id"]
        #print(client_data.client_id)
    return client_data
    
def getToken(client_id):
    data = {"token": {"client_id": client_id, "scopes": ["read", "write"]}}
    token_res = requests.post(base_api_url + '/oauth/tokens.json', headers=header, auth=(username + '/token', api_token), json=data)
    print(token_res.status_code)
    login_data = LoginData()
    login_data.status = token_res.status_code
    login_data.error = token_res.reason
    if token_res.status_code == 200:
        token_data = token_res.json()
        login_data.auth_token = token_data["token"]["full_token"]
    return login_data

def getAllRequests(auth_token):
    api_header = {'Content-Type' : 'application/json', 'Authorization': 'Bearer ' +auth_token}
    request_res = requests.get(base_api_url + '/requests.json', headers=api_header)
    request_data = RequestData()
    request_data.status = request_res.status_code
    request_data.error = request_res.reason
    if request_res.status_code == 200:
        request_data.requests = request_res.json()
        #request_data.requests = token_data["token"]["full_token"]
    return request_data