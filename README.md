[a-new-home](https://a-new-home.herokuapp.com/)
==========

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application support the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ npm install
$ NODE_ENV=development npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

### Setting up the DB

```sh
# Dump the MongoLab DB
mongodump -h ds041238.mongolab.com:41238 -d heroku_app35739427 -u <user> -p <pwd> -o <path to dump to>
# Start the local DB
mkdir database
mongod --dbpath database
# Import data into the local DB
mongorestore -h localhost -d wellington <path to dump>
```

## Deployment

The site is deployed on [Heroku](http://heroku.com/) and also uses the [MongoLab addon](https://addons.heroku.com/mongolab).

> To deploy the site, you'll need the Heroku Toolbelt: `brew install heroku-toolbelt`.

You'll also need to do some configuration beforehand:

~~~sh
# First log in to Heroku.
heroku login
# Add the Heroku remote to the repository.
heroku git:remote -r heroku -a a-new-home
# Retrieve the deploy branch from GitHub.
git fetch --all
~~~

Then for each deploy:

~~~sh
# Switch to the deploy branch.
git checkout deploy
# Rebase it from master.
git rebase master
# Push it to GitHub.
git push origin deploy
# Then push the code to Heroku.
git push heroku deploy:master --force
# Then see your thing running!
heroku open
~~~

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
