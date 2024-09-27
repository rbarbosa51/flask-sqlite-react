from flask import Flask, send_from_directory, request, redirect, render_template
import os
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass

app = Flask(__name__)
directory = f'{os.getcwd()}/client/dist'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
db = SQLAlchemy(app)

@dataclass
class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    message = db.Column(db.String(1000), nullable=False)
    def __repr__(self):
        return f'{self.id}, name {self.username} message {self.message}'

@app.route('/')
@app.route('/phone')
def main():
    return send_from_directory(directory=directory, path='index.html')

@app.route('/assets/<file>')
def assets(file):
    path = directory + '/assets'
    return send_from_directory(directory=path, path=file)

@app.route('/<file>')
def public(file):
    return send_from_directory(directory=directory, path=file)

@app.errorhandler(404)
def not_found(e):
    return render_template('404.html')

@app.route('/api/create', methods=['POST'])
def createPost():
    new_post = Comment(username=request.form['username'], message=request.form['message'])
    try:
        db.session.add(new_post)
        db.session.commit()
        return redirect('/')
    except Exception as e:
        print(f'Error: {e}')
        return f'Error: {e}'

@app.route('/api/getposts')
def getPosts():
    comments = Comment.query.order_by(Comment.id).all()
    return [
            {"id": comment.id,
             "username": comment.username,
             "message": comment.message,
             } for comment in comments
            ]

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=3001)
