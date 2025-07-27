"use client"
import { api } from "@/api/api"
import { useEffect, useState } from "react"

export default function Visits(){

    const [visits, setVisits] = useState<number>()

    useEffect(() => {
        api.get_visits().then(data => {
            setVisits(data.visits)
        })
    }, [])

    return(
        <div className="fixed bottom-5 right-5 flex items-center gap-3">
            <div className="w-[15px] h-[15px] bg-linear-to-tl from-[#f0f] to-[#0ff] shadow-[0_0_8px_2px] shadow-[#fff] rounded-full"></div>
            <span className="text-lg">{visits} посещений</span>
        </div>
    )
}