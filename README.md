# SPA Starter Template

A starter project with some basics scaffolding for running a single SPA client
against it's own api. `Laravel` 6.2 API with `jwt-auth` and `Vue` 2.6.10 with `Vue-cli`.

## Cloning

To use this template as the starting point for a new project, you need get a
bare clone, then push to your new repo.

### Cloning to your github repo
First create your new repo using the web interface, then:

Get a bare clone of this template
```
git clone --bare https://github.com/mjeffe/spa-template.git tmp_repo
```
Then push it to **your** your new repo with the --all flag
```
cd tmp_repo
git push https://github.com/<my-username>/my_repo.git --all
```
Finally, clone a working copy of your new repoy
```
cd ../
git clone https://github.com/<my-username>/my_repo.git
```

### Cloning to your AWS repo
Create new repo in the AWS Console, or using the cli like this
```
aws codecommit create-repository --repository-name my_repo --repository-description "My new repository"
```
Now get a bare clone of this template
```
git clone --bare https://github.com/mjeffe/spa-template.git tmp_repo
```
Then push it to **your** your new repo with the --all flag
```
cd my_repo_temp
git push https://git-codecommit.us-east-1.amazonaws.com/v1/repos/my_repo --all
```
Finally, clone a working copy of your new repoy
```
cd ../
git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/my_repo
```
## Install and Init

For development, you can get up and running quickly by running:
```
./setup.sh`
```
This script assumes you have the following globally installed:
```
composer
sqlite3
```

If you want to alter any of the package versions, then modify
`api/composer.json` and/or `web/package.json` before running init. 

Or you may just want to look at the setup script and run bits manually.

## Running

Open a terminal, cd to this directory, then run:
```
rundev
```

Then point your browser at `localhost:8080` and log in with one of the users
created in `api/database/seeds/UsersTableSeeder.php`, or add your own and
rebuild with `php artisan migrate:fresh --seed`.

The `rundev` script was tested on Ubuntu 18.04. It will open three additional
tabs in your terminal running the client npm server on `localhost:8080`, the
api laravel server on `localhost:8000` and a tail of the laravel log.

**NOTE** Since the development environment runs the client and api on different
ports, this causes CORS issues, so the api has cors middleware running. You
probable want to disable or modify this in production.

If you don't want to run `rundev`, you can run each manually as described below.

### API

**NOTE:!!** The API is served under `_host_/v1` NOT `_host_/api/v1`. This is
because I still haven't worked out how best to serve this project up in
production. At the moment I'm leaning towards settinp up the api under an
`/api/` subdirectory, which would effectively serve it under `_host_/api/v1`.

To run the server, open a terminal and:
```
cd api
php artisan serve
```

If you want to watch the laravel log, open another terminal and run:
```
echo > storage/logs/laravel.log
tail -f storage/logs/laravel.log
```

### WEB Client

To run the dev server, open a terminal and:
```
cd web
npm run serve
```

Point your browser at `http://localhost:8080` and log in with user
`abc@xyz.com` with password `abcxyz`

