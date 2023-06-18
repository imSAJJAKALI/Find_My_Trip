import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Box, Heading } from '@chakra-ui/react';
import { ChartData } from 'chart.js';

interface Destination {
  date: string;
  value: number;
}

const AdminGraph: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData<'line', number[], unknown>>({
    labels: [],
    datasets: [
      {
        label: 'Graph Data',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Destination[]>('http://localhost:9090/destination');
        const data = response.data;

        if (data && data.length > 0) {
          // Prepare data for the chart
          const chartLabels = data.map((item) => item.date);
          const chartDataPoints = data.map((item) => item.value);

          setChartData((prevChartData) => ({
            ...prevChartData,
            labels: chartLabels,
            datasets: [
              {
                ...prevChartData.datasets[0],
                data: chartDataPoints,
              },
            ],
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Admin Graph
      </Heading>
     
        <Line data={chartData} />
     
    </Box>
  );
};

export default AdminGraph;
