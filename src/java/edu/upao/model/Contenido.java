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

/**
 *
 * @author CMEDINA
 */
@PersistenceCapable(identityType= IdentityType.APPLICATION)

public class Contenido {
    @PrimaryKey
    @Persistent(valueStrategy= IdGeneratorStrategy.IDENTITY)
    
    private Long id;
    
    @Persistent private String Stitulo;
    @Persistent private String Smenu_1;
    @Persistent private String Smenu_2;
    @Persistent private String Smenu_3;
    @Persistent private String Scuerpo;
    @Persistent private Long IDsitio;
    
    public Contenido(String Stitulo, String Smenu_1, String Smenu_2, String Smenu_3,String Scuerpo,Long IDsitio) {
        this.Stitulo = Stitulo;
        this.Smenu_1 = Smenu_1;
        this.Smenu_2 = Smenu_2;
        this.Smenu_3 = Smenu_3;
        this.Scuerpo = Scuerpo;
        this.IDsitio = IDsitio;
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
     * @return the Stitulo
     */
    public String getStitulo() {
        return Stitulo;
    }

    /**
     * @param Stitulo the Stitulo to set
     */
    public void setStitulo(String Stitulo) {
        this.Stitulo = Stitulo;
    }

    /**
     * @return the Smenu_1
     */
    public String getSmenu_1() {
        return Smenu_1;
    }

    /**
     * @param Smenu_1 the Smenu_1 to set
     */
    public void setSmenu_1(String Smenu_1) {
        this.Smenu_1 = Smenu_1;
    }

    /**
     * @return the Smenu_2
     */
    public String getSmenu_2() {
        return Smenu_2;
    }

    /**
     * @param Smenu_2 the Smenu_2 to set
     */
    public void setSmenu_2(String Smenu_2) {
        this.Smenu_2 = Smenu_2;
    }

    /**
     * @return the Smenu_3
     */
    public String getSmenu_3() {
        return Smenu_3;
    }

    /**
     * @param Smenu_3 the Smenu_3 to set
     */
    public void setSmenu_3(String Smenu_3) {
        this.Smenu_3 = Smenu_3;
    }

    /**
     * @return the Scuerpo
     */
    public String getScuerpo() {
        return Scuerpo;
    }

    /**
     * @param Scuerpo the Scuerpo to set
     */
    public void setScuerpo(String Scuerpo) {
        this.Scuerpo = Scuerpo;
    }

    /**
     * @return the IDsitio
     */
    public Long getIDsitio() {
        return IDsitio;
    }

    /**
     * @param IDsitio the IDsitio to set
     */
    public void setIDsitio(Long IDsitio) {
        this.IDsitio = IDsitio;
    }

}
