# Plants Galore

# Response 

# Server
First, I created the server side of the application using NodeJS, Express, and PostgreSQL. I tested the API endpoints using Postman to ensure that everything was working correctly and properly. I also included a catchAll method which redirects back to the homepage to avoid the browser displaying an error. 

# Front End
After testing, I started coding the frontend using React and Bootstrap making sure that the application was mobile friendly and responsive. After completing the visuals of the application, I started making fetch calls to the API to get the data. Once I finished implementing and testing of the application, I proceeded to deploy the application to Heroku. 

# Deployment to Heroku
At first my application directory had two sub-folders of frontend and server, however, Heroku demands that the application must have a package.json file inside the root directory, so I took all the files from the server folder to the root directory. I then editted the package.json file to start the server and then run 'npm run build' in my frontend folder, I also added engines to specify which versions of npm are capable of properly installing my application. 

# Time Spent
I spent around 10 hours creating, testing, documenting, and deploying the application. 
