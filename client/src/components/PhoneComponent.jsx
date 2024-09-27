import { twMerge } from "tailwind-merge";

export default function PhoneComponent({ children, className }) {
  return (
    <div className={twMerge("mockup-phone", className)}>
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
