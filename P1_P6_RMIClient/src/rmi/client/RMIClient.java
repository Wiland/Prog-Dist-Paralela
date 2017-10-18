/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rmi.client;

import rmi.interfaces.ComputeIMC;
import java.rmi.*;
import java.rmi.registry.LocateRegistry;
import rmi.interfaces.IMCInterface;
import rmi.interfaces.EjecutorInterface;

public class RMIClient {

    public static void main(String args[]) {
        try {
            LocateRegistry.createRegistry(1098);
            if (System.getSecurityManager() == null) {
                System.setSecurityManager(new RMISecurityManager());
            }
            EjecutorInterface ej = (EjecutorInterface) Naming.lookup("rmi://localhost/imc");

            IMCInterface tarea = new ComputeIMC(80, 1.78);
            double imc = ej.computeIMC(tarea);
            System.out.println("El IMC es de: " + imc);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
