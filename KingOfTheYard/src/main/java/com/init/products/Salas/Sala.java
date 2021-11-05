package com.init.products.Salas;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.init.products.Mensajes.MensajeDatos;

public class Sala {
	
	private String id;
	private int capacidad;
	private List <Jugador> listaJugadores = new ArrayList<Jugador>();
	
	@Autowired
	private MensajeDatos registro;
	
	public Sala() {
		setRegistro(new MensajeDatos());
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getCapacidad() {
		return capacidad;
	}

	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;
	}

	public List <Jugador> getListaJugadores() {
		return listaJugadores;
	}

	public void setListaJugadores(List <Jugador> listaJugadores) {
		this.listaJugadores = listaJugadores;
	}

	public MensajeDatos getRegistro() {
		return registro;
	}

	public void setRegistro(MensajeDatos registro) {
		this.registro = registro;
	}
	
	public Jugador getJugador(String idJ) {
		
		for(int i = 0; i<listaJugadores.size(); i++) {
			if(listaJugadores.get(i).getId().equals(idJ)) {
				return listaJugadores.get(i);
			}
		}
		return null;
		
	}
	
	
}
