import './Spotlight.scss';
import spotlight1 from '../../../Assets/Img/portfolio1.png'
import spotlight2 from '../../../Assets/Img/portfolio2.png'
import spotlight3 from '../../../Assets/Img/portfolio3.png'
import spotlight4 from '../../../Assets/Img/portfolio4.png'
import spotlight5 from '../../../Assets/Img/portfolio5.png'
import spotlight6 from '../../../Assets/Img/portfolio6.png'
import sidebar1 from '../../../Assets/Img/sidebar1.png'
import sidebar2 from '../../../Assets/Img/sidebar2.png'
import sidebar3 from '../../../Assets/Img/sidebar3.png'
import sidebar4 from '../../../Assets/Img/sidebar4.png'

import { Link} from "react-router-dom";

const Spotlight = () => {
    return(
        <div className="spotlight">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1><i className="fa-solid fa-clapperboard"></i> Spotlight This Month</h1>
                    </div>
                    <div className="col-lg-6">
                        <ul className='list-spotlight'>
                            <li className='active'>Latest</li>
                            <li>Coming Soon</li>
                            <li>Top Rated</li>
                            <li>Recently Released</li>
                        </ul>
                    </div>
                    <div className='col-12'>
                        <hr/>
                    </div>
                    <div className="col-lg-9">
                        <div className='row'>
                            <div className="col-lg-4">
                                <div className='item-spotlight'>
                                    <div className='item-img'>
                                        <img src={spotlight1}/>
                                        <Link to="#"><i className="fa-solid fa-circle-play"></i></Link>
                                    </div>
                                    <div className='item-text'>
                                        <h2>Breaking Bad</h2>
                                        <div className="review d-flex justify-content-start align-items-center">
                                            <ul className="stars">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <h4>500k voters</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='item-spotlight'>
                                    <div className='item-img'>
                                        <img src={spotlight2}/>
                                        <Link to="#"><i className="fa-solid fa-circle-play"></i></Link>
                                    </div>
                                    <div className='item-text'>
                                        <h2>Breaking Bad</h2>
                                        <div className="review d-flex justify-content-start align-items-center">
                                            <ul className="stars">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <h4>500k voters</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='item-spotlight'>
                                    <div className='item-img'>
                                        <img src={spotlight3}/>
                                        <Link to="#"><i className="fa-solid fa-circle-play"></i></Link>
                                    </div>
                                    <div className='item-text'>
                                        <h2>Breaking Bad</h2>
                                        <div className="review d-flex justify-content-start align-items-center">
                                            <ul className="stars">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <h4>500k voters</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='item-spotlight'>
                                    <div className='item-img'>
                                        <img src={spotlight4}/>
                                        <Link to="#"><i className="fa-solid fa-circle-play"></i></Link>
                                    </div>
                                    <div className='item-text'>
                                        <h2>Breaking Bad</h2>
                                        <div className="review d-flex justify-content-start align-items-center">
                                            <ul className="stars">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <h4>500k voters</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='item-spotlight'>
                                    <div className='item-img'>
                                        <img src={spotlight5}/>
                                        <Link to="#"><i className="fa-solid fa-circle-play"></i></Link>
                                    </div>
                                    <div className='item-text'>
                                        <h2>Breaking Bad</h2>
                                        <div className="review d-flex justify-content-start align-items-center">
                                            <ul className="stars">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <h4>500k voters</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='item-spotlight'>
                                    <div className='item-img'>
                                        <img src={spotlight6}/>
                                        <Link to="#"><i className="fa-solid fa-circle-play"></i></Link>
                                    </div>
                                    <div className='item-text'>
                                        <h2>Breaking Bad</h2>
                                        <div className="review d-flex justify-content-start align-items-center">
                                            <ul className="stars">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <h4>500k voters</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='list-sidebar'>
                            <img src={sidebar1}/>
                            <img src={sidebar2}/>
                            <img src={sidebar3}/>
                            <img src={sidebar4}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spotlight;