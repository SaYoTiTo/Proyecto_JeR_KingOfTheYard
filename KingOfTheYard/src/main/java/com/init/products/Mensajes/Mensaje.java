package com.init.products.Mensajes;

public class Mensaje {

	private String autor;	//autor del mensaje
	private String fecha;  //fecha del mensaje
	private String ms;		//mensaje
	
	
	public Mensaje() {}
	
	public Mensaje(String autor, String fecha, String ms) {
		this.autor = autor;
		this.fecha = fecha;
		this.ms = ms;
	}
	
	public String getAutor() {
		return autor;
	}
	public void setAutor(String autor) {
		this.autor = autor;
	}
	public String getMs() {
		return ms;
	}
	public void setMs(String ms) {
		this.ms = ms;
	}
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	
	
}
