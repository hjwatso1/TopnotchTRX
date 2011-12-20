var win = Ti.UI.currentWindow;

// get info from DB
function setData(){
	var db = Titanium.Database.install('../topnotchtrx.sqlite', 'myDB');
	
	var rows = db.execute('SELECT * FROM instructors');
	
	// create the array
	var dataArray = [];
	
	while(rows.isValidRow()){
		dataArray.push({title:'' + rows.fieldByName('iName') + '', hasChild:true, path:'../main_windows/workoutList.js', inID:'' + rows.fieldByName('iID') +''});
		rows.next();
	}
	// set the array to the tableView
	tableview.setData(dataArray);
};

var tableview = Ti.UI.createTableView({
});

tableview.addEventListener('click', function(e)
{
	if (e.rowData.path)
	{
		var win = Ti.UI.createWindow({
			url:e.rowData.path,
			title:'Work out with '+e.rowData.title
		});
		
		var instructorID = e.rowData.inID;
		win.instructorID = instructorID;
		
		Ti.UI.currentTab.open(win);
	}
});

win.add(tableview);

setData();