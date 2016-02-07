<%-- 
    Document   : dashboard
    Created on : 24/11/2014, 02:27:02 PM
    Author     : CMEDINA
--%>

<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8" import="edu.upao.model.*"%>
<!DOCTYPE html>
<html><head>
		<title>Weebdo - Crea un sitio web y un blog gratis</title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<link rel="icon" type="image/png" href="recursos/images/icon.png" />
    <script src="recursos/js/modernizr.js"></script>
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700">

<style>
	
		@font-face {
			font-family: 'ProximaNova';
			src: url('recursos/fuentes/267447_4_0.eot');
			src: url('recursos/fuentes/267447_4_0.eot#iefix') format('embedded-opentype'),
			     url('recursos/fuentes/267447_4_0.woff') format('woff'),
			     url('recursos/fuentes/267447_4_0.ttf') format('truetype');
		}
	
		@font-face {
			font-family: 'ProximaNova';
			font-weight: bold;
			src: url('recursos/fuentes/267447_5_0.eot');
			src: url('recursos/fuentes/267447_5_0.eot?#iefix') format('embedded-opentype'),
			     url('recursos/fuentes/267447_5_0.woff') format('woff'),
			     url('recursos/fuentes/267447_5_0.ttf') format('truetype');
		}
	
		@font-face {
			font-family: 'thirsty_script_lightregular';
			src: url(recursos/fuentes/ThirstyScriptLight-webfont.eot);
			src: url(recursos/fuentes/ThirstyScriptLight-webfont.eot?#iefix) format('embedded-opentype'),
					 url(recursos/fuentes/ThirstyScriptLight-webfont.woff) format('woff'),
					 url(recursos/fuentes/ThirstyScriptLight-webfont.ttf) format('truetype'),
					 url(recursos/fuentes/ThirstyScriptLight-webfont.svg#thirsty_script_lightregular) format('svg');
			font-weight: normal;
			font-style: normal;
		}
	
		@font-face {
			font-family: 'wicons';
			src: url(recursos/fuentes/wicons.eot);
			src: url(recursos/fuentes/wicons.eot#iefix) format('embedded-opentype'),
					 url(recursos/fuentes/wicons.woff) format('woff'),
					 url(recursos/fuentes/wicons.ttf) format('truetype'),
					 url(recursos/fuentes/wicons.svg#wicons) format('svg');
			font-weight: normal; 
			font-style: normal;
		}
		/* Hack to smooth out font rendering on Chrome for Windows */
		@media screen and (-webkit-min-device-pixel-ratio: 0) {
			@font-face {
				font-family: 'wicons';
				src: url(recursos/fuentes/wicons.svg#wicons) format('svg');
			}
		}
	
		@font-face {
			font-family: 'wsocial';
			src: url(recursos/fuentes/wsocial.eot);
			src: url(recursos/fuentes/wsocial.eot#iefix) format('embedded-opentype'),
					 url(recursos/fuentes/wsocial.woff) format('woff'),
					 url(recursos/fuentes/wsocial.ttf) format('truetype'),
					 url(recursos/fuentes/wsocial.svg#wsocial) format('svg');
			font-weight: normal; 
			font-style: normal;
		}
		/* Hack to smooth out font rendering on Chrome for Windows */
		@media screen and (-webkit-min-device-pixel-ratio: 0) {
			@font-face {
				font-family: 'wsocial';
				src: url(recursos/fuentes/wsocial.svg#wsocial) format('svg');
			}
		}
	</style>


		<link rel="stylesheet" href="recursos/css/style.css" media="screen">
<link rel="stylesheet" href="recursos/css/subPage.css" media="screen">
<link rel="stylesheet" href="recursos/css/uiCommon.css" media="screen">
<link rel="stylesheet" href="recursos/css/language.css" media="screen">

<link rel="stylesheet" href="recursos/css/main.css" media="screen">
<link rel="stylesheet" href="recursos/css/userhome.css" media="screen">

    
<script type="text/javascript" src="recursos/js/jquery.min.js"></script>
		
	</head>
	<body class="w-ui user-home-page-main non-english lang-es">
<%		
            HttpSession sesion = request.getSession(true);
            String id = (String) sesion.getAttribute("id");
            String nombre = (String) sesion.getAttribute("nombre");
            	
	   if ((String) sesion.getAttribute("id") == null) {
                response.sendRedirect("index.jsp?e=2#login");
            }
%>
            <div id="main">
			

						<div id="logout-section">
								 | 
								<a href="logout">Cerrar sesión (<%=nombre%>)</a>
			</div>
										
<div class="language-chooser" id="language-chooser">
	<div class="selected-language">
		<a href="#">
			<img src="recursos/images/spain.jpg" alt="Español">
			<span class="country-name">Español</span>
			<img src="recursos/images/weebly-footer-carrot.png" alt="" class="arrow">
		</a>
	</div>	

</div>

			<div class="weebly-logo">
	<a id="weebly-logo-link" href="/">
		<img src="recursos/images/logo1.png" alt="weebly logo" id="weebly-logo-image" height="50px">
	</a>
</div>
			<div class="userhome-menu">
	<div class="userhome-menu-item" style="padding:0px; width:16px;"></div>
				<div class="userhome-menu-item userhome-menu-item-selected">
			<a href="dashboard.jsp">Sitios</a>
		</div>
					<div id="menu-domains-tab" class="userhome-menu-item ">
			<a href="#">Dominios</a>
		</div>
					<div class="userhome-menu-item ">
			<a href="#">Invitaciones</a>
		</div>
			<div class="userhome-menu-item ">
		<a href="#">Cuenta</a>
	</div>
			<div class="userhome-menu-item">
			<a href="soporte.jsp">Soporte</a>
		</div>
		<div class="userhome-menu-item last-item"></div>
</div>



<div style="width: 960px; background: #FFFFFF;">

	<div class="user-home-body">
	
<div style="position:relative"> <!-- container for facebook like button -->

<div id="scroll-area">

	<div id="userhome-upper">

	<div id="site-list-above">
			Mis sitios <a class="btn btn-primary" id="create-site-button" href="paso1.jsp">Agregar sitio</a>
	</div>

	<div style="clear:both"></div>

	<div id="top-columns">

		<div id="site-list">
		
          
                    <div class="white-rounded-box-2">
                        <div class="top-right" id="site-list-top-right"></div>
               
                        <div id="site-list-inner">
                            
                             <%
                long IDusuario = Long.parseLong(id);
                
                List<Sitio> sitios = DBUtiles.ObtenerSitios_Usuario(IDusuario);
                
                
                    for (Sitio site : sitios) {
 
                             %>
                                        <div id="site-list-scroll-area" class="site-list-scroller" style="">
																						
<div class="site free" data-commerce="false">
	<div id="site-buttons-241228181728525540" class="site-buttons">
		<div class="site-buttons-inner">
							<a href="#" class="btn btn-info">Modificar</a>
									<a href="#" class="btn">Estadísticas</a>
									<a href="#" class="btn"><span class="arrow-wrap">Más</span></a>
						<div style="clear:both"></div>
		</div>
	</div>
	
	
	<h2>
		<a href="paso3.jsp?f=7&id=<%=site.getId()%>" title="Editar sitio"><%=site.getStipo()%></a>
	</h2>
	<div class="site-footer">
		<div class="site-link">
			<a href="paso3.jsp?f=7&id=<%=site.getId()%>" target="_blank">http://<%=site.getSnombre()%>.weebdo.com</a>					</div>
					<span class="site-upgrade">
				|
				<a href="#">
					Ascender de servicio				</a>
			</span>
		
			</div>
</div>
															</div>
                                        
                                        <%}%>  
														</div>
                                        
                  
			</div>
                    
		</div>

		<div id="sidebar-list">

			<div id="promo-carousel">
	<div class="slides">
		<div class="slides_container white-rounded-box-2" style="overflow: hidden; position: relative; display: block;">
				<img src="recursos/images/ingles__upao.jpg" width="240px">
				
				
		</div>
	<ul class="pagination"><li class="current"><a href="#0">1</a></li><li class=""><a href="#1">2</a></li><li class=""><a href="#2">3</a></li></ul></div>
</div>
			
<div id="todo-list" class="white-rounded-box">
	<div class="top-right"></div>
	<div class="top-left"></div>
	<div class="top-border"></div>
	<div class="todo-list-inner">
		<div class="todo-list-header">
			<h2>Lista de cosas pendientes</h2>
			<!-- ie6 needs these styles inline for some reason -->
			<div class="progress-bar">
				<div class="progress-bar-fill" style="width:18%;"></div>
			</div>
		</div>
		<div class="todo-list-container">
			<ul>

									<li class="todo-incomplete">
													<a href="#">Añadir un blog</a>
											</li>
									<li class="todo-incomplete">
													Publicar un sitio
											</li>
									<li class="todo-incomplete">
													<a href="#" >Actualizar a un plan Premium</a>
											</li>
									<li class="todo-incomplete">
													<a href="#">Actualizar a su propio dominio</a>
											</li>
									<li class="todo-incomplete">
													<a href="?page=referrals">Invite a friend to Weebly</a>
											</li>
									<li class="todo-incomplete">
													<a href="#" >Descargar app Mobile</a>
											</li>
									<li class="todo-incomplete">
													<a href="#" >Crear un segundo sitio</a>
											</li>
									<li class="todo-complete">
													Crear un sitio
											</li>
							</ul>
		</div>
		<div class="top-fade"></div>
		<div class="fade"></div>
	</div>
	<div class="bottom-right"></div>
	<div class="bottom-left"></div>
</div>	</div>

		<div style="clear:both;overflow:hidden"></div>

	</div>

	</div>

	<div id="userhome-lower">
	
		<div class="lower-box lower-box-right">
			<h2>Lo último de nuestro blog</h2>
			<div class="lower-box-body" style="height: 356px;">
									
					
						<div id="first-post">
							<h2 style="margin-top: 0px;"><a href="#" target="_blank">Negocios Electrónicos</a></h2>
							<div class="blog-date">Nov 14, 2014</div>
							La asignatura Negocios Electrónicos tiene como propósito desarrollar en los y las estudiantes, capacidades especializadas de integración de sistemas y tecnologías de la información en la construcción de soluciones de negocio electrónico electrónicas que posibiliten el desarrollo de las organizaciones, las que se obtendrán como resultado ...<br>
							<a href="#">Leer la entrada completa</a>

							<hr>
						</div>

						<div style="font-weight: bold; padding-bottom: 10px; color:#333333;">
							Entradas recientes						</div>

														
					
						<img src="recursos/images/talk_bubble.png" style="float: left;">
						<div class="other-post">
							<a href="#" target="_blank">Cabrera Sanchez Martin</a>
							<div class="blog-date">Oct 30, 2014</div>
						</div>
                <img src="recursos/images/talk_bubble.png" style="float: left;">
						<div class="other-post">
							<a href="#" target="_blank">Esquivel Ledesma Alonso</a>
							<div class="blog-date">Oct 25, 2014</div>
						</div>
                <img src="recursos/images/talk_bubble.png" style="float: left;">
						<div class="other-post">
							<a href="#" target="_blank">Medina Silvestre Carlos</a>
							<div class="blog-date">Oct 20, 2014</div>
						</div>
                <img src="recursos/images/talk_bubble.png" style="float: left;">
						<div class="other-post">
							<a href="#" target="_blank">Vasquez Zare Diana</a>
							<div class="blog-date">Oct 10, 2014</div>
						</div>
				


												</div>
		</div>
		
		<div class="lower-box" style="width: 370px;">
			<h2>Siga Nuestras Actualizaciones</h2>
			<div class="lower-box-body">
				<iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2FUPAO.PAGINAOFICIAL&amp;width=316&amp;colorscheme=light&amp;show_faces=true&amp;stream=false&amp;header=true&amp;height=290" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:316px; height:290px; background:#fff; margin-bottom:11px;" allowtransparency="true"></iframe>
				<a class="twitter-link" href="#" target="_blank">
					<img src="recursos/images/twitter_logo.png">
					Síganos en Twitter				</a>
			</div>
		</div>
	
	</div>

</div>


</div>

	</div>

</div>


		</div>
				<div class="footer" align="center">
			<a href="#">Funciones</a> |
			<a href="#">Acerca de</a> |
			<a href="#" rel="nofollow">Contáctanos</a> |
			<a href="#">Tareas</a> |
			<a href="#">Afiliados</a> |
			<a href="#">Temas</a> |
			<a href="#">Blog</a> |
			<a href="#" rel="nofollow">Términos de servicio</a> |
			<a href="#" rel="nofollow">Privacidad</a> |
			<a href="#">Soporte</a><br>
			©<script type="text/javascript">var current = new Date(); document.write( current.getFullYear() );</script>2014 <a href="#">Weebdo.</a>
		</div>
		
		<div id="tips"></div>
		<div id="errors"></div>

        
 </body></html>