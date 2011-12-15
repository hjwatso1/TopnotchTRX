var win = Ti.UI.currentWindow;

// get info from DB
function setData(){
	var db = Ti.Database.install('../topnotchtrx.sqlite', 'instructor');
	
	var rows = db.execute('SELECT * FROM instructor');
	
	// create the array
	var dataArray = [];
	
	while(rows.isValidRow()){
		dataArray.push({title:'' + rows.fieldByName('name') + '', hasChild:true, path:'../main_windows/exersizes.js', inID:'' + rows.fieldByName('ID') +''});
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
			title:'Exersize with '+e.rowData.title
		});
		
		var instructorID = e.rowData.inID;
		win.instructorID = instructorID;
		
		Ti.UI.currentTab.open(win);
	}
});

win.add(tableview);

setData();
