import React from "react";

const TopNav = () => {
    return(
        <>
            <div className= "top-nav">
                <Link to= "/portfolio">Home</Link>
                <Link to= "/portfolio/about-us">About</Link>
                <Link to= "/portfolio/contact">Contact</Link>
            </div>
        </>

    )
}

export default TopNav;