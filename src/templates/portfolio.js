import React from 'react';
import Layout from '../components/layout';
import Portfolio from '../components/Portfolio';
import styled from 'styled-components';

const ContainerPortfolio = styled.div`
	max-width: 960px;
	margin: 115px auto 0;
`;

export default ({ pageContext }) => (
	<Layout>
		<ContainerPortfolio>
			<h1>{pageContext.title}</h1>
			<div>{pageContext.acf.Text_portfolio}</div>
			<div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
		</ContainerPortfolio>
		<Portfolio />
	</Layout>
);
