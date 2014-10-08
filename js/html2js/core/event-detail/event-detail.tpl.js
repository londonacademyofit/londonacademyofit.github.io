(function(module) {
try {
  module = angular.module('angus.templates.app');
} catch (e) {
  module = angular.module('angus.templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('event-detail/event-detail.tpl.html',
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
    '			<h2>{{ event.name }}</h2>\n' +
    '			<h3>on {{ event.date }} at {{ event.time }}.</h3>\n' +
    '			\n' +
    '			<p>{{ event.description }}</p>\n' +
    '		\n' +
    '		</div>\n' +
    '\n' +
    '	</div>\n' +
    '\n' +
    '</div>');
}]);
})();
