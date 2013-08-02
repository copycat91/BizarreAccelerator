<?php

$stageNum = $_POST["s"];

if ($stageNum > 0) {
    if ($stageNum == 1) {
        $s = '{"stageName":"1","map":{"elmts":[{"type":"proton-source","pos":[51,53],"dir":0},{"type":"fixed-target","pos":[247,53],"dir":0}]},"utilities":{}}';
    }
    else if ($stageNum == 2) {
        $s = '{"stageName":"2","map":{"elmts":[{"type":"proton-source","pos":[50,47],"dir":0},{"type":"elec-field","pos":[240,47],"dir":-3.141592653589793},{"type":"fixed-target","pos":[302,47],"dir":0}]},"utilities":{"elec-field":{"num":1}}}';
    }
    else if ($stageNum == 3) {
        $s = '{"stageName":"3","map":{"elmts":[{"type":"proton-source","pos":[63,62],"dir":0},{"type":"fixed-target","pos":[531,147],"dir":0},{"type":"block","pos":[530,105],"dir":0},{"type":"block","pos":[570,105],"dir":0},{"type":"block","pos":[571,146],"dir":0},{"type":"block","pos":[572,188],"dir":0},{"type":"block","pos":[530,189],"dir":0},{"type":"block","pos":[489,189],"dir":0},{"type":"block","pos":[447,189],"dir":0},{"type":"block","pos":[488,105],"dir":0},{"type":"block","pos":[446,105],"dir":0}]},"utilities":{"elec-field":{"num":3}}}';
    }
    else { // testing purpose only
        $s = <<<EOT
{
    "stageName": "Test Stage",
    "eligible": 1,
    "map": {
        "elmts": [
            {"type": "proton-source", "pos":[20, 40], "dir": 0},
            {"type": "cancer-target", "pos":[500, 40], "dir": 0},
            {"type": "alt-mag-field", "pos":[75, 40], "dir": -1},
            {"type": "strong-mag-field", "pos":[75, 150], "dir": 1},
            {"type": "strong-mag-field", "pos":[350, 150], "dir": 1},
            {"type": "strong-mag-field", "pos":[350, 40], "dir": -1},
            {"type": "elec-field", "pos": [200,0], "dir":0}
        ]
    },
    "utilities": {
        "strong-mag-field": {"num":5},
        "alt-mag-field": {"num":4},
        "elec-field": {"num":1},
        "xray": {"num":1}
    },
    "intro": {
        "images": ["img/intro/1/1.png"]
    }
}
EOT;
    }
}
else if ($stageNum == 0) { // STAGE CREATOR
    $s = <<<EOT
{
    "stageName": "Creator",
    "eligible": 1,
    "map": {
        "elmts": []
    },
    "utilities": {
        "electron-source": {"num":99},
        "proton-source": {"num":99},
        
        "strong-mag-field": {"num":99},
        "alt-mag-field": {"num":99},
        "elec-field": {"num":99},
        "xray": {"num":99},
        "block": {"num":99},
        
        "fixed-target": {"num":99},
        "med-image-target": {"num":99},
        "cancer-target": {"num":99},
        "collision-target": {"num":99},
        "cargo-target": {"num":99},
        "furniture-target": {"num":99},
        "food-target": {"num":99}
    }
}
EOT;
}

// set eligibility
$eligible = 1;
if ($eligible) $s = substr_replace($s, '"eligible":1,', 1, 0);
else $s = substr_replace($s, '"eligible":0,', 1, 0);

// set the tutorial introduction (if exists)
$dir = "img/intro/$stageNum/";
$fname = $dir."text.txt";
$f = @fopen($fname, "r");
$tutorialObj = array("intro"=>array());
if ($f) {
    $contents = fread($f, filesize($fname));
    fclose($f);
    
    // get the texts for tutorial
    $textsTutorial = explode("##", $contents);
    $tutorialObj["intro"]["texts"] = $textsTutorial;
    
    // get the images
    $imagesTutorial = array();
    for ($i = 1; $i <= sizeof($textsTutorial); $i++) {
        array_push($imagesTutorial, $dir.$i.".png");
        // $imagesTutorial[$i] = $dir.$i.".png";
    }
    $tutorialObj["intro"]["images"] = $imagesTutorial;
    
    $tutorial = json_encode($tutorialObj);
    
    // insert to the output string
    $s = substr_replace($s, ",".substr($tutorial, 1, sizeof($tutorial)-2), sizeof($s)-2, 0);
}

echo $s;
?>