package com.init.products.Salas;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

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
	
	public SalaManagment() {
		Random rd = new Random();
		salaPrincipal.setCapacidad(20);
		salaPrincipal.setId("" + (long)(Math.floor(rd.nextDouble()*999999)));
		salaPrincipal.getRegistro().setRuta("registros/" + salaPrincipal.getId() + ".txt");
		timer.start();
	}
	public Sala getPrincipal() {
		return salaPrincipal;
	}

	public void setPrincipal(Sala principal) {
		this.salaPrincipal = principal;
	}
	
	
	
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
		salaPrincipal.getRegistro().setMensaje(new Mensaje("SERVER ", dateFormat.format(date), id + " se conectó" ));
		return nuevo;
		
	}
	
	public void tickPlayer(String serverId, String PlayerId) {
		Jugador aux = salaPrincipal.getJugador(PlayerId);
		if(aux!=null) {
			aux.setConectado(true);
		}
	}
	
	public List<Mensaje> returnMensajes (String serverId, String playerId){
		
		if(!salaPrincipal.getId().equals(serverId)) {
			List<Mensaje> aux = new ArrayList<>();
			aux.add(new Mensaje("SERVER", "0000", "Conexion invalida"));
		}
		if(salaPrincipal.getJugador(playerId)!=null) {
			return salaPrincipal.getRegistro().getMensajes();
		}
		
		List<Mensaje> aux = new ArrayList<>();
		aux.add(new Mensaje("SERVER","0001", "Jugador invalido"));
		return aux;
		
	}
	
	public List<String> returnJugadores(String id, String idP){
		
		
		List<String> aux = new ArrayList<>();
		if(!salaPrincipal.getId().equals(id)) {
			aux.add("SERVER " + "0000 " + "Conexion invalida");
			return aux;
		}
		
		if(salaPrincipal.getJugador(idP) !=null) {
			for (int i = 0; i < salaPrincipal.getListaJugadores().size(); i++) {
				aux.add(salaPrincipal.getListaJugadores().get(i).getId());
			}
			
			return aux;
		}
		
		aux.add("SERVER " + "0000 " + "Conexion invalida");
		return null;
	}

}
