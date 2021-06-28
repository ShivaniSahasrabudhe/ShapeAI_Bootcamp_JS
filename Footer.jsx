import React from "react";

function Footer() {
  var curentYear = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @ {curentYear}</p>
    </footer>
  );
}
export default Footer;
