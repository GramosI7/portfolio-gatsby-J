import React from 'react';
import Layout from '../components/layout';
import Portfolio from '../components/Portfolio';

export default ({ pageContext }) => (
	<Layout>
		{/* <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} /> */}
		{/* <div dangerouslySetInnerHTML={{ __html: pageContext.content }} /> */}
		<Portfolio />
	</Layout>
);
