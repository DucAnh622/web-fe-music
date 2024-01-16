import './Video.scss';
import { Link} from "react-router-dom";
import video1 from '../../../Assets/Img/video1.png'
import video2 from '../../../Assets/Img/video2.png'
import video3 from '../../../Assets/Img/video3.png'

const Video = () => {
    return(
        <div className="video">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1><i class="fa-solid fa-film"></i> Trailer & Videos</h1>
                    </div>
                    <div className='col-12'>
                        <hr/>
                    </div>
                    <div className="col-lg-9">
                        <div className='video-item'>
                            <div className='video-img'>
                                <img src={video1}/>
                                <Link to="#"><i className="fa-solid fa-circle-play"></i></Link>
                            </div>
                            <div className='video-text'>
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
                    <div className="col-lg-3">
                        <div className='row'>
                            <div className='col-md-12 col-sm-6'>
                                <div className='video-item'>
                                    <div className='video-img'>
                                        <img src={video2}/>
                                        <Link to="#"><i className="fa-solid fa-circle-play"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 col-sm-6'>
                                <div className='video-item'>
                                    <div className='video-img'>
                                        <img src={video3}/>
                                        <Link to="#"><i className="fa-solid fa-circle-play"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Video;