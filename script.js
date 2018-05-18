  console.log("let's build some charts!")


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'bar']});

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
                 'height':350,
                'legend':'left',
                'is3D':true};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}

function drawChart2() {

  var data = google.visualization.arrayToDataTable([
    ['Topping', 'Slices'],
    ['Pepperoni', 2],
    ['Tomato', 1],
    ['Olives', 1],
    ['Basil', 3],
    ['Asiago', 1]
  ]);

  var options = {
    chart: {
      title: 'What Kinds of Pizza I Ate Last Night',
    },
   'width':800,
   'height':300,
    bars: 'horizontal' // Required for Material Bar Charts.
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div2'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
