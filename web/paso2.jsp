<%-- 
    Document   : paso2
    Created on : 24/11/2014, 02:24:52 PM
    Author     : CMEDINA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
	<title>Weebdo - Crea un sitio web y un blog gratis</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <link rel="icon" type="image/png" href="recursos/images/icon.png" />
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


		<link rel="stylesheet" type="text/css" href="recursos/css/onboarding.css">

		<script type="text/javascript" src="recursos/js/jquery.min.js"></script>
		
</head>
<body>
<%		
            HttpSession sesion = request.getSession(true);
            String id = (String) sesion.getAttribute("id");
            String nombre = (String) sesion.getAttribute("nombre");
            	
	   if ((String) sesion.getAttribute("id") == null) {
                response.sendRedirect("index.jsp?e=2#login");
            }
%>	
<div id="main-container" class="animated site-type-selector showing">


		<div id="choose-site-type" class="animated out">

			<div class="container-inner">

				<h1>
					Cual es el enfoque de su sitio?
				</h1>

				<div class="choose-type-box">
					<div class="type-item site showing" data-site-type="page">
						<div class="type-icon w-icon-li-themes"></div>
						<h3 class="type-title">
							Portal
						</h3>
					</div>

					<div class="type-item blog delay-01 showing" data-site-type="blog">
						<div class="type-icon w-icon-li-blog"></div>
						<h3 class="type-title">
							Blog
						</h3>
					</div>

					<div class="type-item store delay-02 showing" data-site-type="store">
						<div class="type-icon w-icon-li-ecommerce"></div>
						<h3 class="type-title">
							Tienda
						</h3>
					</div>

					<div class="clear"></div>
				</div>

				<h3>
					Recuerde que tendrá acceso a todas nuestras características no importa lo que usted elija!!
				</h3>

			</div>
		</div>

	<div id="header" class="animated-fast in">
        <div class="logo" style="text-align:center;">
          <img src="recursos/images/logo.png" title="weebdo" height="30px"> 
               </div>
		<div class="container-inner">
			
	<div class="go-up w-icon-chevron-up-light"></div>

	<div class="theme-chooser animated in">
		<div id="choose-theme">
			<div class="container-inner">
				<div id="choose-theme-heading">
					<h1>Seleccionar un Tema</h1>
					<h2>Puede cambiar de tema mas adelante!!!</h2>
				</div>
                <ul id="w-theme-list" class="fly" style="height: 200px;display:flex;">
                    <%
           String tipo=request.getParameter("tipo");
                    %>
                        <li class="theme-option" data-loaded="true">
                            <a href="paso3.jsp?tipo=<%=tipo%>&tema=T001"><div class="theme-select">
                        <img width="50px" src="recursos/images/public/vertical/blog_iconf722.png">
                  </div>
                        </a>
                        </li>
                    <li class="theme-option" data-loaded="true" >
                        <a href="paso3.jsp?tipo=<%=tipo%>&tema=T002" >
                        <div class="theme-select">
                        <img width="50px" src="recursos/images/public/vertical/commerce_iconf722.png">
                    </div>
                        </a>
                  </li>
                    <li class="theme-option" data-loaded="true" >
                        <a href="paso3.jsp?tipo=<%=tipo%>&tema=T003">
                            <div class="theme-select">
                                    <img width="50px" src="recursos/images/public/vertical/devicesf722.jpg">
                                
                                    
                  </div>
                        </a>
                            
                  </li>
                  
                    <li class="theme-option" data-loaded="true" >
                        <a href="paso3.jsp?tipo=<%=tipo%>&tema=T004" >
                        <div class="theme-select"><img width="50px" src="recursos/images/public/vertical/editor_iconf722.png">
                  </div>
                        </a>
                  </li>
                               
              </ul>
			</div>
</div>
        <div id="main-push"></div>
	</div>
</div>



</body></html>