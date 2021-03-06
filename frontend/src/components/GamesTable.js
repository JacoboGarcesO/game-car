import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from '../axios/axios';

const GamesTable = () => {
    const [games, setGames] = useState([])
    const getGames = () => {
        axios.get('/games').then((response) => {
            setGames(response.data);
        });
    }
    
    useEffect(() => {
        getGames();
    }, [])
    return (
        <div className="text-center">
            <br/>
            <Link to={"/"}><button className="FormButtonCancel">Volver</button></Link>
            <table>
                <thead>
                    <tr>
                        <td className="tittleTable">#</td>
                        <td className="tittleTable">Número de jugadores</td>
                        <td className="tittleTable">Kilómetros del recorrido</td>
                        <td className="tittleTable">Iniciar</td>
                        <td className="tittleTable">Eliminar</td>
                    </tr>
                </thead>
                <tbody>
                    {games.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.players}</td>
                            <td>{item.km}</td>
                            <td><button className="ButtonRun">Iniciar</button></td>
                            <td><button onClick={() => {
                                axios.delete(`/game/${item.id}`).then(window.location.reload());
                            }} className="ButtonDelete">Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
        </div>
    );
}
export default GamesTable;