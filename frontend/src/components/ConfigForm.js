import React from 'react';
import {Link} from 'react-router-dom';

const ConfigForm =()=>{
    return (
        <div className="text-center">
            <div className="container_Form_Config">
                <div>
                    <label htmlFor="km_pista" className="form-label">Kilómetros de la pista</label>
                    <input required type="number" className="text-dark form-control" id="km_pista" placeholder="0"/>
                </div>
                <br/>
                <div>
                    <label htmlFor="num_jugadores" className="form-label">Número de jugadores</label>
                    <input required type="number" className="text-dark form-control" id="num_jugadores" placeholder="0"/>
                </div>
            </div>
            <div className="container_FormButton">
                <Link to={"/"}><button className="FormButtonCancel">Volver</button></Link>
                <Link to={"/game"}><button type="submit" className="FormButtonConfirm">Enviar</button></Link>
            </div>
        </div>
    );
}
export default ConfigForm;