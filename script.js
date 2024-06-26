document.addEventListener('DOMContentLoaded', () => {
    const tools = [
        "Teams", "Odoo", "PowerBI", "Word", "Excel",
        "Oracle DB"
    ];

    // Get existing tools from localStorage
  // this doesn't work
  //  const storedTools = JSON.parse(localStorage.getItem('tools')) || [];
  //  const tools = [...defaultTools, ...storedTools.map(tool => tool.name)];

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

