package co.com.elpoli.pdp.exercise;

import java.util.logging.Level;
import java.util.logging.Logger;

import co.com.elpoli.pdp.example.Nota;

public class Recipiente {

	String nombre = "Manzanas";
	int cantidad;
	boolean isFull = false;

	synchronized int consume() {
		int c = cantidad;
		try {
			if (isFull) {
				isFull = false;
				cantidad = 0;
				notifyAll();
			} else {
				wait();
			}
		} catch (InterruptedException ex) {
			Logger.getLogger(Nota.class.getName()).log(Level.SEVERE, null, ex);
		}
		return c;
	}

	synchronized void produce(int cantidad) {
		try {
			int i = 0;
			while (true) {
				i++;
				if (isFull) {
					wait();
				} else {
					isFull = true;
					this.cantidad = cantidad;
					notifyAll();
				}
				Thread.sleep(2000);
				if (i > 10)
					break;
			}
		} catch (InterruptedException ex) {
			System.out.println("Error");
		}
	}
}
