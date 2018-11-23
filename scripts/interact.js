
function onLikeClick(elem){
    var equivElemId = "#" + (new String( $(elem).attr("id") ) ).replace("like", "dislike");
    var src = $(elem).attr('src');
    var likesNbId = "#" + (new String( $(elem).attr("id") ) ) + "-nb";
    var dislikesNbId = equivElemId + "-nb";

    if( src == "images/like.svg"){
        $(elem).attr("src", "images/like-filled.svg");
        $(likesNbId).html( parseInt($(likesNbId).html()) + 1 );
        
        var equivSrc = $(equivElemId).attr('src');
        if( equivSrc == "images/dislike-filled.svg"){
            $(equivElemId).attr("src", "images/dislike.svg");
            $(dislikesNbId).html( parseInt($(dislikesNbId).html()) -1 );
        }
    } else {
        $(elem).attr("src", "images/like.svg");
        $(likesNbId).html( parseInt($(likesNbId).html()) -1 );
    }
}


function onDislikeClick(elem){
    var equivElemId = "#" + (new String( $(elem).attr("id") ) ).replace("dislike", "like");
    var src = $(elem).attr('src');
    var dislikesNbId = "#" + (new String( $(elem).attr("id") ) ) + "-nb";
    var likesNbId = equivElemId + "-nb";

    if( src == "images/dislike.svg"){
        $(elem).attr("src", "images/dislike-filled.svg");
        $(dislikesNbId).html( parseInt($(dislikesNbId).html()) + 1 );
        
        var equivSrc = $(equivElemId).attr('src');
        if( equivSrc == "images/like-filled.svg"){
            $(equivElemId).attr("src", "images/like.svg");
            $(likesNbId).html( parseInt($(likesNbId).html()) -1 );
        }
    } else {
        $(elem).attr("src", "images/dislike.svg");
        $(dislikesNbId).html( parseInt($(dislikesNbId).html()) -1 );
    }
}
