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
        return <Layout menuSelected={0} headerText='Données déjà chargées en statique'>
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

export default IndexPage;

