package com.init.products.Salas;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.init.products.Mensajes.*;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/get/")
public class SalaController {

	@Autowired
	SalaManagment salaService;

	@PostMapping()
	public Jugador newPlayer (@RequestBody String id) {
	
		return salaService.addPlayer(id);
	}
	@GetMapping("{serverId}")
	public List<Mensaje> returnRegistro(@PathVariable("serverId") String id){
		
		return salaService.getPrincipal().getRegistro().getMensajes();
	}
	
	@PostMapping("{serverId}")
	public ResponseEntity<Boolean> putInfo(@RequestBody Mensaje mensaje, @PathVariable("serverId") String id){
		salaService.getPrincipal().getRegistro().setMensaje(mensaje);
		return new ResponseEntity<Boolean>(true, HttpStatus.CREATED);
	}
	
	
	@GetMapping("{serverId}/{playerId}") 
	public Ping ping(@PathVariable("serverId") String id, @PathVariable("playerId") String idP){
		salaService.tickPlayer(id, idP);
		return new Ping(salaService.returnMensajes(id, idP), salaService.returnJugadores(id, idP));
	}
	

	
	
	
	
}
