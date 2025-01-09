
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>

  ________  ________   __________  ________ 
 /_  __/ / / / ____/  / ____/ __ \/  _/ __ \
  / / / /_/ / __/    / / __/ /_/ // // / / /
 / / / __  / /___   / /_/ / _, _// // /_/ / 
/_/ /_/ /_/_____/   \____/_/ |_/___/_____/  
                                            

</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
