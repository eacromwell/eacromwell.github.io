// Define the dataset options and store as constants
const datasetOptions1 = {
  data1a: data1,
  data1b: data1,
  data1c: data1,
};

// Get the dataset selector element
const datasetSelector1 = document.getElementById("datasetSelector1");

// Add event listener to the dataset selector
datasetSelector1.addEventListener("change", function () {
  const selectedDataset1 = datasetSelector1.value;
  updatePlot1(selectedDataset1);
});

// Function to update the plot based on the selected dataset
async function updatePlot1(selectedDataset1) {
  const dataset1 = datasetOptions1[selectedDataset1];

  // Sort the dataset
  await sortDataset1(dataset1, selectedDataset1);

  const data1trace1 = {
    x: dataset1.map((row1) => row1.A),
    y: dataset1.map((row1) => row1.B),
    name: "Male",
    type: "bar",
    marker: {
      color: '25b7df',
    },
  };

  const data1trace2 = {
    x: dataset1.map((row1) => row1.A),
    y: dataset1.map((row1) => row1.C),
    name: "Female",
    type: "bar",
    marker: {
      color: '90ee90',
    },
  };


  // Data trace array
  const data1traceData = [data1trace1, data1trace2];

  {
    layout1 = {
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
          size: 12,
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
  Plotly.newPlot("plot1", data1traceData, layout1, { displayModeBar: false }, { responsive: true });
}

// Function to sort the dataset based on the selected dataset
async function sortDataset1(dataset1, selectedDataset1) {
  if (selectedDataset1 === "data1a") {
    dataset1.sort((a1, b1) => a1.A.localeCompare(b1.A));
  } else if (selectedDataset1 === "data1b") {
    dataset1.sort((a1, b1) => a1.B - b1.B);
  } else if (selectedDataset1 === "data1c") {
    dataset1.sort((a1, b1) => a1.C - b1.C);
  }
}

// Initial plot rendering
updatePlot1("data1a");

// //
// marker: {
//   color: dataset1.map((row1) => row1.C),
//   colorscale: [
//   ['0.0', 'c3f6c3'],
//   ['1.0', '90ee90'],
//   ],
// },