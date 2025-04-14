// Toggle dark mode
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  // Mini donut charts
  function createDonutChart(ctxId, color) {
    return new Chart(document.getElementById(ctxId), {
      type: 'doughnut',
      data: {
        labels: ['Used', 'Remaining'],
        datasets: [{
          data: [70, 30],
          backgroundColor: [color, '#e5e7eb'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '70%',
        plugins: { legend: { display: false } }
      }
    });
  }
  
  createDonutChart('primaryChart', '#f97316'); // orange
  createDonutChart('secondaryChart', '#3b82f6'); // blue
  
  // Activity line chart
  const userChart = new Chart(document.getElementById('userChart'), {
    type: 'line',
    data: {
      labels: ['Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11'],
      datasets: [
        {
          label: 'Income',
          data: [2000, 2400, 2800, 3000, 2600, 2700],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16,185,129,0.2)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Expenses',
          data: [1200, 1600, 1500, 1400, 2000, 2200],
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239,68,68,0.2)',
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });
  
  // Weekly bar chart
  const barChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Spending',
        data: [120, 200, 300, 150, 180, 100, 90],
        backgroundColor: '#6366f1'
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });