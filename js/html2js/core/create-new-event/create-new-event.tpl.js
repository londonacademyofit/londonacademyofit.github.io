(function(module) {
try {
  module = angular.module('angus.templates.app');
} catch (e) {
  module = angular.module('angus.templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('create-new-event/create-new-event.tpl.html',
    '<div>\n' +
    '\n' +
    '	<div class="row">\n' +
    '\n' +
    '		<div class="col-sm-3">\n' +
    '\n' +
    '			<div ng-include src="\'main-nav/main-nav.tpl.html\'"></div>\n' +
    '		\n' +
    '		</div>\n' +
    '		\n' +
    '		<div class="col-sm-9">\n' +
    '			\n' +
    '			<h2>Create New Event</h2>\n' +
    '		        			\n' +
    '			<form ng-submit="addEvent()">\n' +
    '				<label>Name:</label>\n' +
    '				<input type="text" class="form-control" placeholder="What is your event going to be called?" ng-model="newEvent.name">\n' +
    '				\n' +
    '				<label>Date:</label>\n' +
    '				<input type="date" class="form-control" placeholder="What day will your event be happening?" ng-model="newEvent.date">\n' +
    '				\n' +
    '				<label>Time:</label>\n' +
    '				<input type="time" class="form-control" placeholder="What time will your event be happening?" ng-model="newEvent.time">\n' +
    '				\n' +
    '				<label>Description:</label>\n' +
    '				<textarea class="form-control" placeholder="Describe your event here" ng-model="newEvent.description"></textarea>\n' +
    '				\n' +
    '				<input type="submit" class="btn btn-default" value="Create event">\n' +
    '				\n' +
    '				<p>{{ eventResult }}</p>\n' +
    '			</form>\n' +
    '		\n' +
    '		</div>\n' +
    '\n' +
    '	</div>\n' +
    '\n' +
    '</div>');
}]);
})();
