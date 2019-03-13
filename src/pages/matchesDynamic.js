import React, { Component } from 'react';

import Layout from '../components/layout';
import axios from 'axios';
import '../components/index.css';
import MatchesForSpecificDay from '../components/match/MatchesForSpecificDay';

class IndexPage extends Component {
    state = {
        comingMatches: [],
    };


    fetchMatchesToCome() {
        axios.get('http://www.allomatch.com/iphone.php/match/upcomingMatches/version/2')
             .then(response => {
                 console.log('good ! ', response.data.length, ' matches found ', response.data);
                 this.setState({comingMatches: response.data});
             })
             .catch(error => {
                 console.log(error);
             });
    }

    render() {
        return <Layout menuSelected={0} headerText='Execute requete pour récupérer matchs une fois la page chargée'>
            {this.generateComingMatchesList()}
        </Layout>;

    }

    componentDidMount() {
        this.fetchMatchesToCome();
    }

    generateComingMatchesList() {
        let matchesPerDay = this.state.comingMatches.reduce((finalObj, match) => {
            let matchDate = match.datetime.split(' ')[0];
            if (finalObj[matchDate]) {
                finalObj[matchDate].push(match);
            } else {
                finalObj[matchDate] = [match];
            }
            return finalObj;
        }, {}); //TODO : utiliser un Set par la suite ???

        return Object.keys(matchesPerDay).map(matchDate => {
                return <MatchesForSpecificDay key={matchDate} day={matchDate}
                                              matches={matchesPerDay[matchDate]}
                />;
            },
        );
    }
}

export default IndexPage;

