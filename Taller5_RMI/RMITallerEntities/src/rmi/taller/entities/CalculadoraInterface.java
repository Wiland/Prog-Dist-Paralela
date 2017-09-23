/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rmi.taller.entities;

import java.io.Serializable;

/**
 *
 * @author wiland2315
 */
public interface CalculadoraInterface extends Serializable{
    public enum Operations{ ADD, SUBSTRACT, MULTIPLY, DIVIDE };
    
    public double operar(Operations operar);
}
