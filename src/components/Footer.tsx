/**
 * Footer.tsx is the footer displayed in every page.
 * -> function Divider() - make Divider responsive regarding to computer size.
 * -> function Footer() - primary export function for the component
 **/

import './Footer.css'
import data from "../content/header_footer.json";
import { Title } from '../components/titles/Title';
import { Link } from 'react-router-dom';

// calculating the size of divider in footer
function Divider(): JSX.Element {
    return(
        <svg width="auto" height="2" viewBox="0 0 auto 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.38281C0 1.10667 0.223858 0.882812 0.5 0.882812H1399.5C1399.78 0.882812 1400 1.10667 1400 1.38281C1400 1.65895 1399.78 1.88281 1399.5 1.88281H0.500011C0.223869 1.88281 0 1.65895 0 1.38281Z" fill="white"/>
        </svg>
    )
}

export function Footer(): JSX.Element {
    return (
        //most outer container for footer including upper and lower black padding
        <div className="Footer">
            {/* outer container for footer excluding black padding */}
            <div className="Footer-Container">
                {/* part upper divider */}
                <div className="Footer-First">
                    {/* Left part exluding clickable text */}
                    <div className='Footer-First-Left'>
                        <Link to="/">
                            <img 
                                alt='Computer Science Society Logo'
                                src={data.circle_logo}>
                            </img>
                        </Link>
                        <div>
                            <Title 
                                text={'Computer Science Society'} 
                                name={'Footer'} styling={"White"}
                            />
                            <p>
                                {data.css_description}
                            </p>
                        </div>
                    </div>
                    {/* Clickable text linking to pages */}
                    <div className='Footer-First-Right'>
                        {data.pages.map((page, index) => {
                           return(
                            <Link to={page.link}>
                                <button className='footer'>{page.name}</button>
                            </Link>
                           ) 
                        })}
                    </div>
                </div>

                <Divider/>      
                
                {/* Logo and Media */}
                <div className="Footer-Second">
                    <a href='https://www.kzoo.edu/' target="_blank" rel="noreferrer noopener">
                        <img 
                            alt="Kalamazoo College Logo (click to acess the website)" 
                            src={data.k_logo} 
                            id="k_logo">
                        </img>
                    </a>
                    <div className='Footer-Second-SocialMedia'>
                        {data.social_media.map((media, index) => {
                            return(
                                <a href={media.link} target="_blank" rel="noreferrer noopener">
                                    <img 
                                        alt={media.name + " logo. Join us!" }
                                        src={media.img}
                                    />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}