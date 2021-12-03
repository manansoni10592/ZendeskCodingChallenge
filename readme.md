Steps for running the project.
SERVER

1. Install Python 3.9.2

2. Extract the zip file.

3. Open the ZendeskBE/dataAccess.py file

4. Set the values of subdomain, username and api token on line 6, 8 and 9 respectively

5. Open command prompt and navigate to ZendeskBE folder in project.

6. execute the command - pip install "fastapi[all]"

7. execute the command - uvicorn main:app

CLIENT

1. Download and Install Node Js version 14.15.4 from https://nodejs.org/en/download/

2. Install Angular CLI version 8.1.0 by opening the command prompt and executing the command - 
   npm install -g @angular/cli@8.1.0
   
3. Extract the zip file.

4. Open command prompt/Terminal and change directory to the ZendeskUI folder of the project.

5. Execute the following command
   npm install
This will install all the dependencies required for running the UI

6. Run the application by executing the following command in ZendeskUI folder path in command prompt - 
   ng serve -o