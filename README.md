# ReduxTest
Interested in learning [Redux](https://www.udemy.com/react-redux/)?

## This is just a Redux State application that uses only redux to increase and decrease time of a user a user can click on INCREASE to increase time and DECREASE to decrease time an user can also change session by clicking on either of DAYS, HOURS, MINUTES or SECONDS

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/elraphty/ResoltzTest.git
> cd ResoltzTest
> npm install
> npm start
> then navigate to localhost:8080 on your browser which is the default webpack development port
```

#### Not Familiar with Git?
Click [here](https://github.com/elraphty/ResoltzTest/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> edit .babelrc file and remove ["@babel/env", "@babel/react"]
> so your .babelrc file should look like this

    {
        "presets": ["react", "es2015", "stage-1"]
    }

> npm install
> npm start
> then navigate to localhost:8080 on your browser which is the default webpack development port
```

#### How it Works
    - to change the session from default DAYS click on either SECONDS, MINUTES, HOURS
    - To increase the time click on INCREASE
    - to decrease the time click on DECREASE
    - Note the time is increased depending on the current session so if the current session is days increase will increase the time by 1 day and decrease will decrease the time by 1 day and so forth

#### To Run Test
```
> edit .babelrc file and remove ["react", "es2015", "stage-1"]
> so your .babelrc file should look like this

    {
        "presets": ["@babel/env", "@babel/react"]
    }
```
