// Add event listeners to sidebar items to load respective pages
document.addEventListener('DOMContentLoaded', function () {
  const sidebarItems = document.querySelectorAll('.sidebar-list-item');

  sidebarItems.forEach(item => {
    item.addEventListener('click', function () {
      const page = this.getAttribute('data-page');
      if (page) {
        loadPage(page); // Only call loadPage if page is not null
      } else {
        console.error("Invalid page URL");
      }
    });
  });
});


// Function to load page content into the main container
function loadPage(page) {
  fetch(page)
    .then(response => response.text())
    .then(html => {
      document.querySelector('.main-container').innerHTML = html;
      renderCharts(); // Render charts after loading the page
    })
    .catch(error => console.log('Error loading page:', error));
}

// Function to initialize and render the charts
function renderCharts() {
  // BAR CHART DATA and OPTIONS...
  // Initialize the bar chart
  const barChart = new ApexCharts(document.querySelector('#bar-chart'), barChartOptions);
  barChart.render();
}

    // ---------- CHARTS ----------

    // BAR CHART DATA
    const barChartData = {
      categories: ['04 - 00', '09 - 05', '14 - 10', '19 - 15', '24 - 20', '29 - 25', '34 - 30', '39 - 35', '44 - 40', '49 - 45', '54 - 50', '59 - 55', '64 - 60', '69 - 65', '74 - 70', '79 - 75', '80 >='],
      omaniPopulation: [4044, 4721, 3780, 3031, 2847, 3165, 3831, 3738, 3155, 2509, 1876, 1535, 1421, 1144, 811, 481, 597],
      expatPopulation: [7540, 9090, 7830, 6340, 9381, 17538, 24092, 28580, 23116, 16447, 11587, 7421, 4111, 2538, 995, 444, 282]
    };

    // BAR CHART OPTIONS
    const barChartOptions = {
      series: [{
        name: 'Omani Population',
        data: barChartData.omaniPopulation
      }, {
        name: 'Expat Population',
        data: barChartData.expatPopulation
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      colors: ['#1f77b4', '#ff7f0e'], // Change the colors here
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 4,
          horizontal: false,
          columnWidth: '40%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        fontSize: '14px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
        markers: {
          radius: 12
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5
        }
      },
      xaxis: {
        categories: barChartData.categories,
        title: {
          text: 'Age Categories',
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
          }
        },

        labels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500
          }
        }
      },
      yaxis: {
        title: {
          text: 'Population',
          style: {
            fontSize: '16px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
          }
        },
        labels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500
          }
        }
      },
      tooltip: {
        y: {
          formatter: function(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }
      }
    };

    // Initialize the chart
    const barChart = new ApexCharts(document.querySelector('#bar-chart'), barChartOptions);
    barChart.render();

   
    // Data for Rate of Economic Activity
    const data = {
      years: ['2020', '2022', '2023', '2024'],
      manufacturing: [3413, 3339, 3536, 3486],
      construction: [2757, 2612, 2842, 2948],
      wholesale_retail: [8348, 8577, 9189, 9535],
      transportation_storage: [922, 886, 918, 926],
      accommodation_food_services: [1142, 1170, 1179, 1234],
      others: [3763, 3794, 4076, 4324]
    };

    // Translate Arabic words to English
    const translatedData = {
      years: data.years,
      manufacturing: 'Manufacturing',
      construction: 'Construction',
      wholesale_retail: 'Wholesale & Retail Trade',
      transportation_storage: 'Transportation & Storage',
      accommodation_food_services: 'Accommodation & Food Services',
      others: 'Others'
    };

    // Initialize chart options
    const options = {
      chart: {
        type: 'line',
        height: 400,
        width: '100%',
        toolbar: {
          show: true,
          tools: {
            download: false // Hide the download button
          }
        }
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A'],
      series: [
        { name: translatedData.manufacturing, data: data.manufacturing },
        { name: translatedData.construction, data: data.construction },
        { name: translatedData.wholesale_retail, data: data.wholesale_retail },
        { name: translatedData.transportation_storage, data: data.transportation_storage },
        { name: translatedData.accommodation_food_services, data: data.accommodation_food_services },
        { name: translatedData.others, data: data.others }
      ],
      xaxis: {
        categories: data.years
      }
    };

    // Initialize the chart
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    function initializeCircleChart() {
      // Chart data
      const circleChartData = {
        categories: ['Apartment', 'Villa/Arabic House', 'Establishment'],
        values: [42255, 14666, 20640],
        percentages: ['54.4%', '18.9%', '26.7%']
      };
    
      // Circle Chart options
      const circleChartOptions = {
        series: circleChartData.values,
        chart: {
          width: 500, // Adjust width as needed
          type: 'donut',
          toolbar: {
            show: false // Hide the toolbar
          }
        },
        labels: circleChartData.categories,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300 // Adjust width for smaller screens
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        dataLabels: {
          enabled: false // Hide data labels initially
        },
        legend: {
          show: true,
          position: 'bottom', // Move legend to the bottom
          labels: {
            colors: ['#333'],
            useSeriesColors: false
          },
          formatter: function (val, opts) {
            return val + " (" + circleChartData.percentages[opts.seriesIndex] + ")";
          }
        },
        tooltip: {
          enabled: true,
          y: {
            formatter: function (val) {
              return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Format tooltip values
            }
          }
        },
        colors: ['#1f77b4', '#ff7f0e', '#2ca02c'], // Update colors
      };
    
      // Initialize the circle chart
      const circleChart = new ApexCharts(document.querySelector("#circle-chart"), circleChartOptions);
      circleChart.render();
    }
    
    
    // Call the function to initialize the circle chart
    initializeCircleChart();
    function initializeUnitsUsageChart() {
      // Units Usage Chart Data
      const unitsUsageData = {
        categories: ['Residential', 'Profit', 'Non-Profit'],
        unitsCount: [56921, 19591, 1149],
      };
    
      // Units Usage Chart Options
      const unitsUsageOptions = {
        series: unitsUsageData.unitsCount,
        chart: {
          type: 'donut',
          height: 400,
        },
        labels: unitsUsageData.categories,
        dataLabels: {
          enabled: false, // Initially disable data labels
        },
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '75%',
            },
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
          },
        },
      };
    
      // Initialize the Units Usage Chart
      const unitsUsageChart = new ApexCharts(document.querySelector('#units-usage'), unitsUsageOptions);
      unitsUsageChart.render();
    }
    
    // Call the function to initialize the Units Usage chart
    initializeUnitsUsageChart();
    function initializeUnitsOccupancyChart() {
      // Units Occupancy Chart Data
      const unitsOccupancyData = {
        categories: ['Semi-used', 'Not used', 'Used'],
        unitsCount: [7566, 14043, 50052],
        percentages: ['9.7%', '18.1%', '72.2%']
      };
    
      // Units Occupancy Chart Options
      const unitsOccupancyOptions = {
        series: unitsOccupancyData.unitsCount,
        chart: {
          type: 'donut',
          height: 400,
        },
        labels: unitsOccupancyData.categories,
        dataLabels: {
          enabled: false, // Initially disable data labels
        },
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '75%',
            },
          },
        },
        tooltip: {
          y: {
            formatter: function (val, opts) {
              return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " (" + unitsOccupancyData.percentages[opts.seriesIndex] + ")";
            },
          },
        },
      };
    
      // Initialize the Units Occupancy Chart
      const unitsOccupancyChart = new ApexCharts(document.querySelector('#units-Occupancy'), unitsOccupancyOptions);
      unitsOccupancyChart.render();
    }
    
    // Call the function to initialize the Units Occupancy chart
    initializeUnitsOccupancyChart();

    function initializeInvestorNationalityChart() {
  // Investor Nationality Chart Data
  const investorNationalityData = {
    categories: ['Omani Individual', 'Omani Establishment', 'Non-Omani Individual', 'Non-Omani Establishment'],
    counts: [289803, 3304, 27778, 1909]
  };

  // Investor Nationality Chart Options
  const investorNationalityOptions = {
    series: [{
      name: 'Investors',
      data: investorNationalityData.counts
    }],
    chart: {
      type: 'bar',
      height: 400,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728'], // Add colors here
    xaxis: {
      categories: investorNationalityData.categories,
    },
    yaxis: {
      title: {
        text: 'Number of Investors',
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
      },
    }
  };

  // Initialize the Investor Nationality Chart
  const investorNationalityChart = new ApexCharts(document.querySelector('#investor-nationality'), investorNationalityOptions);
  investorNationalityChart.render();
}

// Call the function to initialize the Investor Nationality chart
initializeInvestorNationalityChart();

            