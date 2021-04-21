import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";
import Tutorial from "./Tutorial/Tutorial";
import DiyList from "./DiyList/DiyList";
import styles from "./App.module.css";
import diylogo from "./images/diylogo.jpeg";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";
import Subscribe from "./Subscribe/Subscribe";
import Category from "./Category/Category";


import Home from "./Home/Home.jsx";
import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("https://demo2793968.mockable.io/crafts");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
<div className={styles.body}>
<header className={styles.nav}>
<Link to="/home" ><img className={styles.logo} src="https://media1.giphy.com/media/ZCSbHLCd1cdEYw7rw4/giphy.gif" alt="diy logo"/></Link>
<nav>
<ul className={styles.list}>
<li className={styles.li}><Link className={styles.navlink} to="/category">Category</Link></li>
<li className={styles.li}><Link className={styles.navlink} to="/subscribe">Subscribe</Link></li>
<li className={styles.li}><Link className={styles.navlink} to="/aboutus">About us</Link></li>
<li className={styles.li}><Link className={styles.navlink} to="/contactus">Contact Us</Link></li>
</ul>
</nav>
</header>


<Switch>
<Route path="/home" exact component={Home} />

<Route path="/subscribe" exact component={Subscribe} />
<Route path="/aboutus" exact component={AboutUs} />
<Route path="/contactus" exact component={ContactUs} />

      <Route
        exact
        path={`/diylist/:id`}
        render={({ match }) => {
          // getting the parameters from the url and passing
          // down to the component as props
          return fetchedData ? <Tutorial
            craft={fetchedData[match.params.id]}
          /> : null
        }}
      />

            <Route exact path="/diylist">
              <DiyList crafts={Object.values(fetchedData)} />
            </Route>

            <Route exact path="/category">
              <Category crafts={Object.values(fetchedData)} />
            </Route>




</Switch>


<footer className={styles.footer}>

 <p className={styles.copyright}>© Copyright 2021</p>


</footer>

  </div>


);


}

export default App;
