import { FunctionComponent, useState } from "react";
import Header from "../../components/desktop_components/Header";
import States from "../../components/desktop_components/States";
import AssessCard from "../../components/desktop_components/AssessCard";
import SidebarDesktop from "../../components/desktop_components/SidebarDesktop";
import styles from "./desktopView.module.css";
import Form from "../../components/form/Form";

const DesktopView: FunctionComponent = () => {
  const [activeForm, setActiveForm] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.assessmentsOverviewParent}>
              <div>Assessments Overview</div>
              <div className={styles.staticsWrapper}>
                <div className={styles.scContainer}>
                <States
                  heading="Total Assessment"
                  icons="/frame-1000009100.svg"
                  data="34"
                  />
                </div>
                {/* <img alt="line vector" src="images/vector-251.svg" /> */}
                <div className={styles.candidatesParent}>
                  <p>Candidates</p>
                  <div className={styles.candidatesDetails}>
                    <img alt="" src="images/frame-1000009353.svg" />
                    <div className={styles.cdChild}>
                      <div className={styles.parent}>
                        <b className={styles.b}>11,145</b>
                        <div className={styles.highlight}>+89</div>
                      </div>
                      <div className={styles.totalCandidate}>
                        Total Candidate
                      </div>
                    </div>
                    <img
                      className={styles.vectorIcon}
                      alt="line vector"
                      src="images/vector-250.svg"
                    />
                    <div className={styles.cdChild}>
                      <div className={styles.parent}>
                        <b className={styles.b}>1,14</b>
                        <div className={styles.highlight}>+89</div>
                      </div>
                      <div className={styles.totalCandidate}>Who Attamped</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="images/vector-251.svg"
                />
                <div className={styles.candidatesSourceParent}>
                  <div className={styles.candidates}>Candidates Source</div>
                  <div className={styles.candidatesDetails}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="images/frame-1000005832.svg"
                    />
                    <div className={styles.cdChild}>
                      <div className={styles.parent}>
                        <b className={styles.b}>11,000</b>
                        <div className={styles.highlight}>+89</div>
                      </div>
                      <div className={styles.totalCandidate}>E-mail</div>
                    </div>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="images/vector-250.svg"
                    />
                    <div className={styles.cdChild}>
                      <div className={styles.parent}>
                        <strong>145</strong>
                        <p className={styles.highlight}>+89</p>
                      </div>
                      <div className={styles.totalCandidate}>Social Share</div>
                    </div>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="images/vector-250.svg"
                    />
                    <div className={styles.cdChild}>
                      <div className={styles.parent}>
                        <strong className={styles.b}>145</strong>
                        <p className={styles.highlight}>+89</p>
                      </div>
                      <div className={styles.totalCandidate}>Unique Link</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="images/vector-251.svg"
                />
                <States
                  heading="Total Purpose"
                  icons="/frame-10000091001.svg"
                  data="11"
                />
              </div>
            </div>
            <div className={styles.assessmentsOverviewParent}>
              <div>
                <p>My Assessment</p>
              </div>
              <div className={styles.cardsContainer}>
                <div className={styles.cardsWrapper}>
                  <div
                    className={styles.newAssesCard}
                    onClick={() => setActiveForm(!activeForm)}
                  >
                    <div className={styles.cardHeading}>
                      <div className={styles.addWrapper}>
                        <img
                          className={styles.addIcon}
                          alt="icon"
                          src="images/add.svg"
                        />
                      </div>
                      <p>New Assessment</p>
                    </div>
                    <p className={styles.para}>
                      From here you can add questions of multiple types like
                      MCQs, subjective (text or paragraph)!
                    </p>
                  </div>
                  <div className={styles.card}>
                    <AssessCard />
                  </div>
                  <div className={styles.card}>
                    <AssessCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.form} ${
            activeForm ? styles.activeFormDisp : ""
          }`}
        >
          <div className={`${styles.formWrapper} `}>
            <Form setActiveForm={setActiveForm} activeForm={activeForm} />
          </div>
        </div>
      </div>
      <div className={styles.sidebarContainer}>
        <SidebarDesktop />
      </div>
    </div>
  );
};

export default DesktopView;
