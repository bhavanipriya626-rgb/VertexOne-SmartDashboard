// Greeting

let hour = new Date().getHours();

if(hour < 12)
document.getElementById("greeting").innerHTML =
"🌞 Good Morning";

else if(hour < 18)
document.getElementById("greeting").innerHTML =
"☀️ Good Afternoon";

else
document.getElementById("greeting").innerHTML =
"🌙 Good Evening";


// Live Clock

function updateClock(){

    let now = new Date();

    document.getElementById("clock").innerHTML =
    now.toLocaleString();
}

updateClock();

setInterval(updateClock,1000);


// AI Quotes

const quotes = [

"🌟 Stay consistent.",

"🚀 Never stop learning.",

"💪 Believe in yourself.",

"🎯 Small steps lead to success.",

"📚 Practice makes perfect."

];

function generateQuote(){

    let random =
    quotes[Math.floor(Math.random()*quotes.length)];

    document.getElementById("quote").innerHTML =
    random;
}


// Tasks

let count = 0;

function addTask(){

    let task =
    document.getElementById("taskInput").value;

    if(task === ""){

        alert("Enter a task");

        return;
    }

    let li =
    document.createElement("li");

    li.innerHTML =
    `${task}
    <button onclick="this.parentElement.remove();removeCount();">
    ❌
    </button>`;

    document.getElementById("taskList")
    .appendChild(li);

    document.getElementById("taskInput").value="";

    count++;

    document.getElementById("count").innerHTML =
    count;
}

function removeCount(){

    count--;

    document.getElementById("count").innerHTML =
    count;
}


// News

function showNews(){

    const news = [

    "📰 AI transforming education",

    "📰 New technology trends released",

    "📰 India launches satellite",

    "📰 Students learning AI rapidly",

    "📰 Innovation shaping the future"

    ];

    let list =
    document.getElementById("newsList");

    list.innerHTML = "";

    news.forEach(item => {

        let li =
        document.createElement("li");

        li.textContent = item;

        list.appendChild(li);

    });
}


// Weather

async function getWeather(){

    let city =
    document.getElementById("city").value;

    const apiKey =
    "c70bf5a515e16347641f8173c150e4c9";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        let response =
        await fetch(url);

        let data =
        await response.json();

        document.getElementById("weatherResult")
        .innerHTML =

        `<h3>${data.name}</h3>

        <p>🌡 Temperature:
        ${data.main.temp} °C</p>

        <p>☁ Weather:
        ${data.weather[0].description}</p>

        <p>💧 Humidity:
        ${data.main.humidity}%</p>`;
    }

    catch{

        document.getElementById("weatherResult")
        .innerHTML =
        "❌ City Not Found";
    }
}


// Notes

function saveNote(){

    let note =
    document.getElementById("note").value;

    document.getElementById("saved").innerHTML =
    note;
}


// Dark Mode

function toggleMode(){

    document.body.classList.toggle("dark");
}