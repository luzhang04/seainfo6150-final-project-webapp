import React from 'react';
import Text from '../Text/Text.jsx';
import styles from './Tutorial.module.css';
import DiyImage from '../DiyImage/DiyImage';

const Tutorial = (props) => {
	return (
		<div className={styles.container}>
			<article className={styles.article}>
				<header>
					<DiyImage url={props.craft.image} name={props.craft.name} />
					<h1>{props.craft.name}</h1>

					<time dateTime={props.craft.timeStamp}>{props.craft.displayDate}</time>
				</header>
				<br />
				<Text text={props.craft.tutorial} />
			</article>
		</div>
	);
};

export default Tutorial;
