import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './DiyItem.module.css';
import DiyImage from '../DiyImage/DiyImage';

const DiyItem = (props) => {
	return (
		<li className={styles.container}>
			<DiyImage url={props.craft.image} name={props.craft.name} />
			<header className={styles.header}>
				<h2>
					<Link className={styles.link} to={`/diylist/${props.craft.category}/${props.craft.id}`}>
						{props.craft.name}
					</Link>
				</h2>

				<div className={styles.content}>
					<time className={styles.time} dateTime={props.craft.timeStamp}>
						{props.craft.displayDate}
					</time>
					<p>{props.craft.description}</p>
				</div>
			</header>
		</li>
	);
};

DiyItem.propTypes = {
	craft: PropTypes.object.isRequired
};
export default DiyItem;
