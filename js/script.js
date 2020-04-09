let login = false, password = false;

const checkBoth = () =>{
	if(login == true && password == true){
		$('button').addClass('btn-active');
		return;
	}
	if($('button').hasClass('btn-active'))
		$('button').removeClass('btn-active');
}

const checkLogin = () =>{
	let value = document.querySelector('input[name="login"]').value;
	if(value.length===0){
		$('input[name="login"]').css('background-color', 'rgb(90,67,67)');
		$('#span-login').css('display', 'block');
		login = false;
	}

	else{
		$('input[name="login"]').css('background-color', 'rgb(72,72,72)');
		$('#span-login').css('display', 'none');
		login = true;
	}

	checkBoth();
}

const checkPassword = () =>{
	let value = document.querySelector('input[name="password"]').value;
	if(value.length===0){
		$('input[name="password"]').css('background-color', 'rgb(90,67,67)');
		$('#span-password').css('display', 'block');
		password = false;
	}

	else{
		$('input[name="password"]').css('background-color', 'rgb(72,72,72)');
		$('#span-password').css('display', 'none');
		password = true;
	}

	checkBoth();
}




$('input[name="login"]').on('keyup', checkLogin);
$('input[name="password"]').on('keyup', checkPassword);
