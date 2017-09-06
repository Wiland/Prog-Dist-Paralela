package co.com.elpoli.pdp.example;

public class Alumno extends Thread {
	private Nota nota;
	private String nombre;
	public Alumno(Nota nota, String nombre) {
		super();
		this.nota = nota;
		this.nombre = nombre;
	}
	
	@Override
	public void run() {
		System.out.println(nombre + " esperando su nota.");
		nota.esperar();
		System.out.println(nombre + " recibió su nota");
		System.out.println("La nota fue: " + nota.nota);
	}
}
