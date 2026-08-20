import type React from "react";

export const Card = ({children, className}:{children:React.ReactNode, className?:string}) => {
  return (
    <div className={` w-[95%]  bg-primary mx-auto border-2 border-border-primary rounded-lg ${className}`}>
        {children}
    </div>
  )
}
