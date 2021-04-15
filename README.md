# Plants Galore - Care2Talk Coding Challenge

## Response 

### Server
First, I created the server side of the application using NodeJS, Express, and PostgreSQL. I tested the API endpoints using Postman to ensure that everything was working correctly and properly. I also included a catchAll method which redirects back to the homepage to avoid the browser displaying errors if the user tries to go to a part of the application that isn't available/set. 

### Frontend
After testing the server, I started coding the frontend side using React and Bootstrap making sure that the application was mobile friendly and responsive. After completing the base of the application, I started making fetch calls to the API to retrieve/send data. Once I finished implementing and testing the application, I proceeded to deploy the application to Heroku. 

### Deployment to Heroku
At first my application directory had two sub-folders of frontend and server, however, Heroku needs to have a package.json file inside the root directory, so I took all the files from the server folder to the root directory. Then, I updated the package.json file in 'scripts' to start the server and then run 'npm run build' in my frontend folder, I also added 'engines' to specify which versions of npm and node are capable of properly installing the application. 

### Time Spent
I spent around 10 hours creating, testing, documenting, and deploying the application. 
