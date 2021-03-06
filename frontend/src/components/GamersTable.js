import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from '../axios/axios';
import {getFromLocal} from '../functions/localStorage';
import EditGamer from './EditGamer';

const GamersTable = () => {
    const idGame=getFromLocal("idGame");
    const [gamers, setGamers] = useState([])

    const getGamers = () => {
        axios.get(`/gamer/gamers/${idGame}`).then((response) => {
            setGamers(response.data);
        });
    }
    useEffect(() => {
        getGamers();
        //eslint-disable-next-line
    }, [])
    return (
        <div className="text-center">
            <br/>
            <Link to={"/games"}><button className="FormButtonCancel">Volver</button></Link>
            <table>
                <thead>
                    <tr>
                        <td className="tittleTable">#</td>
                        <td className="tittleTable">Nombre</td>
                        <td className="tittleTable">Juego</td>
                        <td className="tittleTable">Nombrar</td>
                    </tr>
                </thead>
                <tbody>
                    {gamers.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.idGame}</td>
                            <td><EditGamer prop={item}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
        </div>
    );
}
export default GamersTable;