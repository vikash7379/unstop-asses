import { FunctionComponent } from "react";
import styles from "./mobileHeader.module.css";
import { Link } from "react-router-dom";

type PropsTypes = {
  activeSidebar : boolean,
  setActiveSidebar : React.Dispatch<React.SetStateAction<boolean>>
}

const MobilerHeader: FunctionComponent<PropsTypes> = ({setActiveSidebar,activeSidebar}) => {

  return (
    <div className={styles.headerContainer}>
      <header className={styles.headerWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.segmentWrapper}>
            <img style={{cursor : "pointer"}}  alt="" src="images/segment.svg" onClick={()=>setActiveSidebar(!activeSidebar)}/>
          </div>
          <p>Assessment</p>
        </div>
        <div className={styles.laptopIconWrapper}>
          <Link to={'/'}>
          <img alt="" src="images/laptop-mac.svg" /> &nbsp;
          </Link>
        </div>
      </header>
      <nav>
        <ul className={styles.navContainer}>
          <li className={styles.myAssessmentsWrapper}>
            My Assessments
          </li>
          <li className={styles.unstopAssessmentsWrapper}>
            Unstop Assessments
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobilerHeader;
