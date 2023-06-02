
let title = "Group 3 Project 3";

// Load data from the "salary_data.csv" file
d3.csv('https://eacromwell.github.io/data/salary_data.csv')
  .then(data => {
    // Extract data from the CSV-like object
    let x = data.map(d => d.job_title);
    let y = data.map(d => +d.salary);

    // Assign `x` and `y` values for the Plotly trace object
    let trace1 = {
      x: x,
      y: y,
      type: 'bar'
    };

    // Leave the code below unchanged
    let chartData = [trace1];

    let layout = {
      title: title,
      plot_bgcolor: 'lightblue'
    };

    Plotly.newPlot("plot", chartData, layout);
  })
  .catch(error => console.log('Error loading CSV:', error));
