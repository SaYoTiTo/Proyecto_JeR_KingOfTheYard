package com.init.products.Mensajes;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class MensajeDatos {

	private String ruta = "registro.txt";
	
	
	public MensajeDatos() {
		
	}
	
	public List<Mensaje> getMensajes(){
		List<Mensaje> lista = new ArrayList<Mensaje>();
		try {
			BufferedReader escaner = new BufferedReader(new FileReader(ruta));
			String line;
			
			while((line = escaner.readLine()) != null) {
				String[] aux = line.split("#");
				//System.out.println(aux[0] + aux[1] + aux[2]);
				Mensaje mensajeAux = new Mensaje(aux[0], aux[1], aux[2]);
				lista.add(mensajeAux);
			}
			escaner.close();
		}catch(Exception ex) {
			System.out.println(ex);
		}
		return lista;
	}
	
	
	public void setMensaje(Mensaje mensaje) {
		try {
            BufferedWriter file = new BufferedWriter(new FileWriter(ruta, true));
            file.write(mensaje.getAutor()+ "#" + mensaje.getFecha() + "#" + mensaje.getMs() + "\n");
            file.close();
        } catch (IOException ex) {
            System.out.println(ex);
        }
	}
	public String getRuta() {
		return ruta;
	}
	public void setRuta(String ruta) {
		this.ruta = ruta;
	}

	
	
}
