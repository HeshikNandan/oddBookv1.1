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

  var users = User.find();
  var userSort = [];
  for(var i in users){
    var u = new u();
    u.id = users[i]._id;
    u.label = users[i].name;
    userSort.push(u);
  }

  function u(){
    this.id="";
    this.label="";
  }

  var nodes = new vis.DataSet(
      userSort
      // {id: 1, label: 'Almeric'},
      // {id: 2, label: 'Arvin'},
      // {id: 3, label: 'Shee Mun'},
      // {id: 4, label: 'Laura'},
      // {id: 5, label: 'Alan'}
    );

    // create an array with edges
    var edges = new vis.DataSet([
        // {from: 2, to: 1},
        // {from: 3, to: 1},
        // {from: 4, to: 1},
        // {from: 1, to: 5},
        // {from: 2, to: 5},
        // {from: 3, to: 5},
        // {from: 4, to: 5}
    ]);

    // create a network
    var container = document.getElementById('network');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
      autoResize: true,
      height: '100%',
      width: '100%',
      locale: 'en',
      edges:{
        arrows: {
          to:     {enabled: false, scaleFactor:1},
          middle: {enabled: false, scaleFactor:1},
          from:   {enabled: false, scaleFactor:1}
        },
      }
    };

    // initialize your network!
    var network = new vis.Network(container, data, options);
});

Template.orgChart.events({
  "click .odchart-user": function (event, template) {
    var name = $(event.target).attr('title');
    console.log(name);
  }
})
