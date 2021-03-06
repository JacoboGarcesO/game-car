import React from 'react';
import Wallpaper from '../images/wallpaper-game.jpg';
import GamersTittle from '../components/GamersTittle';
import GamersTable from '../components/GamersTable';

const Gamers =()=>{
    return (
        <div className="fondo" style={{ backgroundImage: `url(${Wallpaper})` }}>
            <GamersTittle/>
            <GamersTable/>
        </div>
    );
}
export default Gamers;