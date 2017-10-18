/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rmi.server;

import rmi.interfaces.Ejecutor;
import java.rmi.*;
import java.rmi.registry.LocateRegistry;
import rmi.interfaces.EjecutorInterface;

public class RMIServer {

    private RMIServer() {
        try {
            LocateRegistry.createRegistry(1099);
            if (System.getSecurityManager() == null) {
                System.setSecurityManager(new RMISecurityManager());
            }
            EjecutorInterface imp = new Ejecutor();
            Naming.rebind("rmi://localhost/imc", imp);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public static void main(String args[]) {
        System.out.println("Iniciando el servidor...");
        RMIServer server = new RMIServer();
    }
}
