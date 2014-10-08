(function(module) {
try {
  module = angular.module('angus.templates.app');
} catch (e) {
  module = angular.module('angus.templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user-events/user-events.tpl.html',
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
    '			<h2>My Events</h2>\n' +
    '\n' +
    '			<label>Sort events by:</label>\n' +
    '			<select class="form-control" ng-model="orderProp">\n' +
    '				<option value="name">Name</option>\n' +
    '				<option value="date">Date (soonest first)</option>\n' +
    '			</select>\n' +
    '			\n' +
    '			<ul>\n' +
    '				<li ng-repeat="(id, event) in events | filter:query | orderBy:orderProp">\n' +
    '					<a ng-href="/event/{{ id }}">{{ event.name }}</a>\n' +
    '					- \n' +
    '					<span>{{ event.date }}</span>\n' +
    '					<a class="delete" ng-href="#" title="Delete event?" ng-click="removeEvent(id)">x</a>\n' +
    '				</li>\n' +
    '			</ul>\n' +
    '			\n' +
    '			<label>Filter events:</label>\n' +
    '			<input type="text" class="form-control" placeholder="Type here to filter your events" ng-model="query">\n' +
    '			\n' +
    '			<p><a href="/create-new-event">Ready to create a new event?</a></p>\n' +
    '		\n' +
    '		</div>\n' +
    '\n' +
    '	</div>\n' +
    '\n' +
    '</div>');
}]);
})();
