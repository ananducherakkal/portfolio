import React from "react";
import Button from "../ui/button";
import DoubleDownIcon from "../icon/doubleDownIcon";
interface IScrollButton {}
function ScrollButton(props: IScrollButton) {
  return (
    <Button variant="transparent" className="w-fit flex items-center">
      <div className="mr-2">Scroll down</div>
      <DoubleDownIcon />
    </Button>
  );
}

export default ScrollButton;
