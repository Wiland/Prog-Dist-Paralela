package co.com.elpoli.pdp.exercise;

import java.util.logging.Level;
import java.util.logging.Logger;

import co.com.elpoli.pdp.example.Nota;

public class Recipiente {

	String nombre = "Manzanas";
	int cantidad;
	boolean isFull = false;

	synchronized int consume() {
		try {
			while (!isFull) {
				wait();
			}
			isFull = false;
			notifyAll();
		} catch (InterruptedException ex) {
			Logger.getLogger(Nota.class.getName()).log(Level.SEVERE, null, ex);
		}
		return cantidad;
	}

	synchronized void produce(int cant) {
		while (isFull) {
			try {
				wait();
			} catch (InterruptedException ex) {
				System.out.println("Error");
			}
		}
		isFull = true;
		cantidad = cant;
		notifyAll();
	}
}
