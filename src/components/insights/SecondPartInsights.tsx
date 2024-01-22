import React, { useEffect } from 'react';
import { Chart, TooltipOptions, LegendOptions } from 'chart.js/auto';

const DATA_COUNT = 4; // Set the desired number of data points

interface SecondPartInsightsProps {
  
}

const SecondPartInsights: React.FC<SecondPartInsightsProps> = (props) => {
  const data = {
    datasets: [
      {
        data: [24, 15, 8, 53], // Values based on the provided information
        backgroundColor: ['#C7E7FF', '#B3DFFF', '#91D1FF', '#0D99FF'],
      },
    ],
    labels: ['First Year', 'Second Year', 'Third Year', 'Final Year'],
  };

  function colorize(opaque: boolean, hover: boolean, ctx: any) {
    const v = ctx.parsed;
    const opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);

    return opaque ? ctx.dataset.backgroundColor : Chart.helpers?.transparentize(ctx.dataset.backgroundColor, opacity);
  }

  function hoverColorize(ctx: any) {
    return colorize(false, true, ctx);
  }

  useEffect(() => {
    // Create and initialize the chart
    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement | null;
    if (ctx) {
      const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
          plugins: {
            legend: {
              display: true, // Set the legend display option based on your needs
            } as LegendOptions<"pie">, // Type assertion for TypeScript
            tooltip: {
              callbacks: {
                label: (tooltipItem: any, data: any) => {
                  const dataset = data.datasets?.[tooltipItem.datasetIndex];
                  if (dataset) {
                    const total = dataset.data.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
                    const currentValue = dataset.data[tooltipItem.index];
                    const percentage = Math.round((currentValue / total) * 100);
                    return `${data.labels[tooltipItem.index]}: ${currentValue} (${percentage}%)`;
                  }
                  return '';
                },
              },
            } as TooltipOptions<"pie">, // Type assertion for TypeScript
          },
          elements: {
            arc: {
              backgroundColor: colorize.bind(null, false, false),
              hoverBackgroundColor: hoverColorize,
            },
          },
        },
      });

      // Cleanup on component unmount
      return () => {
        myPieChart.destroy();
      };
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center  lg:w-[48%] sm:w-full mx-auto">
      <h2 className="font-semibold mt-2 mb-2 text-[#545454] text-xl text-center">No of Attendees in WOW 2022</h2>
      <div className="m-2 p-2  lg:w-[60%] sm:w-3/4">
        <canvas id="myPieChart" className="w-full h-full" />
      </div>
    </div>
  );
  
  };
export default SecondPartInsights;
