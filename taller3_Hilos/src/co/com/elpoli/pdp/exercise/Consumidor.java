package co.com.elpoli.pdp.exercise;

public class Consumidor implements Runnable {

	private Recipiente rec;
	private String nombre;
	
	public Consumidor(Recipiente rec, String nombre) {
		super();
		this.rec = rec;
		this.nombre = nombre;
	}
	
	@Override
	public void run() {
		int c = rec.consume();
		System.out.println(nombre + " consumió " + c + " " + rec.nombre);
	}

}
