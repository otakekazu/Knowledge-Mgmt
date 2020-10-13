function register(){
    var email = document.getElementById('reg-email').value;
    var pass = document.getElementById('reg-pass').value;

    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(function() {
        alert('registration success');
        location.href = "./index.html";
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('error code: ' + errorCode + '\n error msg: ' + errorMessage);
    });
}

function login(){
    var email = document.getElementById('login-email').value;
    var pass = document.getElementById('login-pass').value;

    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(function() {
        alert('login success');
        location.href = "./index.html";
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('error code: ' + errorCode + '\n error msg: ' + errorMessage);
      });
}

function logout(){
    firebase.auth().signOut()
    .then(function() {
        alert('success logout');
        location.href = "./login.html";
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('error code: ' + errorCode + '\n error msg: ' + errorMessage);
    })
};

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // alert('ログイン中');
    } else {
        var pathname = location.pathname;
        if(pathname == "/" || pathname == "/index.html") {
            location.href = "./login.html";
            alert('ログアウト中です。');
        }
    }
});

