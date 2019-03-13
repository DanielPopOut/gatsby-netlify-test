import React, { Component } from 'react';
import { navigate } from 'gatsby';
import MatchToCome from './MatchToCome';

class MatchesForSpecificDay extends Component {
    //RQ : pb, logique ici ==> lors de recherche n'affichera pas tous les matchs ?
    SHOW_ALL_MATCHES = 'Afficher tous les matchs du jour';
    HIDE_ALL_MATCHES = 'Cacher tous les matchs du jour';
    getMatchesToShow = () => {
        return this.state.showAllMatches ? this.props.matches : this.props.matches.filter(match => match.isImportant);
    };
    getHideShowMatchesMessageToShow = () => this.state.showAllMatches ? this.HIDE_ALL_MATCHES : this.SHOW_ALL_MATCHES;

    constructor(props) {
        super(props);
        this.state = {showAllMatches: props.matches.length < 4};
        console.log('show all matches', props.matches.length < 4);
    }

    render() {
        return <div>
            <div className='flex dateDiv' style={{backgroundColor: 'var(--primary-color)'}}>{this.props.day}</div>
            {
                this.getMatchesToShow().map(
                    match =>
                        <MatchToCome match={match} key={match.uid}
                                     onClick={() => navigate('/match/' + match.uid + '/')}
                        >
                            <div>{this.props.withChannels ? match.channels.join(', ') : ''}</div>
                        </MatchToCome>,
                )
            }
            <div className='showAllMatchesDiv'
                 onClick={() => this.setState({showAllMatches: !this.state.showAllMatches})}> {this.getHideShowMatchesMessageToShow()} </div>
        </div>;
    }
}


export default MatchesForSpecificDay