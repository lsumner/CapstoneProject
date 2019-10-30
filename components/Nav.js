function buildAButton(page, label) {
    return `
    <div class="controls">
        <a href="${page}" class="myButton">${label}</a>
    </div>
    `
}

export default function (state) {
    return ` <nav>
      ${buildAButton('Home', 'Home')}
      ${buildAButton('Floors', 'Floors/Decks')}
      ${buildAButton('Misc', 'Miscellaneous')}
    </nav>
    `;
}