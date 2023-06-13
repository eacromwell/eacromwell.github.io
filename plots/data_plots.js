

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
    x: dataset.map((row) => row.Job_Title),
    y: dataset.map((row) => row.Male),
    name: "Male",
    type: "bar",
    marker: {
      color: '25b7df',
    },
  };

  const trace2 = {
    x: dataset.map((row) => row.Job_Title),
    y: dataset.map((row) => row.Female),
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
        orientation: 'h',
      },
      title: "<span style='font-size: 20px'><b>Salaries by Job Title (Male and Female)</b></span>",
      yaxis: {
        dtick: 20000,
        tickformat: '$,.0f'
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
        b: 200,
        l: 150,
      },
    };
  }

  // Render the plot with the updated traceData and layout
  Plotly.newPlot("plot1", trace, layout, { displayModeBar: false }, { responsive: true });
}

// Function to sort the dataset based on the selected dataset
async function sortDataset(dataset, selectedDataset) {
  if (selectedDataset === "data1a") {
    dataset.sort((a, b) => a.Job_Title.localeCompare(b.Job_Title));
  } else if (selectedDataset === "data1b") {
    dataset.sort((a, b) => a.Female - b.Female);
  } else if (selectedDataset === "data1c") {
    dataset.sort((a, b) => a.Male - b.Male);
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
    x: dataset.map((row) => row.Age),
    y: dataset.map((row) => row.Male),
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
    x: dataset.map((row) => row.Age),
    y: dataset.map((row) => row.Female),
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

  const trace3 = {
    x: dataset.map((row) => row.Age),
    y: dataset.map((row) => row.Total_Salary),
    name: "Overall",
    type: "scatter",
    mode: "lines",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: 'b2a1dd',
    },
    line: {
        width: 5,
    },
  };

  // Scatter traces
  const trace4 = {
    x: dataset.map((row) => row.Age),
    y: dataset.map((row) => row.Male),
    name: "Male",
    type: "scatter",
    mode: "markers",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: '25b7df',
      symbol: 'circle',
      opacity: 0.75, // Set marker opacity to 75%
      size: '10',
    },
  };

  const trace5 = {
    x: dataset.map((row) => row.Age),
    y: dataset.map((row) => row.Female),
    name: "Female",
    type: "scatter",
    mode: "markers",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: '90ee90',
      symbol: 'circle',
      opacity: 0.50, // Set marker opacity to 75%
      size: '10'
    },
  };

    const trace6 = {
    x: dataset.map((row) => row.Age),
    y: dataset.map((row) => row.Overall),
    name: "Overall",
    type: "scatter",
    mode: "markers",
    connectgaps: true, // Enable connecting gaps with lines
    trendline: 'ols', 
    marker: {
      color: 'b2a1dd',
      symbol: 'circle',
      opacity: 0.50, // Set marker opacity to 75%
      size: '15',
    },
  };


  // Data trace array
  const traceline2 = [trace1, trace2, trace3];
  const tracescatter2 = [trace4, trace5, trace6];

  {
    layout = {
      height: 600,
      width: 1100,
      showlegend: true,
      legend: {
        x: 0.30,
        y: 1.05,
        orientation: 'h'
      },
      title: selectedDataset === "data2a" ? "<span style='font-size: 20px'><b>Salaries by Age - Line Graph (Male, Female and Overall)</b></span>" : "<span style='font-size: 20px'><b>Salaries by Age - Scatter Plot (Male, Female and Overall)</b></span>" ,
      yaxis: {
        tickformat: '$,.0f',
        dtick: 20000,
        range: [1000, 240000],
      },
      xaxis: {
        dtick: "M60",
        range: [20, 60],
        tickangle: -45, // Set the x-axis tick labels tilt to 45 degrees
        tickfont: {
          family: 'Arial Black, sans-serif',
          size: 12,
          color: 'black',
          weight: 'bold'
        }
      },
      margin: {
        l: 150, // Increase the left margin to create more space for tick labels
        r: 150, // Increase the left margin to create more space for tick labels
      },
    };
  }

  const trace = selectedDataset === "data2a" ? traceline2 : tracescatter2;

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
(function(){

// Define the dataset options and store as constants
const datasetOptions = {
  data3a: data4,
  data3b: data_highschool,
  data3c: data_bachelors,
  data3d: data_masters,
  data3e: data_phd,
};

// Get the dataset selector element
const datasetSelector = document.getElementById("datasetSelector3");

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
    x: dataset.map((row) => row.Education),
    y: dataset.map((row) => row.Male),
    name: "Male",
    type: "bar",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: '25b7df',
    },
    line: {
        width: 5,
    },
  };

  const trace2 = {
    x: dataset.map((row) => row.Education),
    y: dataset.map((row) => row.Female),
    name: "Female",
    type: "bar",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: '90ee90',
    },
    line: {
        width: 5,
    },
  };

  const trace3 = {
    x: dataset.map((row) => row.Education),
    y: dataset.map((row) => row.Overall),
    name: "Overall",
    type: "bar",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: 'b2a1dd',
    },
    line: {
        width: 5,
    },
  };

  // Scatter traces
  const trace4 = {
    x: dataset.map((row) => row.Age),
    y: dataset.map((row) => row.Male),
    name: "Male",
    type: "scatter",
    mode: "markers",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: '25b7df',
      symbol: 'circle',
      opacity: 0.75, // Set marker opacity to 75%
      size: '10',
    },
  };

  const trace5 = {
    x: dataset.map((row) => row.Age),
    y: dataset.map((row) => row.Female),
    name: "Female",
    type: "scatter",
    mode: "markers",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: '90ee90',
      symbol: 'circle',
      opacity: 0.50, // Set marker opacity to 75%
      size: '10'
    },
  };

    const trace6 = {
    x: dataset.map((row) => row.Age_Overall),
    y: dataset.map((row) => row.Overall),
    name: "Overall",
    type: "scatter",
    mode: "markers",
    connectgaps: true, // Enable connecting gaps with lines
    trendline: 'ols', 
    marker: {
      color: 'b2a1dd',
      symbol: 'circle',
      opacity: 1, // Set marker opacity to 75%
      size: '15',
    },
  };


  // Data trace array
  const traceline3 = [trace1, trace2, trace3];
  const tracescatter3 = [trace4, trace5, trace6];

  {
    layout = {
      height: 600,
      width: 1100,
      showlegend: true,
      legend: {
        x: 0.38,
        y: 1.05,
        orientation: 'h'
      },
      title:
        selectedDataset === "data3a" ? "<span style='font-size: 20px'><b>Salaries by Education - Bar Chart</b></span>" : 
        selectedDataset === "data3b" ? "<span style='font-size: 20px'><b>Salaries for High School Only (by Age) - Scatter Plot</b></span>" :
        selectedDataset === "data3c" ? "<span style='font-size: 20px'><b>Salaries for Bachelor's Only (by Age) - Scatter Plot</b></span>" :
        selectedDataset === "data3d" ? "<span style='font-size: 20px'><b>Salaries for Master's Only (by Age) - Scatter Plot</b></span>" :
        selectedDataset === "data3e" ? "<span style='font-size: 20px'><b>Salaries for PhD Only by (by Age) - Scatter Plot</b></span>" :
        "<span style='font-size: 20px'><b>Salaries by Education - Bar Chart</b></span>",
      yaxis: {
        tickformat: '$,.0f', // Set tickformat to "$" for dollar sign
        dtick: 20000,
        range: [20000, 240000]
      },
      xaxis: {
        tickangle: -45, // Set the x-axis tick labels tilt to 45 degrees
        tickfont: {
          family: 'Arial Black, sans-serif',
          size: 12,
          color: 'black',
          weight: 'bold'
        }
      },
      margin: {
        l: 150, // Increase the left margin to create more space for tick labels
        r: 150, // Increase the left margin to create more space for tick labels
      },
    };
  }
  
  const trace = selectedDataset === "data3a" ? traceline3 : tracescatter3;

  // Render the plot with the updated trace and layout
  Plotly.newPlot("plot3", trace, layout, { displayModeBar: false }, { responsive: true });
}

// Function to sort the dataset based on the selected dataset
async function sortDataset(dataset, selectedDataset) {
  if (selectedDataset === "data3a") {
  } else if (selectedDataset === "data3b") {
  }
}

// Initial plot rendering
updatePlot("data3a");

})();

// Plot 4

(function(){

  // Define the dataset options and store as constants
  const datasetOptions = {
    data4a: data6,
    data4b: data7,
  };
  
  // Get the dataset selector element
  const datasetSelector = document.getElementById("datasetSelector4");
  
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
      x: dataset.map((row) => row.Experience),
      y: dataset.map((row) => row.Male),
      name: "Male",
      type: "bar",
      connectgaps: true, // Enable connecting gaps with lines
      marker: {
        color: '25b7df',
      },
      line: {
          width: 5,
      },
    };
  
    const trace2 = {
      x: dataset.map((row) => row.Experience),
      y: dataset.map((row) => row.Female),
      name: "Female",
      type: "bar",
      connectgaps: true, // Enable connecting gaps with lines
      marker: {
        color: '90ee90',
      },
      line: {
          width: 5,
      },
    };
    
    const trace3 = {
      x: dataset.map((row) => row.Experience),
      y: dataset.map((row) => row.Overall),
      name: "Overall",
      type: "bar",
      connectgaps: true, // Enable connecting gaps with lines
      marker: {
        color: 'b2a1dd',
      },
      line: {
          width: 5,
      },
    };

    
  // Scatter traces
  const trace4 = {
    x: dataset.map((row) => row.Years_Experience),
    y: dataset.map((row) => row.Male),
    name: "Male",
    type: "scatter",
    mode: "markers",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: '25b7df',
      symbol: 'circle',
      opacity: 0.75, // Set marker opacity to 75%
      size: '10',
    },
  };

  const trace5 = {
    x: dataset.map((row) => row.Years_Experience),
    y: dataset.map((row) => row.Female),
    name: "Female",
    type: "scatter",
    mode: "markers",
    connectgaps: true, // Enable connecting gaps with lines
    marker: {
      color: '90ee90',
      symbol: 'circle',
      opacity: 0.50, // Set marker opacity to 75%
      size: '10'
    },
  };

    const trace6 = {
    x: dataset.map((row) => row.Years_Experience),
    y: dataset.map((row) => row.Overall),
    name: "Overall",
    type: "scatter",
    mode: "markers",
    connectgaps: true, // Enable connecting gaps with lines
    trendline: 'ols', 
    marker: {
      color: 'b2a1dd',
      symbol: 'circle',
      opacity: 0.75, // Set marker opacity to 75%
      size: '15',
    },
  };

    
      // Data trace array
    const traceline4 = [trace1, trace2, trace3];
    const tracescatter4 = [trace4, trace5, trace6];
  
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
        title: selectedDataset === "data4a" ? "<span style='font-size: 20px'><b>Salary by Years of Experience - Bar Chart (Male, Female and Overall)</b></span>" : "<span style='font-size: 20px'><b>Salary by Years of Experience - Scatter Chart (Male, Female and Overall)</b></span>" ,
        yaxis: {
          tickformat: '$,.0f', // Set tickformat to "$" for dollar sign
          range: [1000, 240000],
          dtick: 20000
        },
        xaxis: {
          tickangle: -45, // Set the x-axis tick labels tilt to 45 degrees
          tickfont: {
            family: 'Arial Black, sans-serif',
            size: 12,
            color: 'black',
            weight: 'bold'
          }
        },
        margin: {
          l: 150, // Increase the left margin to create more space for tick labels
          r: 150, // Increase the left margin to create more space for tick labels
        },
      };
    }
  
    const trace = selectedDataset === "data4a" ? traceline4 : tracescatter4;

    // Render the plot with the updated trace and layout
    Plotly.newPlot("plot4", trace, layout, { displayModeBar: false }, { responsive: true });
  }
  
  // Function to sort the dataset based on the selected dataset
  async function sortDataset(dataset, selectedDataset) {
    if (selectedDataset === "data4a") {
    } else if (selectedDataset === "data4b") {
    }
  }
  
  // Initial plot rendering
  updatePlot("data4a");
  
  })();

  // Plot 5
  
  (function(){
  
    // Define the dataset options and store as constants
    const datasetOptions = {
      data5a: data8,
      data5b: data8,
    };
    
    // Get the dataset selector element
    const datasetSelector = document.getElementById("datasetSelector5");
    
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
        x: dataset.map((row) => row.Titles),
        y: selectedDataset === "data5a" ? dataset.map((row) => row.Male_Increase) : dataset.map((row) => row.Male_Percentage),
        name: "Male",
        type: "bar",
        connectgaps: true, // Enable connecting gaps with lines
        marker: {
          color: '25b7df',
        },
        line: {
            width: 5,
        },
      };
    
      const trace2 = {
        x: dataset.map((row) => row.Titles),
        y: selectedDataset === "data5a" ? dataset.map((row) => row.Female_Increase) : dataset.map((row) => row.Female_Percentage),
        name: "Female",
        type: "bar",
        connectgaps: true, // Enable connecting gaps with lines
        marker: {
          color: '90ee90',
        },
        line: {
            width: 5,
        },
      };
    
      const trace3 = {
        x: dataset.map((row) => row.Titles),
        y: selectedDataset === "data5a" ? dataset.map((row) => row.Overall_Increase) : dataset.map((row) => row.Overall_Percentage),
        name: "Overall",
        type: "bar",
        connectgaps: true, // Enable connecting gaps with lines
        marker: {
          color: 'b2a1dd',
        },
        line: {
            width: 5,
        },
      };
    
    
      // Data trace array
      const trace = [trace1, trace2, trace3];
    
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
          title: selectedDataset === "data5a" ? "<span style='font-size: 20px'><b>Salary Increase Amount for Junior to Senior Roles (Male, Female and Overall)</b></span>" : "<span style='font-size: 20px'><b>Salary Increase Percentage for Junior to Senior Roles (Male, Female and Overall)</b></span>" ,
          yaxis: {
            tickformat: selectedDataset === "data5a" ? '$,.0f' : '.2%', // Set tickformat based on the selected dataset
          },
          xaxis: {
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
      Plotly.newPlot("plot5", trace, layout, { displayModeBar: false }, { responsive: true });
    }
    
    // Function to sort the dataset based on the selected dataset
    async function sortDataset(dataset, selectedDataset) {
      if (selectedDataset === "data5a") {
      } else if (selectedDataset === "data5b") {
      }
    }
    
    // Initial plot rendering
    updatePlot("data5b");
    
    })();
  // //
  // marker: {
  //   color: dataset.map((row) => row.C),
  //   colorscale: [
  //   ['0.0', 'c3f6c3'],
  //   ['1.0', '90ee90'],
  //   ],
  // },