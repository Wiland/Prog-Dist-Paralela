/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rmitallerserver;

import java.rmi.Naming;
import java.rmi.RMISecurityManager;
import java.rmi.registry.LocateRegistry;
import rmi.taller.entities.Ejecutor;
import rmi.taller.entities.EjecutorInterface;

/**
 *
 * @author wiland2315
 */
public class RMITallerServer {

    private RMITallerServer() {
        try {
            LocateRegistry.createRegistry(1099);
            if (System.getSecurityManager() == null) {
                System.setSecurityManager(new RMISecurityManager());
            }
            EjecutorInterface imp = new Ejecutor();
            Naming.rebind("rmi://localhost/ejecutor", imp);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            e.printStackTrace();
        }
    }
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        System.out.println("Levantando servidor");
        RMITallerServer rmi = new RMITallerServer();
    }
    
}
