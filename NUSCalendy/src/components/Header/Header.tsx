import './Header.css'
import { AccountMenu } from './AccountMenu'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className='logo'>LOGO</div>
                <div className="title">
                    <h1>NUSCalendy</h1>
                </div>
                <div className='menu'>
                    <Button><AddIcon/> Add Event</Button>
                    <AccountMenu></AccountMenu>
                </div>
            </div>
        </>
    )
}