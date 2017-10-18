/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rmiclient;

import rmi.Tarea;
import java.rmi.*;
import java.rmi.registry.LocateRegistry;
import rmi.TareaInterface;
import rmi.EjecutorInterface;

public class RMIClient {

    public static void main(String args[]) {
        try {
            LocateRegistry.createRegistry(1098);
            if (System.getSecurityManager() == null) {
                System.setSecurityManager(new RMISecurityManager());
            }
            EjecutorInterface ej = (EjecutorInterface) Naming.lookup("rmi://localhost/ejecutor");

            TareaInterface tarea = new Tarea(3, 4);
            String respuesta = ej.ejecutar(tarea);
            int resultado = ej.sumar(tarea);
            System.out.println(respuesta);
            System.out.println("Resultado suma: " + resultado);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
