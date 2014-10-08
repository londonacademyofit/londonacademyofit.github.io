(function(module) {
try {
  module = angular.module('angus.templates.app');
} catch (e) {
  module = angular.module('angus.templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('find-events/find-events.tpl.html',
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
    '			<h2>Find Nearby Events</h2>\n' +
    '\n' +
    '			<div id="currentUserPosMap"><p>Searching for events near you...</p><img src="assets/img/loading.gif"></div>\n' +
    '		\n' +
    '		</div>\n' +
    '\n' +
    '	</div>\n' +
    '\n' +
    '</div>');
}]);
})();
