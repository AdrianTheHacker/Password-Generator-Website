from flask import Flask, render_template, url_for, request

from password_generator import create_password


app = Flask(__name__, template_folder='templates')


@app.route("/")
def index():
    return render_template('index.html', password="New Password")


@app.route("/", methods=["POST"])
def get_password():
    boxes = ['eng_alpha', 'caps', 'numbers']
    options = []

    for checkbox in boxes:
        if request.form.get(checkbox) == 'on':
            options.append(True)
        else:
            options.append(False)

    print(options)
    if options == [False, False, False]:
        options = [True, False, False]
        
    return render_template('index.html', password=create_password(int(request.form['length']), options))


if __name__ == '__main__':
    app.run(debug=True)