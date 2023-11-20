import bellB from "/bellB.svg";
import barchart from "/barchart.svg";
import dropdown from "/dropdown.svg";
import clock from "/clock.svg";
import React from "react";

let url = "";

const contents = [
  {
    key: 1,
    iconName: bellB,
    anchorClass: "",
    anchorText: "Save",
    inputType: "checkbox",
    inputClass: "hidden",
    secondClass: "corousel-item",
    paraOne: "We'll be sending notifications to you here",
    inputTwoType: "email",
    inputTwoClass: "",
    inputTwoPlaceholder: "hello@losh.one",
    buttonClass: "hidden",
    paraTwoClass: "hidden",
  },
  {
    key: 2,
    iconName: barchart,
    anchorClass: "hidden",
    anchorText: "",
    inputType: "checkbox",
    inputClass: "",
    secondClass: "corousel-item-notify",
    paraOne: "Notify me when any wallets move more than",
    inputTwoType: "",
    inputTwoClass: "hidden",
    inputTwoPlaceholder: "",
    buttonClass: "",
    spanContent: "$1,000",
    paraTwoClass: "hidden",
  },
  {
    key: 3,
    iconName: clock,
    anchorClass: "hidden",
    anchorText: "",
    inputType: "checkbox",
    inputClass: "",
    secondClass: "corousel-item-notify",
    paraOne: "Notify me when any wallet dormant for",
    inputTwoType: "",
    inputTwoClass: "hidden",
    inputTwoPlaceholder: "",
    buttonClass: "",
    spanContent: ">30days",
    paraTwoClass: "",
    paraTwoContent: "",
  },
];
const delay = 2500;

function InfiniteCarousel() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef<number | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === contents.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div
        className="corousel-container"
        style={{ transform: `translate3d(${-index * 33}%, 0, 0)` }}
      >
        {contents.map((item, index) => (
          <div className="item" key={index}>
            <div className="corousel-item-btn">
              <img className="icon" src={item.iconName} alt="icon image" />
              <a href={url} className={item.anchorClass}>
                {item.anchorText}
              </a>
              <input className={item.inputClass} type={item.inputType} />
            </div>

            <div className={item.secondClass}>
              <p>{item.paraOne}</p>
              <input
                className={item.inputTwoClass}
                type={item.inputTwoType}
                placeholder={item.inputTwoPlaceholder}
              />
              <button className={item.buttonClass}>
                <span>{item.spanContent}</span>
                <img className="icon" src={dropdown} alt="dropdown icon" />
              </button>
              <p className={item.paraTwoClass}>becomes active</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default InfiniteCarousel;
