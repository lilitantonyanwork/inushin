<?php
if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    $otvet_serv = json_encode(
        array(
            'text' => 'Возникла ошибка при отправке данных'
        ));
    die($otvet_serv);
}

if( !isset($_POST["polz_tel"]))
{
    $otvet_serv = json_encode(array('type'=>'error', 'text' => 'Заполните форму', 'status' => false));
    die($otvet_serv);
}
$user_Phone = $_POST["polz_tel"];
$user_Name = $_POST["polz_name"];
$user_Email = $_POST["polz_mail"];
$user_Msg = $_POST["polz_msg"];

if(!is_numeric($user_Phone))
{
    $otvet_serv = json_encode(array('text' => 'Номер телефона может состоять только из цифр',
        'status' => false));
    die($otvet_serv);
}

$to_Email = "support@inushin.com";
$subject = 'Запрос обратного звонка ' . $user_Phone. '  Имя  ' . $user_Name. ' ' . $user_Email . ' ' . $user_Msg;

if(!mail($to_Email, $subject,  "From:  \r\n" . $user_Phone))
{
    $otvet_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.', 'status' => false));
    die($otvet_serv);
}else{
    $otvet_serv = json_encode(array('text' => 'Спасибо!  ваше сообщение отправлено.', 'status' => true));
    die($otvet_serv);
}
