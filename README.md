# Restful API

**A Restful Api with Node.js Express & MongoDB**

Software used:- Postman

**File structure:**

```
---package.json
|
---app.js
|
---.env
|
---routes
   |--posts.js
|
---models
   |--Post.js
```

- package.json: All the dependencies installed will apper here (Change the default `scripts` to `"scripts": { "start": "nodemon app.js" },`)
- app.js: code of how everything is working like connection with DB, import routes, home page text & app listeninig port.
- .env: mongoDB connection link with username & password.
- posts.js: Get post, Post post, search for specific post, update a post & delete a post.
- Post.js: Post schema.

# Commands executed for creation

```
1. npm init # package.json
2. npm install express nodemon
3. npm install mongoose (For conection with data base create an account on MongoDb Atlas & there create a cluster and there click on connect to application)
4. npm install dotenv #to hide passowrd of mongodb server
5. npm install body-parser # middleware
6. npm install cors # Middle - For access of my api other than localhost.
```

Then type `npm start` to run and type `http://localhost:3000/`

# Reference

[App reference & connection with MongoAB Atlas](https://alligator.io/nodejs/crud-operations-mongoose-mongodb-atlas/)

[Dotenv](https://www.npmjs.com/package/dotenv)

[Body-Parser](https://www.npmjs.com/package/body-parser)

[Cors](https://www.npmjs.com/package/cors)

After installing cors:-

<img width="1641" alt="Screenshot 2020-04-23 at 10 40 12 AM" src="https://user-images.githubusercontent.com/42263217/80067480-851cd980-855b-11ea-9ef0-914a4f76a92a.png">
