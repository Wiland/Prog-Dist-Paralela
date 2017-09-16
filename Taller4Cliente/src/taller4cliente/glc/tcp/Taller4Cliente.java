/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package taller4cliente.glc.tcp;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author w
 */
public class Taller4Cliente extends Thread {

    protected Socket sk;
    protected DataOutputStream dos;
    protected DataInputStream dis;
    private int id;

    private SimpleDateFormat dateFormat;

    public Taller4Cliente(int id) {
        this.id = id;
        dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
    }

    @Override
    public void run() {
        try {

            sk = new Socket("10.100.29.32", 11568);
//            sk = new Socket("localhost", 11568);
            BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
            do {
                dos = new DataOutputStream(sk.getOutputStream());
                dis = new DataInputStream(sk.getInputStream());
                System.out.println(id + " solicitando fecha al servidor");
                String msg = dis.readUTF();//in.readLine();
                Date dateServer = null;
                try {
                    dateServer = dateFormat.parse(msg);
                } catch (ParseException ex) {
                    Logger.getLogger(Taller4Cliente.class.getName()).log(Level.SEVERE, null, ex);
                }
                Timestamp mensaje = new Timestamp(dateServer.getTime());
                Date dateLocal = new Date();
                Timestamp localTime = new Timestamp(dateLocal.getTime());
                dos.writeUTF(localTime.getTime() + "");
                printDiferenceDate(dateLocal, dateServer);
                break;
            } while (true);
            dis.close();
            dos.close();
            sk.close();
        } catch (IOException ex) {
            Logger.getLogger(Taller4Cliente.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void printDiferenceDate(Date date1, Date date2){
        Timestamp ts1 = new Timestamp(date1.getTime());
        Timestamp ts2 = new Timestamp(date2.getTime());
        Long diference = ts1.getTime() - ts2.getTime();
        if(diference < 0){
            diference *= -1;
        }
        System.out.println(diference + " milisegudos");
    }

}
