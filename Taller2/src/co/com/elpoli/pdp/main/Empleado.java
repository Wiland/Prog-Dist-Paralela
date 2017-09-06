package co.com.elpoli.pdp.main;

public class Empleado {
	private String nombre;
	private String cedula;
	private int edad;
	private boolean casado;
	private double salario;
	
	public Empleado(String nombre, String cedula, int edad, boolean casado, double salario) {
		this.nombre = nombre;
		this.cedula = cedula;
		this.edad = edad;
		this.casado = casado;
		this.salario = salario;
	}
	
	public Empleado() {
		
	}
	
	public void mostrarClasificacion() {
		String clasificacion = "";
		if (this.edad <= 21) {
			clasificacion = "Principiante";
		} else if (this.edad <= 35) {
			clasificacion = "Intermedio";
		} else {
			clasificacion = "Senior";
		}
		System.out.println("La clasificación del empleado es " + clasificacion);	
	}
	
	public void imprimir() {
		System.out.println(
				"Nombre: " + this.nombre + "\n" +
				"Cédula: " + this.cedula + "\n" +
				"Edad: " + this.edad + "\n" +
				"Casado: " + ((this.casado) ? "SI":"NO") + "\n" +
				"Salario: " + this.salario);
	}
	
	public void aumentarSalario(double porcentaje) {
		this.salario += this.salario * porcentaje;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public String getCedula() {
		return cedula;
	}
	
	public void setCedula(String cedula) {
		this.cedula = cedula;
	}
	
	public int getEdad() {
		return edad;
	}
	
	public void setEdad(int edad) {
		if(edad <= 18 || edad >= 45) {
			System.out.println("La edad no es válida, debe estar entre 18 y 45 años");
		} else {
			this.edad = edad;
		}
	}
	
	public boolean isCasado() {
		return casado;
	}
	
	public void setCasado(boolean casado) {
		this.casado = casado;
	}
	
	public double getSalario() {
		return salario;
	}
	
	public void setSalario(double salario) {
		this.salario = salario;
	}
}
