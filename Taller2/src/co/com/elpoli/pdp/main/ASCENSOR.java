package co.com.elpoli.pdp.main;

public class ASCENSOR {
	
	private boolean movimiento;
	private boolean llamado;
	private int pisoActual;
	private int pisoDestino;
	private int capacidad = 5;
	private int tiempoEntrePiso = 3;
	private int pasajerosActuales = 0;
	
	public boolean enMovimiento() {
		return movimiento;
	}
	
	public void setMovimiento(boolean movimiento) {
		this.movimiento = movimiento;
	}
	public boolean isLlamado() {
		return llamado;
	}
	public void setLlamado(boolean llamado) {
		this.llamado = llamado;
	}
	public int getPisoActual() {
		return pisoActual;
	}
	public void setPisoActual(int pisoActual) {
		this.pisoActual = pisoActual;
	}
	public int getPisoDestino() {
		return pisoDestino;
	}
	public void setPisoDestino(int pisoDestino) {
		this.pisoDestino = pisoDestino;
	}
	public int getCapacidad() {
		return capacidad;
	}
	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;
	}
	
	private int getPasajerosActuales() {
		return pasajerosActuales;
	}
	
	private void setPasajerosActuales(int pasajerosActuales) {
		this.pasajerosActuales = pasajerosActuales;
	}
	
	public void entrar(int numPersonas) {
		if(!enMovimiento()) {
			if((getPasajerosActuales() + numPersonas) > getCapacidad()) {
				System.out.println("Se ha superado la capacidad máxima");
			} else {
				setPasajerosActuales(getPasajerosActuales() + numPersonas);
			}
		} else {
			System.out.println("El ascensor esta en movimiento, no es posible ingresar");
		}
	}
	
	public void salir(int numPersonas) {
		if(!enMovimiento()) {
			if(getPasajerosActuales() < numPersonas) {
				System.out.println("El número de personas que quieren salir No es acorde a los que hay actualmente");
			} else {
				setPasajerosActuales(getPasajerosActuales() - numPersonas);
			}
		} else {
			System.out.println("El ascensor esta en movimiento, no es posible salir");
		}
	}
	
	public void solicitar(int origen, int destino) {
		setPisoActual(origen);
		setPisoDestino(destino);
	}
	
	public int viajar(int origen, int destino) {
		int time = getPisoActual() - getPisoDestino();
		if(time < 0) {
			time *= -1;
		}
		return time * tiempoEntrePiso;
	}

}
