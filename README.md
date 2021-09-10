# Quickstarter

Quickstarter is a web application that imitates Kickstarter's funding platform with campaign goals, backings, and rewards. 

## Check out the live site here: [Quickstarter](https://quickstarter-app.herokuapp.com/)

<img width="1677" alt="Quickstarter-home" src="https://user-images.githubusercontent.com/79616733/131910162-bbfe97de-43a2-4cc1-8841-d942acbcc179.png">

# Technologies Used

## Back end 

The back end was built using Python and Flask, and connects to a postgreSQL database via SQLAlchemy and Alembic. 

## Front end

The front end was built with React and Redux, powered by JavaScript and Express. The rich text editor used to create a project is powered by [React Quill](https://www.npmjs.com/package/react-quill). Project image upload is handled by Amazon Web Services S3.

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

## User Authentication

User passwords are hashed using [Werkzeug](https://pypi.org/project/Werkzeug/) before being stored in the database. Logging in and out is managed by [Flask-Login](https://flask-login.readthedocs.io/en/latest/). 

![quickstarter-signup](https://user-images.githubusercontent.com/79616733/132924872-c891ffbe-f08e-4293-8d9f-e2043f644ab1.gif)

## Viewing Projects

Users can begin exploring **new projects** right from the home page. They can also search for projects by keyword or by a number of filters. On a project's page, users can learn about the project and its rewards and decide whether to show their support by backing the project.

A user can view and follow links to projects they have **backed** both in the User Account dropdown menu and on their Profile page.

A user can view and follow links to projects they have **created** in the User Account dropdown menu.

## Creating Projects

A lot goes into creating a successful Kickstarter project. While **Quickstarter** does not utilize human moderation teams or payment processing, we sought to emulate the Kickstarter look and feel as much as possible.

After entering some basic qualifying info, a user is brought to a robust editing suite, where they can enter important project info, upload a project image, and draft the central story using a rich text editor which also supports images. 

Once ready, the user can click a "Go Live" button to publish their project for other users to view and back. 

## Backing Projects

Users who are inspired by a project can show their support either by pledging an arbitrary amount of "money" or by selecting a reward from the options provided by the project creator.

# Wiki

For more details, please see our Wiki pages:
* [API Documentation](https://github.com/taylorbhogan/quickstarter/wiki/API-Documentation)
* [Database Schema](https://github.com/taylorbhogan/quickstarter/wiki/Database-Schema)
* [MVP Features List](https://github.com/taylorbhogan/quickstarter/wiki/MVP-Features-List)
* [User Stories](https://github.com/taylorbhogan/quickstarter/wiki/User-Stories)

# To-Dos
* Re-seed database with a greater variety of projects
* Expand and improve the Search functionality
* Implement user profile image upload
* Implement segmented loading for Search page
