/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rmi.taller.entities;

import java.awt.Desktop;
import java.io.File;
import java.io.IOException;

/**
 *
 * @author wiland2315
 */
public class PDF implements PDFInterface{
    String ruta;
    
    public PDF(String ruta) {
        this.ruta = ruta;
    }

    @Override
    public void mostrarPDF() {
        if (Desktop.isDesktopSupported()) {
            try {
                File myFile = new File(this.ruta);
                Desktop.getDesktop().open(myFile);

            } catch (IOException ex) { // no application registered for PDFs 

            }
        }
    }
}
