
import java.io.*;
import java.net.Socket;
import java.util.*;
import java.util.logging.*;

class Persona extends Thread {

    protected Socket sk;
    protected DataOutputStream dos;
    protected DataInputStream dis;
    private int id;

    public Persona(int id) {
        this.id = id;
    }

    @Override
    public void run() {
        try {

            sk = new Socket("localhost", 10578);
            BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Cliente creado");
            do {
                dos = new DataOutputStream(sk.getOutputStream());
                dis = new DataInputStream(sk.getInputStream());
                System.out.println(id + " envía saludo");
                String mensaje = in.readLine();
                dos.writeUTF(mensaje);
                String respuesta = "";
                respuesta = dis.readUTF();
                System.out.println(id + " Servidor devuelve saludo: " + respuesta);
                if(respuesta.equals("adios")){
                    break;
                }
            } while (true);
            dis.close();
            dos.close();
            sk.close();
        } catch (IOException ex) {
            Logger.getLogger(Persona.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}

public class Cliente {

    public static void main(String[] args) {
        ArrayList<Thread> clients = new ArrayList<Thread>();
        for (int i = 1; i < 2; i++) {
            clients.add(new Persona(i));
        }
        for (Thread thread : clients) {
            thread.start();
        }
    }
}
