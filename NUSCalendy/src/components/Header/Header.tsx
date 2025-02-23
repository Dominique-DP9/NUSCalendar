import './Header.css'
import { AccountMenu } from './AccountMenu'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className='logo'>
                    <Link to={"/"}>LOGO</Link>
                </div>
                <div className="title">
                    <h1>NUSCalendy</h1>
                </div>
                <div className='menu'>
                    <Link to={"/new"}><Button><AddIcon/> Add Event</Button></Link>
                    <AccountMenu></AccountMenu>
                </div>
            </div>
        </>
    )
}