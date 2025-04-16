import { useRouter } from 'next/router'
import React from 'react'

export default function Cabin() {
    const router = useRouter()
    return (
        <div>Cabin #{router.query.cabinId}</div>
    )
}
