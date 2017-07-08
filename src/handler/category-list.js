const Alexa = require('alexa-sdk');
const giantBombDao = require('../dao/giant-bomb-api.js');
const appState = require('./app-states.js');

function handleLoadVideoCategories(self) {
    console.log('listing categories');
    giantBombDao.lookupVideoCategories((videoCategories) => {
        const listItems = videoCategories.map(category => ({
            token: `${category.id}`,
            image: {
                contentDescription: category.name,
                sources: [],
            },
            textContent: {
                primaryText: {
                    text: category.name,
                    type: 'PlainText',
                },
            },
        }));
        self.response.displayListTemplate1(true, 'Video Categories', listItems);
        self.emit(':responseReady');
    }, (err) => {
        console.log(`Error Received: [${err}]`);
        self.emit(':tell', 'Error looking up categories. Try again later.');
    });
}

module.exports = Alexa.CreateStateHandler(appState.CATEGORY_LIST, {
    ListVideoCategories: () => {
        handleLoadVideoCategories(this);
    },
});
