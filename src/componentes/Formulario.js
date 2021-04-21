import React,{useState} from 'react';
import styled from 'styled-components';
import db from './../firebase/firebaseConfig';


const Formulario = () => {
	const [nombre,cambiarNombre] = useState('');
	const [correo,cambiarCorreo] = useState('');
	const onSubmit = e=> {
		e.preventDefault();
		db.collection('usuarios').add({
			nombre: nombre,
			correo: correo
		}).then(()=>{
			cambiarNombre('');
			cambiarCorreo('');
			alert('Usuario Agregado Correctamente');
		}
		).catch(e => {
			alert('Hubo un Error');
		}
		);
		
	}

	return (
        <form action="" onSubmit={onSubmit}>
            <Input
                type='text'
                name='nombre'
                value={nombre}
                onChange={e=>cambiarNombre(e.target.value)}
                placeholder="Nombre"   
            ></Input>
            <Input
                type='email'
                name='correo'
                value={correo}
                onChange={e=>cambiarCorreo(e.target.value)}
                placeholder="Correo"  
            ></Input>
            <Boton>Agregar</Boton>
        </form>
    );
}
 
export default Formulario;



const Input = styled.input`
	padding: 10px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
	transition: .2s ease all;
	outline: none;
	text-align: center;
	
	&:focus {
		border: 2px solid #3D76E9;
	}
`;

const Boton = styled.button`
	padding: 10px 30px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;