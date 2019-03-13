import React, { Component } from 'react';
import { Link, navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import axios from 'axios';
import '../components/index.css';
import MatchToCome from '../components/match/MatchToCome';
import ResearchBar from '../components/bars/researchBar';

class IndexPage extends Component {

    render() {

        return <Layout menuSelected={1} headerText=' fake bar page'>
            <ResearchBar placeHolder='Bar'
                         onSearch={searchCriteria => console.log(searchCriteria)}/>
            {/* TODO delete */}
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
            <div className='flex justify-content-space-around'>
                <h1>Page accueil : choisir lien ci dessous :</h1>
            </div>

            <div className='column'>
                <Link to="/matches/">Go to pages with matches charged on build</Link>
                <Link to="/matches-dynamic/">Go to pages with matches downloaded when component shows</Link>
                <Link to="/page-2/">Go to pa2ge Loup Test2</Link>
            </div>
        </Layout>;
    }

    componentDidMount() {
        // this.fetchMatchesToCome();
    }
}

export default IndexPage;


