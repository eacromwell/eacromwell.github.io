// Copy over the variables from the previous activity
// Create a variable called 'name' that holds your name in a string
let name = 'Travis Taylor';

// Create another variable called 'title' using a string template to say "<your name>'s First Plotly Chart"
let title = `${name}'s First Plotly Chart!`;

// Load data from the "salary_data.csv" file
d3.csv('https://eacromwell.github.io/data/Salary_Data.csv')
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
