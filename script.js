
const goToHome = () => {
	document.getElementById('sign-up').style.display = 'block'
	document.getElementById('sign-in').style.display = 'none'
}

const goToSignUp = () => {
	document.getElementById('sign-up').style.display = 'block'
	document.getElementById('sign-in').style.display = 'none'
}

const goToProfile = () => {
	document.getElementById('sign-in').style.display = 'block'
	document.getElementById('sign-up').style.display = 'none'
}

let globalIsSubmitted = false 

function signUp(isSubmitted = false) {
	let fullName = document.getElementById('full-name').value
	let email = document.getElementById('email').value
	let password = document.getElementById('password').value
	let confirmPassword = document.getElementById('confirm-password').value
	let error = false

    let userDetails = {
        fullName:fullName,
        email:email,
        password: password,
    };

    var json = JSON.stringify(userDetails);
    localStorage.setItem(fullName, json)
    localStorage.setItem(email, json)
    localStorage.setItem(password, json)
    console.log("user added")

	//document.getElementById('Email').innerHTML = localStorage.getItem(fullName)


    // var result = document.getElementById('result')
    // result.innerHTML = localStorage.getItem(fullName)
    // var user = localStorage.getItem(fullName)
    // var data = JSON.parse(user)
    // console.log(data)

    // if(user == null){
    //     result.innerHTML = 'NA'
    // }else if(fullName == data.fullName && email == data.email){
    //     result.innerHTML = localStorage.getItem(fullName)
    // }

	if(isSubmitted) {``
		globalIsSubmitted = true
	}

	if(globalIsSubmitted) {
		if(fullName.length >= 2 && email.includes("@") &&
        email.includes(".") &&
        email.indexOf("@") != 0 &&
        email.length - email.lastIndexOf(".") >= 3 && password.length >= 2 && confirmPassword.length >= 2) {
			document.getElementById('valid').style.display = 'block'
			document.getElementById('invalid').style.display = 'none'
		} else {
			document.getElementById('invalid').style.display = 'block'
			document.getElementById('valid').style.display = 'none'
			error = true
		}        

		if(!error && isSubmitted) {
			// alert('Your details have been saved successfully!')

            window.location.assign("profile.html")
            console.log("signuped successfully")

			document.getElementById('sign-up-form').reset()

			let validFeedbacks = document.getElementsByClassName('valid-feedback')
			for(let i = 0; i < validFeedbacks.length; i++) {
				validFeedbacks[i].style.display = 'block'
			}
			let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
			for(let i = 0; i < invalidFeedbacks.length; i++) {
				invalidFeedbacks[i].style.display = 'none'
			}
		}
	}
}

const logout = () => {
    window.localStorage.clear();
    window.location.reload(true);
    window.location.replace('index.html');
};


// 	let fullName = document.getElementByID('full_Name').value
// 	let email = document.getElementById('Email').value
// 	let password = document.getElementById('Password').value

// 	var user = localStorage.getItem(fullName)
// 	var data = JSON.parse(user)
// 	console.log(data)

// 	fullName.innerHtml = user

