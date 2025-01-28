"use client";

import { cn } from "@/lib/utils";
import classNames from "./custom-loading.module.css";

const CustomLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <div className={classNames.windows8}>
        <div className={cn(classNames.wBall, classNames.wBall_1)}>
          <div className={cn(classNames.wInnerBall, "bg-primary")}></div>
        </div>
        <div className={cn(classNames.wBall, classNames.wBall_2)}>
          <div className={cn(classNames.wInnerBall, "bg-primary")}></div>
        </div>
        <div className={cn(classNames.wBall, classNames.wBall_3)}>
          <div className={cn(classNames.wInnerBall, "bg-primary")}></div>
        </div>
        <div className={cn(classNames.wBall, classNames.wBall_4)}>
          <div className={cn(classNames.wInnerBall, "bg-primary")}></div>
        </div>
        <div className={cn(classNames.wBall, classNames.wBall_5)}>
          <div className={cn(classNames.wInnerBall, "bg-primary")}></div>
        </div>
      </div>
    </div>
  );
};

export default CustomLoading;
