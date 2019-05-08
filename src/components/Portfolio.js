import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

import styled from 'styled-components';

const WrapperPortfolioHome = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
`;

const WrapperPortfolio = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	margin-top: 115px;
	margin-bottom: 10px;
`;

const WrapperImageOverlay = styled.div`
	opacity: 0;
	@import url('https://fonts.googleapis.com/css?family=Pathway+Gothic+One');
	font-family: 'Pathway Gothic One', sans-serif;
	font-size: 37px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #000;
	transition: 0.5s;
`;

const Image = styled.div`
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	transition: 0.5s;
`;

const WrapperImage = styled.div`
	position: relative;
	width: 32%;
	height: 600px;
	margin: 10px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
	transition: 0.5s;
	@media (max-width: 1520px) {
		width: 48%;
	}
	@media (max-width: 1020px) {
		width: 97%;
	}
	&:hover {
		box-shadow: 1px 1px 12px #555;
	}
	&:hover ${WrapperImageOverlay} {
		opacity: 1;
	}
	&:hover ${Image} {
		opacity: 0.3;
		background-color: red;
	}
`;

const Portfolio = () => {
	return (
		<StaticQuery
			query={graphql`
				{
					allWordpressWpPortfolio {
						edges {
							node {
								id
								slug
								content
								title
								featured_media {
									source_url
								}
							}
						}
					}
				}
			`}
			render={(props) => (
				<div>
					{window.location.pathname === '/home' ? (
						<WrapperPortfolioHome>
							{props.allWordpressWpPortfolio.edges.map((item) => (
								<WrapperImage key={item.id}>
									<Link to={`/portfolio/${item.node.slug}`}>
										<WrapperImageOverlay>
											<h2>{item.node.title}</h2>
										</WrapperImageOverlay>
										<Image
											style={{ backgroundImage: `url(${item.node.featured_media.source_url})` }}
											alt="img"
										/>
									</Link>
								</WrapperImage>
							))}
						</WrapperPortfolioHome>
					) : (
						<WrapperPortfolio>
							{props.allWordpressWpPortfolio.edges.map((item) => (
								<WrapperImage key={item.id}>
									<Link to={`/portfolio/${item.node.slug}`}>
										<WrapperImageOverlay>
											<h2>{item.node.title}</h2>
										</WrapperImageOverlay>
										<Image
											style={{ backgroundImage: `url(${item.node.featured_media.source_url})` }}
											alt="img"
										/>
									</Link>
								</WrapperImage>
							))}
						</WrapperPortfolio>
					)}
				</div>
			)}
		/>
	);
};

export default Portfolio;
