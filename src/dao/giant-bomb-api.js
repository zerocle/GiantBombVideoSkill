const request = require('request-promise');

const GIANT_BOMB_API_KEY = process.env.API_KEY;
const GIANT_BOMB_URL_PREFIX = 'http://www.giantbomb.com/api/';

function generateResourceUrl(resourceType) {
    return GIANT_BOMB_URL_PREFIX + resourceType;
}

function performLookup(options, success, error) {
    request.get(options).then((res) => {
        if (res.error === 'OK') {
            success(res.results);
        } else {
            error();
        }
    }, (err) => {
        error(err);
    });
}

function lookupVideoCategories(success, error) {
    const opts = {
        uri: generateResourceUrl('video_categories'),
        qs: {
            api_key: GIANT_BOMB_API_KEY,
            format: 'json',
        },
        headers: {
            'User-Agent': 'Request-Promise',
        },
        json: true,
    };
    performLookup(opts, success, error);
}

function lookupVideos(videoLimit, videoCategory, success, error) {
    const limit = videoLimit || 10;

    const optionsObject = {
        uri: generateResourceUrl('videos'),
        qs: {
            api_key: GIANT_BOMB_API_KEY,
            format: 'json',
            limit,
        },
        headers: {
            'User-Agent': 'Request-Promise',
        },
        json: true,
    };

    if (videoCategory !== undefined) {
        optionsObject.qs.filter = `video_categories:${videoCategory}`;
    }

    performLookup(optionsObject, success, error);
}

module.exports = {
    lookupVideos,
    lookupVideoCategories,
};
