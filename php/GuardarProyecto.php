<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php

        function mkJSONforType($url, $numf, $type = "html") {
            
        }

        $proyectos = json_decode($_POST["proyects"], true);
        foreach ($proyectos["Proyects"] as $pros) {
            mkdir("../Proyects/" . $pros["name"]);
            foreach ($pros["files"] as $numf => $file) {
                $url = "";
                $type = "";
                if($file["new"])
                {
                foreach ($file as $t => $d) {

                    if ($t == "url") {
                        $url = $d;
                    }
                    if ($t == "type") {
                        $type = $d;
                        if ($type == "html") {
                            $html = ["type" => "html",
                                "html" => [ [
                                        "head" => [],
                                        "body" => [
                                            [
                                                "html" => "div",
                                                "netiq" => "2",
                                                "selector" => "tab" . ($numf + 1),
                                                "text" => "Hola Mundo!",
                                                "attr" => []
                                            ]
                                        ]
                                    ]
                            ]];
                            $file["new"]=false;
                            $json = json_encode($html);
                            file_put_contents($url, $json);
                        }
                    }
                }
            }
            }
        }


        $proyectos = json_encode($proyectos);
        file_put_contents("../json/proyects.json", $proyectos);
        ?>
    </body>
</html>
