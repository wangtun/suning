/*function removeElement(){
    var closeDiv=document.getElementById("top");
    closeDiv.parentNode.removeChild(closeDiv);
}*/
$(document).ready(function(){
    $(".close").click(function(){
        $("#top").hide();
    });
});

window.onload=function(){
    var imgsdiv=document.getElementsByClassName("imgs")[0];
    var navdiv=document.getElementsByClassName("banner-nav")[0];
    var imgsUl=imgsdiv.getElementsByTagName("ul")[0];/*获取图片轮播的ul */
    var navUl=navdiv.getElementsByTagName("ul")[0];/*获取下方圆点的ul */
    var previous=document.getElementsByClassName("previous")[0];/*上一个*/
    var next=document.getElementsByClassName("next")[0];/*下一个 */
    var index=0;
    var animTimer;
    var timer;
    play();
    previous.onclick=function(){
        /**控制ul整体向右移动 */
        initImgs(index);
        index=index-1;
        if(index<0){
            index=3;
        }
        animate(750);
        btnShow(index);
    }
    next.onclick=function(){
        initImgs(index);
        index=index+1;
        if(index>3)
        {
            index=0;
        }
        animate(-750);
        btnShow(index);
    }
    function btnShow(cur_index){
        for(var i=0;i<navUl.children.length;i++)
        {
            navUl.children[i].children[0].className="hidden";
        }
        navUl.children[cur_index].children[0].className="current";
    }
    function animate(offset){
        var newLeft=parseInt(imgsUl.offsetLeft)+offset;
        if(newLeft>-750){
            donghua(-3000);
        }
        else if(newLeft<-3000){
            donghua(-750);
        }
        else{
            donghua(newLeft);
        }
    }

    
    function donghua(offset){
        clearInterval(animTimer);
        animTimer=setInterval(function(){
            imgsUl.style.left=imgsUl.offsetLeft+(offset-imgsUl.offsetLeft)/10+"px";
            if(imgsUl.offsetLeft-offset<10&&imgsUl.offsetLeft-offset>-10){
                imgsUl.style.left=offset+"px";
                clearInterval(animTimer);
                play();/**如果不加这句话，在click之后，此句之前已经清除了所有动画，将不再继续轮播 */
            }
        },20);
    }
    
    function play(){
        timer=setInterval(function(){next.onclick();},2000);
    }
    function initImgs(cur_index){
        clearInterval(timer);
        clearInterval(animTimer);
        var off=cur_index*750+750;
        imgsUl.style.left=-off+"px";
    }
    for(var i=0;i<navUl.children.length;i++){
        navUl.children[i].index=i;/**得给index赋值，否则是underfind */
        navUl.children[i].onmouseover=function(){
            index=this.index;/**很重要，否则onmouseout的时候不知道轮到哪福图片了 */
            initImgs(this.index);
            btnShow(this.index);
        };
        navUl.children[i].onmouseout=function(){
            play();
        };
    }
}