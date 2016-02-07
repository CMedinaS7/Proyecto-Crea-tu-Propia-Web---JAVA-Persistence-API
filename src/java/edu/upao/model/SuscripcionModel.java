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
public class SuscripcionModel {
    
    private static PersistenceManager pm=PMF.get().getPersistenceManager();
    
    public static Suscripcion guardarSuscripcion(String snombre, String semail,String spassword){
        Suscripcion susc= new Suscripcion(snombre,semail,spassword);
        pm.makePersistent(susc);
        return susc;
    }
    
    public static List<Suscripcion> getAllLibros(){
        List<Suscripcion> suscs;
        Query query= pm.newQuery(Suscripcion.class);
        suscs = (List<Suscripcion>)query.execute();
        return suscs;
    }
    
    public static Suscripcion ObtenerSuscripcionId(long id){
        try
        {
            Suscripcion suscs = pm.getObjectById(Suscripcion.class,id);
            return suscs;
        }
        catch(Exception ex)
        {
            return null;
        }
    }
    
    
    public static void eliminarSuscripcion(Suscripcion susc){
       final PersistenceManager pm= PMF.get().getPersistenceManager();
            
        try
        {
            Suscripcion s=pm.getObjectById(Suscripcion.class,susc.getId());
            pm.deletePersistent(s);
        }
        catch(Exception ex)
        {
        
        }
        
    }
    
//    public static void actualizarLibro(Libro libro){
//  final PersistenceManager pm= PMF.get().getPersistenceManager();
//  String nombre=libro.getLibroName();
//  String autor=libro.getLibroAutor();
//  String editorial=libro.getLibroEditorial();
//  String isbn=libro.getLibroIsbn();
//       try
//        {
//            pm.currentTransaction().begin();
//            libro=pm.getObjectById(Libro.class,libro.getId());
//            libro.setLibroName(nombre);
//            libro.setLibroAutor(autor);
//            libro.setLibroEditorial(editorial);
//            libro.setLibroIsbn(isbn);
//            pm.makePersistent(libro);
//            pm.currentTransaction().commit();
//            
//        }
//        catch(Exception ex)
//        {
//            pm.currentTransaction().rollback();
//            throw new RuntimeException(ex);
//        }
//        
//    }
//    
//    
//    public static List<Libro> listarLibroAutor(String autor){
//    final PersistenceManager pm= PMF.get().getPersistenceManager();
//    
//    try
//    {
//        String sql="select from";
//        sql+= Libro.class.getName();
//        sql+= " where autor==autorparam";
//        sql+= " order by autor dec";
// 
//        Query q = pm.newQuery(sql);
//        List<Libro> libro=(List<Libro>)q.execute();
//        return libro;
//        
//    }
//    catch  (Exception ex)
//    {
//        return null;
//    }
//   
//    }
}
