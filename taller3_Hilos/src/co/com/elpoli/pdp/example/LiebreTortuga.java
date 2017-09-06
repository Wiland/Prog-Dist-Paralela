package co.com.elpoli.pdp.example;

public class LiebreTortuga {
	public static void main(String[] args) {
		Tortuga tortuga = new Tortuga();
		Thread liebre = new Thread(new Liebre());
		
		System.out.println("Inicio");
		tortuga.start();
		liebre.start();
		System.out.println("Fin");
	}
}
