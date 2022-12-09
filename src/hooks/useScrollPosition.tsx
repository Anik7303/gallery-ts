import { useEffect, useState } from "react";

/***
 * Returns current scroll position in y-axis
 * @returns {number} current scroll position in y axis
 */
function useScrollPosition(): [number] {
  const [position, setPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [position];
}

export default useScrollPosition;
