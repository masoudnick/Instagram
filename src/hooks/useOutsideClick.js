import { useEffect } from "react";

export default function useClickOutside(
  dropdownToggle,
  dropdownRef,
  setIsActive
) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !dropdownRef.current.contains(event.target) &&
        !dropdownToggle.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownToggle, dropdownRef, setIsActive]);
}
