




$(document).ready(function(){

 	$("#cocacola").click(function(){
 		$("#pepsitabs").hide();
    	$("#colatabs").show();
    	
  	});

  	$("#pepsi").click(function(){
  		$("#colatabs").hide();
  		$("#pepsitabs").show();
  		
  	});

  	$('.cocacolaImagen').mouseenter(function(){
  		$(this).animate({width:'200px',height:'200px'});
  	});

  	$('.cocacolaImagen').mouseleave(function(){
  		$(this).animate({width:'100px',height:'100px'});
  	});

  	$('.pepsiImagen').mouseenter(function(){
  		$(this).animate({width:'200px',height:'200px'});
  	});

  	$('.pepsiImagen').mouseleave(function(){
  		$(this).animate({width:'100px',height:'100px'});
  	});
	var numeroCocacolas;
	var numeroPepsis;
  	$("#cantidadCocacolas").blur(function(){
  		if($("#cantidadCocacolas").val()!=""){
  			 numeroCocacolas = parseInt($("#cantidadCocacolas").val());
  		}else{
  			 numeroCocacolas = 0;
  		}	
  		$("#totalCocacolas").text(numeroCocacolas*1.5+"€");
  		if($("#cantidadPepsis").val()!="" && $("#cantidadCocacolas").val()!=""){
  			$("#totalTodo").text(numeroPepsis*2+numeroCocacolas*1.5+"€");
  		}else{
  			$("#totalTodo").text(0+"€");
  		}

  	});

  	$("#cantidadPepsis").blur(function(){
  		if($("#cantidadPepsis").val()!=""){
  			numeroPepsis = parseInt($("#cantidadPepsis").val());
  		}else{
  			numeroPepsis = 0;
  		}
  		$("#totalPepsis").text(numeroPepsis*2+"€");
  		if($("#cantidadPepsis").val()!="" && $("#cantidadCocacolas").val()!=""){
  			$("#totalTodo").text(numeroPepsis*2+numeroCocacolas*1.5+"€");
  		}else{
  			$("#totalTodo").text(0+"€");
  		}
  		

  	});



	  $(".botonAjax").click(function(){
	    $.get("https://jsonplaceholder.typicode.com/posts/",function(data, status){

	    	
	    		$(".titulos").text("Titulo: "+data[0].title);
	    		$(".titulos1").text("Titulo: "+data[1].title);
	    		$(".titulos2").text("Titulo: "+data[2].title);
	    });
	  });

			  $(".titulos").click(function(){

			  	$.get("https://jsonplaceholder.typicode.com/posts/1",function(data, status){
			    	$(".body").text("Body: "+data.body);
			   	 });
			  	 $.get("https://jsonplaceholder.typicode.com/photos/1",function(data,status){
	    	 	$(".imagen1").attr("src",data.url);
	    		  });
			   });
			  
	  		  $(".titulos1").click(function(){
		  		 $.get("https://jsonplaceholder.typicode.com/posts/2",function(data, status){
		    		$(".body1").text("Body: "+data.body);
		    	 });
		    	  $.get("https://jsonplaceholder.typicode.com/photos/2",function(data,status){
	    	 	$(".imagen2").attr("src",data.url);
	    	 });
	   		  });
		 
	  		   $(".titulos2").click(function(){
	  		 $.get("https://jsonplaceholder.typicode.com/posts/3",function(data, status){
	    		$(".body2").text("Body: "+data.body);
	    	 });
	    	 $.get("https://jsonplaceholder.typicode.com/photos/3",function(data,status){
	    	 	$(".imagen3").attr("src",data.url);
	    	 });
	  		});
		





  	$('ul.tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.tabs li').removeClass('current');
	$('.tab-content').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
	});



});