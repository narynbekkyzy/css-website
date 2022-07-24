
import './Title.css';

interface TitleProps {
    title: string;
    style: string;
}

export function Title(props: TitleProps): JSX.Element{

    return (
        <div className={ "Title-Default Title-" + props.style}>
            <h2>{props.title}</h2>
            <h1>{props.title}</h1>
        </div>
    );

}

