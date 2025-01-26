"use client";

import classNames from "./custom-loading.module.css";
import clsx from "clsx";

const CustomLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <div className={classNames.windows8}>
        <div className={clsx(classNames.wBall, classNames.wBall_1)}>
          <div className={clsx(classNames.wInnerBall, "bg-primary")}></div>
        </div>
        <div className={clsx(classNames.wBall, classNames.wBall_2)}>
          <div className={clsx(classNames.wInnerBall, "bg-primary")}></div>
        </div>
        <div className={clsx(classNames.wBall, classNames.wBall_3)}>
          <div className={clsx(classNames.wInnerBall, "bg-primary")}></div>
        </div>
        <div className={clsx(classNames.wBall, classNames.wBall_4)}>
          <div className={clsx(classNames.wInnerBall, "bg-primary")}></div>
        </div>
        <div className={clsx(classNames.wBall, classNames.wBall_5)}>
          <div className={clsx(classNames.wInnerBall, "bg-primary")}></div>
        </div>
      </div>
    </div>
  );
};

export default CustomLoading;
