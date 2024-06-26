document.addEventListener('DOMContentLoaded', () => {
    const tools = [
        "Teams", "Odoo", "PowerBI", "Word", "Excel",
        "Oracle DB"
    ];

    const randomToolBtn = document.getElementById('randomToolBtn');
    const randomToolDisplay = document.getElementById('randomToolDisplay');

    randomToolBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * tools.length);
        const randomTool = tools[randomIndex];
        randomToolDisplay.textContent = randomTool;
    });

    const wordArray = tools.map(tool => [tool, Math.floor(Math.random() * 50) + 10]);
    WordCloud(document.getElementById('wordCloud'), { list: wordArray });

    console.log('Welcome to ShittyTool!');
});

