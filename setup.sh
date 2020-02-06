#!/bin/bash
#
# a VERY simplistic setup script. however, once run, you should
# be able to serve and run this starter template
# 

basedir=`pwd`

# setup api
cd api
echo "

=======================================
Setting up API
=======================================

"

composer install

cp .env.example.develop .env
php artisan key:generate
php artisan jwt:secret
(. .env && touch database/$DB_DATABASE)
php artisan migrate:fresh --seed

cp .env.example.testing .env.testing
php artisan key:generate
php artisan jwt:secret
(. .env.testing && touch database/$DB_DATABASE)
php artisan --env=testing migrate:fresh --seed

cd $basedir


# setup web
cd web
echo "

=======================================
Setting up WEB client
=======================================

"
cp .env.example .env
cp .env.local.example .env.local
cp .env.production.local.example .env.production.local
npm install


