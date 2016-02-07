/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.upao.model;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;


@PersistenceCapable(identityType= IdentityType.APPLICATION)

public class Sitio {
    @PrimaryKey
    @Persistent(valueStrategy= IdGeneratorStrategy.IDENTITY)
    
    private Long id;
    
    @Persistent private String Snombre;
    @Persistent private String Stipo;
    @Persistent private String Stema;
    @Persistent private Long IDusuario;
    
    
    public Sitio(String Snombre, String Stipo,String Stema,Long IDusuario) {
        this.Snombre = Snombre;
        this.Stipo = Stipo;
        this.Stema = Stema;
        this.IDusuario = IDusuario;
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
     * @return the Stipo
     */
    public String getStipo() {
        return Stipo;
    }

    /**
     * @param Stipo the Stipo to set
     */
    public void setStipo(String Stipo) {
        this.Stipo = Stipo;
    }

    /**
     * @return the Stema
     */
    public String getStema() {
        return Stema;
    }

    /**
     * @param Stema the Stema to set
     */
    public void setStema(String Stema) {
        this.Stema = Stema;
    }

    /**
     * @return the IDusuario
     */
    public Long getIDusuario() {
        return IDusuario;
    }

    /**
     * @param IDusuario the IDusuario to set
     */
    public void setIDusuario(Long IDusuario) {
        this.IDusuario = IDusuario;
    }
}
