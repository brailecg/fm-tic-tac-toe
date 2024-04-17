"use client";

const PrimaryButton = ({ btnText = "Click me", color = "blue" }) => {
  const colorClasses = {
    btnGreen: "bg-[var(--primary-green)]",
    btnYellow: "bg-[var(--primary-yellow)]",
  };

  const hoverColorClasses = {
    btnGreen: "hover:bg-[var(--hover-green)]",
    btnYellow: "hover:bg-[var(--hover-yellow)]",
  };

  const backgroundColorClasses = {
    btnGreen: "bg-[var(--background-green)]",
    btnYellow: "bg-[var(--background-yellow)]",
  };

  const buttonClass = {
    primaryButton:
      "w-full border-0 cursor-pointer relative z-10 h-[var(--mobile-pb-height)] sm:h-[var(--tablet-pb-height)] md:h-[var(--desktop-pb-height)] rounded-[var(--pb-radius)] ",
    shadowButton:
      "absolute top-2 w-full h-full rounded-[var(--pb-radius)]  z-0",
  };

  return (
    <div className={`relative `}>
      <button
        className={`transition-all duration-300 ease-in  ${colorClasses[color]} ${hoverColorClasses[color]} ${buttonClass["primaryButton"]}`}>
        <span className=" font-bold text-xl">{btnText}</span>
      </button>
      <div
        className={`${buttonClass["shadowButton"]}  ${backgroundColorClasses[color]}`}></div>
    </div>
  );
};

export default PrimaryButton;
