import React,{useState,useEffect} from 'react';
//import styled from "styled-components";
import db from './../firebase/firebaseConfig';
import Contacto from './Contacto';
const ListaContactos = () => {
    const [contactos,cambiarContactos] = useState([]);

    useEffect(() => {
        db.collection('usuarios').onSnapshot((snapshot)=>{
            cambiarContactos(snapshot.docs.map((documento)=>{
                return{...documento.data(),id: documento.id}
            }));
        });
    },[]);
    return (
        contactos.length>0 &&
        contactos.map(contacto => {
            return <Contacto 
                key={contacto.id} 
                id={contacto.id} 
                nombre={contacto.nombre}
                correo={contacto.correo}
            ></Contacto>
        })
        
    );
}
 
export default ListaContactos;
