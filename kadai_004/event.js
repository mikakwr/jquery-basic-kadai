$(function(){
//htmlドキュメントが読み込み完了した時

//画面をスクロールした時
$(window).on('scroll',function(){
    console.log('scrollイベントが発生しました');
});
});

$(window).on('load',function(){
    console.log('loadイベントが発生しました');
});