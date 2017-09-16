/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package taller4cliente.glc.udp;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.MulticastSocket;
import java.net.SocketException;

/**
 *
 * @author w
 */
public class Cliente {
    public static  int PORT = 5871;
    public static void main(String args[]) {
        
        String msg = "Mensage";
        // args[0] es el mensaje enviado al grupo y args[1] es la direccion del grupo
        try {
            InetAddress grupo = InetAddress.getByName("224.0.0.3");
            MulticastSocket socket = new MulticastSocket(PORT);
            
            // Se une al grupo
            socket.joinGroup(grupo);
            ((MensajeHilo) new MensajeHilo(socket, grupo)).start();

            byte[] bufer = new byte[1000];
            String linea;

            // Se queda a la espera de mensajes al grupo, hasta recibir "Adios"
            while (true) {
                DatagramPacket mensajeEntrada = new DatagramPacket(bufer, bufer.length);
                socket.receive(mensajeEntrada);
                linea = new String(mensajeEntrada.getData(), 0, mensajeEntrada.getLength());
                System.out.println("Recibido:" + linea);
                if (linea.equals("Adios")) {
                    break;
                }
            }

            // Si recibe "Adios" abandona el grupo
            socket.leaveGroup(grupo);
        } catch (SocketException e) {
            System.out.println("Socket:" + e.getMessage());
        } catch (IOException e) {
            System.out.println("IO:" + e.getMessage());
        }
    }
}
