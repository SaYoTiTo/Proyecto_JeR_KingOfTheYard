package com.init.products.GameConfiguration;

public class GameMessage {

	
	private String name;
	private String player;
	private String info;
	

	
	public GameMessage() {
	}
	public GameMessage(String name, String player, String info) {
		this.name = name;
		this.player = player;
		this.info = info;
	}
	public String getPlayer() {
		return player;
	}
	public void setPlayer(String player) {
		this.player = player;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
}
