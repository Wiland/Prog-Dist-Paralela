package udp.client;

import java.net.*;
import java.io.*;
import java.util.Scanner;

public class Cliente {

    // Los argumentos proporcionan el mensaje y el nombre del servidor
    public static void main(String args[]) {

        try {
            DatagramSocket socketUDP = new DatagramSocket();
            InetAddress hostServidor = InetAddress.getByName("localhost");
            int puertoServidor = 6789;
            
            int num;
            String msj;
            String resp;
            
            System.out.println ("Inicia juego de número mágico");
            Scanner entradaEscaner = new Scanner (System.in); //Creación de un objeto Scanner

            while (true) {
                System.out.print("Ingrese el número: ");
                num = entradaEscaner.nextInt(); //Invocamos un método sobre un objeto Scanner
                
                msj = String.valueOf(num);
                
                // Construimos un datagrama para enviar el mensaje al servidor
                DatagramPacket peticion
                        = new DatagramPacket(msj.getBytes(), msj.length(), hostServidor,
                                puertoServidor);

                // Enviamos el datagrama
                socketUDP.send(peticion);

                // Construimos el DatagramPacket que contendrá la respuesta
                byte[] bufer = new byte[1000];
                DatagramPacket respuesta
                        = new DatagramPacket(bufer, bufer.length);
                socketUDP.receive(respuesta);
                
                resp = new String(respuesta.getData()).trim();
                
                if (resp.equalsIgnoreCase("menor")) {
                    System.out.println("El número es muy pequeño");
                } else if(resp.equalsIgnoreCase("mayor")){
                    System.out.println("El número es muy grande");
                } else {
                    System.out.println("GANASTE!! Cantidad de intentos: " + resp);
                    break;
                }

            }
            
            // Cerramos el socket
            socketUDP.close();

        } catch (SocketException e) {
            System.out.println("Socket: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("IO: " + e.getMessage());
        }
    }
}
