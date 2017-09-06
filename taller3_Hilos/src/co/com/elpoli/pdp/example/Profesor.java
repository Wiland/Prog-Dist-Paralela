package co.com.elpoli.pdp.example;

public class Profesor extends Thread {
	Nota nota;
	
	public Profesor(Nota nota) {
		this.nota = nota;
	}
	
	@Override
	public void run() {
		System.out.println("Voy a poner la nota.");
		nota.calificar(4);
	}
}
