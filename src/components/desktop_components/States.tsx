import { FunctionComponent, useMemo } from "react";
import styles from "./states.module.css";

type FrameComponent2Type = {
  heading?: string;
  icons?: string;
  data?: string;
};

const States: FunctionComponent<FrameComponent2Type> = ({
  heading,
  icons,
  data,
}) => {
  return (
    <section className={styles.mainContainer}>
      <div>{heading}</div>
      <div className={styles.mainData}>
        <img alt="" src={icons} />
        <strong>{data}</strong>
      </div>
    </section>
  );
};

export default States;
