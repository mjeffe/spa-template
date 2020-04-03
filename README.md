# SPA Starter Template

This is a template project with some basics scaffolding for building a Single
Page App (SPA) client and REST API backend.  

The API uses:
* [Laravel 6.x](https://laravel.com/)
* [jwt-auth 1.0](https://github.com/tymondesigns/jwt-auth) for authentication
* [sqlite3](https://sqlite.org) as the default database

The web client uses:
* [Vue 2.6](https://vuejs.org/) (initially set up using [Vue CLI](https://cli.vuejs.org/)) with the following
  * Vue Router
  * Vuex
  * webpack
  * jest
  * eslint
  * sass
* [Axios](https://github.com/axios/axios) for API access
* [vue-notifications](https://github.com/euvl/vue-notification) for toast style notifications

This is **not** a beginner's template! You should be familiar with the components above and how they all work together.

As you can see by the directory structure, the api and web clients could easily
be separated into their own projects. It is certainly possible to build a web
SPA client entirely within the Laravel ecosystem, but I find separating the SPA
from it's API to be a good clean way to organize, develop, and test, and it
provides good flexibility for deployment.  This template has been a good
starting place for several of my recent projects.

**!!!! USE AT YOUR OWN RISK !!!!** This code is useful to me so I'm making it available
to others, but I make no guarantees whatsoever.


## Cloning

To use this template as the starting point for a new project, you need to get a
bare clone, then push to your own new repo with the --all flag.

### Cloning to your AWS CodeCommit repo
Create new CodeCommit repo (or use the AWS Console)
```
aws codecommit create-repository --repository-name my_repo --repository-description "My new repository"
```
Get a bare clone of this template
```
git clone --bare https://github.com/mjeffe/spa-template.git tmp_repo
```
Push it to **your** your new repo with the --all flag
```
cd tmp_repo
git push https://git-codecommit.us-east-1.amazonaws.com/v1/repos/my_repo --all
```
Finally, clone a working copy of your new repo
```
cd ..
git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/my_repo
rm -fr tmp_repo
```

### Cloning to your github repo
Create your new repo (for github, I prefer using the web interface) then:

Get a bare clone of this template
```
git clone --bare https://github.com/mjeffe/spa-template.git tmp_repo
```
Then push it to **your** your new repo with the --all flag
```
cd tmp_repo
git push https://github.com/<my-username>/my_repo.git --all
```
Finally, clone a working copy of your new repo
```
cd ..
git clone https://github.com/<my-username>/my_repo.git my_repo
rm -fr tmp_repo
```

## Install and Init

If your development environment is setup for this kind of work, and you are happy with the dependencies listed in the introduction of this doc, you can get up and running quickly by executing:
```
./setup.sh
```
Specifically, `setup.sh` expects to be able to run:
```
composer install
npm install
sqlite3  # Laravel's migrations run this
```

However, if your environment is not setup, then you should start with the
[Laravel install docs](https://laravel.com/docs/6.x/installation) and
[Vue.js install docs](https://cli.vuejs.org/guide/installation.html)

If you want to customize packages, versions, etc., then modify
`api/composer.json` and/or `web/package.json` before running `setup.sh`.  Or
you may just want to look at the setup script and run bits manually.

## Running in Development

In theory, once you've run `setup.sh` both api and web app should be
functional. Assuming defaults, then:

* The client app is served on `http://localhost:8080`.
* The api is served on `http://localhost:8000/v1`.

For daily development, I'm often working on either the api or the web app, with
their respective testing tools. However, to run the entire app, open a
terminal, cd to your working directory, and run:
```
rundev
```
Point your browser at `localhost:8080` and log in with one of the users created
in `api/database/seeds/UsersTableSeeder.php`.  You will, of course, want to
modify this seeder to add your own users, then rebuild with `php artisan
migrate:fresh --seed`.

The `rundev` script works for me on Ubuntu 18.04. It will open three additional
tabs in your terminal running the client npm server on `localhost:8080`, the
api laravel server on `localhost:8000` and a tail of the laravel log. I find
this a useful setup, but once again, this is your repo, so modify rundev to
suit your needs.

## Deploying to Production

Remember, this is a **starter template!** It's just scaffolding, not production
ready code! See the **USE AT YOUR OWN RISK** disclaimer in the introduction of
this doc. Having said that, here are some notes about how I've deployed to production.

I like to let something like Jenkins handle deoployment. Build on a "build"
machine, push to production machine, run migrations, etc.

#### When I deploy API and SPA on a different servers
You will have CORS issues to deal with. I have a `Cors` middleware set up and
running in the API when you first install, which is *very* permissive. This is
needed for development to serve the client and api on different ports. Modify
or replace this to suit your needs.

#### When I deploy API and SPA on the same server
I deploy the client at the root of a server such as `example.com/` and the API
from `example.com/api`. Or sometimes from a subdirectory of root such as
`example.com/myapp` and `example.com/myapp/api`. Either way this is how I set it up:

1. I copy (or `git clone` or let Jenkins push) my project (or just the api) to some location on the production box outside of the public html directory, such as `/var/www/src`
1. In the public html directory of the production box, I create a symlink to the API's `public` directory and name it `api`
1. Then my deployment will build the client, push the contents of `dist` to the public html dir, `git pull` the api, `php artisan migrate`, etc.

[YMMV](https://en.wikipedia.org/wiki/Your_mileage_may_vary)

