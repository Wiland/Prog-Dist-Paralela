package co.com.elpoli.pdp.exercise;

public class Productor implements Runnable {
	Recipiente rec;

	public Productor(Recipiente rec) {
		this.rec = rec;
	}

	@Override
	public void run() {
		int cant = 0;
		double random = 0.0;

		while (cant < 10) {
			cant++;
			rec.produce(cant);
			System.out.println("Se depositan " + cant + " " + rec.nombre);
			random = Math.random();
			try {
				if (random < 0.5) {
					Thread.sleep(2000);
				} else {
					Thread.sleep(1000);
				}
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

}
