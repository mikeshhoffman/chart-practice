  console.log("let's build some charts!")


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'bar', 'timeline']});
// for 2nd chart, 
// 1. Set a callback for it.
// 2. Have the callback function for it.
// 3. Be sure all callback functions have different names.
// 4. Be sure all callback functions use different divs to draw in. 
// 5. Add a new div to HTML for each chart.

// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawChart1);
//google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawStudyTimeline);
google.charts.setOnLoadCallback(drawStudyBar);
google.charts.setOnLoadCallback(drawDonationChart);

function drawStudyTimeline(){
  var container = document.getElementById('study-timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Phase of Study' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
//  1. From Sept of 2018 to May of 2019, students will complete general education requirements.
    [ 'General Ed', new Date(2018, 8, 1), new Date(2019, 4, 1) ],
//  2. From June of 2019 to Aug of 2019, students will choose their major.
    [ 'Choose Mjor', new Date(2019, 5, 1),  new Date(2019, 7, 1) ],
//  3. From Sept of 2019 to May of 2020, students will complete two courses in their preferred area of study, one per semester.
    [ '2 Mjr Clss', new Date(2019, 8, 1),  new Date(2020, 4, 1) ],
//  4. From Sept of 2020 to May of 2022, students will complete twelve courses in their preferred area of study, three per semester.
    [ '12 Mjr Clss', new Date(2020, 8, 1),  new Date(2022, 4, 1) ]
  ]);

  chart.draw(dataTable);
}

function drawStudyBar(){
//study-bar
}

function drawDonationChart(){
  console.log("hello")
  var data = google.visualization.arrayToDataTable([
    ['Cost Center', 'Amount'],
    ['Administrative', 4],
    ['Fundraising', 16],
    ['Youth Programs', 36],
    ['Adult Program', 44],
  ]);
  
  var options = {
    title: 'My Daily Activities',
    'width':700,
    'height':500,
    pieHole: 0.4,
    slices: {
      0: { color: '#8AD1C2' },
      1: { color: '#9F8AD1' },
      2: { color: '#D18A99' },
      3: { color: '#BCD18A' }
    },
    pieStartAngle: 85,
    'backgroundColor.fill': '#0000FF',
    //  'legend': 'top'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donation-chart'));
  chart.draw(data, options);
}

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
