import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { memo } from "react";

const Loadingskeleton = () => {
  return (
    <>
      <div className="px-5">
        {(() => {
          const elements = [];
          for (let i = 1; i <= 7; i++) {
            elements.push(
              <div className="flex py-2" key={i}>
                <Skeleton circle="true" className="w-14 h-14 shrink-0 mr-3" />
                <div className="flex flex-col items-start justify-between h-14 grow py-1.5">
                  <Skeleton className="h-3.5 w-48" />
                  <Skeleton className="h-3.5 w-36" />
                </div>
              </div>
            );
          }
          return elements;
        })()}
      </div>
    </>
  );
};

export default memo(Loadingskeleton);
