# node-restapi-express

I use Node js, Express js and MongoDB to make this project. 
#

```GET``` and ```POST``` both are two common HTTP requests used for building ```REST API's```. ```GET``` requests are used to send only limited amount 
of data because data is sent into header while POST requests are used to send large amount of data because data is sent in the body. 
Express.js facilitates you to handle ```GET``` and ```POST``` requests using the instance of express.

Also, ```PUT``` and ```DELETE``` are the http request used that can edit and delete the request data respectively.
#
## Running Locally

#### Make sure you have Node.js
    git clone https://github.com/devkishor8007/node-restapi-express.git
    npm start

Your app should now be running on ```localhost:7000```
##
## Deploying to Heroku
#### Make sure you have Heroku Account
    heroku create anyname
    git push heroku master
    heroku open
