console.log("let's build some charts!")


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// for 2nd chart, 
// 1. Set a callback for it.
// 2. Have the callback function for it.
// 3. Be sure all callback functions have different names.
// 4. Be sure all callback functions use different divs to draw in. 
// 5. Add a new div to HTML for each chart.

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart1() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Pepperoni', 2],
    ['Tomato', 1],
    ['Olives', 1],
    ['Basil', 3],
    ['Asiago', 1]
  ]);

  // Set chart options
  var options = {'title':'What Kinds of Pizza I Ate Last Night',
                 'width':500,
                 'height':500,
                'legend':'left',
                'is3D':true};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}

function drawChart2() {

  // Create the data table.
  var data = new google.visualization.DataTable();
    data.addColumn('string', 'Company');
    data.addColumn('number', 'Projects');
    data.addRows([
      ['Microsoft', 19],
      ['IBM', 6],
      ['Wizards of the Coast', 2],
      ['Amazon', 1]
    ]);

  // Set chart options
  var options = {'title':'How Many Projects I Did',
                 'width':400,
                 'height':300,
                 'pieStartAngle': 115,
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}
