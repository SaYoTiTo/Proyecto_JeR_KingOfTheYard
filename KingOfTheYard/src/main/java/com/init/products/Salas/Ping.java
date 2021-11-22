package com.init.products.Salas;

import java.util.List;

import com.init.products.Mensajes.*;

public class Ping {

	private List<Mensaje> mensajes;
	private List<String> jugadores;
	
	public Ping() {};
	
	
	public Ping(List<Mensaje> mensajes, List<String> jugadores) {
		this.mensajes = mensajes;
		this.jugadores = jugadores;
	}


	public List<Mensaje> getMensajes() {
		return mensajes;
	}
	public void setMensajes(List<Mensaje> mensajes) {
		this.mensajes = mensajes;
	}
	public List<String> getJugadores() {
		return jugadores;
	}
	public void setJugadores(List<String> jugadores) {
		this.jugadores = jugadores;
	}
	
}
