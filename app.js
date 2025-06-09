function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Logado com sucesso!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Erro: " + error.message);
    });
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Conta criada com sucesso!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Erro: " + error.message);
    });
}