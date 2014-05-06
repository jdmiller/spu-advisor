
var App = Ember.Application.create();

App.Router.map(function() {
  this.resource('depends', {path:'/depends'});
  this.resource('schedule', {path:'/schedule'});
  });

App.DependsRoute = Ember.Route.extend({
  model: function(){
    return App.DEPENDS;
  }
});

App.ScheduleRoute = Ember.Route.extend({
  model: function(){
    return App.SCHEDULE;
  }
});

App.DEPENDS = [
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