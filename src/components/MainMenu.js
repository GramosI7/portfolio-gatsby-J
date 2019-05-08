import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './SiteInfo';

const WrapperAllMenu = styled.div`position: relative;`;

const MainMenuWrapperHome = styled.div`
	display: flex;
	background-color: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
`;

const MainMenuWrapper = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	background-color: white;
	width: 100%;
	box-shadow: 1px 1px 12px #555;
	z-index: 1;
`;

const MenuLogo = styled(Link)`
	padding: 16px 16px;
`;

const MenuItemWrapper = styled.div`
	margin-left: auto;
	display: flex;
`;

const MenuItemHome = styled(Link)`
    color: white;
    text-decoration: none;
	display: flex;
	align-items: center;
	padding: 16px 16px;
	font-size: 24px;
`;

const MenuItem = styled(Link)`
    color: black;
    text-decoration: none;
	display: flex;
	align-items: center;
	padding: 16px 16px;
	font-size: 24px;
`;

const WrapperContentHeader = styled.div`
	position: absolute;
	left: 50%;
	top: 45%;
	transform: translate(-50%, -50%);
`;

const TitleContentHeader = styled.h1`
	@import url('https://fonts.googleapis.com/css?family=Anton');
	font-family: 'Anton', sans-serif;
	font-size: 90px;
`;
const InfoContentHeader = styled.p`
	@import url('https://fonts.googleapis.com/css?family=Pathway+Gothic+One');
	font-family: 'Pathway Gothic One', sans-serif;
	font-size: 72px;
	margin-top: -23%;
`;

const MainMenu = () => (
	<StaticQuery
		query={graphql`
			{
				allWordpressPage {
					edges {
						node {
							title
							content
							acf {
								video_home {
									source_url
								}
							}
						}
					}
				}
				allWordpressWpApiMenusMenusItems {
					edges {
						node {
							items {
								title
								object_slug
							}
						}
					}
				}
			}
		`}
		render={(props) => (
			<div>
				{window.location.pathname === '/home' ? (
					<WrapperAllMenu>
						<MainMenuWrapperHome>
							<MenuLogo to={props.allWordpressWpApiMenusMenusItems.edges[0].node.items[0].object_slug}>
								<SiteInfo />
							</MenuLogo>
							<MenuItemWrapper>
								<MenuItemHome
									to={props.allWordpressWpApiMenusMenusItems.edges[0].node.items[1].object_slug}
								>
									{props.allWordpressWpApiMenusMenusItems.edges[0].node.items[1].title}
								</MenuItemHome>
								<MenuItemHome
									to={props.allWordpressWpApiMenusMenusItems.edges[0].node.items[2].object_slug}
								>
									{props.allWordpressWpApiMenusMenusItems.edges[0].node.items[2].title}
								</MenuItemHome>
							</MenuItemWrapper>
						</MainMenuWrapperHome>
						<video width="100%" height="auto" loop autoPlay>
							<source
								src={props.allWordpressPage.edges[2].node.acf.video_home.source_url}
								type="video/mp4"
							/>
						</video>
						<WrapperContentHeader>
							<TitleContentHeader>{props.allWordpressPage.edges[2].node.title}</TitleContentHeader>
							<InfoContentHeader
								dangerouslySetInnerHTML={{ __html: props.allWordpressPage.edges[2].node.content }}
							/>
						</WrapperContentHeader>
					</WrapperAllMenu>
				) : (
					<MainMenuWrapper>
						<MenuLogo to={props.allWordpressWpApiMenusMenusItems.edges[0].node.items[0].object_slug}>
							<SiteInfo />
						</MenuLogo>
						<MenuItemWrapper>
							<MenuItem to={props.allWordpressWpApiMenusMenusItems.edges[0].node.items[1].object_slug}>
								{props.allWordpressWpApiMenusMenusItems.edges[0].node.items[1].title}
							</MenuItem>
							<MenuItem to={props.allWordpressWpApiMenusMenusItems.edges[0].node.items[2].object_slug}>
								{props.allWordpressWpApiMenusMenusItems.edges[0].node.items[2].title}
							</MenuItem>
						</MenuItemWrapper>
					</MainMenuWrapper>
				)}
			</div>
		)}
	/>
);

export default MainMenu;
