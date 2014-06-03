
var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

var i =1;

App.Router.map(function() {
  this.resource('courses', {path:'/courses'});
  this.resource('major', {path:'/major'});
  this.resource('schedule', {path:'/schedule'});
  });

App.MajorRoute = Ember.Route.extend({
  model: function(){
    return App.MAJOR;
  }
});


App.CoursesRoute = Ember.Route.extend({
  model: function(){
    return App.COURSES;
  }
});

App.ScheduleRoute = Ember.Route.extend({
  model: function(){
    return App.SCHEDULE;
  }
});

App.CoursesController = Ember.ObjectController.extend({
  actions: {
    add: function(){
      $('#addr'+i).html("<td><input name='name"+i+"' type='text' placeholder='Course' class='form-control input-md'  /> </td><td><input  name='dependtype"+i+"' type='text' placeholder='Days'  class='form-control input-md'></td><td><input  name='target"+i+"' type='text' placeholder='Time'  class='form-control input-md'></td>");
      $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
      i++; 
    },
    remove: function(){
      if(i>1){
        $("#addr"+(i-1)).html('');
        i--;
        }
    }
  }
});

App.MajorController = Ember.ObjectController.extend({
    actions: {
    add: function(){
      $('#depends'+i).html("<td><select name='"+i+"'class='form-control'><option>EE 1030</option><option>EE 2340</option><option>CSC 4760</option></select></td><td><select class='form-control'><option>Pre-Req</option><option>Co-Req</option><option>Equiv</option></select></td><td><select class='form-control'><option>EE 1030</option><option>EE 2340</option><option>CSC 4760</option></select></td>");
      $('#tab_logic').append('<tr id="depends'+(i+1)+'"></tr>');
      i++; 
    },
    remove: function(){
      if(i>1){
        $("#depends"+(i-1)).html('');
        i--;
        }
    }
  }
});

App.MAJOR = [
  {
    id: 1,
    course: "CSC2430",
    crn: 23234,
    target: "CSC1230",
    type: "Pre-Req"
  },
  {
    id: 2,
    course: "CSC2430",
    crn: 34343,
    target: "CSC1230",
    type: "Co-Req"
  },
  {
    id: 3,
    course: "CSC2430",
    crn: 12222,
    target: "CSC1230",
    type: "Equiv"
  }
  ]

App.COURSES = [
  {
    id: 1,
    course: "CSC2430",
    crn: 23234,
  },
  {
    id: 2,
    course: "CSC2430",
    crn: 34343,
  },
  {
    id: 3,
    course: "CSC2430",
    crn: 12222,
  }
  ]


  App.SCHEDULE = [
  {
    course: "USEM 1000",
    time: "9:30-10:50 AM",
    days: "MWF"
  },
  {
    course: "COM 230",
    time: "11-12:50PM",
    days: "TTh"
  },
  {
    course: "MAT 1250",
    time: "1-3PM",
    days: "MWF"
  },
  {
    course: "ENG 101",
    time: "5-8PM",
    days: "MW"
  }
  ]