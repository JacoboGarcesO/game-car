import React from 'react';
import {Link} from 'react-router-dom';

const HomeButton = () => {
    return (
        <div className="text-center container_HomeButton">
            <Link to={"/configuration"}><button className="HomeButton">¡Jugar!</button></Link>
        </div>
    );
}
export default HomeButton;
