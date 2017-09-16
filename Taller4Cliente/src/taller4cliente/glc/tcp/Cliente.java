/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package taller4cliente.glc.tcp;

import java.util.ArrayList;

/**
 *
 * @author w
 */
public class Cliente {

    public static void main(String[] args) {
//        try {
//            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
//            Date parsedDate = dateFormat.parse("2017-09-15 17:00:00");
//            Date parsedDate2 = dateFormat.parse("2017-09-15 17:10:00");
//            System.out.println(parsedDate);
//            System.out.println(parsedDate2);
//            System.out.println(new Date(parsedDate2.getTime() - parsedDate.getTime()));
//        } catch (ParseException ex) {
//            Logger.getLogger(Cliente.class.getName()).log(Level.SEVERE, null, ex);
//        }
        ArrayList<Thread> clients = new ArrayList<Thread>();
        for (int i = 1; i < 4; i++) {
            clients.add(new Taller4Cliente(i));
        }
        for (Thread thread : clients) {
            thread.start();
        }
    }

}
