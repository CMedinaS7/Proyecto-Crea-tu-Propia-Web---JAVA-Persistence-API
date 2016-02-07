/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.upao.model;

import java.util.Date;
import java.util.List;
import javax.jdo.PersistenceManager;
import javax.jdo.Query;


/**
 *
 * @author CMEDINA
 */
public class DBUtiles {
 
    private static PersistenceManager pm = PMF.get().getPersistenceManager();

    public static List<Suscripcion> Logeo(String Semail,String Spassword) {
        Query q = pm.newQuery(Suscripcion.class);
        q.declareParameters("String email,String password");
        q.setFilter("Semail == email && Spassword == password");
        
        List<Suscripcion> susc = null;

        try {
            susc = (List<Suscripcion>) q.execute(Semail,Spassword);
        } finally {
            q.closeAll();
        }
        return susc;
    }
    
    public static List<Sitio> ObtenerSitios_Usuario(Long IDusuario) {
        Query q = pm.newQuery(Sitio.class);
        q.declareParameters("Long idusuario");
        q.setFilter("IDusuario == idusuario");
        
        List<Sitio> sites = null;

        try {
            sites = (List<Sitio>) q.execute(IDusuario);
        } finally {
            q.closeAll();
        }
        return sites;
    }
    
    public static Contenido ObtenerContenido_Sitio(Long IDsitio) {
        Query q = pm.newQuery(Contenido.class);
        q.declareParameters("Long idsitio");
        q.setFilter("IDsitio == idsitio");
        
        List<Contenido> contents = null;
        Contenido content;
        try {
            contents = (List<Contenido>)q.execute(IDsitio);
            content=contents.get(0);
        } finally {
            q.closeAll();
        }
        return content;
    }
}
