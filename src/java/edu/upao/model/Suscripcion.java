/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.upao.model;

/**
 *
 * @author CMEDINA
 */

import java.util.Date;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;


@PersistenceCapable(identityType= IdentityType.APPLICATION)

public class Suscripcion {
    @PrimaryKey
    @Persistent(valueStrategy= IdGeneratorStrategy.IDENTITY)
    
    private Long id;
    
    @Persistent private String Snombre;
    @Persistent private String Semail;
    @Persistent private String Spassword;
    
    public Suscripcion(String Snombre, String Semail,String Spassword) {
        this.Snombre = Snombre;
        this.Semail = Semail;
        this.Spassword = Spassword;
    }

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the Snombre
     */
    public String getSnombre() {
        return Snombre;
    }

    /**
     * @param Snombre the Snombre to set
     */
    public void setSnombre(String Snombre) {
        this.Snombre = Snombre;
    }

    /**
     * @return the Semail
     */
    public String getSemail() {
        return Semail;
    }

    /**
     * @param Semail the Semail to set
     */
    public void setSemail(String Semail) {
        this.Semail = Semail;
    }

    /**
     * @return the Spassword
     */
    public String getSpassword() {
        return Spassword;
    }

    /**
     * @param Spassword the Spassword to set
     */
    public void setSpassword(String Spassword) {
        this.Spassword = Spassword;
    }

}
