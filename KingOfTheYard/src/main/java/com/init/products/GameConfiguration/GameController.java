package com.init.products.GameConfiguration;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.Console;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import javax.swing.Timer;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GameController {

	final int clientTimeout = 1000;
	final int matchmakingTimeout = 1000;
	List<MatchmakingClient> ids = new ArrayList<>();
	List<MatchmakingClient> safeIds = Collections.synchronizedList(ids);	//Soporta concurrencia.
	
	int sala = 0;
	boolean primero = true;
	Timer timer = new Timer(matchmakingTimeout, new ActionListener() {
		@Override
        public void actionPerformed(ActionEvent e) {
			System.out.println("buscando desconectados");
			Iterator<MatchmakingClient> idsIterator = safeIds.iterator();
	        while (idsIterator.hasNext()) {
	        	MatchmakingClient user = idsIterator.next();
	            if(!user.isPing()) {
	            	System.out.println("Jugador desconectado");
	            	idsIterator.remove();
	            }else {
	            	user.setPing(false);
	            }
	        }
        }
	});
	
	
	@MessageMapping("/search")
	@SendTo("/topic/searching")
	public String findServer(@Payload GameMessage message) {
		System.out.println("He llegado a FindServer");
		if(primero) {
			System.out.println("Yo soy el primero en entrar: " + primero);
			primero = false;
			timer.start();
		}
		safeIds.add(new MatchmakingClient(message.getPlayer()));
		System.out.println(message.getPlayer() + " " + ids.size());
		if(safeIds.size()>=2) {
			sala++;
			String aux = safeIds.get(0).getNick() + "%" + safeIds.get(1).getNick() + "%" + sala + "%" + Math.random()*100000;
			
			safeIds.remove(0);
			safeIds.remove(0);

			return aux;
			
		}
		System.out.println("waiting");
		return "waiting";
	}
	
	@MessageMapping("/ping/{player}")
	@SendTo("/topic/searching/{player}")
	public boolean pingFunction(@DestinationVariable String player, @Payload boolean ping) {
		System.out.println("ping");
		findPLayer(player).setPing(true);
		return true;
	}
	
	private MatchmakingClient findPLayer(String nick) {
		
		for (MatchmakingClient matchmakingClient : safeIds) {
			if(matchmakingClient.getNick().equals(nick)) {
				return matchmakingClient;
			}
		}
		return null;
	}
	
	@MessageMapping("/playing.send/{serverId}")
	@SendTo("/topic/gameId/{serverId}")
	public GameMessage sendMessage2(@DestinationVariable String serverId, @Payload GameMessage message) {
		System.out.println("He llegado a ECHO");
		System.out.println(message.getName());		
		System.out.println(message.getPlayer());
		return message;
	}
	
	
	
}
