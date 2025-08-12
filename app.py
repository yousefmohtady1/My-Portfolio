# app.py
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/project1')
def project1():
    return render_template('project1.html')

@app.route('/project2')
def project2():
    return render_template('project2.html')

@app.route('/project3')
def project3():
    return render_template('project3.html')

@app.route('/all-projects')
def all_projects():
    return render_template('all_projects.html')

if __name__ == '__main__':
    app.run(debug=True)
    