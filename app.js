/* ALERT BANNER */

const alertBanner = document.querySelector('#alert');

alertBanner.innerHTML = `<div class="alert-banner">
    <p> <strong>Alert:</strong> You have <strong> 6</strong> overdue tasks
to complete</p >
    <p class="alert-banner-close">x</p>
</div>`;

const bellNotification = document.querySelector('.whole-bell');
const notificationDiv = document.createElement('div');
notificationDiv.id = "notification";
bellNotification.insertAdjacentElement("beforeend", notificationDiv);

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
        notificationDiv.remove();
    }
})



const trafficCanvas = document.querySelector('#traffic-chart');

let trafficData = {
    labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
    ],
    datasets: [{
        data: [
            750,
            1250,
            1000,
            2000,
            1500,
            1750,
            1250,
            1850,
            2250,
            1500,
            2500
        ],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    },
    maintainAspectRatio: true
};


let trafficChart = new Chart (trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

const dailyCanvas = document.querySelector('#daily-chart');

const dailyData = {
    labels: ["S", "M", "T", "W", "TH", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales:  {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

const mobileCanvas = document.querySelector("#mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
}

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position:'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
})

const user = document.querySelector('#userField');
const message = document.querySelector('#messageField');
const send = document.querySelector('#send');

send.addEventListener('click', () => {

    if(user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`)
    }
})

// const bellContainer = document.querySelector(".whole-bell");
// const bell = document.querySelector(".bell");

// function myDropdown() {
//     document.querySelector("#myDropdown").classList.toggle("show")
// }

// window.onclick = function(event) {
//     console.log(event);
//     if (!event.target.matches('.whole-bell')) {
//         let myDropdown = document.querySelector('#myDropdown');
//         if (myDropdown.classList.contains('show')) {
//             myDropdown.classList.remove('show');
//         }
//     }
// }