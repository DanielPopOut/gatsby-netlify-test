import React  from 'react';
import { Link } from 'gatsby';


export default ({ pageContext: { match } }) => (
    <div className='match column margin-10-auto'>
        <div className='text-small justify-content-space-between'>
            <span>{match.sportName + ' - ' + match.tournamentText}</span>
            <span>{match.datetime}</span>
        </div>
        <div className='flex justify-content-space-around'>
            <TeamIcon url={match.team0HdIcon}/>
            <div>{match.team0Text + ' - ' + match.team1Text}</div>
            <TeamIcon url={match.team1HdIcon}/>

            {/*<div className='team-icon'>{match.team1HdIcon ? <img className='team-icon' src={'http://www.allomatch.com/images/progmatch/equipes/' + match.team1HdIcon}/> : "" }</div>*/}
        </div>
    </div>
)



const TeamIcon = ({url}) => (
    <div className='team-icon'>
        {url ?
            <img className='team-icon' src={'http://www.allomatch.com/images/progmatch/equipes/' + url}/>
            : ''}
    </div>
)
