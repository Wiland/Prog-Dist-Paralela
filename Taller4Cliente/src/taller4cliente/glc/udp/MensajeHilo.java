/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package taller4cliente.glc.udp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.net.MulticastSocket;
import java.util.logging.Level;
import java.util.logging.Logger;
import static taller4cliente.glc.udp.Cliente.PORT;

/**
 *
 * @author w
 */
public class MensajeHilo extends Thread {

    private MulticastSocket socket;
    private InetAddress grupo;
    
    public MensajeHilo(MulticastSocket socket, InetAddress grupo) {
        this.socket = socket;
        this.grupo = grupo;
    }
 
    @Override
    public void run() {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        String msg = "";
        do {
            try {
                msg = in.readLine();

                // Envia el mensaje
                byte[] m = msg.getBytes();
                DatagramPacket mensajeSalida = new DatagramPacket(m, m.length, this.grupo, PORT);
                socket.send(mensajeSalida);
            } catch (IOException ex) {
                Logger.getLogger(MensajeHilo.class.getName()).log(Level.SEVERE, null, ex);
            }
        } while (true);
    }

}
