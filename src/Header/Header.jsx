import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.nav}>
<Link to="/" ><img className={styles.logo} src="https://media1.giphy.com/media/ZCSbHLCd1cdEYw7rw4/giphy.gif" alt="diy logo"/></Link>
<nav>
<ul className={styles.list}>
<li className={styles.li}><Link className={styles.navlink} to="/diylist">All crafts</Link></li>
<li className={styles.li}><Link className={styles.navlink} to="/category">Category</Link></li>
<li className={styles.li}><Link className={styles.navlink} to="/subscribe">Subscribe</Link></li>
<li className={styles.li}><Link className={styles.navlink} to="/aboutus">About us</Link></li>
<li className={styles.li}><Link className={styles.navlink} to="/contactus">Contact Us</Link></li>
</ul>
</nav>
</header>

    )
}

export default Header;