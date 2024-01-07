


// Alert and Notification Elements

const alertBanner = document.querySelector('#alert');
const bellNotification = document.querySelector('.whole-bell');
const notificationDiv = document.createElement('div');
const wholeBell = document.querySelector(".whole-bell");
const bell = document.querySelector(".bell-svg");

// Chart Elements
const trafficCanvas = document.querySelector('#traffic-chart');
const dailyCanvas = document.querySelector('#daily-chart');
const mobileCanvas = document.querySelector("#mobile-chart");
const trafficLinks = document.querySelectorAll('.traffic-nav-link');

// Messaging Elements

const user = document.querySelector('#userField');
const userField = document.getElementById('userField');
const searchContainer = document.getElementsByClassName('search-container');
const dropdownContainer = document.getElementById('dropdownContainer');
const userDropdown = document.getElementById('userDropdown');
const message = document.querySelector('#messageField');
const send = document.querySelector('#send');

const userNames = [
    "Victoria Chambers",
    "Dale Byrd",
    "Dawn Wood",
    "Dan Oliver"
]

// Settings Elements
const timezones = document.getElementById('timezone');
const timezoneOptions = timezones.options;
const notificationToggle = document.getElementById('notifications');
const publicProfileToggle = document.getElementById('public-profile');

const save = document.getElementById('save');
const cancel = document.getElementById('cancel');

/*Initialize settings*/
getLocalStorage();


/* ALERT */


// inserts alert banner
notificationDiv.id = "notification";
bellNotification.insertAdjacentElement("beforeend", notificationDiv);

alertBanner.innerHTML = `<div class="alert-banner">
    <p> <strong>Alert:</strong> You have <strong> 6</strong> overdue tasks
to complete</p >
    <p class="alert-banner-close">x</p>
</div>`;


// removes alert banner if 'x' is clicked
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
        notificationDiv.remove();
    }
})

// alerts notifications when bell is clicked
bell.addEventListener('click', () => {
    alert('You rang my bell!')
})


/* CHARTS */

// DATA
let hourlyTrafficData = {
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

let dailyTrafficData = {
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
            900,
            1000,
            1000,
            2000,
            1500,
            1450,
            1327,
            2000,
            2250,
            400,
            2345
        ],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let weeklyTrafficData = {
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
            111,
            222,
            333,
            444,
            555,
            666,
            777,
            888,
            999,
            1000,
            2000
        ],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let monthlyTrafficData = {
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
            348,
            1539,
            1604,
            2343,
            100,
            234,
            1564,
            1232,
            132,
            546,
            2435
        ],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 4,
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
    maintainAspectRatio: false,
    tension: 0.3
};


let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: hourlyTrafficData,
    options: trafficOptions
});


// Assign event listener to all traffic nav links
trafficLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // remove all active classes
        trafficLinks.forEach(link => {
            link.classList.remove('active')
            trafficChart.destroy();
        });
        e.target.classList.add('active')
        console.log(e.target.textContent);

        if (e.target.textContent == "Daily") {
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: dailyTrafficData,
                options: trafficOptions
            });
        } else if (e.target.textContent == "Weekly") {
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: weeklyTrafficData,
                options: trafficOptions
            });
        } else if (e.target.textContent == "Monthly") {
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: monthlyTrafficData,
                options: trafficOptions
            });
        } else if (e.target.textContent == "Hourly") {
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: hourlyTrafficData,
                options: trafficOptions
            });
        }

    })
})





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
    maintainAspectRatio: false,
    aspectRatio: 2

};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


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
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
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


/* MESSAGE USER */ 

//alerts user if fields are empty

send.addEventListener('click', () => {

    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`)
    }
})


// displays available users to message if searched input matches any users in the database
userField.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
    if (currentValue !== '') {
        userDropdown.innerHTML = '';
        dropdownContainer.classList.add('show');
        userNames.forEach(name => {
            if (name.toLowerCase().includes(currentValue.toLowerCase())) {
                userDropdown.innerHTML += `<li>${name}</li>`
            }
        })
    } else {
        dropdownContainer.classList.remove('show');

    }
})


// Adds the selection from dropdown to the input
userDropdown.addEventListener('click', e => {
    let selected = e.target.textContent;
    userField.value = selected;
})

// hides dropdown when clicked outside of dropdown
window.onclick = function (e) {
    if (!event.target.matches('.message-container')) {
        dropdownContainer.classList.remove('show');
    }
}


/* SETTINGS */ 

// Saves settings

save.addEventListener('click', () => {
    if (notificationToggle.checked) {
        localStorage.setItem('notifications', 'true')
    } else {
        localStorage.setItem('notifications', 'false')
    }

    if (publicProfileToggle.checked) {
        localStorage.setItem('public-profile', 'true')
    } else {
        localStorage.setItem('public-profile', 'false')
    }

    for (let i=0; i < timezoneOptions.length; i++) {
        const option = timezoneOptions[i];
        if (option.selected) {
            localStorage.setItem('timezone', JSON.stringify(option.value))
        } 
    }
});

// Adjusts settings upon load based on saved settings 

function getLocalStorage() {
    const notificationSetting = localStorage.getItem('notifications');
    const publicProfileSetting = localStorage.getItem('public-profile');
    const timezoneSetting = localStorage.getItem('timezone');

    if (notificationSetting == "true") {
        notificationToggle.checked = true;
    } else {
        notificationToggle.checked = false;
    }

    if (publicProfileSetting == "true") {
        publicProfileToggle.checked = true;
    } else {
        publicProfileToggle.checked = false;
    }

    timezones.value = JSON.parse(timezoneSetting);
}

// Removes settings changes before save *DOES NOT RESET SETTINGS*

cancel.addEventListener('click', () => {
    notificationToggle.checked = false;
    publicProfileToggle.checked = false;
    for (let i=0; i < timezoneOptions.length; i++) {
        const option = timezoneOptions[i];
        if (option.disabled) {
            option.selected = true;
        }
    }
})

