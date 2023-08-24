import { FunctionComponent } from "react";
import styles from "./mobileAssessCard.module.css";

type Props = {
  link?: string;
};

const MobileAssessCard: FunctionComponent<Props> = ({ link }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderWrapper}>
            <img
              className={styles.frameChild}
              alt=""
              src="images/frame-1000008703.svg"
            />
            <div className={styles.mathAssessmentParent}>
              <div>Math Assessment</div>
              <div className={styles.jobParent}>
                <div className={styles.job}>Job</div>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="images/vector-3331.svg"
                />
                <div className={styles.frameWrapper}>
                  <div className={styles.scheduleParent}>
                    <img
                      className={styles.scheduleIcon}
                      alt=""
                      src={'images/schedule.svg'}
                    />
                    <div className={styles.apr23}>20 Apr 23</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dotWrapper}>
            <img className={styles.barChartIcon} alt="" src={'images/3-dot1.svg'} />
          </div>
        </div>
        <img className={styles.frameInner} alt="" src={'images/vector-332.svg'} />
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterWrapper}>
            <div className={styles.parent}>
              <div>00</div>
              <div className={styles.duration}>Duration</div>
            </div>
            <div className={styles.parent}>
              <div>00</div>
              <div className={styles.duration}>Questions</div>
            </div>
          </div>
          <div className={styles.cardLink}>
            <div className={styles.linkParent}>
              <img className={styles.linkIcon} alt="" src={'images/link.svg'} />
              <div className={styles.share}>Share</div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.lpWrapper}>
                <b className={styles.lp}>LP</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAssessCard;
