package co.com.elpoli.pdp.exercise;

public class Consumidor implements Runnable {

	Recipiente rec;
	String nombre;

	public Consumidor(Recipiente rec, String nombre) {
		this.rec = rec;
		this.nombre = nombre;
	}

	@Override
	public void run() {
		while (true) {
			int cant = rec.consume();
			System.out.println(nombre + " consumió " + cant + " " + rec.nombre);

		}
	}

}
