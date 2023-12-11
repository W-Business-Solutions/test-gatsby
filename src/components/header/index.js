import React, { Fragment } from 'react';
import './style.css';
import Fade from 'react-reveal/Fade';

function Header(props) {
	let { franchise, title, subtitle } = props;
	return (
		<Fragment>
			<div
				className='header-wrapper'
				name={props.name}
				region={props.region}
			>
				{props.name !== 'locations' && <div className='overlay'></div>}
				<div
					className={
						franchise
							? 'header-text franchise-header'
							: 'header-text'
					}
				>
					{!franchise && title.split(' ').length > 1 ? (
						<>
							<Fade top cascade>
								{title.split(' ')[0]}
							</Fade>
							<Fade top cascade>
								{title.split(' ')[1]}
							</Fade>
						</>
					) : (
						<Fade top cascade>
							{title}
						</Fade>
					)}

					{/* <Fade top cascade>{title}</Fade> */}
					<div className='header-subtext'>{subtitle}</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Header;
