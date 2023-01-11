/* 
 * Placeholder components that displays a message work work in progress pages
 * (or broken pages that need to be fixed but can't be done so immediately)
 * -> function TempPage() - Make export function to be called to render component
 */
import { useEffect, useState } from "react";
import './temp.css'

/* Placeholder components that displays a message work work in progress pages
 * (or broken pages that need to be fixed but can't be done so immediately)
 */
export function TempPage(): JSX.Element { 
  return (
    <>
      <div className="Tmp_body">
        <h1>Coming Soon</h1>
      </div>  
    </>
  );
}
