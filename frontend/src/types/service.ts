import { ReactNode } from "react"

export type serviceScheme = {
    title: string,
    description: string,
    price_byn: string,
    price_rub: string
    popular: boolean
    icon?: ReactNode
}