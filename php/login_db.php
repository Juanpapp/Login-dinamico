<?php
include 'conexion_db.php';

$userEmail = $_POST["userEmail"];
$userPassword = $_POST["userPassword"];

$checkUser = mysqli_query($conexion, "SELECT * FROM usuarios WHERE email_usuario = '$userEmail'");

if(mysqli_num_rows($checkUser) > 0) {
    $user = mysqli_fetch_assoc($checkUser);
    $storedPassword = $user['password_usuario'];
    
    if($userPassword === $storedPassword) {
        echo 'Inicio de sesión exitoso';
    } else {
        echo 'Contraseña incorrecta';
    }
} else {
    echo 'Correo no registrado';
}
?>