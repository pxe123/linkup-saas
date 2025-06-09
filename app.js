// Funções de login e cadastro
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

// Função para salvar link no Firebase
function saveLink() {
  const pageName = document.getElementById("pageName").value;
  const linkTitle = document.getElementById("linkTitle").value;
  const linkUrl = document.getElementById("linkUrl").value;

  if (!pageName || !linkTitle || !linkUrl) {
    alert("Preencha todos os campos.");
    return;
  }

  const db = firebase.firestore();
  const userId = auth.currentUser.uid;

  db.collection("users").doc(userId).collection("links").add({
    pageName,
    title: linkTitle,
    url: linkUrl,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    alert("Link salvo com sucesso!");
    loadLinks();
  }).catch((error) => {
    alert("Erro ao salvar link: " + error.message);
  });
}

// Função para carregar links salvos
function loadLinks() {
  const db = firebase.firestore();
  const userId = auth.currentUser.uid;
  const linkList = document.getElementById("linkList");
  linkList.innerHTML = "";

  db.collection("users").doc(userId).collection("links")
    .orderBy("createdAt", "desc")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        const li = document.createElement("li");
        li.textContent = `${data.title} → ${data.url}`;
        linkList.appendChild(li);
      });
    });
}