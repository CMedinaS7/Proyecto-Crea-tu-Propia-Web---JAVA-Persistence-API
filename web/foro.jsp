<%-- 
    Document   : soporte
    Created on : 25/11/2014, 02:14:29 AM
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
				<div class="userhome-menu-item">
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
			<div class="userhome-menu-item userhome-menu-item-selected">
			<a href="soporte.jsp">Soporte</a>
		</div>
		<div class="userhome-menu-item last-item"></div>
</div>



<div style="width: 960px; background: #FFFFFF;">

	<div class="user-home-body">
	
<div style="position:relative"> <!-- container for facebook like button -->

    <div id="dev-menu">
	<div class="dev-menu-item"></div>
	<div class="dev-menu-item">
		<a href="soporte.jsp">Contactanos</a>
	</div>
	<div class="dev-menu-item dev-menu-item-active">
		<a href="foro.jsp">Foro</a>
	</div>
	<div class="dev-menu-item ">
		<a href="call_center.jsp">Call Center</a>
	</div>
			
</div>
    
<div id="scroll-area">

	<div id="userhome-upper">

	<div id="site-list-above">
            <iframe src="http://webdoosoporte.foroperu.org/" width="900px" height="600px" border="0" >
          
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

        
 </body>

</html>