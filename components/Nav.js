const pageLabels = {
    Home: 'Home',
    Floors: 'Floors/Decks',
    Misc: 'Miscellaneous',
    Remodels: 'Remodels'
}

function buildAButton(page) {
    const label = pageLabels[page];

    return `
    <div class="controls">
        <a href="${page}" class="myButton" data-navigo>${label}</a>
    </div>
    `
}

export default function (state) {
    
    const buttons = state.links.map(link => buildAButton(link)).join("");

    return `
      <nav>
        ${buttons}
      </nav>
    `;
}
