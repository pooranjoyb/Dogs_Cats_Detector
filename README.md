# Deployment Branch

## Details : 

This branch contains the production build of ReactJS which is being deployed for production in [Render](https://render.com/)

Changes Made for the production build are : 
- The proxy settings in package.json file of the ReactJS client is removed
- All POST and GET requests are made to the relative endpoints like `/upload` and not `http://localhost:5000/upload`.
- The build folder created by ReactJS is moved to the backend directory and used as Static files for Flask server.
- .h5 Model is loaded in the server and predicted value is returned to the React Client.
- Flask recommended WSGI server is used for the production build i.e Gunicorn

**Gunicorn: A pre-fork worker model server that is easy to configure and deploy. It's a good choice for smaller applications and can be scaled horizontally with load balancers.**

## Usage : 

Run the following commands in the root directory to start the production build

```py
cd backend
gunicorn server:app
```
