package co.com.elpoli.pdp.exercise;

import java.util.logging.Level;
import java.util.logging.Logger;

public class Mercado {
	public static void main(String[] args) {
		try {
			Recipiente rec = new Recipiente();
			Thread p = new Thread(new Productor(rec));
			Thread c1 = new Thread(new Consumidor(rec, "Jose"));
			Thread c2 = new Thread(new Consumidor(rec, "Luis"));
			c1.start();
			c2.start();
			p.start();
			c1.join();
			c2.join();
			p.join();
		} catch (InterruptedException ex) {
			Logger.getLogger(Mercado.class.getName()).log(Level.SEVERE, null, ex);
		}
	}
}
