import { FunctionComponent } from "react";
import styles from "./mobileMainContent.module.css";
import MobileAssessCard from "./MobileAssessCard";

type Props = {
  activeForm : boolean ,
  setActiveForm : React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMainContent: FunctionComponent<Props> = ({setActiveForm,activeForm}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.frameParent}>
        <div className={styles.myAssessmentParent}>
          <p>My Assessment</p>
          <div className={styles.frameGroup}>
            <div className={styles.searchWrapper}>
              <img alt="" src="images/search.svg" />
            </div>
            <div className={styles.searchWrapper}>
              <img alt="" src="images/filter-list-alt.svg" />
            </div>
            <div className={styles.searchWrapper}>
              <div className={styles.barChartWrapper}>
                <img alt="" src="images/bar-chart.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}
            onClick={()=>setActiveForm(!activeForm)}
          >
            <div className={styles.frameParent1}>
              <div className={styles.addWrapper}>
                <img alt="" src={"images/add1.svg"} />
              </div>
              <div>New Assessment</div>
            </div>
            <p className={styles.para}>
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>
          <MobileAssessCard />
          <MobileAssessCard />
          <MobileAssessCard />
          <MobileAssessCard />
        </div>
      </div>
    </div>
  );
};

export default MobileMainContent;
