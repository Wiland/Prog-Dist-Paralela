
import java.io.*;
import java.net.*;
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

    public void desconnectar() {
        try {
            socket.close();
            System.out.println("Fin del hilo con sesión " + this.idSession);
        } catch (IOException ex) {
            Logger.getLogger(ServidorHilo.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public void run() {
        String accion = "";
        do {
            try {
                accion = dis.readUTF();
                if (accion.equals("hola")) {
                    System.out.println("El cliente con idSesion " + this.idSession + " saluda");
                    dos.writeUTF("adios");
                    break;
                }else{
                    dos.writeUTF("No entiendo");
                }
            } catch (IOException ex) {
                Logger.getLogger(ServidorHilo.class.getName()).log(Level.SEVERE, null, ex);
            }
        } while (true);
        desconnectar();
    }
}
