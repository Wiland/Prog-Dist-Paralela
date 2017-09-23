/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rmi.taller.entities;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

/**
 *
 * @author wiland2315
 */
public class Ejecutor extends UnicastRemoteObject implements EjecutorInterface {

    public Ejecutor() throws RemoteException {
        super();
    }

    @Override
    public void ejecutarPDF(PDFInterface pdf) throws RemoteException{
        System.out.println("Mostrando PDF");
        pdf.mostrarPDF();
    }

    @Override
    public double sumar(CalculadoraInterface calc) throws RemoteException {
        System.out.println("Calculando suma");
        return calc.operar(CalculadoraInterface.Operations.ADD);
    }

    @Override
    public double restar(CalculadoraInterface calc) throws RemoteException {
        System.out.println("Calculando resta");
        return calc.operar(CalculadoraInterface.Operations.SUBSTRACT);
    }

    @Override
    public double multiplicar(CalculadoraInterface calc) throws RemoteException {
        System.out.println("Calculando multiplicación");
        return calc.operar(CalculadoraInterface.Operations.MULTIPLY);
    }

    @Override
    public double dividir(CalculadoraInterface calc) throws RemoteException {
        System.out.println("Calculando división");
        return calc.operar(CalculadoraInterface.Operations.DIVIDE);
    }
    
    
}
