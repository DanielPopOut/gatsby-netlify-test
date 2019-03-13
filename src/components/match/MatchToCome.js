import React  from 'react';


const MatchToCome = ({ match, children, onClick = '' }) => (
    <div className='match column margin-auto ' onClick={()=>-onClick()}>
        <div>{getTime(match.datetime)}</div>
        <div className='flex justify-content-space-around'>
            <TeamIcon url={match.team0HdIcon}/>
            <div className='text-bold'>{match.team0Text + ' - ' + match.team1Text}</div>
            <TeamIcon url={match.team1HdIcon}/>

            {/*<div className='team-icon'>{match.team1HdIcon ? <img className='team-icon' src={'http://www.allomatch.com/images/progmatch/equipes/' + match.team1HdIcon}/> : "" }</div>*/}
        </div>
        <div>{match.sportName + ' - ' + match.tournamentText}</div>
        {children}
    </div>
);

export default MatchToCome


const TeamIcon = ({url}) => (
    <div className='team-icon'>
        {url ?
            <img className='team-icon ' src={'http://www.allomatch.com/images/progmatch/equipes/' + url}/>
            : ''}
    </div>
);

//Format matchDateTime : '2019-03-13 21:00:00'
const getTime = (matchDateTime) => matchDateTime.split(' ')[1].slice(0,5)

