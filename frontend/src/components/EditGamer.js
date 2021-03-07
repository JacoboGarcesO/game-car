import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import axios from '../axios/axios';

const EditGamer=(gamer)=>{
  const [name, setName]=useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
          <button className="ButtonRun" onClick={handleShow}>
            Nombrar
          </button>
          <Modal 
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show} onHide={handleClose}
          className="modal">
            <Modal.Header className="modalcl" closeButton>
              <Modal.Title>Nombrar jugador</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalcl">
            <form >
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre del jugador</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Raúl" onChange={(event) => {
                            setName({ name: event.target.value })
                        }}/>
                </div>
                <Modal.Footer className="mx-auto">
                    <button className="ButtonDelete" onClick={handleClose}>
                        Cancelar
                    </button>
                    <button className="ButtonRun" onClick={(event)=>{
                      console.log(gamer.prop.id);
                      console.log(name.name);
                      console.log(gamer.prop.idGame);
                      console.log(gamer.prop.percentage);
                      axios.put('gamer/gamer',{
                        "id":gamer.prop.id,
                        "name":name.name,
                        "idGame":gamer.prop.idGame,
                        "percentage":0
                      }).then((response)=>{
                        console.log(response)
                      })
                    }}>
                        Guardar
                    </button>
                </Modal.Footer>
            </form>
            </Modal.Body>
          </Modal>
        </div>
        );
}
export default EditGamer;