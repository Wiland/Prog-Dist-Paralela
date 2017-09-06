package co.com.elpoli.pdp.example;

import java.util.logging.Level;
import java.util.logging.Logger;

public class Nota {
	int nota;
	
	synchronized void esperar() {
		try {
			wait();
		}catch(InterruptedException ex) {
			Logger.getLogger(Nota.class.getName()).log(Level.SEVERE, null, ex);
		}
	}
	
	synchronized void calificar(int nota) {
		notifyAll();
		this.nota = nota;
	}
}
