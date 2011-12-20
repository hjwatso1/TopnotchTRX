var win = Ti.UI.currentWindow;

// get info from DB
function setData(){
	var db = Titanium.Database.install('../topnotchtrx.sqlite', 'myDB');
	
	var instructorID = Ti.UI.currentWindow.instructorID;
	
	var workoutsRows = db.execute('SELECT * FROM workouts WHERE iID = '+instructorID);
	
	// create the array
	var dataArray = [];
	
	while(workoutsRows.isValidRow()){
		dataArray.push({title:'' + workoutsRows.fieldByName('wName') + '', hasChild:true, path:'../main_windows/workout.js', woID:'' + workoutsRows.fieldByName('wID') +''});
		workoutsRows.next();
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
			title:'Workout with '+e.rowData.title
		});
		
		var workoutID = e.rowData.woID;
		win.workoutID = workoutID;
		
		Ti.UI.currentTab.open(win);
	}
});

win.add(tableview);

setData();