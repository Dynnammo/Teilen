
function onLikeClick(elem){
    var equivElemId = "#" + (new String( $(elem).attr("id") ) ).replace("like", "dislike");
    src = $(elem).attr('src');
    if( src == "images/like.svg"){
        $(elem).attr("src", "images/like-filled.svg");
        $(equivElemId).attr("src", "images/dislike.svg");
    } else {
        $(elem).attr("src", "images/like.svg");
    }
}

function onDislikeClick(elem){
    var equivElemId = "#" + (new String( $(elem).attr("id") ) ).replace("dislike", "like");
    src = $(elem).attr('src');
    if( src == "images/dislike.svg"){
        $(elem).attr("src", "images/dislike-filled.svg");
        $(equivElemId).attr("src", "images/like.svg");
    } else {
        $(elem).attr("src", "images/dislike.svg");
    }
}
