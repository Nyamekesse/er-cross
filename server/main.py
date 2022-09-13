from distutils.log import debug
from flask import Flask

app =Flask(__name__)
app.config['SECRET_KEY'] = '74cbb073606587948c64b381e0b250f6'


@app.route("/")
@app.route('/home')
def method_name():
    return "hello World!, welcome"

@app.route('/register')
def sign_up():
    pass
@app.route('/login')
def log_in():
    pass
    


if __name__ == '__main__':
    app.run(debug=True)