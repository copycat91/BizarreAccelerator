<?php

$stageNum = $_POST["s"];

if ($stageNum != 0) {
// for testing purpose only
?>
{
    "stageName": "<?php echo $stageNum ?>",
    "eligible": 1,
    "map": {
        "w": 640,
        "h": 200,
        "elmts": [
            {"type": "proton-source", "pos":[20, 40], "dir": 0},
            {"type": "fixed-target", "pos":[500, 40], "dir": 0},
            {"type": "alt-mag-field", "pos":[75, 40], "dir": -1},
            {"type": "strong-mag-field", "pos":[75, 100], "dir": 1},
            {"type": "strong-mag-field", "pos":[350, 100], "dir": 1},
            {"type": "strong-mag-field", "pos":[350, 40], "dir": -1},
            {"type": "elec-field", "pos": [200,0], "dir":1.57}
        ]
    },
    "utilities": {
        "strong-mag-field": {"num":5},
        "alt-mag-field": {"num":4},
        "elec-field": {"num":1},
        "xray": {"num":1}
    },
    "intro": {
        "images": ["img/intro/1/1.png", "img/intro/1/2.png"]
    }
}
<?php
} else {
?>
{
    "stageName": "Creator",
    "eligible": 1,
    "map": {
        "w": 640,
        "h": 200,
        "elmts": []
    },
    "utilities": {
        "electron-source": {"num":99},
        "proton-source": {"num":99},
        "muon-source": {"num":99},
        
        "strong-mag-field": {"num":99},
        "alt-mag-field": {"num":99},
        "elec-field": {"num":99},
        
        "fixed-target": {"num":99},
        "collision-target": {"num":99}
    }
}

<?php
}
?>