import { FunctionComponent } from "react";
import styles from "./assessCard.module.css";


const AssessCard: FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.firstSec}>
        <div>
          <img alt="icons" src="images/frame-1000008703.svg" />
          <div>
            <p className={styles.heading}>Math Assessment</p>
            <div className={styles.jobParent}>
              <p>Job</p>
              <img alt="icon" src="images/vector-333.svg" />
              <div className={styles.calendarTodayParent}>
                <img alt="" src="images/calendar-today.svg" />
                <p>20 Apr 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className={styles.dotIcon} alt="dot" src="images/3-dot1.svg" />
        </div>
      </div>
      <img alt="icon" src="images/vector-332.svg" />
      <div className={styles.secondSec}>
        <div className={styles.secondSecChildOne}>
          <div>
            <div>00</div>
            <div>Duration</div>
          </div>
          <div>
            <div>00</div>
            <div>Questions</div>
          </div>
        </div>
        <div className={styles.secondSecChildTwo}>
          <div className={styles.linkParent}>
            <img className={styles.linkIcon} alt="" src="images/link.svg" />
            <div className={styles.assessmentsOverview}>Share</div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.lpWrapper}>
              <b className={styles.lp}>LP</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessCard;
