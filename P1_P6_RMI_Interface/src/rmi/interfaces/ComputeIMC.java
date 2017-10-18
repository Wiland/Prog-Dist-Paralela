package rmi;

public class Tarea implements TareaInterface {
    int a;
    int b;
    
    public Tarea(int a, int b){
        this.a = a;
        this.b = b;
    }
    
    @Override
    public String recado() {
        return "Hello World";
    }

    @Override
    public int suma() {
        return this.a + this.b;
    }
}
