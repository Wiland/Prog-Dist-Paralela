package udp.server;


import java.net.*;
import java.io.*;

public class Servidor {

    public static void main(String args[]) {
        System.out.println("Iniciando servidor");
        try {

            DatagramSocket socketUDP = new DatagramSocket(6789);
            byte[] bufer = new byte[1000];
            String datos = "";
            String resp;
            DatagramPacket respuesta;
            int number = (int)(Math.random() * 10);
            System.out.println(number);
            int numUser;
            int cont = 0;
                    
            while (true) {
                cont++;
                // Construimos el DatagramPacket para recibir peticiones
                DatagramPacket peticion
                        = new DatagramPacket(bufer, bufer.length);

                // Leemos una petición del DatagramSocket
                socketUDP.receive(peticion);
                datos = new String(peticion.getData());
                numUser = Integer.parseInt(datos.trim());
                
                if (numUser == number) {
                    resp = String.valueOf(cont);
                } else if(numUser < number){
                    resp = "menor";
                } else {
                    resp = "mayor";
                }
                
                // Construimos el DatagramPacket para enviar la respuesta
                respuesta = new DatagramPacket(resp.getBytes(), resp.length(),
                                peticion.getAddress(), peticion.getPort());

                // Enviamos la respuesta, que es un eco
                socketUDP.send(respuesta);
            }

        } catch (SocketException e) {
            System.out.println("Socket: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("IO: " + e.getMessage());
        }
    }

}
