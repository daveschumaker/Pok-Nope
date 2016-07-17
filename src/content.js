// Helper Functions
let getRandomAppDescription = function() {
    let descriptionArray = [
        'useless waste of time',
        'ridiculously useless app',
        'productivity nightmare',
        'basement dweller\'s excuse for getting outside',
        'buggy app that people are obsessed with for some reason'
    ]

    return descriptionArray[Math.floor(Math.random()*descriptionArray.length)];
}

let elements = document.body.getElementsByTagName('*');

for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
        let node = element.childNodes[j];

        if (node.nodeType === 3) {
            let replacedText;
            let text = node.nodeValue;

            replacedText = text.replace(/Pokémon Go|Pokemon Go/g, getRandomAppDescription());
            replacedText = replacedText.replace(/Pokéstops|Pokestops/gi, 'places to avoid');
            replacedText = replacedText.replace(/Pokéstop|Pokestop/gi, 'place to avoid at all costs');
            replacedText = replacedText.replace(/Pokémon|Pokemon/gi, 'Stupid');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
