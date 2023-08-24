import { FunctionComponent } from "react";
import styles from "./sidebarDesktop.module.css";


const SidebarDesktop: FunctionComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.wrapper}>
          <ul>
            <li className={styles.dashLink}>
              <img alt="" src="images/dashboard.svg" />
              <a href="#">Dashboard</a>
            </li>
            <li className={`${styles.activeLink} ${styles.dashLink}`}>
              <img alt="" src="images/note-alt.svg" />
              <a href="#">Assessment</a>
            </li>
            <li className={styles.dashLink}>
              <img alt="" src="images/quiz.svg" />
              <a href="#">My Library</a>
            </li>
            <li>
              <img alt="" src="images/bill-and-plan-line.svg" />
            </li>
          </ul>
          <div>
            <img alt="" src="images/vector-267.svg" />
            <div className={styles.adminLink}>
              <div className={styles.adminWrapper}>
                <div>Admin</div>
              </div>
              <div className={styles.adminMedsParent}>
                <img alt="" src="images/admin-meds.svg" />
                <div>
                  <p>Round</p>
                  <p>Status</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SidebarDesktop;
