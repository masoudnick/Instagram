import { useState, useEffect } from "react";

const useInfiniteScroll = (callback, element) => {
  const [isFetching, setIsFetching] = useState(false);
  console.log(element);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function isScrolling() {
    console.log("scrolling");
    if (
      element.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }
  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
