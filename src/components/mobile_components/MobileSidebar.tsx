import { FunctionComponent } from "react";
import styles from "./mobileSidebar.module.css";

type PropsTypes = {
  activeSidebar: boolean;
  setActiveSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSidebar: FunctionComponent<PropsTypes> = ({
  activeSidebar,
  setActiveSidebar,
}) => {
  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.sidebarWrapper}>
        <li className={styles.menuParent}>
          <div>Menu</div>
          <img
            style={{ cursor: "pointer" }}
            alt=""
            src="images/cros.svg"
            onClick={() => setActiveSidebar(!activeSidebar)}
          />
        </li>
        <li className={styles.frameWrapper}>
          <div className={styles.dashboardParent}>
            <img alt="" src="images/dashboard.svg" />
            <p>Dashboard</p>
          </div>
        </li>
        <li className={styles.frameContainer}>
          <div className={styles.noteAltParent}>
            <img alt="" src="images/note-alt.svg" />
            <p className={styles.assessment}>Assessment</p>
          </div>
          <div className={styles.frameChild} />
        </li>
        <li className={styles.frameWrapper}>
          <div className={styles.dashboardParent}>
            <img alt="" src="images/quiz.svg" />
            <p>My Library</p>
          </div>
        </li>
      </ul>
      <img className={styles.frameItem} alt="" src="images/vector-332.svg" />
      <div className={styles.frameWrapper1}>
        <div className={styles.frameParent1}>
          <div className={styles.dashboardParent}>
            <img alt="" src="images/admin-meds.svg" />
            <p>Round Status</p>
          </div>
          <div className={styles.adminWrapper}>
            <div className={styles.admin}>Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
