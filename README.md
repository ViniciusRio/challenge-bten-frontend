# Challenge Bten Frontend

## File Structure 
Here demonstrate the custom folder structure, the rest follow the project architecture itself

```
project
│└──backend (nodejs/nestjs)   
│   │    auth
│   │    user
│   │      └─── schema
└───app (angular)
│   │     auth
│   │     interceptors
│   │     pages
│   │     services
```
## Run

For App Angular: 
```sh
cd folder
yarn
ng serve
```

For App Angular: 
```sh
cd backend/api-login
npm install
npm run start:dev
```

## Endpoints (backend)
- DEL - deleteAllUsers: localhost:3000/user
- DEL - deleteUser: localhost:3000/user/:id
- GET - getAllUsers: localhost:3000/user
- POST - createUser: localhost:3000/user
- POST - authLogin: localhost:3000/auth/login

## Screens

![alt text](./login.png)
![alt text](./create-account.png)
![alt text](./dashboard.png)

