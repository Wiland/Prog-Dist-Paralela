package co.com.elpoli.pdp.exercise;

public class Mercado {
	public static void main(String[] args) {
		Recipiente rec = new Recipiente();
		Thread p = new Thread(new Productor(rec));
		Thread c2 = new Thread(new Consumidor(rec, "Luis"));
		Thread c1 = new Thread(new Consumidor(rec, "Jose"));
		
		c2.start();
		c1.start();
		p.start();
	}
}
