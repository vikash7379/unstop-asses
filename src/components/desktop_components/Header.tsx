import { FunctionComponent } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.headerMain}>
      <nav className={styles.headerWrapper}>
        <section className={styles.firstSec}>
          <div>Assessment</div>
          <img alt="svg" src="images/vector-298.svg" />
          <ul className={styles.navLink}>
            <li className={styles.myAssessmentsWrapper}>
              <a href="#">My Assessments</a>
            </li>
          </ul>
        </section>
        <div className={styles.mobileViewIcon}>
          <Link to={'/mobile-view'}>
            <img alt="icon" src="images/mobile-screen-share.svg" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
