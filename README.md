# Quickstarter

Quickstarter is a web application that imitates Kickstarter's funding platform with campaign goals, backings, and rewards. 

## Check out the live site here: [Quickstarter](https://quickstarter-app.herokuapp.com/)

# Technologies Used

## Back end 

The back end was built using Python and Flask, and connects to a postgreSQL database via SQLAlchemy. 

## Front end

The front end was built using JavaScript, React, and Redux. The rich text editor used to create a project is powered by [React Quill](https://www.npmjs.com/package/react-quill).

## Deployment

This app was deployed to Heroku using the Heroku CLI.

# Features

Quickstarter users are able to:
* Create an account
* Log in and log out
* Search for or browse projects using a variety of filters
* Back a project just because they believe in it
* Back a project while selecting a reward to receive if the project is funded
* Create a project and its rewards entering text, rich text, and an image upload to AWS

# Key Components

# User Authentication

User passwords are hashed using [Werkzeug](https://pypi.org/project/Werkzeug/) before being stored in the database. Logging in and out is managed by [Flask-Login](https://flask-login.readthedocs.io/en/latest/). 

## Viewing Projects
