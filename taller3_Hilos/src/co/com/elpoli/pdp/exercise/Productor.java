package co.com.elpoli.pdp.exercise;

public class Productor implements Runnable {
	Recipiente rec;
	int i = 0;

	public Productor(Recipiente rec) {
		this.rec = rec;
	}

	@Override
	public void run() {
		System.out.println("Voy a depositar " + i + " " + rec.nombre);
		rec.produce(i);

	}

}
