import { ReactNode } from "react"

export default function NavLink({ children, href }: { href: string, children?: ReactNode }){
    return(
        <a href={href} className="relative group">
            <span>{children}</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>
    )
}