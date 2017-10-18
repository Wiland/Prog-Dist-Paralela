package rmi.interfaces;

public class ComputeIMC implements IMCInterface {
    private double mass = 0d; 
    private double height = 0d;
    
    public ComputeIMC(double mass, double height){
        this.mass = mass;
        this.height = height;
    }
    
    @Override
    public double compute() {
        System.out.println("Calculando IMC= "+ mass + "/(" + height + "^2)");
        return (mass / Math.pow(height, 2));
    }
    

}
