/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rmi.taller.entities;

import java.rmi.Remote;
import java.rmi.RemoteException;

/**
 *
 * @author wiland2315
 */
public interface EjecutorInterface extends Remote{
    public void ejecutarPDF(PDFInterface pdf) throws RemoteException;
    public double sumar(CalculadoraInterface calc) throws RemoteException;
    public double restar(CalculadoraInterface calc) throws RemoteException;
    public double multiplicar(CalculadoraInterface calc) throws RemoteException;
    public double dividir(CalculadoraInterface calc) throws RemoteException;
    
}
