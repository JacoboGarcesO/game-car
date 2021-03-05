import React from 'react';
import HomeTittle from '../components/HomeTittle';
import HomeButton from '../components/HomeButton';
import Wallpaper from '../images/wallpaper-game.jpg';

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${Wallpaper})`}}>
            <HomeTittle />
            <HomeButton />
        </div>
    );
}
export default Home;