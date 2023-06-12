

// Define the dataset options and store as constants

(function(){

const datasetOptions = {
  data1a: data1,
  data1b: data1,
  data1c: data1,
};

// Get the dataset selector element
const datasetSelector = document.getElementById("datasetSelector1");

// Add event listener to the dataset selector
datasetSelector.addEventListener("change", function () {
  const selectedDataset = datasetSelector.value;
  updatePlot(selectedDataset);
});

// Function to update the plot based on the selected dataset
async function updatePlot(selectedDataset) {
  const dataset = datasetOptions[selectedDataset];

  // Sort the dataset
  await sortDataset(dataset, selectedDataset);

  const trace1 = {
    x: dataset.map((row1) => row1.A),
    y: dataset.map((row1) => row1.B),
    name: "Male",
    type: "bar",
    marker: {
      color: '25b7df',
    },
  };

  const trace2 = {
    x: dataset.map((row1) => row1.A),
    y: dataset.map((row1) => row1.C),
    name: "Female",
    type: "bar",
    marker: {
      color: '90ee90',
    },
  };


  // Data trace array
  const trace = [trace1, trace2];

  {
    layout = {
      height: 600,
      width: 1100,
      showlegend: true,
      legend: {
        x: 0.35,
        y: 1.05,
        orientation: 'h'
      },
      title: "<span style='font-size: 20px'><b>Salaries by Job Title (Male and Female)</b></span><br><span style='font-size: 12px'>Click the boxes below to toggle Male or Female - Hover data for more info</span>",
      yaxis: {
        tickformat: "$", // Set tickformat to "$" for dollar sign
      },
      xaxis: {
        tickangle: -45,
        tickfont: {
          family: 'Arial Black, sans-serif',
          size: 9,
          color: 'black',
          weight: 'bold'
        }
      },
      margin: {
        b: 200, // Increase the bottom margin to create more space for tick labels
        l: 150, // Increase the left margin to create more space for tick labels
      },
    };
  }

  // Render the plot with the updated traceData and layout
  Plotly.newPlot("plot1", trace, layout, { displayModeBar: false }, { responsive: true });
}

// Function to sort the dataset based on the selected dataset
async function sortDataset(dataset, selectedDataset) {
  if (selectedDataset === "data1a") {
    dataset.sort((a, b) => a.A.localeCompare(b.A));
  } else if (selectedDataset === "data1b") {
    dataset.sort((a, b) => a.B - b.B);
  } else if (selectedDataset === "data1c") {
    dataset.sort((a, b) => a.C - b.C);
  }
}

// Initial plot rendering
updatePlot("data1a");


})();
(function(){

// Define the dataset options and store as constants
const datasetOptions = {
  data2a: data2,
  data2b: data3,
};

// Get the dataset selector element
const datasetSelector = document.getElementById("datasetSelector2");

// Add event listener to the dataset selector
datasetSelector.addEventListener("change", function () {
  const selectedDataset = datasetSelector.value;
  updatePlot(selectedDataset);
});

// Function to update the plot based on the selected dataset
async function updatePlot(selectedDataset) {
  const dataset = datasetOptions[selectedDataset];

  // Sort the dataset
  await sortDataset(dataset, selectedDataset);

  const trace1 = {
    x: dataset.map((row2) => row2.A),
    y: dataset.map((row2) => row2.B),
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

  const trace2 = {
    x: dataset.map((row2) => row2.A),
    y: dataset.map((row2) => row2.C),
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
  const trace = [trace1, trace2];

  {
    layout = {
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

  // Render the plot with the updated trace and layout
  Plotly.newPlot("plot2", trace, layout, { displayModeBar: false }, { responsive: true });
}

// Function to sort the dataset based on the selected dataset
async function sortDataset(dataset, selectedDataset) {
  if (selectedDataset === "data2a") {
  } else if (selectedDataset === "data2b") {
  }
}

// Initial plot rendering
updatePlot("data2a");

})();
// //
// marker: {
//   color: dataset.map((row1) => row1.C),
//   colorscale: [
//   ['0.0', 'c3f6c3'],
//   ['1.0', '90ee90'],
//   ],
// },