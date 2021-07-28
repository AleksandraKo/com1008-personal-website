"use strict";

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var WIDTH = canvas.width;
var HEIGHT = canvas.height;
context.font = '18px Arial';

//buttons variable
var barChartButton = document.getElementById("barChart");
var pieChartButton = document.getElementById("pieChart");
var lineGraphButton = document.getElementById("lineGraph");

var colourOneButton = document.getElementById("colour1");
var colourTwoButton = document.getElementById("colour2");
var colourThreeButton = document.getElementById("colour3");


//selection of colours for the bar chart and the line graaph 
var ColourOne = ['rgb(177,216,119)', 'rgb(255,17,102)', 'rgb(140,220,218)'];
var ColourTwo = ['rgb(0,188,212)', 'rgb(76,175,80)', 'rgb(233,30,99)'];
var ColourThree = ['rgb(254,179,38)', 'rgb(232,45,138)','rgb(100,197,235)'];

//selection of colours for the pie chart 
var pieColourOne = ['rgb(177,216,119)', 'rgb(255,17,102)', 'rgb(140,220,218)', 'rgb(60,81,81)'];
var pieColourTwo = ['rgb(0,188,212)', 'rgb(76,175,80)', 'rgb(233,30,99)','rgb(255,193,7)'];
var pieColourThree = ['rgb(254,179,38)', 'rgb(232,45,138)','rgb(100,197,235)','rgb(127,88,175)'];

//initial colour scheme and graph 
var currentColourScheme = "colour 1";
var currentChart = "bar chart";


// function that draws the data as barchart
function barChart() {

  currentChart = "bar chart";

  //allows to select the colour scheme depending on selected colour
  var colours;
  if (currentColourScheme == "colour 1") {
    colours = ColourOne;
  }
  else if (currentColourScheme == "colour 2") {
    colours = ColourTwo;
  }
  else if (currentColourScheme == "colour 3") {
    colours = ColourThree;
  }
  
  //function to draw the bar
  function drawBar(context, x, y, width, height, c) {
    context.fillStyle = c;
    context.fillRect(x, HEIGHT-y-height, width, height); 
  }
    
  var EDGE = WIDTH*0.02;
  var BAR_WIDTH = (WIDTH-EDGE*2)/27;
  function drawBars(context) {

    //multiply each day by 10% of the height to make it bigger
    var ENLARGE = HEIGHT*0.1;
    
    //edges of the graph 
    var currentX = EDGE;

    //hours for each day and activity in order
    var hours = [5,2,4,6,0,2,8,1,3,9,1,1,8,0,3,5,1,2,6,1,4];
    for (var i = 0; i < hours.length; i++) {
      //creating a gap every three bars o make the data more visible
      if (i>1 && i%3 === 0) {
        currentX += BAR_WIDTH;
      }
      var height = hours[i]*ENLARGE;
      drawBar(context, currentX, EDGE*1.5, BAR_WIDTH, height, colours[i % colours.length]);
      currentX += BAR_WIDTH;
    }
  }
  

  //function to draw keys and x-axis for the bar chart
  function drawLabels() {
    
    var activities = ['uni','gym','phone'];
    var days = ['mon','tue','wed','thur','fri','sat','sun'];

    //starting points based on the canvas size
    var y = WIDTH*0.85;
    var x = y - 12;
    //making a key on the side of the canvas  
    for (var l = 0; l < activities.length; l++) {
      context.fillStyle = 'black';
      context.fillText(activities[l],y,25*l+50);
    }
    
    //the colours to match the words
    for (var s = 0; s < activities.length; s++) {
      context.fillStyle = colours[s % colours.length];
      context.fillRect(x,25*s+40,10,10);
    }

    //printing out the days on the x-axis 
    //distance between words
    var STEP = WIDTH*0.15;
    //starting point
    var START = HEIGHT*0.033;
    
    //days of the week at the bottom of the chart
    for (var i=0; i < days.length; i++) {
      context.fillStyle = 'black';
      context.fillText(days[i],STEP*i+EDGE,HEIGHT-2);
    }

    //drawing a line to separate the bars from words
    context.fillStyle = 'black';
    context.fillRect(0,HEIGHT-START,WIDTH,2);
    

  }

  //functions to draw the labels and the bar chart
  drawBars(context);
  drawLabels();

}


//function that draws a pie chart 
function pieChart() {

  currentChart = "pie chart";

  var colours;
  if (currentColourScheme == "colour 1") {
    colours = pieColourOne;
  }
  else if (currentColourScheme == "colour 2") {
    colours = pieColourTwo;
  }
  else if (currentColourScheme == "colour 3") {
    colours = pieColourThree;
  }

  function drawPie() {
    //total hours on each activity
    var uni = 48;
    var gym = 6;
    var phone = 17;
    var other = 97;
    var conversion = Math.PI * 1/84;

    //the ratio of the hours (168 in total) in radians
    var angles = [conversion * other, conversion * uni, conversion * gym, conversion * phone];
    
    //the arcs of the circle are slightly offset to make them clearer
    var offset = 10;
    var startingAngle = 0;
    var endAngle = 0;

    var centreX = WIDTH/2;
    var centreY = HEIGHT/2;

    //for loop creating the pie chart 
    //the offset values for x and y anff 
    var offsetX, offsetY, middleAngle;
    
    //arc length depending on the size of the canvas 
    var LENGTH = WIDTH*0.32;
    for(var i = 0; i < angles.length; i ++) {
      context.fillStyle = colours[i % colours.length];
      startingAngle = endAngle;
      endAngle = endAngle + angles[i];
      middleAngle = (endAngle + startingAngle) / 2;
      offsetX = Math.cos(middleAngle) * offset;
      offsetY = Math.sin(middleAngle) * offset;
      context.strokeStyle = 'black';
      context.beginPath();
      context.moveTo(centreX + offsetX, centreY + offsetY);
      context.arc(centreX + offsetX, centreY + offsetY, LENGTH, startingAngle, endAngle);
      context.lineTo(centreX + offsetX, centreY + offsetY);
      context.stroke();
      context.fill();
    }
  }

  function drawLabels() {

    //starting points based on the canvas size
    var y = WIDTH*0.85;
    var x = y - 12;
    //drawing the key for the pie chart 
    var activities = ['other','uni','gym','phone'];
    for (var l = 0; l < activities.length; l++) {
      context.fillStyle = 'black';
      context.fillText(activities[l],y,25*l+50);
    }
    for (var s = 0; s < activities.length; s++) {
      context.fillStyle = colours[s % colours.length];
      context.fillRect(x,25*s+40,10,10);
    }

  }
  
  drawPie();
  drawLabels();
  

}

//Line Graph
function lineGraph() {

  currentChart = "line graph";

  //allows to select the colour scheme depending on selected colour
  var colours;
  if (currentColourScheme == "colour 1") {
    colours = ColourOne;
  }
  else if (currentColourScheme == "colour 2") {
    colours = ColourTwo;
  }
  else if (currentColourScheme == "colour 3") {
    colours = ColourThree;
  }

  
  var START = WIDTH*0.04;
  var xGridSize = (WIDTH-START*2)/7;
  var yGridSize = (HEIGHT-START*2)/10;

  function drawAxis() {

    var hours = ['1','2','3','4','5','6','7','8','9','10'];
    var days = ['mon','tue','wed','thur','fri','sat','sun'];
    var activities = ['uni','gym','phone'];

    //x and y lines
    context.beginPath();
    context.strokeStyle = 'black';
    context.moveTo(START, START);
    context.lineTo(START, HEIGHT-START);
    context.lineTo(WIDTH-START, HEIGHT-START);
    context.stroke();

    //grid lines on x-axis
    for (var x = 0; x <= days.length; x++) {
      context.beginPath();
      context.strokeStyle = 'black';
      context.moveTo(xGridSize*x+xGridSize,HEIGHT-(START+START*0.4));
      context.lineTo(xGridSize*x+xGridSize,HEIGHT-START);
      context.stroke();
    }

    //grid lines on y-axis
    for (var y = 0; y <= hours.length; y++) {
      context.beginPath();
      context.strokeStyle = 'black';
      context.moveTo(START,START+y*yGridSize);
      context.lineTo((START+START*0.4),START+y*yGridSize);
      context.stroke();
    }


    //making a key on the side of the canvas  
    //starting points based on the canvas size
    var y = WIDTH*0.85;
    var x = y - 12;
    //drawing the key for the pie chart 
    var activities = ['uni','gym','phone'];
    for (var l = 0; l < activities.length; l++) {
      context.fillStyle = 'black';
      context.fillText(activities[l],y,25*l+50);
    }
    for (var s = 0; s < activities.length; s++) {
      context.fillStyle = colours[s % colours.length];
      context.fillRect(x,25*s+40,10,10);
    }

    //drawing labels for x-axis
    for (var i = 0; i < days.length; i++) {
      context.fillStyle = 'black';
      context.fillText(days[i],xGridSize*i+xGridSize-START/2,HEIGHT-2);
    }

    //drawing labels for y-axis
    for (var i = 0; i <= hours.length; i++) {
      context.fillStyle = 'black';
      context.fillText(i,2,HEIGHT-START-i*yGridSize);
    }


  }
  
  function drawLines() {
    var uniHours = [5,6,8,10,8,5,6];
    var gymHours = [2,0,1,1,0,1,1];
    var phoneHours = [3,2,2,1,3,2,5];
    
    
    //uniHours line

    context.beginPath();   
    context.strokeStyle = colours[0];     
    context.moveTo(xGridSize, HEIGHT - START-uniHours[0]*yGridSize);   
    for (var i = 1; i <= uniHours.length; i++) {  
      context.lineTo(START + xGridSize*i, HEIGHT - START-uniHours[i]*yGridSize);  
    }   
    context.stroke();
    

    //gymHours line
    context.beginPath();   
    context.strokeStyle = colours[1];   
    context.moveTo(xGridSize, HEIGHT - START-gymHours[0]*yGridSize);   
    for (var i = 1; i <= gymHours.length; i++) {
      context.lineTo(START + xGridSize*i, HEIGHT - START - gymHours[i]*yGridSize);  
    }    
    context.stroke();


    //phoneHours line
    context.beginPath();   
    context.strokeStyle = colours[2];   
    context.moveTo(xGridSize,HEIGHT - START - phoneHours[0]*yGridSize);    
    for (var i = 1; i <= phoneHours.length; i++) {  
      context.lineTo(START + xGridSize*i, HEIGHT - START - phoneHours[i]*yGridSize);  
    }   
    context.stroke();
 

  }
  
  drawAxis();
  drawLines();

}


//functions to switch between the different types of graphs
//when the user presses the buttons near the canvas 
function drawBarChart(evt) {
  //this prevents from touch and click working simultaneously 
  evt.preventDefault();
  context.clearRect(0, 0, WIDTH, HEIGHT);
  barChart();
}

function drawPieChart(evt) {
  evt.preventDefault();
  context.clearRect(0, 0, WIDTH, HEIGHT);
  pieChart();
}

function drawLineGraph(evt) {
  evt.preventDefault();
  context.clearRect(0, 0, WIDTH, HEIGHT);
  lineGraph();
}


//functions to update colours of each chart
function Colour1(evt) {
  evt.preventDefault();
  var colour = "colour 1";
  updateColour(evt,colour);
}
function Colour2(evt) {
  evt.preventDefault();
  var colour = "colour 2";
  updateColour(evt,colour);
}
function Colour3(evt) {
  evt.preventDefault();
  var colour = "colour 3";
  updateColour(evt,colour);
}

//function to update colours for different graph types
function updateColour(evt,colour) {
  currentColourScheme = colour;
  if (currentChart == "bar chart") {
    drawBarChart(evt);
  }
  else if (currentChart == "pie chart") {
    drawPieChart(evt);
  }
  else if (currentChart == "line graph") {
    drawLineGraph(evt);
  }
}



//event listeners for the buttons to handle touch and click
barChartButton.addEventListener('click',drawBarChart);
barChartButton.addEventListener('touchstart',drawBarChart);

pieChartButton.addEventListener('click',drawPieChart);
pieChartButton.addEventListener('touchstart',drawPieChart);

lineGraphButton.addEventListener('click',drawLineGraph);
lineGraphButton.addEventListener('touchstart',drawLineGraph);

colourOneButton.addEventListener('click',Colour1);
colourOneButton.addEventListener('touchstart',Colour1);

colourTwoButton.addEventListener('click',Colour2);
colourTwoButton.addEventListener('touchstart',Colour2);

colourThreeButton.addEventListener('click',Colour3);
colourThreeButton.addEventListener('touchstart',Colour3);


//default graph
barChart();

