from sqlalchemy.dialects.postgresql import UUID
from start_up import db
from datetime import datetime
from sqlalchemy import Column, String, Integer
import uuid

"""
setup_db(app)
    binds a flask application and a SQLAlchemy service
"""

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
    all_requests = db.relationship('Requested_Services', backref='author', lazy=True)

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
    request_date = Column(db.DateTime, default=datetime.utcnow)
    client_id = Column(Integer, db.ForeignKey('client.id'))

    def __init__(self, sender_id: str, receiver_id: str, message: str, sender_location: str, request_date: str):
        self.sender_id = sender_id
        self.receiver_id = receiver_id
        self.message = message
        self.sender_location = sender_location
        self.request_date = request_date

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
            "request_date": self.request_date,
        }
