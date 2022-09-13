from crypt import methods
from distutils.log import debug
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
load_dotenv()
app =Flask(__name__)
app.config['SECRET_KEY'] = os.environ['SECRETE_KEY']
database_path = 'postgresql://{}:{}@{}/{}'.format(
    os.environ['USERNAME'], os.environ['PASSWORD'], 'localhost: 5432', os.environ['DATABASE_NAME'])

@app.route("/")
@app.route('/home')
def method_name():
    return "hello World!, welcome"

@app.route('/register', methods=['GET', 'POST'])
def sign_up():
    pass
@app.route('/login', methods=['GET', 'POST'])
def log_in():
    pass
    


if __name__ == '__main__':
    app.run(debug=True)