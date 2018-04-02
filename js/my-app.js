// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
    view: {
    	xhrCache: false,
    	pushState: false,
    	uniqueHistory: true,
	},
	panel: {
		swipe: 'left',
	},
	dialog: {
    	title: 'Grand Hotel',
  	},
	popup: {
		closeByBackdropClick: false,
	},
	toolbar: {
		hideOnPageScroll: true,
	},
	routes: [
		{
			path: '/about/',
			url: 'about.html',
			name: 'about',
  		}
	]
});

var $$ = Dom7;


$$("#btn-login").on("click", function(){
	var formData = myApp.form.convertToData('#form-login');
	var username = $$('#username').val(); //input[name="username"]
 	var password = $$('#password').val();

	if (username == "admin" && password == "admin") {
		//myApp.loginScreen.close(".login-screen", true);
		myApp.popup.close('#popup-login',true);
		//$$('.login-screen').addClass("modal-out");
	}else{
		myApp.dialog.alert("Los datos ingresados son incorrectos","Login");
	}
});

$$(".btn-close-register").on("click", function(){
	myApp.popup.close('#popup-register',true);
	
});







 

