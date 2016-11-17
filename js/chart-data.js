	$.get("https://api.thingspeak.com/channels/183532/feeds.json?api_key=MYQEDAMJR2BUY68V", function(data, status){
		var inisialisasi;
		var entry_id;
		var chardata=[];
		var entry = [];
		for (var i = 0; i < data['feeds'].length; i++) {
			inisialisasi=data['feeds'][i]['field1'];
			entry_id = data['feeds'][i]['entry_id'];
			chardata.push(inisialisasi);
			entry.push(entry_id);
		}
		var lineChartData = {
				labels : entry,
				datasets : [
					{
						label: "My Second dataset",
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
		var temp = document.getElementById("line-chart").getContext("2d");
		var myLine = new Chart(temp).Line(lineChartData, {
			responsive: true
		});
	});
