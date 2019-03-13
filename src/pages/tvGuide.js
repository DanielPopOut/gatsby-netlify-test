import React, { Component } from 'react';

import Layout from '../components/layout';
import '../components/index.css';
import MatchesForSpecificDay from '../components/match/MatchesForSpecificDay';
import ResearchBar from '../components/bars/researchBar';

class IndexPage extends Component {
    state = {
        comingMatches: this.props.pageContext.matches || [],
        searchCriteria: '',
    };


    render() {
        return <Layout menuSelected={2}>
            <ResearchBar placeHolder='Match, équipe, sport'
                         onSearch={searchCriteria => this.setState({searchCriteria: searchCriteria.toLowerCase()})}/>
            {this.generateComingMatchesList()}
        </Layout>;
    }

    componentDidMount() {
        // this.fetchMatchesToCome();
    }

    generateComingMatchesList() {
        let matchesToFiler = this.state.searchCriteria ? this.filterMatchesWithCriteria(this.state.comingMatches, this.state.searchCriteria) : this.state.comingMatches;
        let matchesPerDay = matchesToFiler.reduce((finalObj, match) => {
            let matchDate = match.datetime.split(' ')[0];
            if (finalObj[matchDate]) {
                finalObj[matchDate].push(match);
            } else {
                finalObj[matchDate] = [match];
            }
            return finalObj;
        }, {}); //TODO : utiliser un Set par la suite ???

        return Object.keys(matchesPerDay).map(matchDate => {
                return <MatchesForSpecificDay day={matchDate}
                                              matches={matchesPerDay[matchDate]}
                                              withChannels
                />;
            },
        );
    }

    filterMatchesWithCriteria(matches, criteria) {
        return matches.filter(match => {
            return ['tournamentText', 'sportName', 'team0Text', 'team1Text'].reduce((final, key) => final || (match[key].toLowerCase().indexOf(criteria) > -1), false);
        });
    }
}


const matchExample = {
    'uid': 93351,
    'datetime': '2019-03-12 21:00:00',
    'sportUid': 1,
    'sportName': 'Football',
    'tournamentText': 'Ligue des Champions',
    'tournamentSynonyms': ['Ligue des Champions', 'Ligue des Champions', 'Ligue des Champions'],
    'team0Uid': 41,
    'team0Text': 'Juventus Turin',
    'team0Synonyms': ['Juventus Turin', 'Juventus de Turin', 'Juventus Turin', 'Juventus Turin', 'Juventus'],
    'team0Support': 0,
    'team1Uid': 70,
    'team1Text': 'Atletico Madrid',
    'team1Synonyms': ['Atletico Madrid', 'Atletico Madrid', 'Atletico Madrid', 'Atlético de Madrid'],
    'team1Support': 0,
    'isImportant': true,
    'channels': ['BT Sport 3', 'RMC Sport 1'],
    'team0Icon': 'Football/Italie/Juventus.gif',
    'team1Icon': 'Football/Espagne/AtleticoMadrid.gif',
    'team0HdIcon': 'hd/Football/Italie/Juventus.png',
    'team1HdIcon': 'hd/Football/Espagne/AtleticoMadrid.png',
};

export default IndexPage;

