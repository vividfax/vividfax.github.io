---
layout: post
title:  "Manage a bot's source code across Github and Heroku"
---
{::options parse_block_html="true" /}

<div class="col-12 offset-sm-0 col-md-8 offset-md-2 col-lg-6 offset-lg-3 vertical-center">

#### Manage a bot's source code across Github and Heroku
23 August 2020

<br>

This is a guide to managing a bot's source code across GitHub and Heroku. I use this process for my twitter bots (like [Blackletter Walk](https://twitter.com/blackletterwalk)) where [the source code is publicly available on GitHub](https://github.com/vividfax/blackletter-walk), and the bot lives on a posts from Heroku. One major difference between the source code on GitHub and the source code on Heroku is that the Heroku config file contains the twitter API keys, whereas on Github [the config file is an empty template](https://github.com/vividfax/blackletter-walk/blob/master/config.js).

First create a GitHub repository, initialise git inside the local directory, and push the source code to Github.

```
$ git init
$ git commit -am "Init"
$ git remote add origin https://github.com/username/repo_name.git
$ git push -u origin master
```

Then create a new branch with the name 'heroku', and add your config keys to your bot in the config.js file.

```
$ git checkout -b heroku
$ git commit -am "Add API keys"
```

Then create a new Heroku app and push the new heroku branch to Heroku.

```
$ heroku git:remote -a app_name
$ git push heroku heroku:master
```

When I refactor or change the bot's source code I work on the master branch and merge the changes into the Heroku branch. I first make my changes on the master branch, commit them, and push them to GitHub. I then switch into the heroku branch, merge in the changes, and push to Heroku. Then switch back into the master branch if you want to continue working on it.

```
$ git commit -am "Refactor"
$ git push origin master
$ git checkout heroku
$ git merge master
$ git push heroku heroku:master
```

</div>
