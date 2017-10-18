package rmi.interfaces;

import java.rmi.*;

public interface EjecutorInterface extends Remote {

    public double computeIMC(IMCInterface t) throws RemoteException;
}
