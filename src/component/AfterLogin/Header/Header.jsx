import React from 'react';
import './Header.css';
// import { FontAwesomeIcon } from 'font-awesome';

function HeaderComponent () {
    return (
        <div className='login-header'>
            <nav className='login-nav'>
                    <div className="header-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="" className='logo-img' />
                    </div>
                    <ul className='items'>
                        <li className="list-item"><a href="">Home</a></li>
                        <li className="list-item"><a href="">TV Shows</a></li>
                        <li className="list-item"><a href="">Movies</a></li>
                        <li className="list-item"><a href=""> News &#38; &#26; Popular</a></li>
                        <li className="list-item"><a href="">My List</a></li>
                    </ul>
                <right-nav>
                    {/* <div className="search"><span><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></span></div> */}
                    <div className="notification">N</div>
                    <div className="user-profile">P</div>
                </right-nav>
            </nav>
        </div>
    );
}
 
export default HeaderComponent;