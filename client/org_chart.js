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
    console.log('Google API loaded');
    google.load('visualization', '1.1', {'packages':['orgchart'], callback: drawChart});

    function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Name');
      data.addColumn('string', 'Manager');
      data.addColumn('string', 'ToolTip');

      data.addRows([
        [{v:'Alan', f:'Alan<div style="color:red; font-style:italic">Global Lead</div>'}, '', 'Global Lead'],
        [{v:'Almeric', f:'Almeric<div style="color:red; font-style:italic">Country Lead (SG)</div>'}, 'Alan', 'Country Lead (SG)'],
        ['Arvin', 'Almeric', 'Sales'],
        ['Laura', 'Almeric', 'Sales'],
        ['Shee Mun', 'Almeric', 'Sales']
      ]);

      var chart = new google.visualization.OrgChart(document.getElementById('chart'));
      chart.draw(data, {allowHtml:true, size: "large", nodeClass:'odchart-user', selectedNodeClass: 'selected-odchart-user'});
    }
  });
});

Template.orgChart.events({
  "click .odchart-user": function (event, template) {
    var name = $(event.target).attr('title');
    console.log(name);
  }
})
