/*
    This file implements header. It takes data from header_footer.json. 
    This file has buttons according to 'pages' in json file.


    Update Aug 15, 2022 (Aleksandr):
        - Fix margins
        - Make button active when you are on that page
*/

import './Header.css'
import data from "../content/header_footer.json";
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Header(): JSX.Element  {

    const location = useLocation().pathname;
    const [name, setName] = useState("");

    function updateName(){
        data.pages.forEach(page => {
            if(page.link === location){
                setName(page.link);
            }
        })
    }

    function getActiveButton(String: string){
        if(String === name){
            return 'active';
        }
        return '';
    }

    useEffect(() => {

        updateName();

    }, [location]);

    return (
        <div className='Header'>
            <div className='Header-Container'>
                <Link to="/">
                    <img 
                        alt='Computer Science Society Logo'
                        src={data.Logo}
                        id="Logo">
                    </img>
                </Link>
                <div className='Header-Menu'>
                    {data.pages.map((page, index) => {
                        return(
                        <Link to={page.link}>
                            <button className={"header " + getActiveButton(page.link)}>{page.name}</button>
                        </Link>
                        ) 
                    })}
                    <input placeholder='Search...' type='text' className='searchbox'></input>
                </div>
            </div>
        </div>        
    )
}