var win = Ti.UI.currentWindow;

// get info from DB
function setData(){
	var db = Ti.Database.install('../topnotchtrx.sqlite', 'exersize');
	
	var exersizeID = Ti.UI.currentWindow.exersizeID;
	
	var rows = db.execute('SELECT * FROM exersize WHERE ID='+exersizeID);
	
	// create the array
	var dataArray = [];
	
	while(rows.isValidRow()){
		dataArray.push({title:'' + rows.fieldByName('exersize') + '', details:'' + rows.fieldByName('details') + '', hasChild:false});
		rows.next();
	}
	// set the array to the tableView
	myLab.value = dataArray[0].title + '\n\n' + dataArray[0].details;
	
};

var myLab = Ti.UI.createTextArea({
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	color:'#f00',
	textAlign:'center',
	width:Ti.Platform.displayCaps.platformWidth,
	height:Ti.Platform.displayCaps.platformHeight
});

win.add(myLab);

setData();
