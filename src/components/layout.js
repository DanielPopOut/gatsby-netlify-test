/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import './layout.css';
import BottomAppBar from './bars/bottomAppBar';

const Layout = ({children, menuSelected, headerText}) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <div>
                {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        paddingTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        maxHeight: '100%',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    className='height-100 position-absolute '
                >
                    <div className='allomatch-banner'>Allomatch : {headerText}</div>
                    <main className='flex-1 overflow-scroll'>{children}</main>
                    <BottomAppBar selected={menuSelected}/>
                </div>
            </div>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
