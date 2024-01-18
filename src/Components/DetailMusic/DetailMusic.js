import Header from "../Home/Header";
import Footer from "../Home/Footer";
import sideBar1 from '../../Assets/Img/sidebar1.png';
import { Link} from "react-router-dom";
import './DetailMusic.scss';
import cast1 from '../../Assets/Img/cast4.png'
import { useState, useEffect } from 'react';

const DetailMusic = () => {
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0);

    const changeProgress = (event) => {
        setProgress(event.target.value)
    }

    const changeVolume = (event) => {
        setVolume(event.target.value)
    }

    return (
        <>
            <div className="index">
                <Header />
                <div className="detail-music">
                    <div className="music-title">
                        <div className="container">
                            <div className="row">
                                <div className=" col-12 col-sm-3">
                                    <div className="title-img">
                                        <img src={sideBar1}/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-9">
                                    <div className="title-text">
                                        <p>Song</p>
                                        <h1>Waiting for you (Mono)</h1>
                                        <span><img src={cast1}/> <Link to="#">Mono</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="music-content">
                        <div className="container">
                            <div className="top-content">
                                <button className="play"><i className="fa-solid fa-play"></i></button>
                                <button className="favorite"><i className="fa-regular fa-heart"></i></button>
                                <button className="setting"><i className="fa-solid fa-ellipsis"></i></button>
                            </div>
                            <div className="bottom-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <div className="lyric">
                                                <h4>Song lyric</h4>
                                                <p>lyric</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="info">
                                                <img src={cast1} />
                                                <div className="info-text">
                                                    <p>Artist</p>
                                                    <Link to="#"><h4>Mono</h4></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="music-option">
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <div className="item-music">
                                    <div className="item-img">
                                        <img src={sideBar1}/>
                                    </div>
                                    <div className="item-text">
                                        <h4><Link to="#">Nơi này có anh</Link></h4>
                                        <p><Link to="#">Sơn Tùng</Link></p>
                                    </div>
                                    <button className="favorite"><i className="fa-regular fa-heart"></i></button>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <div className="manage-music">
                                    <div className="manage-method">
                                        <ul>
                                            <li>
                                                <button className="btn-small"><i className="fa-solid fa-shuffle"></i></button>
                                            </li>
                                            <li>
                                                <button className="btn-small"><i className="fa-solid fa-backward-step"></i></button>
                                            </li>
                                            <li>
                                                <button className="btn-big"><i className="fa-solid fa-circle-play play-btn"></i></button>
                                            </li>
                                            <li>
                                                <button className="btn-small"><i className="fa-solid fa-forward-step"></i></button>
                                            </li>
                                            <li>
                                                <button className="btn-small"><i className="fa-solid fa-shuffle"></i></button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="audio-music">
                                        <p>0:00</p>
                                        <input type='range' step={1} min={0} max={100} value={progress} onChange={(event)=>changeProgress(event)} className='range'/>      
                                        <p>4:27</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4">
                                <div className="setting-music">
                                    <ul>
                                        <li>
                                            <button><i className="fa-brands fa-youtube"></i></button>
                                        </li>
                                        <li>
                                            <button><i className="fa-solid fa-microphone"></i></button>
                                        </li>
                                        <li>
                                            <button><i className="fa-solid fa-bars"></i></button>
                                        </li>
                                        <li>
                                            <button><i className="fa-solid fa-house-signal"></i></button>
                                        </li>
                                        <li>
                                            <button><i className="fa-solid fa-volume-high"></i></button>
                                        </li>
                                        <li>
                                            <div className="volume">
                                                <input type='range' step={1} min={0} max={100} value={volume} onChange={(event)=>changeVolume(event)}/> 
                                            </div>
                                        </li>
                                        <li>
                                            <button><i className="fa-solid fa-clone"></i></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default DetailMusic;