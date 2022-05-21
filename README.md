## About

A starting point for any Laravel and React project.

## Routing

All requests except /api are handled by React, with functional routing and back button support.

Requests made to the /api route are handled by Laravel.

## Setup

The react app is located in the /client folder, the entrypoint is the /client/ReactApp.js file.

```bash
# install laravel dependencies
composer install

# create .env file
cp .env.example .env

# generate laravel's secret key
php artisan key:generate

# install react dependencies
npm install

# build react frontend
npm run watch

# run the server
php artisan serve

# the project can be accessed via: http://localhost:8000/
```
