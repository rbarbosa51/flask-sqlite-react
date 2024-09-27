import { twMerge } from "tailwind-merge"

export default function PhoneComponent({children, className}){
    return (
        <div className={twMerge("mockup-phone", className)}>
          <div className="camera"></div>
          <div className="display ">
            <div className="artboard artboard-demo bg-white phone-1">
                {children}
            </div>
          </div>
        </div>
    )
}