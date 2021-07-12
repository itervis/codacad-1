import React from 'react';
import WTFacts from '../images/WTFacts.png';

function Navbar() {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
        <img src={WTFacts} alt="" width="140"/>
    </a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
      <div class="navbar-nav mx-auto">
       
        <a class="nav-link" href="/">Feed</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
        <a class="nav-link" href="/">Pricing</a>
        <a class="nav-link" href="/">Pricing</a>
        {/* <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  {/* </div> */}
</nav>
    )
}

export default Navbar
