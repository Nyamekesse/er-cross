from flask_cors import CORS
import json
from flask import (Flask,request, abort, jsonify)
from flask_bcrypt import Bcrypt


from database.models import setup_db, Health_Service, Requested_Services, Client
def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__)
    setup_db(app)
    bcrypt = Bcrypt(app)
    CORS(app, resources={r"*": {'origins': '*'}})

    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers',
                             'Content-Type,Authorization,True')
        response.headers.add('Access-Control-Allow-Methods',
                             'GET,PUT,POST,DELETE,PATCH')
        return response

    @app.route("/")
    @app.route("/er-cross", methods=['GET'])
    def home():
        return jsonify({
            "success": True,
            "message": "working"
        }), 200

    @app.route('/register', methods=['GET', 'POST'])
    def signup():
        """creates a new user
        
        Keyword arguments: json body
        json body -- contains the user name ,email, password and registration type
        Return: True and status code 201 if account is successfully created
        """
        
        pass
    @app.route('/login', methods=['GET', 'POST'])
    def login():
        """sign a user into his/her account
        
        Keyword arguments: json body
        json body -- contains the login credentials of the user
        Return: True and status code 200 if successful login
        """
        
        pass

    @app.route('/request-service', methods=['POST'])
    def  request_service():
        """send a request for service attendance
        
        Keyword arguments: json body
        json body -- contains the request message, sender details and date sent
        Return: True and status code 200 if successful
        """
        
        pass
    @app.route('/get-requested-services<int:id>', methods=['GET'])
    def  get_requested_services():
        """retrieves all the services made by a client
        
        Keyword arguments: json body
        json body -- contains all the details of the requests made by a client
        Return: A a json body, True and status code 200 if succesful
        """
        
        pass
    @app.route('/clients', methods=['GET'])
    def  get_clients():
        """retrieves all registered clients
        
        Keyword arguments: 
        
        Return: A list of all clients
        """
        try:
            all_clients = Client.query.order_by(Client.id).all()
            if not all_clients:
                abort(404)
            else:
                clients = [client.format() for client in all_clients]
                return jsonify({
                    'success': True,
                    'registered_clients': clients,
                    'total': len(clients)
                }), 200
        except:
            abort(404)
    @app.route('/health-services', methods=['GET'])
    def  get_health_services():
        """retrieves all registered health services
        
        Keyword arguments: 
        
        Return: A list of all health services
        """
        try:
            all_health_services = Health_Service.query.order_by(Health_Service.id).all()
            if not all_health_services:
                abort(404)
            else:
                health_services = [service.format() for service in all_health_services]
                return jsonify({
                    'success': True,
                    'registered_health_services': health_services,
                    'total': len(health_services)
                }), 200
        except:
            abort(404)

     # error handlers
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({
            'success': False,
            'error': 404,
            'message': 'resource not found'
        }), 404

    @app.errorhandler(405)
    def method_not_allowed(error):
        return jsonify({
            'success': False,
            'error': 405,
            'message': 'method not allowed'
        }), 405

    @app.errorhandler(422)
    def unprocessable(error):
        return jsonify({
            'success': False,
            'error': 422,
            'message': 'Not Processable'
        }), 422

    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({
            'success': False,
            'error': 400,
            'message': 'bad request'
        }), 400

    @app.errorhandler(500)
    def internal_Server_error(error):
        return jsonify({
            'success': False,
            'error': 500,
            'message': 'Internal Server Error'
        }), 500

    return app

    