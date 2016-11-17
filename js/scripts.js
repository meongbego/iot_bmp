$(document).ready(function(){
  $("#btnLampu1On").hide();
  $("#btnLampu1Off").hide();
  //inisiasi mode nyala lampu
  $.get("https://api.thingspeak.com/channels/183532/feeds.json?api_key=MYQEDAMJR2BUY68V", function(data, status){
    var inisialisasi;
    for (var i = 0; i < data['feeds'].length; i++) {
      inisialisasi=data['feeds'][i]['field1'];
    }
    if (inisialisasi==0) {
      $("#btnLampu1Off").hide();
      $("#btnLampu1On").show();
    }
    else if (inisialisasi==1) {
      $("#btnLampu1On").hide();
      $("#btnLampu1Off").show();
    }
  });

  $("#btnLampu1Off").click(function(){
    $.get("https://api.thingspeak.com/update?api_key=JLCG2GASZQB333YH&field1=0", function(data, status){
      alert(status+" Lampu Mati");
      location.reload();
    });
  });

  $("#btnLampu1On").click(function(){
    $.get("https://api.thingspeak.com/update?api_key=JLCG2GASZQB333YH&field1=1", function(data, status){
      alert(status+" Lampu Hidup");
      location.reload();
    });
  });
});
