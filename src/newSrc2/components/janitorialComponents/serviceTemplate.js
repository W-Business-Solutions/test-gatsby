import React from 'react';
import Navbar from '../navbar/navbar';
import SmallHeader from '../smallHeader/smallHeader';
import Footer from '../footer/newFooter';

function JanitorialService(props) {
	const { title, subtitle, children, page } = props;

	return (
		<>
			<Navbar page='service' />
			<SmallHeader
				title={title}
				page={page}
				template='janitorial'
				subtitle={subtitle}
			/>
			{children}
			<Footer />
		</>
	);
}

export default JanitorialService;
