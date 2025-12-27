// Alterna entre Login e Cadastro
function toggleAuth() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
}

// Simulação de Cadastro
function handleRegister() {
    const username = document.getElementById('reg-username').value;
    const loginId = document.getElementById('reg-id').value;
    const password = document.getElementById('reg-pass').value;

    if (!username || !loginId || !password) {
        alert("Por favor, preencha todos os campos do herói!");
        return;
    }

    console.log("Registrando:", { username, loginId, password });
    alert(`Herói ${username} criado com sucesso! Faça login agora.`);
    toggleAuth();
}

// Simulação de Login
function handleLogin() {
    const loginId = document.getElementById('login-id').value;
    const password = document.getElementById('login-pass').value;

    if (loginId === "" || password === "") {
        alert("O ID e a Senha são obrigatórios para entrar na masmorra!");
        return;
    }

    console.log("Tentativa de login:", loginId);
    // Aqui você faria a verificação com o banco de dados
    alert("Entrando no jogo...");
    window.location.href = "index.html"; // Redireciona para a landing page ou jogo
}