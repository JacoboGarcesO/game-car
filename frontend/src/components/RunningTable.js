import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from '../axios/axios';
import {getFromLocal} from '../functions/localStorage';

const RunningTable = () => {
    const idGame=getFromLocal("idGame");
    const kmGame=getFromLocal("kmGame");
    const [gamers, setGamers] = useState([])

    const getGamers = () => {
        axios.get(`/gamer/gamers/${idGame}`).then((response) => {
            setGamers(response.data);
        });
    }

    let interval=setInterval(()=> axios.get(`/gamer/run/${idGame}/${kmGame}`), 3000);
    useEffect(() => {
        getGamers();
        //eslint-disable-next-line
    }, [])
    return (
        <div className="text-center">
            <br/>
            <Link to={"/games"}><button className="FormButtonCancel">Abandonar</button></Link>
            <table>
                <thead>
                    <tr>
                        <td className="tittleTable">#</td>
                        <td className="tittleTable">Nombre</td>
                        <td className="tittleTable">Porcentaje</td>
                        <td className="tittleTable">Juego</td>
                    </tr>
                </thead>
                <tbody>
                    {gamers.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.percentage}</td>
                            <td>{item.idGame}</td>
                        </tr>
                    ))}
                </tbody>
            </table>                           
            <br/>
        </div>
    );
}
export default RunningTable;