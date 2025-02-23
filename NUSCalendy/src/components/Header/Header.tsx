import './Header.css'
import { AccountMenu } from './AccountMenu'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import Logo from '../../assets/coconut-svgrepo-com.svg';


export const Header = () => {
    return (
        <>
            <div className="header">
                <div className='logo'>
                    <Link to={"/"}>
                        <img src={Logo} alt="" style={{ width: "2.5rem", height: "auto" }} />
                    </Link>
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