/* 
 * Placeholder components that displays a message work work in progress pages
 * (or broken pages that need to be fixed but can't be done so immediately)
 * -> function TempPage() - Make export function to be called to render component
 */
import { useEffect, useState } from "react";
import './temp.css'
function Add(x: any,y: any) {
  return x+y;
}
/* Placeholder components that displays a message work work in progress pages
 * (or broken pages that need to be fixed but can't be done so immediately)
 */

//this is a comment
//this is another comment.

export function TempPage(): JSX.Element { 
  let z = Add(2,3);
  return (
    <>
      <div className="Tmp_body">
        <h1>Coming Soon</h1>
        <h2>Hello World{z}</h2>
      </div>  
    </>
  );
}
