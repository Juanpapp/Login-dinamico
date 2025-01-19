<?php
include 'conexion_db.php';

$userName = $_POST["userName"];
$userEmail = $_POST["userEmail"];
$userPassword = $_POST["userPassword"]; // Almacenar la contraseña en texto plano

$checkEmail = mysqli_query($conexion, "SELECT * FROM usuarios WHERE email_usuario = '$userEmail'");
$checkUserName = mysqli_query($conexion, "SELECT * FROM usuarios WHERE nombre_usuario = '$userName'");

if(mysqli_num_rows($checkEmail) > 0) {
    echo '
        <script>
            alert("Este correo ya está registrado, intenta con otro");
            window.location = "../index.php";
        </script>
    ';
    exit();
}

if(mysqli_num_rows($checkUserName) > 0) {
    echo '
        <script>
            alert("Este nombre de usuario ya está registrado, intenta con otro");
            window.location = "../index.php";
        </script>
    ';
    exit();
}

$query = "INSERT INTO usuarios (nombre_usuario, email_usuario, password_usuario) VALUES ('$userName', '$userEmail', '$userPassword')";
$execute = mysqli_query($conexion, $query);

if($execute) {
    echo '
        <script>
            alert("Usuario registrado exitosamente");
            window.location = "../index.php";
        </script>
    ';
} else {
    echo '
        <script>
            alert("Hubo un error, intenta nuevamente");
            window.location = "../index.php";
        </script>
    ';
}
?>