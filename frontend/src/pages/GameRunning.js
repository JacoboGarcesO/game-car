import React from 'react';
import Wallpaper from '../images/wallpaper-game.jpg';
import RunningTittle from '../components/RunnigTittle';
import RunningTable from '../components/RunningTable';


const GameRunning =()=>{
    return (
        <div className="fondo" style={{ backgroundImage: `url(${Wallpaper})` }}>
            <RunningTittle/>
            <RunningTable/>
        </div>
    );
}
export default GameRunning;