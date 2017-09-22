package rmi;

import java.rmi.*;

public interface EjecutorInterface extends Remote {

    public String ejecutar(TareaInterface t) throws RemoteException;

    public int sumar(TareaInterface t) throws RemoteException;
}
