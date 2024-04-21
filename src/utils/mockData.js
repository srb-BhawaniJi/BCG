export const mockData = {
    cities: [
      {
        id: 1,
        name: 'New York',
        stackId: 'NYC7920903810',
        coordinates: [-74.006, 40.7128],
        text: 'Data for New York',
        data: {
          forecast: 100,
          actual: 95,
        },
        chartData: [
          { quarter: 'Q1', value: 100 },
          { quarter: 'Q2', value: 120 },
          { quarter: 'Q3', value: 110 },
          { quarter: 'Q4', value: 130 },
        ],
      },
      {
        id: 2,
        name: 'London',
        stackId: 'LDN3420773844',
        text: 'Data for London',
        coordinates: [-0.1278, 51.5074],
        data: {
          forecast: 80,
          actual: 75,
        },
        chartData: [
          { quarter: 'Q1', value: 80 },
          { quarter: 'Q2', value: 90 },
          { quarter: 'Q3', value: 85 },
          { quarter: 'Q4', value: 95 },
        ],
      },
    ],
    datasets: [
      {
        id: 1,
        name: 'Dataset New York',
        stackId: 'NYC7920903810',
        chartData: [
          { quarter: 'Q1', historical: 100, forecast: 110 },
          { quarter: 'Q2', historical: 120, forecast: 130 },
          { quarter: 'Q3', historical: 110, forecast: 120 },
          { quarter: 'Q4', historical: 130, forecast: 140 },
          { quarter: 'Q5', historical: 105, forecast: 115 },
          { quarter: 'Q6', historical: 115, forecast: 125 },
        ],
        tableData: {
          Data1: [
            { quarter: 'Q1', historical: 100, forecast: 110 },
            { quarter: 'Q2', historical: 120, forecast: 130 },
            { quarter: 'Q3', historical: 110, forecast: 120 },
            { quarter: 'Q4', historical: 130, forecast: 140 },
            { quarter: 'Q5', historical: 105, forecast: 115 },
            { quarter: 'Q6', historical: 115, forecast: 125 },
          ],
          Data2:  [
            { quarter: 'Q1', historical: 111, forecast: 109 },
            { quarter: 'Q2', historical: 121, forecast: 103 },
            { quarter: 'Q3', historical: 115, forecast: 129 },
            { quarter: 'Q4', historical: 132, forecast: 136 },
            { quarter: 'Q5', historical: 125, forecast: 117 },
            { quarter: 'Q6', historical: 105, forecast: 135 },
          ],
          Data3: [
            { quarter: 'Q1', historical: 134, forecast: 130 },
            { quarter: 'Q2', historical: 101, forecast: 117 },
            { quarter: 'Q3', historical: 121, forecast: 125 },
            { quarter: 'Q4', historical: 129, forecast: 141 },
            { quarter: 'Q5', historical: 115, forecast: 116 },
            { quarter: 'Q6', historical: 135, forecast: 121 },
          ],
        },
      },
      {
        id: 2,
        name: 'Dataset London',
        stackId: 'LDN3420773844',
        chartData: [
          { quarter: 'Q1', historical: 80, forecast: 90 },
          { quarter: 'Q2', historical: 90, forecast: 100 },
          { quarter: 'Q3', historical: 85, forecast: 95 },
          { quarter: 'Q4', historical: 95, forecast: 105 },
          { quarter: 'Q5', historical: 82, forecast: 92 },
          { quarter: 'Q6', historical: 88, forecast: 98 },
        ],
        tableData: {
          Data1: [
            { quarter: 'Q1', historical: 80, forecast: 90 },
            { quarter: 'Q2', historical: 90, forecast: 100 },
            { quarter: 'Q3', historical: 85, forecast: 95 },
            { quarter: 'Q4', historical: 95, forecast: 105 },
            { quarter: 'Q5', historical: 82, forecast: 92 },
            { quarter: 'Q6', historical: 88, forecast: 98 },
          ]
        },
      },
    ],
};