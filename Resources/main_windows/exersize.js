var win = Ti.UI.currentWindow;

// get info from DB
function setData(){
	var db = Titanium.Database.install('../topnotchtrx.sqlite', 'myDB');
	
	var exersizeID = Ti.UI.currentWindow.exersizeID;
	
	var exersizeRows = db.execute('SELECT * FROM exersizes WHERE eID='+exersizeID);
	
	// create the array
	var dataArray = [];
	
	while(exersizeRows.isValidRow()){
		dataArray.push({title:'' + exersizeRows.fieldByName('eName') + '', details:'' + exersizeRows.fieldByName('eDetails') + '', hasChild:false});
		exersizeRows.next();
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
