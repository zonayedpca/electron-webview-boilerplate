# Electron Webview Boilerplate
Quickly turn your Website, Web Application, Webpage into a usable Cross-platform, downloadable Desktop Application. Zero Configuration needed.

## Requirements:
- Travis CI Account(Make sure you allow Travis CI to build your respective repo)
- GitHub access token(to be set as an environment variable in TravisCI)

## Quick Start(Really Quick)
It's a template repo, so you can just simply make it yours by clicking on 'Use this template':
![usethistemplate](https://user-images.githubusercontent.com/18544717/82370696-cd37fa80-9a3a-11ea-839f-3d962305f503.gif)
Get your personal [GitHub token](https://github.com/settings/tokens) from here with the scope of **repo**:
![githubaccesstoken](https://user-images.githubusercontent.com/18544717/82371461-0cb31680-9a3c-11ea-8406-1e590c71565f.gif)
Login to [TravisCI](https://travis-ci.org/) using your GitHub account and Set your GitHub token as Environment variable ```GH_TOKEN``` and trigger a custom build:
![triggercustombuild](https://user-images.githubusercontent.com/18544717/82372327-a0391700-9a3d-11ea-9237-efe50e19b897.gif)
Once your build finishes without any error, you will be able to find a draft release of your App in Your GitHub Release. You can add some description and release it publicly.  
## If you like things manually...
Clone this repo:
```
git clone https://github.com/zonayedpca/electron-webview-boilerplate.git
```

Get inside of the cloned project:
```
cd electron-webview-boilerplate
```

Remove the remote origin 
```
git  remote remove origin 
```

Create a new GitHub repo for yourself and set the ```remote origin``` as your GitHub repo:
```
git remote add origin ***YOUR_GITHUB_REPO***
```

Now push your project:
```
git push origin master
```

Get back to Travis CI and Find your repository. Then Go to More Options > Settings and Add your GitHub Personal Access Token(with scope of repo) as an Environment Variable ```GH_TOKEN```. If everything is alright, then you can Trigger a custom build from Travis CI. Go to **More Options > Trigger build > Trigger Custom Build** Once everything finished, you will get a see a draft release of your app into your GitHub repo. 

## Configuration
You can
- Add ```.html``` file as your app's UI
- Or you can add your website to be shown inside your App
- You can set up environment variables inside Travis CI to configure your App

### Environment Variables
You can utilize these environment variable inside TravisCI(Same as setting ```GH_TOKEN``` that we have done just now):
**CLIENT**: If you want to show your website inside the app. Simply put ```CLIENT``` environment variable with your website URL as value. Example: Key: ```CLIENT```, Value: ```https://zonayed.me```
**HEIGHT**: To set the height of your app in px. Example: Key:```HEIGHT```, Value: ```300```
**WIDTH**: To set the width of your app in px. Example: Key:```WIDTH```, Value: ```300```

## Roadmap
- [] Add More Configuration
- [] Automate the whole process
