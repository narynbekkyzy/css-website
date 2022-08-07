/*
    This file implements title component.
    TitleProps has 3 elements:
        - text: the content of title (which will be displayed)
        - name: name of the title (Primary, Main, or Footer)
        - styling: style of title
    Example how to write Title component: 
        <Title 
            text='abc' 
            name={'Primary'}
            styling={'RightBlack'}
        />
    
    Name and styling are built based on Figma. Choose 1 name and 1 styling for each Title:
        - name={'Primay'}:
            + styling={LeftWhite}
            + styling={RightWhite}
            + styling={MiddleWhite}
            + styling={LeftBlack}
            + styling={RightBlack}
            + styling={MiddleBlack}
        - name={'Main'}
            + styling={'White'}
            + styling={'Black'}
        - name ={'Footer'}
            + styling={'White'}
            + styling={'Black'}
            + styling={'Red'}

*/
import './Title.css';
interface TitleProps {
    text: string;
    name: string;
    styling?: string;
}

export function Title(props: TitleProps): JSX.Element{

    return (
        <div className={ props.name + "-Default " + props.name + "-" + props.styling}>  

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


