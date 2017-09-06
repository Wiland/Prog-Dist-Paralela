package co.com.elpoli.pdp.main;

public class Programador extends Empleado {
	private int lineasDeCodigoPorHora;
	private String lenguajeDominante;
	
	public Programador(String nombre, String cedula, int edad, boolean casado, double salario,
			int lineasDeCodigoPorHora, String lenguajeDominante) {
		super(nombre, cedula, edad, casado, salario);
		this.lineasDeCodigoPorHora = lineasDeCodigoPorHora;
		this.lenguajeDominante = lenguajeDominante;
	}
	
	public Programador(String nombre, String cedula, int edad, boolean casado, double salario) {
		super(nombre, cedula, edad, casado, salario);
	}
	
	public int getLineasDeCodigoPorHora() {
		return lineasDeCodigoPorHora;
	}
	
	public void setLineasDeCodigoPorHora(int lineasDeCodigoPorHora) {
		this.lineasDeCodigoPorHora = lineasDeCodigoPorHora;
	}
	
	public String getLenguajeDominante() {
		return lenguajeDominante;
	}
	
	public void setLenguajeDominante(String lenguajeDominante) {
		this.lenguajeDominante = lenguajeDominante;
	}
}
