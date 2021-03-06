import React from 'react';
import Wallpaper from '../images/wallpaper-game.jpg';
import GamesTittle from '../components/GamesTittle';
import GamesTable from '../components/GamesTable';
const Games =()=>{
    return (
        <div className="fondo" style={{ backgroundImage: `url(${Wallpaper})` }}>
            <GamesTittle/>
            <GamesTable/>
        </div>
    );
}
export default Games;