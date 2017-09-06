package co.com.elpoli.pdp.example;

import java.util.logging.Level;
import java.util.logging.Logger;

public class Liebre implements Runnable {

	@Override
	public void run() {
		int i = 0;
		System.out.println("Comienza la liebre");
		
		while (i<5) {
			try {
			Thread.sleep(2000);
			System.out.println("liebre");
			} catch (InterruptedException ex) {
				Logger.getLogger(Tortuga.class.getName()).log(Level.SEVERE, null, ex);
			}
			i++;
		}
		System.out.println("Termina la liebre");
	}

}
