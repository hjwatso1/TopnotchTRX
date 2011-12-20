var win = Ti.UI.currentWindow;

// get info from DB
function setData(){
	var db = Titanium.Database.install('../topnotchtrx.sqlite', 'myDB');
	
	var workoutID = Ti.UI.currentWindow.workoutID;
	
	var myWorkout = db.execute('SELECT * FROM workouts WHERE wID =  '+workoutID);
	
	//Ti.API.info('myWorkout : '+myWorkout.fieldByName('wExersizes'));
	
	var myExersizes = db.execute('SELECT * FROM exersizes WHERE eID IN('+myWorkout.fieldByName('wExersizes')+')');
	
	//Ti.API.info('myExersizes : '+myExersizes.rowCount);
	
	//create the array
	var dataArray = [];
	
	while(myExersizes.isValidRow()){
		//Ti.API.info('myExersizes : '+myExersizes.fieldByName('eName'));
		dataArray.push({title:'' + myExersizes.fieldByName('eName') + '', hasChild:true, path:'../main_windows/exersize.js', exID:'' + myExersizes.fieldByName('eID') +''});
		myExersizes.next();
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