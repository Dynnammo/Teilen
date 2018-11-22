
// https://davidwalsh.name/query-string-javascript
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return (results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' ')));
};

// https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
function ready(action) {
  document.addEventListener("DOMContentLoaded", action);
}


ready(
function () {
    var msg = getUrlParameter("msg");
    
    var message = "";
    switch (msg) {
        case "new":
            message = "Vous allez recevoir un email pour l'activation de votre compte.";
        break;
        case "edit":
            message = "Les modifications apportées ont bien été enregistrées.";
        break;
        case "forgot":
            message = "Un lien de réinitialisation de mot de passe vous a été envoyé par email.";
        break;
        case "uplded":
            message = "Le fichier a bien été mis en ligne !";
        break;
    }
    
    if (message.length > 0) // alert(message);
    {
        addStyle("https://jqueryui.com/resources/demos/style.css");
        addStyle("https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css");
        addScript("https://code.jquery.com/ui/1.12.1/jquery-ui.min.js");
        setTimeout(function() {
            var dialog = document.createElement("div");
            dialog.id = "dialog";
            dialog.title = "Information";
            dialog.innerText = message;
            document.body.children[0].appendChild(dialog);
            $("#dialog").dialog({
                close: function( event, ui ) {
                    $("#dialog").remove();
                    window.location = window.location.href.replace("&msg=", "&old=");
                },
                buttons: [
                    {
                        text: "OK",
                        click: function () {
                            $(this).dialog("close");
                        }
                    }
                ]
            });
            $(".ui-dialog button").each( function() {
                $(this)[0].style = "border-color: gray !important;";
            });
        }, 750);
    }
}
);

function addStyle(src) {
    var style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = src;
    document.head.appendChild(style);
}

function addScript(src) {
    var script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
}
