
package edu.upao.model;

import javax.jdo.JDOHelper;
import javax.jdo.PersistenceManagerFactory;


public class PMF {
    
    private final static PersistenceManagerFactory instance = JDOHelper.getPersistenceManagerFactory("transactions-optional");
    
    private PMF(){
       
    }
    
    public static PersistenceManagerFactory get(){
        return instance;
    }
    
}
