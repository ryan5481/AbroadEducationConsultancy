import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box } from '@chakra-ui/react';

 
class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Universities',
          data: [0, 5, 11, 45, 32, 34, 52, 41]
        },
        {
          name: 'Visa Success',
          data: [0, 10, 31, 28, 51, 45, 109, 100]
        }
      ],
      options: {
        responsive: [{
          breakpoint: "",
          options: {},
      }],
        chart: {
          height: 350,
          width: '80%',
          type: 'area',
          toolbar: {
            show: false,
          },
          legend: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          curve: 'smooth',
          width: '3'
        },
        markers: {
          show: false,
        },
        xaxis: {
          type: 'string',
          categories: [
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023"
          ]
        },
        tooltip: {
          enabled: false
        }
      }
    };
  }

  render() {
    return (
      
      <Box id="chart" mx='300'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </Box>
    );
  }
}

export default LineChart; 