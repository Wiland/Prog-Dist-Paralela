package taller4servidor.glc.tcp;

import java.io.*;
import java.net.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.logging.*;

public class ServidorHilo extends Thread {

    private Socket socket;
    private DataOutputStream dos;
    private DataInputStream dis;
    private int idSession;

    public ServidorHilo(Socket socket, int id) {
        this.socket = socket;
        this.idSession = id;
        try {
            dos = new DataOutputStream(socket.getOutputStream());
            dis = new DataInputStream(socket.getInputStream());
        } catch (IOException ex) {
            Logger.getLogger(ServidorHilo.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void desconectar() {
        try {
            socket.close();
            System.out.println("Fin del hilo con sesión " + this.idSession);
        } catch (IOException ex) {
            Logger.getLogger(ServidorHilo.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public void run() {
        do {
            try {
                Timestamp ts, ts1 = new Timestamp(new Date().getTime());
                dos.writeUTF(ts1.toString());
                ts = new Timestamp(new Long(dis.readUTF()));
                System.out.println((ts.getTime() - ts1.getTime()) + " milisegundos");
//                if (!dis.readBoolean()) {
                    break;
//                }
            } catch (IOException ex) {
                Logger.getLogger(ServidorHilo.class.getName()).log(Level.SEVERE, null, ex);
            }
        } while (true);
        desconectar();
    }
}
