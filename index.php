<!DOCTYPE html>
<html>
    <head>
        <title>Bizarre Accelerator</title>
        
        <script type="text/javascript" src="js/jquery-2.0.3.js"></script>
        <script type="text/javascript" src="js/kinetic-v4.5.4.min.js"></script>
        
        <script type="text/javascript" src="js/constants.js"></script>
        <script type="text/javascript" src="js/images-loader.js"></script>
        <script type="text/javascript" src="js/introduction.js"></script>
        <script type="text/javascript" src="js/utils.js"></script>
        <script type="text/javascript" src="js/objects.js"></script>
        <script type="text/javascript" src="js/stage.js"></script>
        
        <script type="text/javascript" src="js/page-controller.js"></script>
        <script type="text/javascript" src="js/play-controller.js"></script>
        
        <style type="text/css">
            #loading-content {
                display: none;
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 10;
                background: #d19f62;
                text-align: center;
                margin-top: 150px;
                font-size: 18pt;
            }
            #content {
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
            }
        </style>
        
        <link href="css/main.css" rel="stylesheet" type="text/css"/>
        <link href="css/introduction.css" rel="stylesheet" type="text/css"/>
        <link href="css/play.css" rel="stylesheet" type="text/css"/>
        
    </head>
    <body class="reset">
        <div id="loading">
            <div id="loading-content">
                Loading ...
            </div>
        </div>
        
        <div class="whole-wrapper">
            <div class="upper-banner">
                <img src="img/web/logo.png" class="upper-logo"/>
                
                <div class="social-media-banner">
                    <!--<img src="img/web/atom.png" width="40"/>-->
                    <div class="social-media-content">
                        <div id="fb-root"></div>
                        <a class="addthis_button_facebook_like facebook" fb:like:layout="box_count" fb:like:locale="en_US" addthis:url="http://www.facebook.com/bizarre.accelerator"></a>
                        <script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js#pubid=xa-506d6ba737236b31"></script>
                        
                        <!--<br/><br/>-->
                        <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.facebook.com/bizarre.accelerator" data-via="imrenagi" data-lang="en">Tweet</a>
                        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                    </div>
                </div>
                
                <div class="clear">&nbsp;</div>
            </div>
            
            <div class="main-content">
                
                <!-- main content should go here! -->
                <div class="game-content-bg">
                    &nbsp;
                    <div class="game-content">
                        <div id="content">&nbsp;</div>
                    </div>
                </div>
                
                <div class="clear"></div>
            </div>
            
            <div class="lower-part">
                <img src="img/web/stamps_moz.png" class="other-logos"/>
                <div class="clear">&nbsp;</div>
            </div>
            
            <div class="clear">&nbsp;</div>
            <div class="lower-banner">
                <img src="img/web/lower-banner.png" width="100%"/>
            </div>
        </div>
        
        <script type="text/javascript">
            $(document).ready(function(){
                $(document).ready();
                loadPage("front-page.html");
            });
        </script>
    </body>
</html>
