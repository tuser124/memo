<?php
echo "丁半賭博ゲームを始めます！" . PHP_EOL;

$wallet =  1000;

function getBet($bet){
    while(true){
    $bet = intval(trim(fgets(STDIN)));
    if($bet >= 1 && $bet <= $wallet){
        return $bet;
    }
        echo "無効な入力です！" . PHP_EOL;
    }
}

while(true){
    echo "いくらかけますか？⇒";
    getBet($bet);

    echo "丁か半か？⇒";
    $choice = intval(trim(fgets(STDIN)));
    if($choice == 0 || 1){
        return $choice;
    } else{
        echo "無効な入力です！" . PHP_EOL;
        continue;
    }


}