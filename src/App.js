import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { isEmpty } from 'lodash';
import Tutorial from './Tutorial/Tutorial';
import DiyList from './DiyList/DiyList';
import styles from './App.module.css';
import ContactUs from './ContactUs/ContactUs';
import AboutUs from './AboutUs/AboutUs';
import Subscribe from './Subscribe/Subscribe';
import Category from './Category/Category';
import Home from './Home/Home.jsx';
import Header from './Header/Header.jsx';
import Error from './Error/Error.jsx';

function App() {
	const [ fetchedData, setFetchedData ] = useState();

	useEffect(
		() => {
			const fetchData = async () => {
				// performs a GET request
				const response = await fetch('https://demo2793968.mockable.io/crafts');
				const responseJson = await response.json();
				setFetchedData(responseJson);
			};

			if (isEmpty(fetchedData)) {
				fetchData();
			}
		},
		[ fetchedData ]
	);

	return isEmpty(fetchedData) ? null : (
		<div className={styles.body}>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/category" exact component={Category} />
				<Route path="/subscribe" exact component={Subscribe} />
				<Route path="/aboutus" exact component={AboutUs} />
				<Route path="/contactus" exact component={ContactUs} />

        <Route exact path="/diylist">
					<DiyList crafts={Object.values(fetchedData)} />
				</Route>
        
        <Route
					exact
					path={`/diylist/:category`}
					render={({ match }) => {
						const matchCategory = Object.values(fetchedData).filter((craft) => {
							return craft.category === match.params.category;
						});
						return fetchedData ? <DiyList crafts={Object.values(matchCategory)} /> : null;
					}}
				/>
        
        <Route
					exact
					path={`/diylist/:category/:id`}
					render={({ match }) => {
						return fetchedData ? <Tutorial craft={fetchedData[match.params.id]} /> : null;
					}}
				/>

        <Route component={Error} />
			</Switch>

			<footer className={styles.footer}>
				<p className={styles.copyright}>© Copyright 2021</p>
			</footer>
		</div>
	);
}

export default App;
