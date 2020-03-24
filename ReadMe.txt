
::How to Use this app::

1. After Download the project

2. goto the project folder and open console

3. type in console npm i command for installing all need nodepackages

4. type in console npm start for start application

::Code Explanation::

Four libaries are use

axios - get data from randomuser api
cors - cors for avoiding cross broweser error
express - Framwork to creating routing 
mongoose - Database to store data

//Some File and Folder Explanation//

::main file our application::

app.js 

::startups::

contains three of files are there

1. db - conecting to mongodb Database

2. route - routing to user routes

3. seed - get all data from randomuser

::Models::

One file userModel save doctype

::controllers::

It contains userController file to write business logic of our application

::routes::
It contain one file user for routing of our apis


::Flow of Project::

When start project seed.js file get randomuser data store in to mongoDb Database
seeding....

simply creating api get it all report as per assingment task with help of mongodb query

::API's TO get data::

im using local machine

http://localhost:5000/api/user/getReports

hit that api to get report


::Query are Use::

$bucket

$facet


::output of my localmachine::

{"msg":"report generated successfully.",
"reports":[{"male":[{"_id":0,"count":6},    //0-30 male have record found 
{"_id":30,"count":12},                      //30-50 male have record found 
{"_id":"50 and above","count":8}],          //50 and above male have record found

"female":[{"_id":0,"count":4},              //0-30 female have record found
{"_id":30,"count":10},                      //30-50 female have record found     
{"_id":"50 and above","count":11}]}]}       //50 and above female have record found



Thank You....