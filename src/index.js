const Alexa = require('alexa-sdk');
const giantBombDao = require('./dao/giant-bomb-api.js');
const newSessionHandlers = require('./handler/new-session.js');
const startModeHandlers = require('./handler/start-mode.js');
const categoryListHandlers = require('./handler/category-list.js');

const APP_ID = 'amzn1.ask.skill.b7cc47c3-2630-4da7-b2d7-2564eab599e1';

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};


function handlePlayVideos() {
    const self = this;
    giantBombDao.lookupVideos(1, undefined, (videoData) => {
        const video = videoData[0];
        self.response.videoPlayer(`${video.low_url}?api_key=${process.env.API_KEY}`,
            video.name,
            video.deck);
        self.emit(':responseReady');
    }, (err) => {
        console.log(`Error Received: [${err}]`);
        self.emit(':tell', 'Error looking up most recent quick look. Try again later.');
    });
}

const handlers = {
    'PlayVideo': function () {
        handlePlayVideos.call(this);
    },
    'Unhandled': function () {
        this.emit(':tell', "Sorry, I don't support that");
    },
};
/*
function handleListVideos(self) {
    giantBombDao.lookupVideos(3, (videos) => {
        const listItems = videos.map(videoData => ({
            token: `${videoData.id}`,
            image: {
                contentDescription: videoData.name,
                sources: [{
                    url: videoData.image.medium_url,
                }],
            },
            textContent: {
                primaryText: {
                    text: videoData.name,
                    type: 'PlainText',
                },
            },
        }));
        self.response.displayListTemplate2(true, 'Quick Looks', listItems);
        self.emit(':responseReady');
    }, (err) => {
        console.log(`Error Received: [${err}]`);
        self.emit(':tell', 'Error looking up most recent quick look. Try again later.');
    }, 10);
}


function handleShowVideoInfo(self) {
    giantBombDao.lookupVideos(3, (videoData) => {
        const video = videoData[0];
        self.response.displayBodyTemplate2(video.id,
                false,
                video.name,
                video.image.screen_url,
                video.name,
                video.deck)
            .speak(video.deck);
        self.emit(':responseReady');
    }, (err) => {
        console.log(`Error Received: [${err}]`);
        self.emit(':tell', 'Error looking up most recent quick look. Try again later.');
    });
}
*/
