let usernameInput = document.getElementById("username");
let btn = document.getElementById("analyse");
let canvas = document.getElementById("charts");

let currentChart = null; 

btn.addEventListener('click', async () => {
    let handle = usernameInput.value;

    if (!handle) {
        console.error("Please enter a Codeforces handle");
        return;
    }

    try {
        let response = await fetch(`https://codeforces-analytics-hub.onrender.com/api/users/${handle}`);
        let data = await response.json();

        if (!response.ok) {
            console.error("Backend Error:", data.error || "User not found");
            alert("Could not find user or fetch data!"); 
            return; 
        }

        let chartLabels = Object.keys(data);
        let chartValues = Object.values(data);

        if (currentChart) {
            currentChart.destroy();
        }

        currentChart = new Chart(canvas, {
            type: 'doughnut', 
            data: {
                labels: chartLabels, 
                datasets: [{
                    label: 'Problems Solved',
                    data: chartValues, 
                    borderWidth: 0, 
                    hoverOffset: 4  
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right', 
                        labels: {
                            boxWidth: 12,
                            font: { size: 11 }
                        }
                    }
                }
            }
        });

    } catch (error) {
        console.error("Frontend Fetch Error:", error);
    }
});