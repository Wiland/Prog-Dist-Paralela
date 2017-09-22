package rmi;

import java.rmi.*;
import java.rmi.server.*;

public class Ejecutor extends UnicastRemoteObject implements EjecutorInterface {

    public Ejecutor() throws RemoteException {
        super();
    }

    @Override
    public String ejecutar(TareaInterface t) throws RemoteException {
        return t.recado();
    }

    @Override
    public int sumar(TareaInterface t) throws RemoteException {
        System.out.println("ejecutando la suma");
        return t.suma(2, 3);
    }
}
