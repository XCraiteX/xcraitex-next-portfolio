import { ReactNode } from "react";

export default function SectionCard({children, id, className}: {children?: ReactNode, className?: string, id?: string}){
    return(
        <section id={id} className="h-screen w-screen flex-shrink-0 snap-center">
            <div className={`section h-full overflow-y-auto flex flex-col items-center pt-20 ${className}`}>
                {children}
            </div>
        </section>
    )
}