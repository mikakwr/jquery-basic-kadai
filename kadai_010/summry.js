$(function() {
    //id属性"change-color"がクリックされたら
  $('#change-color').on('click',function (){
    //id属性が"target"の要素のcolorプロパティをredにする
    $('#target').css('color','red');
  });

    //id属性"change-text"がクリックされたら
  $('#change-text').on('click',function (){
    //id属性が"target"の要素のテキストが英語になる
    $('#target').text('hello!');
  });

    //id属性"fade-out"がクリックされたら
  $('#fade-out').on('click',function (){
    //id属性が"target"の要素がフェードアウトする  
    $('#target').fadeOut();  
  });

   //id属性"fade-in"がクリックされたら
   $('#fade-in').on('click',function (){
    //id属性が"target"の要素がフェードインする
    $('#target').fadeIn();
   });
});