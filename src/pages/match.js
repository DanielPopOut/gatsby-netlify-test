import React from 'react';
import MatchToCome from '../components/match/MatchToCome';


export default ({pageContext: {match}}) => (
    <MatchToCome match={match}/>
)

