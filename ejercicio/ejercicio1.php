<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$num1=$_POST["num1"];
$num2=$_POST["num2"];
if($num1>$num2)
{
    echo "el mayor es numero: ".$num1 . "<br>";
    echo "el menor es numero: ".$num2;
}
else
{
    echo "el mayor  es numero: ".$num2 . "<br>";
    echo "el menor es numero: ".$num1;
}


