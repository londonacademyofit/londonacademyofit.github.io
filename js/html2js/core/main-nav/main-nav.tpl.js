(function(module) {
try {
  module = angular.module('angus.templates.app');
} catch (e) {
  module = angular.module('angus.templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('main-nav/main-nav.tpl.html',
    '<nav role="navigation">\n' +
    '	<ul>\n' +
    '		<li><a href="/my-profile">My Profile</a></li>\n' +
    '		<li><a href="/my-events">My Events</a></li>\n' +
    '		<li><a href="/create-new-event">Create New Event</a></li>\n' +
    '		<li><a href="/my-invites">My Invites</a></li>\n' +
    '		<li><a href="/find-events">Find Events</a></li>\n' +
    '	</ul>\n' +
    '</nav>');
}]);
})();
