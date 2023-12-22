import { useEffect, useState } from "react";

interface WindowWithScrollData extends Window {
  dataScroll?: number;
}

const useHeaderScroll = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setChangeColor(scrollY > 100);

      if (scrollY > 400) {
        const scrollDirection =
          scrollY > ((window as WindowWithScrollData).dataScroll || 0)
            ? "down"
            : "up";
        setHide(scrollDirection === "down");
      }

      (window as WindowWithScrollData).dataScroll = scrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { changeColor, hide };
};

export default useHeaderScroll;
