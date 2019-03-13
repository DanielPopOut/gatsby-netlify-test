import React from 'react';
import MatchToCome from './match/MatchToCome';


export default ({pageContext: {match}}) => (
    match ? <MatchToCome match={match}/> : <div>No match amigo</div>
)


