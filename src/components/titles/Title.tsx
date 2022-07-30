
import './Title.css';
interface TitleProps {
    text: string;
    name: string;
    style?: string;
}

export function Title(props: TitleProps): JSX.Element{

    return (
        <div className={ props.name + "-Default " + props.name + "-" + props.style}>  

            {props.name !== "Main" &&
            <>
                <h2>{props.text}</h2>
                <h1>{props.text}</h1>
            </>}

            {props.name == "Main" &&
            <>
                <h2>COMPUTER SCIENCE SOCIETY</h2>
                <h1><span>C</span>omputer <span>S</span>cience <span>S</span>ociety</h1>
            </>}
        </div>
    );
}


