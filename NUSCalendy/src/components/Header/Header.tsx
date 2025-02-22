import React from 'react'
import './Header.css'
import { Avatar } from '@mui/material'

export const Header = () => {
    return (
        <>
            <div className="header">
                {/* <div className="logo">Logo</div> */}
                <Avatar>Logo</Avatar>
                <div className="title">
                    <h1>NUSCalendy</h1>
                </div>
                <div className="menu">Menu</div>
            </div>
        </>
    )
}