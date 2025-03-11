// Pace Chart
const paceCtx = document.getElementById('paceChart').getContext('2d');
const paceChart = new Chart(paceCtx, {
    type: 'pie',
    data: {
        // labels: ['Pace','Pace'],
        datasets: [{
            // label: 'Pace Performance',
            data: [50, 50],
            backgroundColor: ['#8947af', '#90b7e6'],
            // borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});

// Communication Chart
const communicationCtx = document.getElementById('communicationChart').getContext('2d');
const communicationChart = new Chart(communicationCtx, {
    type: 'pie',
    data: {
        // labels: ['Communication'],
        datasets: [{
            // label: 'Communication Performance',
            data: [80,20],
            backgroundColor: ['#8947af', '#90b7e6'],
            // borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});

// Examples Chart
const examplesCtx = document.getElementById('examplesChart').getContext('2d');
const examplesChart = new Chart(examplesCtx, {
    type: 'pie',
    data: {
        // labels: ['Examples'],
        datasets: [{
            // label: 'Examples Performance',
            data: [60,40],
            backgroundColor: ['#8947af', '#90b7e6'],
            // borderColor: ['rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});

// Timing Chart
const timingCtx = document.getElementById('timingChart').getContext('2d');
const timingChart = new Chart(timingCtx, {
    type: 'pie',
    data: {
        // labels: ['Timing'],
        datasets: [{
            // label: [],
            data: [90,10],
            backgroundColor: ['#8947af', '#90b7e6'],
            // borderColor: ['rgba(54, 162, 235, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});

// Overall Chart
const OverallCtx = document.getElementById('OverallChart').getContext('2d');
const OverallChart = new Chart(OverallCtx, {
    type: 'pie',
    data: {
        // labels: ['Timing'],
        datasets: [{
            // label: [],
            data: [70,30],
            backgroundColor: ['#8947af', '#90b7e6'],
            // borderColor: ['rgba(54, 162, 235, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});