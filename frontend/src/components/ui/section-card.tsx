import { ReactNode } from "react";

export default function SectionCard({children, id, className = "flex items-center justify-center flex-col"}: {children?: ReactNode, className?: string, id?: string}){
    return(
        <section id={id} className={`min-h-screen w-screen flex-shrink-0 snap-center overflow-hidden ${className}`}>{children}</section>
    )
}