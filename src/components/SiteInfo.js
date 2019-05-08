import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
	flex-grow: 1;
	color: #fff;
`;

const ImgLogo = styled.img`height: 70px;`;

const SiteInfo = () => (
	<StaticQuery
		query={graphql`
			{
				allWordpressWpLogo {
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
			<SiteInfoWrapper>
				<ImgLogo src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="logo" />
			</SiteInfoWrapper>
		)}
	/>
);

export default SiteInfo;
