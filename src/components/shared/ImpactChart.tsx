import { Pie } from 'react-chartjs-2';
// Import the necessary runtime components
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend,
} from 'chart.js';
// Import the types using 'type' keyword
import type { TooltipItem, ChartOptions } from 'chart.js'; 

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ImpactChart() {
  const data = {
    labels: ['Programs (60%)', 'Scholarships (25%)', 'Operations (15%)'],
    datasets: [
      {
        data: [60, 25, 15],
        // ✅ RESOLVED: Updated colors to ensure distinct theme colors for all three segments
        backgroundColor: [
          '#3A2D7D', // Deep color for the largest segment (Programs)
          '#D94B8B',  // Warm color for the medium segment (Scholarships)
          '#F28C38',             // Light, neutral color for the smallest segment (Operations)
        ],
        borderColor: ['#fff', '#fff', '#fff'],
        borderWidth: 1,
      },
    ],
  };

  // Explicitly define the type of options using ChartOptions<'pie'>
  const options: ChartOptions<'pie'> = { 
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom' as const,
            labels: {
                font: {
                    size: 14,
                    family: 'var(--font-body)',
                    weight: 600, 
                }
            }
        },
        tooltip: {
            callbacks: {
                label: function(context: TooltipItem<'pie'>) {
                    let label = context.label || ''; 
                    
                    if (label) {
                        label = label.split(' (')[0];
                        label += ': ';
                    }
                    
                    if (context.formattedValue) {
                        label += context.formattedValue + '%';
                    }
                    return label;
                }
            }
        }
    }
  };

  return <Pie data={data} options={options} />;
}