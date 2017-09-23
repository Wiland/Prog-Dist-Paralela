/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rmi.taller.entities;

/**
 *
 * @author wiland2315
 */
public class Calculadora implements CalculadoraInterface {
    double a;
    double b;
    
    public Calculadora(double a, double b) {
        this.a = a;
        this.b = b;
    }

    @Override
    public double operar(Operations operator) {
        switch(operator){
            case ADD:
                return a + b;
            case SUBSTRACT:
                return a - b;
            case MULTIPLY:
                return a * b;
            case DIVIDE:
                return a / b;
            default:
                return 0;
        }
    }
    
}
