/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
    // import {DataRequestsService} from './src/services/dataRequestsService';
const axios = require('axios');

// You can delete this file if you're not using it
exports.createPages = async ({actions: {createPage}}) => {
    // `getPokemonData` is a function that fetches our data
    const matches = await getUpComingMatches();

    // Create a page that lists all Matches.
    createPage({
        path: `/matches`,
        component: require.resolve('./src/pages/matches.js'),
        context: {matches},
    });
    // Create a page that lists all Matches.
    createPage({
        path: `/match`,
        component: require.resolve('./src/pages/matches.js'),
        context: {matches},
    });

    // Create a page that lists all matches with dynamic fetching.
    createPage({
        path: `/matches-dynamic`,
        component: require.resolve('./src/pages/matchesDynamic.js'),
    });

    // Create a page that lists all matches with channels to watch.
    createPage({
        path: `/tv-guide`,
        component: require.resolve('./src/pages/tvGuide.js'),
        context: {matches},
    });

    // Create a page that lists all matches with channels to watch.
    createPage({
        path: `/bars`,
        component: require.resolve('./src/pages/index.js'),
    });

    // // Create a page for each match.
    // matches.forEach(match => {
    //     createPage({
    //         path: `/match/${match.uid}/`,
    //         component: require.resolve('./src/pages/match.js'),
    //         context: {match},
    //     });
    // });
};

const BASE_URL = 'http://www.allomatch.com/iphone.php/';

const getUpComingMatches = () => axios.get(BASE_URL + 'match/upcomingMatches/version/2')
                                      .then(response => response.data);
