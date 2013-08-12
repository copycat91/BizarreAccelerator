<?php

$stageNum = $_POST["s"];

if ($stageNum > 0) {
    if ($stageNum == 1) {
        $s = '{"stageName":"1","map":{"elmts":[{"type":"proton-source","pos":[282,200],"dir":0},{"type":"fixed-target","pos":[588,200],"dir":0}]},"utilities":{}}';
    }
    else if ($stageNum == 2) {
        $s = '{"stageName":"2","map":{"elmts":[{"type":"proton-source","pos":[260,200],"dir":0},{"type":"elec-field","pos":[467,200],"dir":-3.141592653589793},{"type":"fixed-target","pos":[654,200],"dir":0}]},"utilities":{"elec-field":{"num":2}}}';
    }
    else if ($stageNum == 3) {
        $s = '{"stageName":"3","map":{"elmts":[{"type":"proton-source","pos":[240,113],"dir":0},{"type":"fixed-target","pos":[641,222],"dir":0},{"type":"block","pos":[641,181],"dir":0},{"type":"block","pos":[683,222],"dir":0},{"type":"block","pos":[683,181],"dir":0},{"type":"block","pos":[683,263],"dir":0},{"type":"block","pos":[642,263],"dir":0},{"type":"block","pos":[601,263],"dir":0},{"type":"block","pos":[600,181],"dir":0}]},"utilities":{"elec-field":{"num":3}}}';
    }
    else if ($stageNum == 4) {
        $s = '{"stageName":"4","map":{"elmts":[{"type":"fixed-target","pos":[604,196],"dir":0},{"type":"elec-field","pos":[564,195],"dir":-4.71238898038469},{"type":"elec-field","pos":[564,111],"dir":-4.71238898038469},{"type":"elec-field","pos":[564,153],"dir":-4.71238898038469},{"type":"elec-field","pos":[564,69],"dir":-4.71238898038469},{"type":"elec-field","pos":[564,237],"dir":-4.71238898038469},{"type":"elec-field","pos":[564,279],"dir":-4.71238898038469},{"type":"elec-field","pos":[564,321],"dir":-4.71238898038469},{"type":"elec-field","pos":[564,363],"dir":-4.71238898038469},{"type":"elec-field","pos":[564,27],"dir":-4.71238898038469},{"type":"elec-field","pos":[522,195],"dir":-4.71238898038469},{"type":"elec-field","pos":[523,153],"dir":-4.71238898038469},{"type":"elec-field","pos":[523,111],"dir":-4.71238898038469},{"type":"elec-field","pos":[523,69],"dir":-4.71238898038469},{"type":"elec-field","pos":[522,237],"dir":-4.71238898038469},{"type":"elec-field","pos":[522,279],"dir":-4.71238898038469},{"type":"elec-field","pos":[522,321],"dir":-4.71238898038469},{"type":"elec-field","pos":[481,153],"dir":-4.71238898038469},{"type":"elec-field","pos":[481,195],"dir":-4.71238898038469},{"type":"elec-field","pos":[481,237],"dir":-4.71238898038469},{"type":"proton-source","pos":[261,194],"dir":0}]},"utilities":{"elec-field":{"num":4}}}';
    }
    else if ($stageNum == 5) {
        $s = '{"stageName":"5","map":{"elmts":[{"type":"proton-source","pos":[601,189],"dir":0},{"type":"fixed-target","pos":[398,189],"dir":0}]},"utilities":{"strong-mag-field":{"num":3}}}';
    }
    else if ($stageNum == 6) {
        $s = '{"stageName":"6","map":{"elmts":[{"type":"fixed-target","pos":[603,294],"dir":0},{"type":"block","pos":[561,294],"dir":0},{"type":"block","pos":[603,336],"dir":0},{"type":"block","pos":[561,336],"dir":0},{"type":"block","pos":[645,336],"dir":0},{"type":"block","pos":[644,294],"dir":0},{"type":"block","pos":[644,252],"dir":0},{"type":"block","pos":[561,252],"dir":0},{"type":"strong-mag-field","pos":[602,211],"dir":0},{"type":"proton-source","pos":[290,207],"dir":0}]},"utilities":{"strong-mag-field":{"num":4},"elec-field":{"num":1}}}';
    }
    else if ($stageNum == 7) {
        $s = '{"stageName":"7","map":{"elmts":[{"type":"proton-source","pos":[223,115],"dir":0},{"type":"strong-mag-field","pos":[453,113],"dir":0},{"type":"block","pos":[411,154],"dir":0},{"type":"fixed-target","pos":[453,196],"dir":0},{"type":"block","pos":[496,155],"dir":0},{"type":"block","pos":[453,239],"dir":0},{"type":"block","pos":[410,197],"dir":0},{"type":"block","pos":[496,197],"dir":0}]},"utilities":{"elec-field":{"num":3}}}';
    }
    else if ($stageNum == 8) {
        $s = '{"stageName":"8","map":{"elmts":[{"type":"proton-source","pos":[270,156],"dir":-6.283185307179586},{"type":"med-image-target","pos":[477,196],"dir":0},{"type":"block","pos":[228,156],"dir":0},{"type":"block","pos":[228,198],"dir":0},{"type":"block","pos":[270,240],"dir":0},{"type":"block","pos":[312,240],"dir":0},{"type":"block","pos":[354,240],"dir":0},{"type":"block","pos":[396,240],"dir":0},{"type":"block","pos":[438,240],"dir":0},{"type":"block","pos":[480,240],"dir":0},{"type":"block","pos":[522,196],"dir":0},{"type":"block","pos":[479,153],"dir":0},{"type":"block","pos":[436,153],"dir":0},{"type":"block","pos":[398,110],"dir":0},{"type":"block","pos":[355,111],"dir":0},{"type":"block","pos":[312,111],"dir":0},{"type":"block","pos":[269,111],"dir":0}]},"utilities":{"strong-mag-field":{"num":3},"elec-field":{"num":2}}}';
    }
    else if ($stageNum == 9) {
        $s = '{"stageName":"9","map":{"elmts":[{"type":"proton-source","pos":[138,192],"dir":0},{"type":"strong-mag-field","pos":[497,190],"dir":0},{"type":"strong-mag-field","pos":[497,148],"dir":0},{"type":"strong-mag-field","pos":[497,106],"dir":0},{"type":"strong-mag-field","pos":[497,232],"dir":0},{"type":"strong-mag-field","pos":[497,274],"dir":0},{"type":"strong-mag-field","pos":[497,316],"dir":0},{"type":"strong-mag-field","pos":[497,64],"dir":0},{"type":"strong-mag-field","pos":[497,357],"dir":0},{"type":"strong-mag-field","pos":[498,23],"dir":0},{"type":"strong-mag-field","pos":[497,398],"dir":0},{"type":"med-image-target","pos":[584,192],"dir":0}]},"utilities":{"strong-mag-field":{"num":2},"elec-field":{"num":2}}}';
    }
    else if ($stageNum == 10) {
        $s = '{"stageName":"10","map":{"elmts":[{"type":"proton-source","pos":[105,174],"dir":0},{"type":"elec-field","pos":[161,131],"dir":-4.71238898038469},{"type":"elec-field","pos":[208,131],"dir":-4.71238898038469},{"type":"elec-field","pos":[161,219],"dir":-1.5707963267948966},{"type":"elec-field","pos":[208,219],"dir":-7.853981633974483},{"type":"elec-field","pos":[255,131],"dir":-4.71238898038469},{"type":"elec-field","pos":[254,219],"dir":-1.5707963267948966},{"type":"elec-field","pos":[300,219],"dir":-7.853981633974483},{"type":"elec-field","pos":[302,131],"dir":-4.71238898038469},{"type":"elec-field","pos":[348,219],"dir":-1.5707963267948966},{"type":"elec-field","pos":[348,131],"dir":-4.71238898038469},{"type":"elec-field","pos":[393,132],"dir":-4.71238898038469},{"type":"elec-field","pos":[394,219],"dir":-7.853981633974483},{"type":"elec-field","pos":[440,132],"dir":-4.71238898038469},{"type":"elec-field","pos":[441,219],"dir":-1.5707963267948966},{"type":"elec-field","pos":[486,132],"dir":-4.71238898038469},{"type":"elec-field","pos":[534,133],"dir":-4.71238898038469},{"type":"elec-field","pos":[578,177],"dir":-3.141592653589793},{"type":"elec-field","pos":[577,221],"dir":-3.141592653589793},{"type":"elec-field","pos":[488,265],"dir":0},{"type":"elec-field","pos":[577,265],"dir":-3.141592653589793},{"type":"elec-field","pos":[488,310],"dir":0},{"type":"elec-field","pos":[577,310],"dir":-3.141592653589793},{"type":"elec-field","pos":[488,354],"dir":0},{"type":"elec-field","pos":[578,355],"dir":-3.141592653589793},{"type":"med-image-target","pos":[532,395],"dir":0},{"type":"block","pos":[394,175],"dir":0}]},"utilities":{"elec-field":{"num":3},"strong-mag-field":{"num":1}}}';
    }
    else if ($stageNum == 11) {
        $s = '{"stageName":"11","map":{"elmts":[{"type":"proton-source","pos":[217,205],"dir":0},{"type":"cancer-target","pos":[216,155],"dir":0}]},"utilities":{"strong-mag-field":{"num":2},"elec-field":{"num":2}}}';
    }
    else if ($stageNum == 12) {
        $s = '{"stageName":"12","map":{"elmts":[{"type":"proton-source","pos":[211,192],"dir":0},{"type":"cancer-target","pos":[399,239],"dir":0},{"type":"block","pos":[166,144],"dir":0},{"type":"block","pos":[165,192],"dir":0},{"type":"block","pos":[165,239],"dir":0},{"type":"block","pos":[208,284],"dir":0},{"type":"block","pos":[254,284],"dir":0},{"type":"block","pos":[301,284],"dir":0},{"type":"block","pos":[349,285],"dir":0},{"type":"block","pos":[396,286],"dir":0},{"type":"block","pos":[444,286],"dir":0},{"type":"block","pos":[490,240],"dir":0},{"type":"block","pos":[491,193],"dir":0},{"type":"block","pos":[492,146],"dir":0},{"type":"block","pos":[492,101],"dir":0},{"type":"block","pos":[447,54],"dir":0},{"type":"block","pos":[400,53],"dir":0},{"type":"block","pos":[354,53],"dir":0},{"type":"block","pos":[308,53],"dir":0},{"type":"block","pos":[263,54],"dir":0},{"type":"block","pos":[218,54],"dir":0},{"type":"block","pos":[166,98],"dir":0}]},"utilities":{"elec-field":{"num":1},"strong-mag-field":{"num":10}}}';
    }
    else if ($stageNum == 13) {
        $s = '{"stageName":"13","map":{"elmts":[{"type":"electron-source","pos":[322,189],"dir":0},{"type":"fixed-target","pos":[512,185],"dir":0},{"type":"elec-field","pos":[462,185],"dir":0},{"type":"elec-field","pos":[462,139],"dir":0},{"type":"elec-field","pos":[462,231],"dir":0},{"type":"elec-field","pos":[559,186],"dir":0},{"type":"elec-field","pos":[560,232],"dir":0},{"type":"elec-field","pos":[559,139],"dir":0},{"type":"elec-field","pos":[511,232],"dir":-1.5707963267948966},{"type":"elec-field","pos":[512,139],"dir":-4.71238898038469}]},"utilities":{"strong-mag-field":{"num":5}}}';
    }
    else if ($stageNum == 14) {
        $s = '{"stageName":"14","map":{"elmts":[{"type":"elec-field","pos":[310,160],"dir":0},{"type":"elec-field","pos":[356,209],"dir":-1.5707963267948966},{"type":"elec-field","pos":[401,159],"dir":-3.141592653589793},{"type":"elec-field","pos":[355,113],"dir":-4.71238898038469},{"type":"elec-field","pos":[402,255],"dir":0},{"type":"elec-field","pos":[308,255],"dir":-3.141592653589793},{"type":"elec-field","pos":[354,305],"dir":-4.71238898038469},{"type":"elec-field","pos":[450,209],"dir":-4.71238898038469},{"type":"elec-field","pos":[497,159],"dir":0},{"type":"elec-field","pos":[449,113],"dir":-1.5707963267948966},{"type":"elec-field","pos":[498,256],"dir":-3.141592653589793},{"type":"elec-field","pos":[450,303],"dir":-1.5707963267948966},{"type":"fixed-target","pos":[449,160],"dir":0},{"type":"electron-source","pos":[255,209],"dir":0}]},"utilities":{"strong-mag-field":{"num":5}}}';
    }
    else if ($stageNum == 15) {
        $s = '{"stageName":"15","map":{"elmts":[{"type":"block","pos":[306,137],"dir":0},{"type":"block","pos":[356,137],"dir":0},{"type":"block","pos":[407,137],"dir":0},{"type":"block","pos":[305,231],"dir":0},{"type":"block","pos":[356,231],"dir":0},{"type":"block","pos":[408,231],"dir":0},{"type":"block","pos":[457,137],"dir":0},{"type":"block","pos":[501,184],"dir":0},{"type":"block","pos":[502,232],"dir":0},{"type":"block","pos":[503,281],"dir":0},{"type":"block","pos":[409,280],"dir":0},{"type":"block","pos":[409,328],"dir":0},{"type":"block","pos":[503,329],"dir":0},{"type":"electron-source","pos":[257,184],"dir":0},{"type":"food-target","pos":[454,379],"dir":0},{"type":"elec-field","pos":[307,183],"dir":-3.141592653589793}]},"utilities":{"strong-mag-field":{"num":2},"elec-field":{"num":3}}}';
    }
    else if ($stageNum == 16) {
        $s = '{"stageName":"16","map":{"elmts":[{"type":"electron-source","pos":[452,205],"dir":-1.5707963267948966},{"type":"strong-mag-field","pos":[451,252],"dir":-1},{"type":"strong-mag-field","pos":[403,252],"dir":-1},{"type":"strong-mag-field","pos":[498,252],"dir":-1},{"type":"strong-mag-field","pos":[453,160],"dir":-1},{"type":"strong-mag-field","pos":[499,160],"dir":-1},{"type":"strong-mag-field","pos":[405,160],"dir":-1},{"type":"strong-mag-field","pos":[453,112],"dir":-1},{"type":"strong-mag-field","pos":[405,112],"dir":-1},{"type":"strong-mag-field","pos":[500,112],"dir":-1},{"type":"strong-mag-field","pos":[356,160],"dir":-1},{"type":"strong-mag-field","pos":[355,252],"dir":-1},{"type":"strong-mag-field","pos":[547,252],"dir":-1},{"type":"strong-mag-field","pos":[547,160],"dir":-1},{"type":"strong-mag-field","pos":[451,300],"dir":-1},{"type":"strong-mag-field","pos":[499,300],"dir":-1},{"type":"strong-mag-field","pos":[403,300],"dir":-1},{"type":"strong-mag-field","pos":[356,111],"dir":-1},{"type":"strong-mag-field","pos":[307,160],"dir":-1},{"type":"strong-mag-field","pos":[355,300],"dir":-1},{"type":"strong-mag-field","pos":[548,111],"dir":-1},{"type":"strong-mag-field","pos":[548,301],"dir":-1},{"type":"strong-mag-field","pos":[596,160],"dir":-1},{"type":"strong-mag-field","pos":[596,252],"dir":-1},{"type":"strong-mag-field","pos":[453,65],"dir":-1},{"type":"strong-mag-field","pos":[500,65],"dir":-1},{"type":"strong-mag-field","pos":[406,64],"dir":-1},{"type":"strong-mag-field","pos":[403,348],"dir":-1},{"type":"strong-mag-field","pos":[451,348],"dir":-1},{"type":"strong-mag-field","pos":[500,348],"dir":-1},{"type":"strong-mag-field","pos":[305,253],"dir":-1},{"type":"food-target","pos":[313,295],"dir":0}]},"utilities":{"elec-field":{"num":5}}}';
    }
    else if ($stageNum == 17) {
        $s = '{"stageName":"17","map":{"elmts":[{"type":"electron-source","pos":[332,400],"dir":-1.5707963267948966},{"type":"strong-mag-field","pos":[332,360],"dir":0},{"type":"strong-mag-field","pos":[372,360],"dir":0},{"type":"strong-mag-field","pos":[372,400],"dir":0},{"type":"strong-mag-field","pos":[452,360],"dir":0},{"type":"strong-mag-field","pos":[492,360],"dir":0},{"type":"strong-mag-field","pos":[412,400],"dir":0},{"type":"strong-mag-field","pos":[452,400],"dir":0},{"type":"strong-mag-field","pos":[492,400],"dir":0},{"type":"strong-mag-field","pos":[532,360],"dir":0},{"type":"strong-mag-field","pos":[532,320],"dir":0},{"type":"strong-mag-field","pos":[572,320],"dir":0},{"type":"strong-mag-field","pos":[572,280],"dir":0},{"type":"strong-mag-field","pos":[532,280],"dir":0},{"type":"strong-mag-field","pos":[572,240],"dir":0},{"type":"strong-mag-field","pos":[532,240],"dir":0},{"type":"strong-mag-field","pos":[532,200],"dir":0},{"type":"strong-mag-field","pos":[572,200],"dir":0},{"type":"strong-mag-field","pos":[532,160],"dir":0},{"type":"strong-mag-field","pos":[492,160],"dir":0},{"type":"strong-mag-field","pos":[412,160],"dir":0},{"type":"strong-mag-field","pos":[372,160],"dir":0},{"type":"strong-mag-field","pos":[492,120],"dir":0},{"type":"strong-mag-field","pos":[452,120],"dir":0},{"type":"strong-mag-field","pos":[412,120],"dir":0},{"type":"strong-mag-field","pos":[372,120],"dir":0},{"type":"strong-mag-field","pos":[332,160],"dir":0},{"type":"strong-mag-field","pos":[332,200],"dir":0},{"type":"strong-mag-field","pos":[332,240],"dir":0},{"type":"strong-mag-field","pos":[332,280],"dir":0},{"type":"strong-mag-field","pos":[292,280],"dir":0},{"type":"strong-mag-field","pos":[292,240],"dir":0},{"type":"strong-mag-field","pos":[292,200],"dir":0},{"type":"strong-mag-field","pos":[292,320],"dir":0},{"type":"strong-mag-field","pos":[332,320],"dir":0},{"type":"strong-mag-field","pos":[372,280],"dir":0},{"type":"strong-mag-field","pos":[372,320],"dir":0},{"type":"strong-mag-field","pos":[412,320],"dir":0},{"type":"strong-mag-field","pos":[452,280],"dir":0},{"type":"strong-mag-field","pos":[492,320],"dir":0},{"type":"strong-mag-field","pos":[492,280],"dir":0},{"type":"strong-mag-field","pos":[492,240],"dir":0},{"type":"strong-mag-field","pos":[492,200],"dir":0},{"type":"strong-mag-field","pos":[452,200],"dir":0},{"type":"strong-mag-field","pos":[412,240],"dir":0},{"type":"strong-mag-field","pos":[372,200],"dir":0},{"type":"strong-mag-field","pos":[372,240],"dir":0},{"type":"block","pos":[292,400],"dir":0},{"type":"block","pos":[252,320],"dir":0},{"type":"block","pos":[252,280],"dir":0},{"type":"block","pos":[252,240],"dir":0},{"type":"block","pos":[252,200],"dir":0},{"type":"block","pos":[292,160],"dir":0},{"type":"block","pos":[332,120],"dir":0},{"type":"block","pos":[372,80],"dir":0},{"type":"block","pos":[412,80],"dir":0},{"type":"block","pos":[452,80],"dir":0},{"type":"block","pos":[492,80],"dir":0},{"type":"block","pos":[532,120],"dir":0},{"type":"block","pos":[572,160],"dir":0},{"type":"block","pos":[612,200],"dir":0},{"type":"block","pos":[612,240],"dir":0},{"type":"block","pos":[612,280],"dir":0},{"type":"block","pos":[612,320],"dir":0},{"type":"block","pos":[572,360],"dir":0},{"type":"block","pos":[532,400],"dir":0},{"type":"block","pos":[252,400],"dir":0},{"type":"block","pos":[212,320],"dir":0},{"type":"block","pos":[212,400],"dir":0},{"type":"cancer-target","pos":[172,360],"dir":0},{"type":"block","pos":[132,360],"dir":0},{"type":"block","pos":[172,320],"dir":0},{"type":"block","pos":[172,400],"dir":0}]},"utilities":{"elec-field":{"num":2},"strong-mag-field":{"num":9}}}';
    }
    else { // testing purpose only
        $s = <<<EOT
{
    "stageName": "$stageNum",
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