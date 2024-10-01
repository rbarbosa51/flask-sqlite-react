from functools import wraps
from flask import make_response, request, current_app
from dotenv import load_dotenv
import os

load_dotenv()
USERNAME = os.getenv('USERNAME')
PASSWORD = os.getenv('PASSWORD')

def auth_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if auth and auth.username == USERNAME and auth.password == PASSWORD:
            return f(*args, **kwargs)
        return make_response('<h1>Access Denied!</h1>', 401, {'www-Authenticate': 'Basic realm="Login required!"'})
    return decorated

