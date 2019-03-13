import React from 'react';
import { navigate } from 'gatsby';


const appBarElements = [
    {text: 'Matchs', icon: '', urlToNavigateTo:'/matches/'},
    {text: 'Bars', icon: '', urlToNavigateTo:'/bars/'},
    {text: 'Guide TV', icon: '', urlToNavigateTo:'/tv-guide/'},
];

const BottomAppBar = ({selected}) => {
    return <div className='bottom-app-bar '>
        {
            appBarElements.map((appBarElement, index) => <div className='column'
                                                              onClick={() => navigate(appBarElement.urlToNavigateTo)}
                                                              style={{color: selected === index ? 'var(--primary-color)' : ''}}>
                <span>{appBarElement.icon}</span>
                <span>{appBarElement.text}</span>
            </div>)
        }
    </div>;
};

export default BottomAppBar;