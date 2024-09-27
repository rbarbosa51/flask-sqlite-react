import { twMerge } from "tailwind-merge";
import { useRef } from "react";

export default function RippleBtn({ className, rippleColor, children }) {
  const ref = useRef();
  return (
    <button
      ref={ref}
      className={twMerge("relative overflow-hidden", className)}
      onMouseOver={(e) => {
        let ripple = document.createElement("span");
        ripple.style.left = `${e.pageX - e.target.offsetLeft}px`;
        ripple.style.top = `${e.pageY - e.target.offsetTop}px`;
        ripple.classList.add(`ripple-btn`);
        ripple.classList.add(rippleColor);
        ref.current.appendChild(ripple);
        setTimeout(() => {
          ripple.remove();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}
