var imgs;
var imgl,imgc,ingr,imgrr,imgid=1;
var time1,time2;
window.onload=function(){
    imgs=this.document.getElementById('images');
    this.imgs.style.height=this.imgs.clientWidth*0.3+'px';
    imgl=this.document.getElementById('imgl');
    imgc=this.document.getElementById('imgc');
    imgr=this.document.getElementById('imgr');
    imgrr=this.document.getElementById('imgrr');
    time1=this.setInterval(change,5000);
}
window.onresize=function(){
    this.imgs.style.height=this.imgs.clientWidth*0.3+'px';
}
function change(){
    imgl.style.transition='transform 2s, width 2s,height 2s,top 2s,left 2s';
    imgl.style.width='20%';
    imgl.style.height='40%';
    imgl.style.top='30%';
    imgl.style.left='-1%';
    imgl.style.transform='rotateY(-70deg) rotateX(-5deg)'

    imgc.style.transition='transform 2s, width 2s,height 2s,top 2s,left 2s';
    imgc.style.width='30%';
    imgc.style.height='60%';
    imgc.style.top='20%';
    imgc.style.left='0%';
    imgc.style.transform='rotateY(-13deg) rotateX(-5deg)';

    imgr.style.transition='transform 2s, width 2s,height 2s,top 2s,left 2s';
    imgr.style.width='40%';
    imgr.style.height='95%';
    imgr.style.top='2.5%';
    imgr.style.left='30%';
    imgr.style.transform='rotateX(-2deg)';

    imgrr.style.transition='transform 2s, width 2s,height 2s,top 2s,left 2s';
    imgrr.style.width='30%';
    imgrr.style.height='60%';
    imgrr.style.top='20%';
    imgrr.style.left='70%';
    imgrr.style.transform='rotateY(13deg) rotateX(-5deg)';
    time2=setInterval(back,2048);
}
function back(){
    imgl.style.transition='transform 0s, width 0s,height 0s,top 0s,left 0s';
    imgl.style.width='30%';
    imgl.style.height='60%';
    imgl.style.top='20%';
    imgl.style.left='0%';
    imgl.style.transform='rotateY(-13deg) rotateX(-5deg)'
    

    imgc.style.transition='transform 0s, width 0s,height 0s,top 0s,left 0s';
    imgc.style.width='40%';
    imgc.style.height='95%';
    imgc.style.top='2.5%';
    imgc.style.left='30%';
    imgc.style.transform='rotateX(-2deg)';
    

    imgr.style.transition='transform 0s, width 0s,height 0s,top 0s,left 0s';
    imgr.style.width='30%';
    imgr.style.height='60%';
    imgr.style.top='20%';
    imgr.style.left='70%';
    imgr.style.transform='rotateY(13deg) rotateX(-5deg)';
    

    imgrr.style.transition='transform 0s, width 0s,height 0s,top 0s,left 0s';
    imgrr.style.width='20%';
    imgrr.style.height='40%';
    imgrr.style.top='30%';
    imgrr.style.left='81%';
    imgrr.style.transform='rotateY(70deg) rotateX(-5deg)';
    clearInterval(time2);
    imgid++;
    imgl.getElementsByTagName('img')[0].src='assets/image/main-page/1-'+imgid%8+'.jpg';
    imgc.getElementsByTagName('img')[0].src='assets/image/main-page/1-'+(imgid+1)%8+'.jpg';
    imgr.getElementsByTagName('img')[0].src='assets/image/main-page/1-'+(imgid+2)%8+'.jpg';
    imgrr.getElementsByTagName('img')[0].src='assets/image/main-page/1-'+(imgid+3)%8+'.jpg';
}