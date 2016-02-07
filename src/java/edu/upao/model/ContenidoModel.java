/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.upao.model;

import java.util.List;
import javax.jdo.PersistenceManager;
import javax.jdo.Query;

/**
 *
 * @author CMEDINA
 */
public class ContenidoModel {
   private static PersistenceManager pm=PMF.get().getPersistenceManager();
    
    public static Contenido guardarContenido(String stitulo, String smenu_1,String smenu_2,String smenu_3,String scuerpo,Long IDsitio){
        Contenido content= new Contenido(stitulo,smenu_1,smenu_2,smenu_3,scuerpo,IDsitio);
        pm.makePersistent(content);
        return content;
    }
}
