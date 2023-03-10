const ctx = document.getElementById('myid');
const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
console.log(ctx)


new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["Значение 1","Значение 2","Значение 3"],
        datasets: [{
            label: "VERSION'S EVENTS",
            data: [5000, 6000, 7000],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["Значение 1","Значение 2","Значение 3"],
        datasets: [{
            label: "VERSION'S EVENTS",
            data: [5000, 6000, 7000],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ["Значение 1","Значение 2","Значение 3"],
        datasets: [{
            label: "VERSION'S EVENTS",
            data: [5000, 6000, 7000],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});