import './Footer.css'

function Divider(): JSX.Element {
    return(
        <svg width="1400" height="2" viewBox="0 0 1400 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.38281C0 1.10667 0.223858 0.882812 0.5 0.882812H1399.5C1399.78 0.882812 1400 1.10667 1400 1.38281C1400 1.65895 1399.78 1.88281 1399.5 1.88281H0.500011C0.223869 1.88281 0 1.65895 0 1.38281Z" fill="white"/>
        </svg>
    )
}

export function Footer(): JSX.Element {
    return (
        <>
            <div className="Footer">
                <div className="Footer-First">

                </div>

                <Divider/>

                <div className="Footer-Second">

                </div>
            </div>
        </>
    )
}