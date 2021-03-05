import React from "react";
import Wallpaper from '../images/wallpaper-game.jpg';
import ConfigTittle from '../components/ConfigTittle';
import ConfigForm from '../components/ConfigForm';

const Configuration = () => {
    return (
        <div style={{ backgroundImage: `url(${Wallpaper})` }}>
            <ConfigTittle />
            <ConfigForm />
        </div>
    );
}
export default Configuration;