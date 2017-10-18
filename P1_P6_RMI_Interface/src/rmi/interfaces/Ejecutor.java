package rmi.interfaces;

import java.rmi.*;
import java.rmi.server.*;

public class Ejecutor extends UnicastRemoteObject implements EjecutorInterface {

    public Ejecutor() throws RemoteException {
        super();
    }

    @Override
    public double computeIMC(IMCInterface t) throws RemoteException {
        return t.compute();
    }
}
