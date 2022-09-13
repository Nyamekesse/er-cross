import os
from sqlalchemy import Column, String, Integer, create_engine
from flask_sqlalchemy import SQLAlchemy
import json
from dotenv import load_dotenv
load_dotenv()


load_dotenv()
app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ['SECRETE_KEY']
database_path = 'postgresql://{}:{}@{}/{}'.format(
    os.environ['USERNAME'], os.environ['PASSWORD'], 'localhost: 5432', os.environ['DATABASE_NAME'])

db = SQLAlchemy()


"""
setup_db(app)
    binds a flask application and a SQLAlchemy service
"""


def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()


"""
Health Service

"""


class Health_Service(db.Model):
    __tablename__ = 'health_service'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
    register_type = Column(String)

    def __init__(self, name: str, email: str, password: str, register_type: str):
        self.name = name
        self.email = email
        self.password = password
        self.register_type = register_type

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'password': self.password,
            'register_type': self.register_type
        }
"""
Client

"""


class Client(db.Model):
    __tablename__ = 'client'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
    register_type = Column(String)

    def __init__(self, name: str, email: str, password: str, register_type: str):
        self.name = name
        self.email = email
        self.password = password
        self.register_type = register_type

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'password': self.password,
            'register_type': self.register_type
        }


"""
Requested Services

"""


class Requested_Services(db.Model):
    __tablename__ = 'requested_services'

    id = Column(Integer, primary_key=True)
    sender_id = Column(Integer)
    receiver_id = Column(Integer)
    message = Column(String)
    sender_location = Column(String)
    date = Column(String)

    def __init__(self, sender_id: str, receiver_id:str, message: str, sender_location: str, date: str):
        self.sender_id = sender_id
        self.receiver_id = receiver_id
        self.message = message
        self.sender_location = sender_location
        self.date = date

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'sender_id': self.sender_id,
            'receiver_id': self.receiver_id,
            'message': self.message,
            'sender_location': self.sender_location,
            "date": self.date,
        }
