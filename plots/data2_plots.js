// Define the dataset options and store as constants
const datasetOptions2 = {
  data2a: data2,
  data2b: data3,
};

// Get the dataset selector element
const datasetSelector2 = document.getElementById("datasetSelector2");

// Add event listener to the dataset selector
datasetSelector2.addEventListener("change", function () {
  const selectedDataset2 = datasetSelector2.value;
  updatePlot2(selectedDataset2);
});

// Function to update the plot based on the selected dataset
async function updatePlot2(selectedDataset2) {
  const dataset2 = datasetOptions2[selectedDataset2];

  // Sort the dataset
  await sortDataset2(dataset2, selectedDataset2);

  const data2trace1 = {
    x: dataset2.map((row2) => row2.A),
    y: dataset2.map((row2) => row2.B),
    name: "Male",
    type: "scatter",
    mode: "lines",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: '25b7df',
    },
    line: {
        width: 5,
    },
  };

  const data2trace2 = {
    x: dataset2.map((row2) => row2.A),
    y: dataset2.map((row2) => row2.C),
    name: "Female",
    type: "scatter",
    mode: "lines",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: '90ee90',
    },
    line: {
        width: 5,
    },
  };


  // Data trace array
  const data2traceData = [data2trace1, data2trace2];

  {
    layout2 = {
      height: 600,
      width: 1100,
      showlegend: true,
      legend: {
        x: 0.40,
        y: 1.05,
        orientation: 'h'
      },
      title: "<span style='font-size: 20px'><b>Salaries by Age (Male and Female)</b></span><br><span style='font-size: 12px'>Click the boxes below to toggle Male or Female - Hover data for more info</span>",
      yaxis: {
        tickformat: "$", // Set tickformat to "$" for dollar sign
      },
      xaxis: {
        dtick: "M60",
        range: [22, 60],
        tickangle: -45, // Set the x-axis tick labels tilt to 45 degrees
        tickfont: {
          family: 'Arial Black, sans-serif',
          size: 12,
          color: 'black',
          weight: 'bold'
        }
      },
      margin: {
        b: 200, // Increase the bottom margin to create more space for tick labels
        l: 150, // Increase the left margin to create more space for tick labels
        r: 150, // Increase the left margin to create more space for tick labels
      },
    };
  }

  // Render the plot with the updated data2traceData and layout
  Plotly.newPlot("plot2", data2traceData, layout2, { displayModeBar: false }, { responsive: true });
}

// Function to sort the dataset based on the selected dataset
async function sortDataset2(dataset2, selectedDataset2) {
  if (selectedDataset2 === "data2a") {
  } else if (selectedDataset2 === "data2b") {
  }
}

// Initial plot rendering
updatePlot2("data2a");