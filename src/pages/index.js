import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import axios from 'axios';
import '../components/index.css';

class IndexPage extends Component {
    state = {
        comingMatches: [],
    };



    fetchMatchesToCome() {
        axios.get('http://www.allomatch.com/iphone.php/match/upcomingMatches/version/2')
             .then(response => {
                 console.log('good ! ', response.data.length, ' matches found ', response.data);
                 this.setState({comingMatches: response.data.filter(match => match.isImportant).slice(0, 20)});
             })
             .catch(error => {
                 console.log(error);
             });
    }

    render() {
        console.log(this.props);
        // const rickAndMorty = this.props.data;
        // const character = {...rickAndMorty};
        // console.log('character', character);

        return <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
            <div className='flex justify-content-space-around'>
                <h1>Matchs à venir</h1>
                <button onClick={() => {this.fetchMatchesToCome();}}>
                    Find matchs
                </button>
            </div>
            <div>{this.state.comingMatches.map(match => <MatchToCome match={match}/>)}</div>

            <Link to="/page-2/">Go to pa2ge Loup Test2</Link>
        </Layout>;

    }

    componentDidMount() {
        // this.fetchMatchesToCome();
    }


}


export default IndexPage;


// export default ClientFetchingExample

const MatchToCome = ({match, ...props}) => {
    return <div className='match column margin-10-auto'>
        <div className='small-text justify-content-space-between'>
            <span>{match.sportName + ' - ' + match.tournamentText}</span>
            <span>{match.datetime}</span>
        </div>
        <div className='flex justify-content-space-around'>
            <TeamIcon url={match.team0HdIcon}/>
            <div>{match.team0Text + ' - ' + match.team1Text}</div>
            <TeamIcon url={match.team1HdIcon}/>

            {/*<div className='team-icon'>{match.team1HdIcon ? <img className='team-icon' src={'http://www.allomatch.com/images/progmatch/equipes/' + match.team1HdIcon}/> : "" }</div>*/}
        </div>
    </div>;
};

const TeamIcon = ({url}) => {
    return <div className='team-icon'>
        {url ?
            <img className='team-icon' src={'http://www.allomatch.com/images/progmatch/equipes/' + url}/>
            : ''}
    </div>;
};


//data example
const oneMatch = {
    'uid': 93568,
    'datetime': '2019-03-12 00:00:00',
    'sportUid': 20,
    'sportName': 'Basketball',
    'tournamentText': 'NBA',
    'tournamentSynonyms': ['NBA', 'NBA', 'NBA'],
    'team0Uid': 10015,
    'team0Text': 'Washington',
    'team0Synonyms': ['Washington', 'Washington', 'Washington'],
    'team0Support': 0,
    'team1Uid': 1155,
    'team1Text': 'Sacramento Kings',
    'team1Synonyms': ['Sacramento Kings', 'Sacramento Kings', 'Sacramento Kings'],
    'team1Support': 0,
    'isImportant': false,
    'channels': ['beIN SPORTS MAX 4'],
    'team0Icon': null,
    'team1Icon': 'Basket-Ball/Sacramento-Kings.gif',
    'team0HdIcon': null,
    'team1HdIcon': 'hd/Basket-Ball/Sacramento-Kings.png',
};



