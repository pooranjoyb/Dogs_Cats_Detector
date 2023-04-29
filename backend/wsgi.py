from app import app

if __name__ == "__main__":
    app.run()

from gunicorn.app.wsgiapp import run
run()