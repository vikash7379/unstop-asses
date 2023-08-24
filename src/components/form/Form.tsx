import { FunctionComponent } from "react";
import styles from "./form.module.css";

type Props = {
  activeForm: boolean;
  setActiveForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const Form: FunctionComponent<Props> = ({ activeForm, setActiveForm }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.createNewAssessmentParent}>
        <div>Sub Section Details</div>
        <div
          className={styles.crossIcon}
          onClick={() => setActiveForm(!activeForm)}
        >
          <img className={styles.cutIcon} alt="" src="images/cros.svg" />
        </div>
      </div>
      <div className={styles.middleSec}>
        <div className={styles.frameContainer}>
          <div className={styles.nameOfAssessmentWrapper}>
            <p>Name of assessment</p>
          </div>
          <div className={styles.typeHereWrapper}>
            <input
              type="text"
              placeholder="Type Here"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.nameOfAssessmentWrapper}>
            <p className={styles.nameOfSkills}>Purpose of the test is</p>
          </div>
          <div className={styles.typeHereWrapper}>
            <select name="" id="" className={styles.input}>
              <option value="">Select</option>
            </select>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.nameOfAssessmentWrapper}>
            <p className={styles.nameOfSkills}>Description</p>
          </div>
          <div className={styles.typeHereWrapper}>
            <select name="" id="" className={styles.input}>
              <option value="">Select</option>
            </select>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.nameOfAssessmentWrapper}>
            <p>Skills</p>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <div className={styles.frameWrapper}>
                  <div className={styles.skillsName}>
                    <div className={styles.nameOfSkills}>UI/UX and Design</div>
                    <img className={styles.closeIcon} alt="" src="images/cros.svg" />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.skillsName}>
                    <div className={styles.nameOfSkills}>No of Question</div>
                    <img className={styles.closeIcon} alt="" src="images/cros.svg" />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.skillsName}>
                    <div className={styles.nameOfSkills}>Web Development</div>
                    <img className={styles.closeIcon} alt="" src="images/cros.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.frameWrapper}>
                  <div className={styles.skillsName}>
                    <div className={styles.nameOfSkills}>UI/UX and Design</div>
                    <img className={styles.closeIcon} alt="" src="images/cros.svg" />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.skillsName}>
                    <div className={styles.nameOfSkills}>Web Development</div>
                    <img className={styles.closeIcon} alt="" src="images/cros.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typeHereContainer}>
            <div className={styles.typeHereWrapper}>
            <input
              type="text"
              placeholder="Type Here"
              className={styles.input}
            />
          </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.nameOfAssessmentWrapper}>
            <div className={styles.nameOfSkills}>Duration of assessment</div>
          </div>
          <div className={styles.typeHereWrapper}>
            <input
              type="text"
              placeholder="HH:MM:SS"
              className={styles.input}
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <button className={styles.buttons}>Save</button>
      </div>
    </div>
  );
};

export default Form;
