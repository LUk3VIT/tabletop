<?php
session_start();
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../../style/reset.css">
    <link rel="stylesheet" href="../../style/loginCadastrar.css">
</head>
<body>
    <header class="header-top">
        <a class="header-top__link" href="../index.php">X</a>
    </header>

    <main class="conteudo-login">
        <form action="login_usuario.php" method="post" class="form">
            <label class="form-label" for="nome">Nome</label>
            <input class="form-input" type="text" id="nome" name="nome" required>

            <label class="form-label" for="password">Senha</label>
            <input class="form-input" type="password" id="password" name="senha" required>

            <?php
                if(isset($_SESSION['msg'])){
                    echo "<div style='background-color: #FF6347;color: #8B0000;padding: 3px;text-align: center' class='alert alert-danger'><h3>Login Inválido!!!!</h3></div>";
                }
                if(isset($_SESSION['mensagem_chat'])){
                    echo "<div style='background-color: #FF6347;color: #8B0000;padding: 3px;text-align: center' class='alert alert-danger'><h3>".$_SESSION['mensagem_chat']."</h3></div>";
                }
            ?>

            <a class="form-link__cadastra" href="../cadastro/cadastro.php">Cadastrar</a>
            <input type="submit" value="Login" class="enviar">
        </form>
    </main> 
</body>
</html>