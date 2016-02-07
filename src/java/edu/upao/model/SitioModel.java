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
public class SitioModel {
    private static PersistenceManager pm=PMF.get().getPersistenceManager();
    
    public static Sitio guardarSitio(String snombre, String stipo,String stema,Long IDusuario){
        Sitio site= new Sitio(snombre,stipo,stema,IDusuario);
        pm.makePersistent(site);
        return site;
    }
}
