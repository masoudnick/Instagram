import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { memo } from "react";

const Loadingskeleton = () => {
  return (
    <>
      {(() => {
        const elements = [];
        for (let i = 1; i <= 5; i++) {
          elements.push(
            <div className="flex py-2" key={i}>
              <Skeleton circle="true" className="w-8 h-8 shrink-0 mr-3" />
              <div className="flex flex-col items-start grow">
                <Skeleton className="w-32" />
                <Skeleton className="w-24" />
              </div>
            </div>
          );
        }
        return elements;
      })()}
    </>
  );
};

export default memo(Loadingskeleton);
