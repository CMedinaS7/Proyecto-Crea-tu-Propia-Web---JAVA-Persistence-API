/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.upao.controller;

import edu.upao.model.Suscripcion;
import edu.upao.model.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author CMEDINA
 */
public class Suscripcionn extends HttpServlet {

    /**
     * Processes requests for both HTTP
     * <code>GET</code> and
     * <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String flag;
        //1=registrar suscripcion;2=login de usuario;3=Registrar Sitio;4=Guardar Contenido
     
        try {
            
            flag=request.getParameter("flag");
            if (flag.equals("1")){
                String snombre=request.getParameter("name");
                String semail=request.getParameter("email");
                String spass=request.getParameter("pass");
                Suscripcion susc;
                SuscripcionModel sm= new SuscripcionModel();
                susc=sm.guardarSuscripcion(snombre,semail,spass);
                
                if (susc!=null){
                    HttpSession sesion=request.getSession();
                    sesion.setAttribute("id", susc.getId().toString());
                    sesion.setAttribute("nombre", susc.getSnombre().toString());
                    response.sendRedirect("paso1.jsp");
                }else{
                    response.sendRedirect("index.jsp?e=3");
                }
                
            }else if (flag.equals("2")){
                String semail=request.getParameter("user");
                String spass=request.getParameter("pass");
                
                List<Suscripcion> susc = DBUtiles.Logeo(semail, spass);
                
                if (susc.size()!= 0){
                    HttpSession sesion=request.getSession();
                    sesion.setAttribute("id", susc.get(0).getId().toString());
                    sesion.setAttribute("nombre", susc.get(0).getSnombre().toString());
                    response.sendRedirect("dashboard.jsp");
                }else{
                    response.sendRedirect("index.jsp?e=1#login");
                }
            }else if (flag.equals("3")){
                String snombre=request.getParameter("dominio");
                String stipo=request.getParameter("tipo");
                String stema=request.getParameter("tema");
                
                HttpSession sesion=request.getSession();
                Long idusuario=Long.valueOf(String.valueOf(sesion.getAttribute("id")));
                
                Sitio site;
                SitioModel sm= new SitioModel();
                site=sm.guardarSitio(snombre,stipo,stema,idusuario);
                
                if (site!=null){
                    sesion.setAttribute("sitio", site.getId().toString());
                    out.write("OK");
                }else{
                    out.write("ERROR");
                }
            }else if (flag.equals("4")){
                String stitulo=request.getParameter("titulo");
                String smenu_1=request.getParameter("menu_1");
                String smenu_2=request.getParameter("menu_2");
                String smenu_3=request.getParameter("menu_3");
                String scuerpo=request.getParameter("cuerpo").trim();
                
                HttpSession sesion=request.getSession();
                Long idsitio=Long.valueOf(String.valueOf(sesion.getAttribute("sitio")));
                
                Contenido content;
                ContenidoModel sm= new ContenidoModel();
                content=sm.guardarContenido(stitulo,smenu_1,smenu_2,smenu_3,scuerpo,idsitio);
                
                if (content!=null){
                    out.write("OK");
                }else{
                    out.write("ERROR");
                }
            }
            
        } finally {            
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP
     * <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
