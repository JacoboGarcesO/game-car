import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from '../axios/axios';
const ConfigForm = () => {
    const [kmts, setKmts] = useState([]);
    const [num, setNum] = useState([]);
    const request = {
        id: null,
        players: num.num_jugadores,
        km: kmts.km_pista
    }

    const registerGame = () => {
        if (num.num_jugadores >= 3) {
            if (kmts.km_pista >= 1) {
                axios.post('/game/game', request).then((response) => {
                    if (response.status === 200) {
                        Swal.fire({
                            title: "Juego registrado",
                            icon: "success",
                            confirmButtonText: "¡Entendido!",
                            confirmButtonColor: "#4fad7a"
                        });
                        for (let i = 0; i < num.num_jugadores; i++) {
                            axios.post('/gamer/gamer', {
                                "id":null, 
                                "name":null, 
                                "idGame":response.data['id'],
                                "percentage":0
                            })
                        }
                    } else {
                        Swal.fire({
                            title: "Juego no registrado",
                            text: "Ha ocurrido un error inesperado",
                            icon: "error",
                            confirmButtonText: "¡Entendido!",
                            confirmButtonColor: "#f96332"
                        });
                    }
                });
            } else {
                Swal.fire({
                    title: "Juego no registrado",
                    text: "Los kilómetros de la pista deben ser mayores a 0",
                    icon: "error",
                    confirmButtonText: "¡Entendido!",
                    confirmButtonColor: "#f96332"
                });
            }
        } else {
            Swal.fire({
                title: "Juego no registrado",
                text: "El número de jugadores debe ser superior a 2",
                icon: "error",
                confirmButtonText: "¡Entendido!",
                confirmButtonColor: "#f96332"
            });
        }
    }
    return (
        <div className="text-center">
            <div className="container_Form_Config">
                <div>
                    <label htmlFor="km_pista" className="form-label">Kilómetros de la pista</label>
                    <input required type="number" className="text-dark form-control" id="km_pista" placeholder="0"
                        onChange={(event) => {
                            setKmts({ km_pista: event.target.value })
                        }} />
                </div>
                <br />
                <div>
                    <label htmlFor="num_jugadores" className="form-label">Número de jugadores</label>
                    <input required type="number" className="text-dark form-control" id="num_jugadores" placeholder="0"
                        onChange={(event) => {
                            setNum({ num_jugadores: event.target.value })
                        }} />
                </div>
            </div>
            <div className="container_FormButton">
                <button type="submit" onClick={registerGame} className="FormButtonConfirm">Agregar</button>
            </div>
                <Link to={"/"}><button className="FormButtonCancel">Volver</button></Link>
                <Link to={"/games"}><button className="FormButtonConfirm">Juegos</button></Link>
                <br/>
                <br/>
                <br/>
        </div>
    );
}
export default ConfigForm;