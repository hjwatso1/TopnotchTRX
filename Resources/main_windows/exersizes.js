var win = Ti.UI.currentWindow;

// get info from DB
function setData(){
	var db = Ti.Database.install('../topnotchtrx.sqlite', 'exersize');
	
	var instructorID = Ti.UI.currentWindow.instructorID;
	
	var rows = db.execute('SELECT * FROM exersize WHERE iID='+instructorID);
	
	// create the array
	var dataArray = [];
	
	while(rows.isValidRow()){
		dataArray.push({title:'' + rows.fieldByName('eName') + '', hasChild:true, path:'../main_windows/exersize.js', exID:'' + rows.fieldByName('iID') +''});
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
			title:e.rowData.title,
			backgroundColor:'#fff'
		});
		
		var exersizeID = e.rowData.exID;
		win.exersizeID = exersizeID;
		Ti.UI.currentTab.open(win);
	}
});


win.add(tableview);

setData();
