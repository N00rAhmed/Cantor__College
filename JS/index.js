new Date().getFullYear()
let date = new Date();
console.log(date.getFullYear());
const copyrightFooter = `
 <p>
  Copyright © ${new Date().getFullYear()} Cantor College
 </p>
`;
document.getElementById('copyrightYear').innerHTML = copyrightFooter;

