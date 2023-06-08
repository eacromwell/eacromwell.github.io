console.log(mfdata);

// mfdata.sort((a, b) => a.Female - b.Female);

// Trace for the datasets
const trace1 = {
  x: mfdata.map(row => row.job_title),
  y: mfdata.map(row => row.Male),
  name: "Male",
  type: "bar"
};

const trace2 = {
  x: mfdata.map(row => row.job_title),
  y: mfdata.map(row => row.Female),
  name: "Female",
  type: "bar",
  marker: {
    color: "0CD10C"
  }
};

// Data trace array
const traceData = [trace1, trace2];

// Apply the group barmode to the layout
const layout = {
  title: "Title vs Salary",
  yaxis: {
    tickformat: "$" // Set tickformat to "$" for dollar sign
  },
  xaxis: {
    tickangle: -45 // Set the x-axis tick labels tilt to 45 degrees
  },
  margin: {
    b: 200, // Increase the left margin to create more space for tick labels
    l: 100 // Increase the left margin to create more space for tick labels
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);

