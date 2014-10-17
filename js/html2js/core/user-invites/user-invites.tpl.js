(function(module) {
try {
  module = angular.module('angus.templates.app');
} catch (e) {
  module = angular.module('angus.templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user-invites/user-invites.tpl.html',
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
    '			<h2>My Invites</h2>\n' +
    '\n' +
    '			<div ng-if="invitesEmpty">\n' +
    '				<p>No invites to show.</p>\n' +
    '			</div>\n' +
    '\n' +
    '			<div ng-if="!invitesEmpty">\n' +
    '			\n' +
    '				<ul>\n' +
    '					<li ng-repeat="invite in invites">\n' +
    '						{{ invite.eventName }}\n' +
    '					</li>\n' +
    '				</ul>\n' +
    '			\n' +
    '			</div>\n' +
    '		\n' +
    '		</div>\n' +
    '\n' +
    '	</div>\n' +
    '\n' +
    '</div>');
}]);
})();
