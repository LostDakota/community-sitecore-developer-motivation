const workouts = [
    "Pushups",
    "Situps",
    "Dips",
    "Lunges"
];

const images = [
    "https://media0.giphy.com/media/vPk7m9YtRXpKw/giphy.gif",
    "https://media4.giphy.com/media/GbWf0u65MHCIU/giphy.gif",
    "https://media1.giphy.com/media/3mJyfDFH0BqgbdghWJ/giphy.gif",
    "https://media1.giphy.com/media/gdM6D5CAc1puw/giphy.gif",
    "https://media3.giphy.com/media/y8P2Mo0vccFMY/giphy.gif",
    "https://media3.giphy.com/media/12TOAdbCuQe2wE/giphy.gif",
    "https://media4.giphy.com/media/14wRozI53qfxyU/giphy.gif",
    "https://media1.giphy.com/media/zCkM4nPEzFfHO/giphy.gif",
    "https://media1.giphy.com/media/CfpDXy3apZVoA/giphy.gif",
    "https://media1.giphy.com/media/2y7uAIMUUPknS/giphy.gif",
    "https://media4.giphy.com/media/10NI9u4qOWNdmw/giphy.gif",
    "https://media0.giphy.com/media/473VeknqbxGpy/giphy.gif",
    "https://media1.giphy.com/media/khAKVucvHhvy0/giphy.gif",
    "https://media0.giphy.com/media/gk32Uq0C1CnLDDj2XT/giphy.gif",
    "https://media2.giphy.com/media/ZcaLO69idq9SRDnWiM/giphy.gif",
    "https://media1.giphy.com/media/aXSDrVsew4DIs/giphy.gif",
    "https://media3.giphy.com/media/kyjQw2sp9NYkv8xbPg/giphy.gif"
]

const setUp = () => {
    const bgColor = Math.floor(Math.random() * 16777215).toString(16);
    const html = document.getElementsByTagName('html')[0]
    document.getElementById('workout').innerText = `Do 10 ${workouts[Math.floor(Math.random() * workouts.length)]}.`
    document.getElementById('animated-gif').src = images[Math.floor(Math.random() * images.length)];
    html.style.backgroundColor = `#${bgColor}`;
    html.style.color = `#${bgColor.split('').reverse().join('')}`;
}

setUp();