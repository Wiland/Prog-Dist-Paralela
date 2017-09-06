package co.com.elpoli.pdp.example;

import java.util.logging.Level;
import java.util.logging.Logger;

public class EntregaNota {
	public static void main(String[] args) {
		try {
			Nota nota = new Nota();
			Profesor p = new Profesor(nota);
			Alumno a1 = new Alumno(nota, "Jose");
			Alumno a2 = new Alumno(nota, "Luis");
			p.setPriority(Thread.MIN_PRIORITY);
			a1.setPriority(Thread.MAX_PRIORITY);
			a2.setPriority(Thread.MAX_PRIORITY);
			a1.start();
			a2.start();
			p.start();
			a1.join();
			a2.join();
			p.join();
		} catch (InterruptedException ex) {
			Logger.getLogger(EntregaNota.class.getName()).log(Level.SEVERE, null, ex);
		}
	}
}
