import * as elem from "./utils/elements.js";
import { XMLRequest } from "./utils/xml-http-request.js";


////////////////////////////////////////////////////////////////////////////////////////////////
fetch('http://127.0.0.1:5500')
.then(response => {
     if (!response.ok) {
          throw new Error(`[[ERROR]] ${response.status}: Request to Gateway Failed`)
     }
     return response.json()
})
.then(data => console.log(data))
.catch(error => console.log(`[ERROR]: ${error}`))
////////////////////////////////////////////////////////////////////////////////////////////////


// 7. Single Page Effect
const theme_button = document.createElement('button')
theme_button.innerText = 'Change Theme'

elem.HEADER.appendChild(theme_button)


// 8. Change Theme
const bodyStyle = elem.BODY.style

theme_button.onclick = () => {
    
}