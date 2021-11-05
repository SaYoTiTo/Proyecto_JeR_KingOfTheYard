package com.init.products.Salas;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.swing.Timer;

import org.springframework.stereotype.Component;

import com.init.products.Mensajes.Mensaje;

@Component
public class SalaManagment {
	
	private Sala salaPrincipal = new Sala();
	
	Timer timer = new Timer(2000, new ActionListener(){
        @Override
        public void actionPerformed(ActionEvent e) {
        	for(int i = 0; i< salaPrincipal.getListaJugadores().size(); i++) {
        		Jugador aux = salaPrincipal.getListaJugadores().get(i);
        		if(aux.isConectado()) {
                	aux.setConectado(false);
           
                }else{
                	DateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
   				 	Date date = new Date();
   				 	salaPrincipal.getRegistro().setMensaje(new Mensaje("SERVER", dateFormat.format(date), salaPrincipal.getListaJugadores().get(i).getId() + " se desconectó" ));
   				 	salaPrincipal.getListaJugadores().remove(i);
                	
                }
        	}
            
        }
    });
	
	public Jugador addPlayer(String id) {
		
		for(int i = 0; i<salaPrincipal.getListaJugadores().size();i++) {
			if(salaPrincipal.getJugador(id)!=null) {
				return null;
			}
		}
	
		Jugador nuevo = new Jugador();
		nuevo.setId(id);
		nuevo.setSalaId(salaPrincipal.getId());
		nuevo.setConectado(true);
		salaPrincipal.getListaJugadores().add(nuevo);
		DateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
		 Date date = new Date();
		 salaPrincipal.getRegistro().setMensaje(new Mensaje("SERVER", dateFormat.format(date), id + " se conectó" ));
		return nuevo;

		
	}
	

}
