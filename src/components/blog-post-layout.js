import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import Layout from './layout';

const BlogPostLayout = ({ children, pageContext }) => {
	const { title, date } = pageContext.frontmatter;
	return (
		<Layout>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<article>
				<header style={{ marginBottom: `20px` }}>
					<h1><Link to="/blog">Blog</Link> / {title}</h1>
					<time style={{
						backgroundColor: `#eee`,
						display: `inline-block`,
						padding: `6px 10px`,
						transform: `skewX(15deg)`,
						border: `1px solid #656565`,
						fontSize: `0.8em`
					}}>
						<span style={{
							transform: `skewX(-15deg)`,
							display: `block`
						}}><span style={{ fontSize: `2.3em`, display: `inline-block`, position: `relative`, top: `0.15em` }}>👨‍💻</span> By Adam Tuttle on {format(date, `MMM D, YYYY`)}</span>
					</time>
				</header>
				{children}
			</article>
		</Layout>
	);
};

export default BlogPostLayout;