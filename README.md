# web-coding-challenge
Github API Service
# web-coding-challenge
Github API Service
Github API service is a user friendly service developed to search for users on GitHub. In general GitHub users can be searched by a user if he/she has an account on GitHub. This service helps users who are not actually on GitHub but still want to search for a particular user information on GitHub. It also provides the GitHub link of the searched user.

High Level Architecture Design:

The Web application is hosted in Amazon AWS. It makes a http call to the GitHub API to retrive the search results.
(Architecture diagram is shown in the architecture.doc file)
 

Application description:

GitHub API Service is a single page reponsive application used for searching GitHub users.
How to Use??
1) Users are supposed to enter the useraname in the input box. 2) If the lenght of the username is graeter than three it automatically retrieves the user deatils and folloers list if present. 
3) If the length of the username is less than 3, user has to click the search button to retrieve the results. This is to reduce the number of API calls for single letter users. 
4) Once the user details are retrieved, followers list is shown as a table containing the followers github avatar and gitHub handle. 
5) More button is shown which can be clicked to retrieve more number of followers. Because GitHub provides a payload of only 30 followers per page.
Technologies Used:
1) Front End Framework - Angular Js 1.5.6
2) GitHub API
3) Testing - Karma Jasmine framework 
4) Languages - HTML5, CSS3, JavaScript
5) Bootstrap for responsive application

Why Angular??
As it is a single page application, Angular Js is used for develoeping the application because of its expanded directives, in built MVC design patterns. It provides two way data binding features, which immediatedly upadtes the value in the view from the model or vice versa. In this application, it is important to retrieve the user details as soon as the user enters the user name in the input. Also, It makes testing simple with the support of jasmine framework for developing unit test cases.

Application Modules:
  
app.js - It defines the core angular application module githubApp.
index.html - entry point for the application.
View1.html - It is loaded as soon as the app is loaded in the browser.
controllers.js - (githubCtrl)controller which instantiates HTTP call when there the user input changes or when the user clicks search button.
services.js - It defines a service GithubAPIService which is triggered using the controller for making http call.
app.css - css styling for the spinner
bootsrap.css - styling for responsive application
services-spec.js - Unit test cases written to perform testing for the GithubAPIService using jasmine framework. Two test cases are written to test the HTTP service used.

Testing
Unit test cases are written to test the GithubAPIService which uses teh http service to make HTTP requests. It tests the response received from the request.

Error Logging
Error logging is done using Angular Log provider service for logging the info and errors if any while making http requets.

Deployment
The web application hosted inAmazon AWS at port 8000 on an Ubuntu server.

Experience
I have experience working on Angular 2.0 as I'm currently working on Ionic 2.0 for my course project. But I don't have much experience working on Angualr 1.x. I took this opportunity to get to work on Angular 1.x as I'm always in for learning new technologies.

Live Demo:  http://ec2-35-166-242-55.us-west-2.compute.amazonaws.com:8000
