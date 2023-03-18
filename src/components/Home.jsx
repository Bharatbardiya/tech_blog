import React from 'react'
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram} from "react-icons/ai";

import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Tech Blogs</h1>
            <p>Solutions to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="graphics"></img>

        <div>
            <p>
                We are your one and only solution to the tech problems you face every day. we are leading tech company whose aim it to increase the problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque esse sit vel saepe consequatur ab reprehenderit ducimus, autem nesciunt aperiam quibusdam ut minima magnam rerum cum, labore atque velit error illum! Temporibus voluptatem praesentium natus voluptates ea quaerat quia? Itaque officiis modi ipsum ratione sint inventore illum, impedit laborum!
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
                <div style={{animationDelay:"1.3s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home