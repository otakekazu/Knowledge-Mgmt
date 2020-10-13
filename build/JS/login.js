document.getElementById('register').onclick = function(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    // alert(email + ' ' + pass);

    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        alert('cannot register : (' + error.message + ')');
    });

    // alert("check");
};