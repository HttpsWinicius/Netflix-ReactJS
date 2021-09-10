import React from 'react';
import "./Header.css";


export const Header = ({isBlack}) => {
    return(
        <header className={isBlack ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1165907170178695168/JLkRF8ZY_400x400.png" alt="User" />
                </a>
            </div>
        </header>
    );
}

export default Header;