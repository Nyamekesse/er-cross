from flask_cors import CORS

from flask import Flask


from database.models import setup_db, Health_Service, Requested_Services, Client
def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__)
    setup_db(app)
    CORS(app, resources={r"*": {'origins': '*'}})

    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers',
                             'Content-Type,Authorization,True')
        response.headers.add('Access-Control-Allow-Methods',
                             'GET,PUT,POST,DELETE,PATCH')
        return response

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
        



    return app