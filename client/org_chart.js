Template.orgChart.onRendered( function() {
  // chart = {
  //   target: 'chart',
  //   type: 'orgchart',
  //   columns: [
  //     ['string', 'Name'],
  //     ['string', 'Boss']
  //   ],
  //   rows: [
  //     ['Vegetables', ''],
  //     ['Lettuce', 'Vegetables'],
  //     ['Fruits', ''],
  //     ['Orange', 'Fruits'],
  //     ['Banana', 'Fruits']
  //   ],
  //   options: {
  //     'title':'How Much Pizza I Ate Last Night',
  //     'width':400,
  //     'height':300
  //   }
  // };
  //
  // drawChart(chart);
  $.getScript('https://www.google.com/jsapi', function(){
    console.log('loaded');
    google.load('visualization', '1.1', {'packages':['orgchart'], callback: drawChart});

    function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Name');
      data.addColumn('string', 'Manager');
      data.addColumn('string', 'ToolTip');

      data.addRows([
        [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'}, '', 'The President'],
        [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'}, 'Mike', 'VP'],
        ['Alice', 'Mike', ''],
        ['Bob', 'Jim', 'Bob Sponge'],
        ['Carol', 'Bob', '']
      ]);
      console.log(data);
      var chart = new google.visualization.OrgChart(document.getElementById('chart'));
      chart.draw(data, {allowHtml:true});
    }
  });


});
