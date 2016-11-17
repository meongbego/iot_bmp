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

    var inisialisasi;
		var entry_id;
    var created_at;

		var chardata=[];
		var entry = [];
    var tanggal =[];

		for (var i = 0; i < data['feeds'].length; i++) {
			inisialisasi=data['feeds'][i]['field1'];
      entry_id = data['feeds'][i]['entry_id'];
			created_at = data['feeds'][i]['created_at'];
			chardata.push(inisialisasi);
			entry.push(entry_id);
      tanggal.push(created_at);
		}
		var lineChartData = {
				labels : entry,
				datasets : [
					{
						label: "Data Lampu",
						fillColor : "rgba(48, 164, 255, 0.2)",
						strokeColor : "rgba(48, 164, 255, 1)",
						pointColor : "rgba(48, 164, 255, 1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(48, 164, 255, 1)",
						data : chardata
          }
				]
			}
      var lineChartData2 = {
  				labels : tanggal,
  				datasets : [
            {
    					label: "Dibuat Tanggal",
    					fillColor : "rgba(220,220,220,0.2)",
    					strokeColor : "rgba(220,220,220,1)",
    					pointColor : "rgba(220,220,220,1)",
    					pointStrokeColor : "#fff",
    					pointHighlightFill : "#fff",
    					pointHighlightStroke : "rgba(220,220,220,1)",
    					data : chardata
    				}
  				]
  			}
		var temp = document.getElementById("line-chart").getContext("2d");
		var myLine = new Chart(temp).Line(lineChartData, {
			responsive: true
		});

    var temp1 = document.getElementById("line-chart2").getContext("2d");
		var myLine1 = new Chart(temp1).Line(lineChartData2, {
			responsive: true
		});
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
