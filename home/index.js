/*function removeElement(){
    var closeDiv=document.getElementById("top");
    closeDiv.parentNode.removeChild(closeDiv);
}*/
$(document).ready(function(){
    $(".close").click(function(){
        $("#top").hide();
    });
});