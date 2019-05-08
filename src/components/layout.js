import React from 'react';
import { Helmet } from 'react-helmet';
import MainMenu from './MainMenu';
import styled, { createGlobalStyle } from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const LayoutWrapper = styled.div`margin: 0 auto;`;

const Layout = ({ children }) => (
	<div>
		<StaticQuery
			query={graphql`
				{
					allWordpressWpFavicon {
						edges {
							node {
								url {
									source_url
								}
							}
						}
					}
				}
			`}
			render={(props) => (
				<Helmet>
					<link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} />
				</Helmet>
			)}
		/>
		<GlobalStyles />
		<MainMenu />
		<LayoutWrapper>{children}</LayoutWrapper>
	</div>
);

export default Layout;
