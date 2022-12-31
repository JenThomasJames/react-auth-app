import React, { forwardRef, useState } from "react";
const BorderInput = forwardRef((props, ref) => {
  const [isFocussed, setIsFocussed] = useState(false);

  let inputStyles =
    "w-full outline-none rounded-lg px-2 py-3 text-base dark:text-slate-300 bg-transparent transition border-2 dark:border-slate-600";
  let labelStyle =
    "block absolute -top-2 px-2 left-3 text-sm bg-white dark:bg-slate-700";
  if (isFocussed) {
    labelStyle += " text-blue-400 dark:text-blue-600";
    inputStyles += " border-blue-400 dark:border-blue-600";
  } else {
    labelStyle += " text-slate-400";
    inputStyles += " border-slate-400";
  }
  if (props.isInvalid) {
    labelStyle += " text-red-400";
    inputStyles += " border-red-400";
  }
  return (
    <div className="relative">
      <input
        className={inputStyles}
        onFocus={() => {
          setIsFocussed(true);
        }}
        onBlur={() => {
          setIsFocussed(false);
        }}
        {...props.config}
        ref={ref}
      />
      <label className={labelStyle}>{props.label}</label>
    </div>
  );
});
export default BorderInput;
