import os
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask import (Flask)
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
from flask_login import LoginManager
load_dotenv()

# seems to change to CAPITALIZE on my machine
# that is why .lower() function is applied, can be removed if does not work on yours
database_username = os.getenv('username').lower()
database_password = os.getenv('password')
database_name = os.getenv('database_name')
database_connection_port = os.getenv('database_connection_port')

database_path = f'postgresql://{database_username}:{database_password}@{database_connection_port}/{database_name}'

# create and configure the app
app = Flask(__name__)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRETE_KEY"] = os.getenv('secrete_key')
app.config['SQLALCHEMY_DATABASE_URI'] = database_path
bcrypt = Bcrypt(app)
login_manager = LoginManager()
CORS(app, resources={r"*": {'origins': '*'}})

db = SQLAlchemy(app)

from start_up import routes