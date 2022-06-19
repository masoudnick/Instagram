import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loadingskeleton = () => {
  return (
    <>
      {(() => {
        const elements = [];
        for (let i = 1; i <= 6; i++) {
          elements.push(
            <div className="py-2" key={i}>
              <Skeleton circle="true" className="w-16 h-16 shrink-0 mr-2.5" />
            </div>
          );
        }
        return elements;
      })()}
    </>
  );
};

export { Loadingskeleton };
