package rmi;

public class Tarea implements TareaInterface {

    @Override
    public String recado() {
        return "Hello World";
    }

    @Override
    public int suma(int a, int b) {
        return a + b;
    }
}
