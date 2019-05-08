import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import instagram from '../media/instagram.png';
import email from '../media/envelope.png';

const ContainerPortfolioUnderAll = styled.div`
	background-color: #fad9d6;
	height: 100vh;
`;

const ContainerPortfolioUnder = styled.div`
	max-width: 960px;
	margin: 110px auto 0;
	padding-top: 20px;
`;

const ContainerImgContact = styled.div`
	display: flex;
	align-items: center;
`;

const ImgContact = styled.img`
	height: 30px;
	margin-right: 30px;
`;

export default ({ pageContext }) => (
	<ContainerPortfolioUnderAll>
		<Layout>
			<ContainerPortfolioUnder>
				<h1 style={{ marginTop: '110px;' }} dangerouslySetInnerHTML={{ __html: pageContext.title }} />
				{/* <div dangerouslySetInnerHTML={{ __html: pageContext.content }} /> */}
				<ContainerImgContact>
					<ImgContact src={instagram} />
					<p>{pageContext.acf.instagram}</p>
				</ContainerImgContact>
				<ContainerImgContact>
					<ImgContact src={email} />
					<p>{pageContext.acf.e_mail}</p>
				</ContainerImgContact>
			</ContainerPortfolioUnder>
		</Layout>
	</ContainerPortfolioUnderAll>
);
