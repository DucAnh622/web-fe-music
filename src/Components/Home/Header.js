import { Link, NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';
import logo from '../../Assets/Img/logo.png';
import { useEffect, useState } from 'react';
import banner1 from '../../Assets/Img/slide1.png'
import banner2 from '../../Assets/Img/slide2.png'
import banner3 from '../../Assets/Img/slide3.png'
const Header = () => {
    return(
        <>
        <div className="header">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="right">
                        <img src={logo}/>
                    </div>
                    <div className="left">
                        <div className="up d-flex justify-content-end align-items-center">
                            <div className="search">
                                <select>
                                    <option>Movie</option>
                                    <option>Action</option>
                                    <option>Sci-fi</option>
                                    <option>Love</option>
                                </select>
                                <input type="text" placeholder="Search"/>
                                <button><i className="fas fa-search"></i></button>
                                <div className="result">
                                    <ul>
                                        <li>
                                            <Link to="#" className="result-item">
                                                <div className="result-img">
                                                        <img src={banner1}/>
                                                    </div>
                                                    <div className="result-text">
                                                        <h4>Breaking Bad</h4>
                                                        <div className="review d-flex justify-content-start align-items-center">
                                                            <ul className="stars">
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            </ul>
                                                            <p>500k voters</p>
                                                        </div>
                                                    </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link to="/login"><i className="fa-solid fa-user"></i> Login</Link>
                        </div>
                        <div className="down">
                            <ul className="d-flex align-items-center justify-content-between">
                                <li>
                                    <NavLink to="/" exact>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/News">News</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Blogs">Blogs</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Contact">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/About">About</NavLink>
                                </li>
                                <li>
                                    <button><i class="fa-solid fa-ticket"></i> Tickets</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;