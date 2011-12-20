// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var instructorWin = Titanium.UI.createWindow({  
    title:'Exersize with ...',
    url:'main_windows/instructor.js',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Exersize with',
    window:instructorWin
});

//
// create controls tab and root window
//
var worloutInstructor = Titanium.UI.createWindow({  
    title:'Workout with ...',
    backgroundColor:'#fff',
    url:'main_windows/workoutInstructor.js'
});

var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Workouts',
    window:worloutInstructor
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
