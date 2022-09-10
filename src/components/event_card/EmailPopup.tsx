import { atcb_action, atcb_init } from 'add-to-calendar-button';
import React, { useState } from "react";

export function EmailPopup(): JSX.Element {
    React.useEffect(atcb_init, []);
    return (
        <div style={{width: "100px", height: "1000px", backgroundColor: "red"}}>qieorgbnqoeirnab[oineqwtpinbp[eniafd[poivnbqa'loefr[invgb'oirsengv[oienj[pogiv
        <div className="atcb">
            {'{'}
            "name":"Add the title of your event",
            "description":"A nice description does not hurt",
            "startDate":"2022-02-21",
            "endDate":"2022-03-24",
            "startTime":"10:13",
            "endTime":"17:57",
            "location":"Somewhere over the rainbow",
            "label":"Add to Calendar",
            "options":[
            "Apple",
            "Google",
            "iCal",
            "Microsoft365",
            "Outlook.com",
            "Yahoo"
            ],
            "timeZone":"Europe/Berlin",
            "iCalFileName":"Reminder-Event"
            {'}'}
        </div>
        </div>
    );
}