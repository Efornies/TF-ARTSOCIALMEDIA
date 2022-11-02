"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import cloudinary
import cloudinary.uploader
from datetime import datetime
from datetime import timedelta


api = Blueprint('api', __name__)

#Registrar usuarios el body contendra username email y password
#Queremos que el correo sea unico
@api.route('/register', methods=['POST'])
def register():
    request_body=request.get_json()
    mailtaken=User.query.filter_by(email=request_body['email']).first()
    if mailtaken:
        return "Email already taken",418
    else:
            newuser=User(username=request_body['username'], email=request_body['email'], password=request_body['password'])
            db.session.add(newuser)
            db.session.commit()
            return jsonify(request_body),201
            

#Entregar un token a un usuario con Email y Password correctos
@api.route('/login', methods=['POST'])
def iniciar_sesion():
    request_body = request.get_json()
    print(request_body)
    user = User.query.filter_by(email=request_body['email']).first()
    if user:
        if user.password == request_body['password']:
            print("NOMBRE DE USUARIO " ,user.username)
            print("id DE USUARIO " ,user.id)
            acceso = create_access_token(identity = user.id)

            return jsonify({
                "mensaje": "Welcome",
                "token": acceso,
                "username": user.username,
                "userId": user.id
            })
        else:
            return "You get lost"
    else:
        return "User lost", 400
   



@api.route("/profile", methods=["POST"])
def edit_user():
    body_username = request.json.get("username")
    body_email = request.json.get("email")
    body_password = request.json.get("password")


    if body_email and body_password:
        new_user = User(username=body_username, 
                        email=body_email, password=body_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"created": True, "user": new_user.serialize()}), 200
    else:
        return jsonify({"created": False, "msg": "Falta información"}), 400

