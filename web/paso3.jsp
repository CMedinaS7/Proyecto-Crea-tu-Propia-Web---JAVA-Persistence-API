<%-- 
    Document   : paso3
    Created on : 24/11/2014, 02:25:45 PM
    Author     : CMEDINA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" import="edu.upao.model.*"%>
<!DOCTYPE html>
<html>
    <head>

	<script src="recursos/js/modernizr.js"></script>


<title>Weebdo - Una manera fácil de crear sitios web</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<link rel="icon" type="image/png" href="recursos/images/icon.png" />

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
        
<link id="pageStyle" rel="stylesheet" href="recursos/css/main_style2.css" type="text/css" media="screen,projection">
<link id="pageStyle" rel="stylesheet" href="recursos/css/blog_moderation.css" type="text/css" media="screen,projection">
<link id="pageStyle" rel="stylesheet" href="recursos/css/slideshow.css" type="text/css" media="screen,projection">
<link rel="stylesheet" href="recursos/css/weebly_lightbox.css" type="text/css" media="screen,projection">
<link id="pageStyle" rel="stylesheet" href="recursos/css/ui.css" type="text/css" media="screen,projection">
<link id="pageStyle" rel="stylesheet" href="recursos/css/main.css" type="text/css" media="screen,projection">
<link id="pageStyle" rel="stylesheet" href="recursos/css/editor-1.css" type="text/css" media="screen,projection">
<link id="pageStyle" rel="stylesheet" href="recursos/css/editor-2.css" type="text/css" media="screen,projection">
<link id="pageStyle" rel="stylesheet" href="recursos/css/sites.css" type="text/css" media="screen,projection">
<link id="pageStyle" rel="stylesheet" href="recursos/css/mobile-sites.css" type="text/css" media="screen,projection">
<link rel="stylesheet" href="recursos/css/mediaelementplayer.css" type="text/css" media="screen,projection">

<style type="text/css">
#footerInspiration { display: none; }
</style>


<link rel="stylesheet" type="text/css" href="recursos/css/weebly_dialog.css">

<script src="recursos/js/jquery.min.js"></script>
<%
    String tema=request.getParameter("tema");
    String tipo=request.getParameter("tipo");
    String f=request.getParameter("f");
    String titulo="",menu_1="",menu_2="",menu_3="",cuerpo="",site="";
    
    if("7".equals(f)){
        
    Long idSitio=Long.valueOf(request.getParameter("id").toString());
    
    Contenido content=DBUtiles.ObtenerContenido_Sitio(idSitio);
    
    if (content != null){
        titulo="'" + content.getStitulo() + "'";
        menu_1="'" + content.getSmenu_1() + "'";
        menu_2="'" + content.getSmenu_2() + "'";
        menu_3="'" + content.getSmenu_3() + "'";
        cuerpo="'" + content.getScuerpo() + "'";
        site="1";
    }
    }
%>
        
    <script type="text/javascript">
        
        $(document).ready(function() {
            console.log('Negocios Electronicos UPAO 2014-II');
            $('.rbopcion').click(function(){
                $('.rbopcion').parent().parent().attr('class','multiple-choice-box');
                $('.rbopcion').parent().parent().find('input:text').attr('disabled','disabled');
                $('.rbopcion').parent().parent().find('input:text').removeClass('actual');
                $('.rbopcion').parent().parent().find('input:text').val('');
                $(this).parent().parent().attr('class','multiple-choice-box-selected');
                $(this).parent().parent().find('input:text').removeAttr('disabled');
                $(this).parent().parent().find('input:text').addClass('actual');
            });
            
        });
        
        
        function GrabarDominio(){
            var input = $('.actual').val();
            if (input == ""){
                $('#mensaje').text('El dominio no puede estar en blanco!!!');
            }else{
                $.ajax({
                    type: "POST",
                    url: "controlador",
                    data: {'dominio' : input,'tema': '<%=tema%>','tipo': '<%=tipo%>','flag':'3'},
                    success: function(datos){
                    if (datos=="OK")
                        {
                            $('#bloque').remove();
                            $('#frmdominio').remove();
                        }
                    else
                        {
                            alert("Error al registrar el Dominio. Vuelva a intentarlo");
                        }
                    }
                    });
            }
        }
       
        function PublicarSitio(){
        var titulo,menu_1,menu_2,menu_3,cuerpo;
        titulo=$('#titulo').text();
        menu_1=$('#menu_1').text();
        menu_2=$('#menu_2').text();
        menu_3=$('#menu_3').text();
        cuerpo=$('#cuerpo').text();
            $.ajax({
                    type: "POST",
                    url: "controlador",
                    data: {'titulo' : titulo,'menu_1': menu_1,'menu_2': menu_2,'menu_3':menu_3,'cuerpo':cuerpo,'flag':'4'},
                    success: function(datos){
                    if (datos=="OK")
                        {
                            alert('El Contenido se Grabo Correctamente!!!');
                            location.href='dashboard.jsp';
                        }
                    else
                        {
                            alert("Error al Grabar el Contenido. Vuelva a Intentarlo!!!");
                        }
                    }
                    });
        }
        
        function CargaContenidoSitio(){
            $('#titulo').text(<%=titulo%>);
            menu_1=$('#menu_1').text(<%=menu_1%>);
            menu_2=$('#menu_2').text(<%=menu_2%>);
            menu_3=$('#menu_3').text(<%=menu_3%>);
            cuerpo=$('#cuerpo').text(<%=cuerpo%>);

        }
        </script>
        
        <link href="recursos/css/themes.css" id="wsite-theme-894466177219106086-file" title="wsite-theme-css" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Montserrat%20Alternates:400,700" rel="stylesheet" type="text/css">
        <style type="text/css" id="storeOptionsStyle">.entity-list-image-container .wsite-imageaspectratio-image-height, .product-images-view .wsite-imageaspectratio-image-height, .wsite-com-category-product-image-height.wsite-imageaspectratio-image-height, .wsite-com-category-product-featured-image-height.wsite-imageaspectratio-image-height { margin-bottom: 100% !important } .category_image .wsite-imageaspectratio-image-height { margin-bottom: 100% !important } .wsite-com-category-subcategory-image-height.wsite-imageaspectratio-image-height { margin-bottom: 100% !important } .wsite-com-category-product-group .wsite-com-column { width: 33.33% !important } .wsite-com-category-product-featured-group .wsite-com-column { width: 25.00% !important } .wsite-com-category-subcategory-group .wsite-com-column { width: 33.33% !important } </style>
        </head>

        <% if("1".equals(site)){ %>
        <body onload="javascript:CargaContenidoSitio();" id="body" class="wsite-editor editor-revealed allow-collapse-transition">
<%}else{%>
<body id="body" class="wsite-editor editor-revealed allow-collapse-transition">

    <%}%>
<%		
            HttpSession sesion = request.getSession(true);
            String id = (String) sesion.getAttribute("id");
            String nombre = (String) sesion.getAttribute("nombre");
            	
	   if ((String) sesion.getAttribute("id") == null) {
                response.sendRedirect("index.jsp?e=2#login");
            }
%>
<div id="w-editor-top" class="w-ui w-ui-topbar">
	<div class="w-logo-top">
					<div class="w-logo">
            <img src="recursos/images/logo.png" height="30px">
            
        </div>
			
			</div>

	<ul class="tabs">
		
<li id="weebly_tab_edit" class="selected">
	<a href="#"  title="Modificar">
		<span id="rString_Elements">
			Construir		</span>
	</a>
</li>
<li id="weebly_tab_themes">
	<a href="#"  title="Temas">
		<span id="rString_Designs">Diseño</span>
	</a>
</li>
	<li id="weebly_tab_pages">
		<a href="dashboard.jsp" title="Páginas">
			<span id="rString_Pages">Páginas</span>
		</a>
	</li>
<li id="weebly_tab_commerce_editor">
	<a href="#" title="Tienda">
		<span id="rString_Commerce">Tienda</span>
	</a>
</li>
<li id="weebly_tab_settings">
	<a href="dashboard.jsp" title="Configuración">
		<span id="rString_Settings">Configuración</span>
	</a>
</li>

			<li id="question-button">
			<a><span class="nav-icon w-icon-question"></span></a>
			
		</li>
							<li id="top-progressbar">
				<a class="site-planner-progressbar" style="">
					<div class="progress-bar"></div>
					<div class="progress-inner" style="width: 10%;"></div>
				</a>
				
			</li>
				</ul>

	<div class="device-switcher">

		<a class="desktop">
			<span class="mobile-toggle w-icon-computer"></span>
		</a>
		

		<a class="mobile">
			<span class="mobile-toggle w-icon-mobile"></span>
		</a>
		

	</div>

	<ul class="right-buttons">

	<% if("1".equals(site)){}else{ %>	
		<li id="publish-button" class="button-option">
			<a class="nav-button nav-button-primary" href="javascript:PublicarSitio();"><span>Publicar</span></a>
		</li>
	<%}%>
		
	</ul>
</div>

<div id="w-editor-left" class="w-sidebar w-ui">
	
	<div id="available-elements" class="w-massless-scroll">
		<div class="header">
			<ul class="nav"><li data-category="basic" class="current">
	<span class="category-icon w-icon-category-basic"></span>
</li><li data-category="structure">
	<span class="category-icon w-icon-category-structure"></span>
</li><li data-category="multimedia">
	<span class="category-icon w-icon-category-multimedia"></span>
</li><li data-category="revenue">
	<span class="category-icon w-icon-category-revenue"></span>
</li><li data-category="more">
	<span class="category-icon w-icon-category-more"></span>
</li></ul>
		</div>
		<div class="scroll-outer w-scroll-outer">
			<div class="scroll w-scroll w-has-scrollbars w-has-native-scrollbars" style="padding-right: 17px; padding-bottom: 17px; margin-right: -17px; margin-bottom: -17px;">
				<ul class="content w-scroll-content" style="margin-right: -17px; margin-bottom: -17px; padding-right: 0px;"><li class="section sticky" data-category="basic" style="padding-top: 22px;">
	<h3 style="position: absolute; top: 0px; width: 100%;">Basic</h3>
	<ul>
<li class="outside_top w-ui element_list_item_62850560" data-content="Título" data-original-title="" title="">
	<form name="id_62850560" autocomplete="off">
		<input type="hidden" name="idfield" value="def:62850560">
	</form>
	
	<div class="icon w-icon-62850560"></div>
	<div class="title-box"><span class="title">Title</span></div>
</li><li class="outside_top w-ui element_list_item_44785763" data-content="Texto" data-original-title="" title="">
	<form name="id_44785763" autocomplete="off">
		<input type="hidden" name="idfield" value="def:44785763">
	</form>
	
	<div class="icon w-icon-44785763"></div>
	<div class="title-box"><span class="title">Text</span></div>
</li><li class="outside_top w-ui element_list_item_30621876" data-content="Imagen" data-original-title="" title="">
	<form name="id_30621876" autocomplete="off">
		<input type="hidden" name="idfield" value="def:30621876">
	</form>
	
	<div class="icon w-icon-30621876"></div>
	<div class="title-box"><span class="title">Image</span></div>
</li><li class="outside_top w-ui element_list_item_18362204" data-content="Gallery" data-original-title="" title="">
	<form name="id_18362204" autocomplete="off">
		<input type="hidden" name="idfield" value="def:18362204">
	</form>
	
	<div class="icon w-icon-18362204"></div>
	<div class="title-box"><span class="title">Gallery</span></div>
</li><li class="outside_top w-ui element_list_item_31574711" data-content="Slide Show" data-original-title="" title="">
	<form name="id_31574711" autocomplete="off">
		<input type="hidden" name="idfield" value="def:31574711">
	</form>
	
	<div class="icon w-icon-31574711"></div>
	<div class="title-box"><span class="title">Slideshow</span></div>
</li><li class="outside_top w-ui element_list_item_42844424" data-content="Map" data-original-title="" title="">
	<form name="id_42844424" autocomplete="off">
		<input type="hidden" name="idfield" value="def:42844424">
	</form>
	
	<div class="icon w-icon-42844424"></div>
	<div class="title-box"><span class="title">Map</span></div>
</li><li class="outside_top w-ui element_list_item_45444132" data-content="Formulario de Contacto" data-original-title="" title="">
	<form name="id_45444132" autocomplete="off">
		<input type="hidden" name="idfield" value="def:45444132">
	</form>
	
	<div class="icon w-icon-45444132"></div>
	<div class="title-box"><span class="title">Contact Form</span></div>
</li><li class="outside_top w-ui element_list_item_92495494" data-content="Incorporar código" data-original-title="" title="">
	<form name="id_92495494" autocomplete="off">
		<input type="hidden" name="idfield" value="def:92495494">
	</form>
	
	<div class="icon w-icon-92495494"></div>
	<div class="title-box"><span class="title">Embed Code</span></div>
</li>	</ul>
	<div style="clear:both"></div>
</li><li class="section" data-category="structure">
	<h3>Structure</h3>
	<ul>
<li class="outside_top w-ui element_list_item_79078446" data-content="Separador" data-original-title="" title="">
	<form name="id_79078446" autocomplete="off">
		<input type="hidden" name="idfield" value="def:79078446">
	</form>
	
	<div class="icon w-icon-79078446"></div>
	<div class="title-box"><span class="title">Divider</span></div>
</li><li class="outside_top w-ui element_list_item_27280689" data-content="Spacer" data-original-title="" title="">
	<form name="id_27280689" autocomplete="off">
		<input type="hidden" name="idfield" value="def:27280689">
	</form>
	
	<div class="icon w-icon-27280689"></div>
	<div class="title-box"><span class="title">Spacer</span></div>
</li><li class="outside_top w-ui element_list_item_59396708" data-content="Botón" data-original-title="" title="">
	<form name="id_59396708" autocomplete="off">
		<input type="hidden" name="idfield" value="def:59396708">
	</form>
	
	<div class="icon w-icon-59396708"></div>
	<div class="title-box"><span class="title">Button</span></div>
</li><li class="outside_top w-ui element_list_item_90122486 pro-element" data-content="Recuadro de búsqueda" data-original-title="" title="">
	<form name="id_90122486" autocomplete="off">
		<input type="hidden" name="idfield" value="def:90122486">
	</form>
	<div class="w-icon-star pro-element-overlay"></div>
	
	<div class="icon w-icon-90122486"></div>
	<div class="title-box"><span class="title">Search Box</span></div>
</li>	</ul>
	<div style="clear:both"></div>
</li><li class="section" data-category="multimedia">
	<h3>Media</h3>
	<ul>
<li class="outside_top w-ui element_list_item_63419613 pro-element" data-content="HD Video" data-original-title="" title="">
	<form name="id_63419613" autocomplete="off">
		<input type="hidden" name="idfield" value="def:63419613">
	</form>
	<div class="w-icon-star pro-element-overlay"></div>
	
	<div class="icon w-icon-63419613"></div>
	<div class="title-box"><span class="title">HD Video</span></div>
</li><li class="outside_top w-ui element_list_item_67748238 pro-element" data-content="Audio" data-original-title="" title="">
	<form name="id_67748238" autocomplete="off">
		<input type="hidden" name="idfield" value="def:67748238">
	</form>
	<div class="w-icon-star pro-element-overlay"></div>
	
	<div class="icon w-icon-67748238"></div>
	<div class="title-box"><span class="title">Audio</span></div>
</li><li class="outside_top w-ui element_list_item_3971316" data-content="Document" data-original-title="" title="">
	<form name="id_3971316" autocomplete="off">
		<input type="hidden" name="idfield" value="def:3971316">
	</form>
	
	<div class="icon w-icon-3971316"></div>
	<div class="title-box"><span class="title">Document</span></div>
</li><li class="outside_top w-ui element_list_item_9759964" data-content="YouTube" data-original-title="" title="">
	<form name="id_9759964" autocomplete="off">
		<input type="hidden" name="idfield" value="def:9759964">
	</form>
	
	<div class="icon w-icon-9759964"></div>
	<div class="title-box"><span class="title">YouTube</span></div>
</li><li class="outside_top w-ui element_list_item_64190838" data-content="Flash" data-original-title="" title="">
	<form name="id_64190838" autocomplete="off">
		<input type="hidden" name="idfield" value="def:64190838">
	</form>
	
	<div class="icon w-icon-64190838"></div>
	<div class="title-box"><span class="title">Flash</span></div>
</li><li class="outside_top w-ui element_list_item_46196121" data-content="Archivo" data-original-title="" title="">
	<form name="id_46196121" autocomplete="off">
		<input type="hidden" name="idfield" value="def:46196121">
	</form>
	
	<div class="icon w-icon-46196121"></div>
	<div class="title-box"><span class="title">File</span></div>
</li>	</ul>
	<div style="clear:both"></div>
</li><li class="section" data-category="revenue">
	<h3>Commerce</h3>
	<ul>
<li class="outside_top w-ui element_list_item_5699726" data-content="Producto" data-original-title="" title="">
	<form name="id_5699726" autocomplete="off">
		<input type="hidden" name="idfield" value="def:5699726">
	</form>
	
	<div class="icon w-icon-61719152"></div>
	<div class="title-box"><span class="title">Product</span></div>
</li><li class="outside_top w-ui element_list_item_36391960" data-content="Google Adsense" data-original-title="" title="">
	<form name="id_36391960" autocomplete="off">
		<input type="hidden" name="idfield" value="def:36391960">
	</form>
	
	<div class="icon w-icon-36391960"></div>
	<div class="title-box"><span class="title">Google Adsense</span></div>
</li>	</ul>
	<div style="clear:both"></div>
</li><li class="section" data-category="more" style="min-height: 457px;">
	<h3>Más</h3>
	<ul>
<li class="outside_top w-ui element_list_item_87744780" data-content="Cita en bloque" data-original-title="" title="">
	<form name="id_87744780" autocomplete="off">
		<input type="hidden" name="idfield" value="def:87744780">
	</form>
	
	<div class="icon w-icon-87744780"></div>
	<div class="title-box"><span class="title">Block Quote</span></div>
</li><li class="outside_top w-ui element_list_item_86551499" data-content="Poll" data-original-title="" title="">
	<form name="id_86551499" autocomplete="off">
		<input type="hidden" name="idfield" value="def:86551499">
	</form>
	
	<div class="icon w-icon-86551499"></div>
	<div class="title-box"><span class="title">Poll</span></div>
</li><li class="outside_top w-ui element_list_item_35527740" data-content="Iconos sociales" data-original-title="" title="">
	<form name="id_35527740" autocomplete="off">
		<input type="hidden" name="idfield" value="def:35527740">
	</form>
	
	<div class="icon w-icon-35527740"></div>
	<div class="title-box"><span class="title">Social Icons</span></div>
</li><li class="outside_top w-ui element_list_item_20040879" data-content="Formulario de RSVP" data-original-title="" title="">
	<form name="id_20040879" autocomplete="off">
		<input type="hidden" name="idfield" value="def:20040879">
	</form>
	
	<div class="icon w-icon-20040879"></div>
	<div class="title-box"><span class="title">RSVP Form</span></div>
</li><li class="outside_top w-ui element_list_item_42391650" data-content="Encuesta" data-original-title="" title="">
	<form name="id_42391650" autocomplete="off">
		<input type="hidden" name="idfield" value="def:42391650">
	</form>
	
	<div class="icon w-icon-42391650"></div>
	<div class="title-box"><span class="title">Survey</span></div>
</li><li class="outside_top w-ui element_list_item_62317151" data-content="Lector de fuente" data-original-title="" title="">
	<form name="id_62317151" autocomplete="off">
		<input type="hidden" name="idfield" value="def:62317151">
	</form>
	
	<div class="icon w-icon-62317151"></div>
	<div class="title-box"><span class="title">Feed Reader</span></div>
</li><li class="outside_top w-ui element_list_item_48408403" data-content="Bookings" data-original-title="" title="">
	<form name="id_48408403" autocomplete="off">
		<input type="hidden" name="idfield" value="def:48408403">
	</form>
	
	<div class="icon w-icon-48408403"></div>
	<div class="title-box"><span class="title">Bookings</span></div>
</li><li class="outside_top w-ui element_list_item_23247315" data-content="Forums" data-original-title="" title="">
	<form name="id_23247315" autocomplete="off">
		<input type="hidden" name="idfield" value="def:23247315">
	</form>
	
	<div class="icon w-icon-23247315"></div>
	<div class="title-box"><span class="title">Forums</span></div>
</li>	</ul>
	<div style="clear:both"></div>
</li></ul>
			</div>
		<div class="w-scrollbar w-scrollbar-v" style="display: block;"><div class="w-scrollbar-inner"><div class="w-scrollbar-handle" unselectable="on" style="top: 0px; height: 139.141580756014px;"></div></div></div><div class="w-scrollbar w-scrollbar-h" style="display: none;"><div class="w-scrollbar-inner"><div class="w-scrollbar-handle" unselectable="on"></div></div></div><div class="w-scroll-corner" style="display: none;"></div></div>
		<div class="disabled-overlay">
			<span></span>
			<div class="disabled-overlay-text"></div>
		</div>
	</div>
	

</div>

<div id="view-container">

	<div id="w-editor-mobile">
	<div class="page">
		<div id="w-mobile-phone" class="w-massless-scroll">
			<div id="w-mobile-phone-screen" class="blackout">
				<div class="scroll">
					<div class="scroll-inner">
						<div id="w-mobile-icontent"></div>
						<div class="area-blackout"></div>
					</div>
				</div>
			</div>

		</div>
	</div>


</div>
	<div id="scroll_container" class="">
		<div id="icontent_container" style="min-height: 561px;" class="wsite-theme-894466177219106086">
			<div id="icontent" class="wsite-page-index no-header-page  wsite-theme-light"><div id="header-wrap">
        <div class="container">
			<div id="logo"><span id="weebly-area-1" class="weebly-area weebly-logo-area" style="display: inline-block;">
                <span class="wsite-logo">
                    <br>
                    <a><span id="titulo" class="editable-text" contenteditable="true">Negocios Electrónicos</span></a></span></span></div>
			<div id="nav"><ul class="wsite-menu-default"><span id="pg504342946458577982" class="wsite-nav-handle" style="display: inline;">
                <li class="w-menu-item  wsite-nav-0" contenteditable="true" id="menu_1" style="position: relative;"><a href="#" style="position: relative;">Inicio</a></li></span><span id="pg850307397510947453" class="wsite-nav-handle" style="display: inline;">
                <li contenteditable="true" class="w-menu-item  wsite-nav-1" id="menu_2" style="position: relative;"><a href="#" style="position: relative;">Multimedia</a></li></span><span id="pg896916919572794402" class="wsite-nav-handle" style="display: inline;">
                <li class="w-menu-item  wsite-nav-2" style="position: relative;" id="menu_3" contenteditable="true"><a href="#" style="position: relative;">Contacto</a></li></span></ul></div>
        </div><!-- end container -->
    </div><!-- end header-wrap -->  

    <div id="main-wrap">
        <div class="container">
   			<div id="secondlistParent" class="weebly-area weebly-content-area"><ul id="secondlist"><style type="text/css">.wsite-com-category-product-group .wsite-com-column { width: 33.33% !important } .wsite-com-category-product-featured-group .wsite-com-column { width: 25.00% !important } .wsite-com-category-subcategory-group .wsite-com-column { width: 33.33% !important } </style><div class="wsite-com-area" id="wsite-com-area-category" data-id="1"><div id="wsite-com-store">
	<div id="wsite-com-store-inner">

		<div class="wsite-com-content ">
			<div class="wsite-com-content-inner">
				<div style="clear:both"></div>
				
			</div>
		</div>

		<div id="wsite-com-empty-category" class="w-ui wsite-theme-light">
                        
			<span class="com-empty-message">
				<span class="com-msg-prefix" id="cuerpo" contenteditable="true">
					La asignatura Negocios Electrónicos tiene como propósito desarrollar en los y las estudiantes, capacidades especializadas de integración de sistemas y tecnologías de la información.
				</span>
			</span>
            <br>
            
			<span class="btn-com btn-icon-left com-empty-action">
				<span class="w-icon-plus"></span>
				Añadir Entrada
			</span>
		</div>

	</div>
	<div style="clear:both"></div>
</div>
</div></ul></div>
        </div><!-- end container -->
    </div><!-- end main-wrap -->

    <div id="footer-wrap">
        <div class="container">
       		<span id="weeblyfootertext" style="display: inline;"><div id="weebly-empty-footer" class="wsite-footer" style="position: relative;"><span class="weebly-empty-footer-message empty-element-message" contenteditable="true">Negocios Electrónicos 2014-II</span><div class="wsite-spotlight-cover" style="cursor: pointer;"><div class="wsite-spotlight-cover-inner"></div></div></div></span><span id="weeblyfooterattribution" style="display: none; margin: 1em 0px 0px; padding: 0px 0px 1em; font-size: 0.8em;"></span>
        </div><!-- end container -->
    </div><!-- end footer-wrap -->
	<!-- JavaScript -->
	
<div id="wsite-menus"></div></div>
			<div id="icontent_clear">&nbsp;</div>
			<div class="area-blackout"></div>
			
			
		</div>
	</div>

	<div id="w-theme-browser" class="w-ui" style="display: none;">
			</div>

</div>

        <% if("1".equals(site)){}else{ %>
<div class="weebly-blackout" id="bloque" style="z-index: 999; opacity: 0.5; height: 979px;"></div>
    <div class="weebly-dialog" id="frmdominio" style="position: absolute; left: 25%; z-index: 999; top: 10%;">  
    
    <div class="weebly-dialog-border">    <div class="weebly-dialog-content">    <div class="weebly-dialog-inner"><div><div id="domainContainer" class="titled-box w-ui" style="width: 645px; position: relative;">
	<div id="chooseDomain" style="position: relative;">
	
	<div id="domainWrapper" style="display: block;">
		<div id="domainChoiceTitle" class="titled-box-title">Escoge el dominio de tu sitio web</div>
	</div>

	 <div id="chooseDomainDiv" class="titled-box-body" style="display: block;">



		<span id="finalDomainName" name="finalDomainName" style="display: none;"></span>

		<form style="margin:0px; padding:0px;">
		<div class="multiple-choice-box-selected" style="width:603px; margin-bottom:18px; line-height:18px;" id="domainSubdomain" >
			<div class="multiple-choice-box-inner-left" style="padding:44px 0px;">
				<input type="radio" name="opcion" class="rbopcion" checked="true">
			</div>
			<div id="domainSubdomain-2" class="multiple-choice-box-inner-right" style="width: 520px; position: relative; display: block;">
				<div class="multiple-choice-box-title" style="font-size:16px;">Usa un subdominio de Weebdo.com</div>
				<div class="multiple-choice-box-body">Una manera fantástica de iniciar tu sitio web</div>
					<div class="multiple-choice-box-body" style="margin-top:13px;">
					<span class="domainText">http://</span>
					<input type="text" class="shaded-input actual" style="margin:0px 7px; width:266px;"><span class="domainText">.weebdo.com</span>
					<span id="weeblyDomainStatus" style="display:none;"></span>
				</div>
				
			</div>
			<div style="height: 0px; width: 0px; overflow: hidden; clear: both;"></div>
		</div>

		
			<div class="multiple-choice-box" style="width:603px; margin-bottom:18px; line-height:18px;" id="domainNewDomain">
				<div class="multiple-choice-box-inner-left" style="padding:44px 0px;">
					<input type="radio" name="opcion" class="rbopcion">
				</div>
				<div id="domainNewDomain-2" class="multiple-choice-box-inner-right" style="width: 520px; position: relative; display: block;">
					<div class="multiple-choice-box-title" style="font-size:16px;">Registra un dominio nuevo</div>
					<div class="multiple-choice-box-body">Para una presencia en línea más profesional</div>
					<div class="multiple-choice-box-body" style="margin-top:13px; position:relative;">
						<span class="domainText">http://www.</span>
						<input type="text" id="domain_sld" name="domain_sld" class="shaded-input"  style="margin-left:3px;" disabled="disabled">
						<div style="position:absolute; top:0px;; left:343px;"><div id="domain_tld"></div><div class="weeblyDropDown" style="position: relative; margin-right: 0px; width: 65px;"><div id="6117425_dropdownButton" class="dropdownButton" style="position: absolute; width: 21px; height: 25px; cursor: pointer; z-index: 21; top: 3px; right: 0px; background: url(http://cdn1.editmysite.com/weebly/images/gray-drop-down-larger.jpg) 0% 0% no-repeat transparent;"></div><div id="6117425_dropdownContainer" style="width: 65px; height: 28px; position: absolute; border: 1px solid rgb(159, 159, 159); z-index: 20; overflow: hidden; background: url(http://cdn1.editmysite.com/weebly/images/dropdown_background.jpg) repeat-x rgb(255, 255, 255);"><div id="6117425-0" style="height: 28px; overflow: hidden; cursor: pointer; padding-left: 8px;"><textarea style="display: none;" name="val">com</textarea><div style="line-height:28px;">.com</div></div></div></div></div>
						
						<span id="domainStatus" style="display:none;"></span>
					</div>
					
				</div>
				<div style="height: 0px; width: 0px; overflow: hidden; clear: both;"></div>
			</div>

			<div class="multiple-choice-box multiple-choice-box" style="width:603px; line-height:18px;" id="domainExistingDomain" >
				<div class="multiple-choice-box-inner-left" style="padding:44px 0px;">
					<input type="radio" name="opcion" class="rbopcion">
				</div>
				<div id="domainExistingDomain-2" class="multiple-choice-box-inner-right" style="width:520px; position:relative;">
					<div class="multiple-choice-box-title" style="font-size:16px;"><span id="domainExistingTitleDefault">Conectar un dominio que ya tiene</span> <span id="domainExistingTitleClient" style="display: none;">Introduzca el nombre de dominio de su cliente</span><img id="clientDomainHelp" style="display: none; position: relative; top: 2px; left: 5px;" src="" title="Enter your client's domain name and we'll provide setup instructions in the next step. If your client does not have a domain name yet, buy one and come back to this step later. To return to this screen, just hit the &amp;quot;Go Live&amp;quot; button for this site when you are ready to setup the domain."></div>
					<div class="multiple-choice-box-body" id="existingDomainSubtitle">Le ayudaremos a conectar su dominio cuando esté listo para publicar</div>
					<div class="multiple-choice-box-body" style="margin-top:13px;position:relative;">
						<span class="domainText">http://</span>
						<input type="text" id="weeblyExistingDomain" class="shaded-input" style="width:350px; margin:0px 7px; color:#999;" disabled="disabled">
					</div>
				</div>
				<div style="height: 0px; width: 0px; overflow: hidden; clear: both;"></div>
			</div>
	<div style="text-align:right; margin-top:20px;">
		<span id="mensaje" style="color:red;"></span>
				<a class="btn btn-primary btn-large" onclick="GrabarDominio();"><span class="button-inner">Continuar</span></a>
	</div>
	
		</form>


		</div>

<!-- chooseDomainCredit -->

</div> <!-- end #chooseDomain -->
</div></div></div></div></div></div>
<%}%>
</body></html>