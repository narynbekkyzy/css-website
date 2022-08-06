import './Header.css'
import data from "../../../content/header_footer.json";
import { Link } from 'react-router-dom';

export function Header(): JSX.Element  {
    return (
        <div className='Header'>
            <div className='Header-Container'>
                <Link to="/">
                    <img 
                        alt='Computer Science Society Logo'
                        src={data.circle_logo}
                        id="Logo">
                    </img>
                </Link>
                <div className='Header-Menu'>
                    {data.pages.map((page, index) => {
                        return(
                        <Link to={page.link}>
                            <button className='header'>{page.name}</button>
                        </Link>
                        ) 
                    })}
                    <input placeholder='Search...' type='text' className='searchbox'></input>
                </div>
            </div>
        </div>        
    )
}