import { FunctionComponent, useState } from "react";
import MobileHeader from "../../components/mobile_components/MobileHeader";
import MobileMainContent from "../../components/mobile_components/MobileMainContent";
import styles from "./mobileView.module.css";
import MobileSidebar from "../../components/mobile_components/MobileSidebar";
import Form from "../../components/form/Form";

const MobileView: FunctionComponent = () => {
  const [activeSidebar, setActiveSidebar] = useState<boolean>(false);
  const [activeForm, setActiveForm] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div>
        <div
          className={`${styles.mobileSidebar} ${
            activeSidebar ? styles.active : ""
          }`}
        >
          <div className={styles.mobileWrapper}>
            <MobileSidebar
              setActiveSidebar={setActiveSidebar}
              activeSidebar={activeSidebar}
            />
          </div>
        </div>
        <div className={styles.mobileHeaderComp}>
          <MobileHeader
            setActiveSidebar={setActiveSidebar}
            activeSidebar={activeSidebar}
          />
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
        <div className={styles.mainContent}>
          <MobileMainContent
            setActiveForm={setActiveForm}
            activeForm={activeForm}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileView;
