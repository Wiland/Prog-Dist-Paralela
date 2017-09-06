package co.com.elpoli.pdp.example;

import java.util.logging.Level;
import java.util.logging.Logger;

public class Tortuga extends Thread {
	@Override
	public void run() {
		int i = 0;
		System.out.println("Comienza la tortuga");
		
		while (i<5) {
			try {
			Thread.sleep(5000);
			System.out.println("tortuga");
			} catch (InterruptedException ex) {
				Logger.getLogger(Tortuga.class.getName()).log(Level.SEVERE, null, ex);
			}
			i++;
		}
		System.out.println("Termina la tortuga");
	}
}
