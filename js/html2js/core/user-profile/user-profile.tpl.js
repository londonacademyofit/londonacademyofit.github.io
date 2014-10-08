(function(module) {
try {
  module = angular.module('angus.templates.app');
} catch (e) {
  module = angular.module('angus.templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user-profile/user-profile.tpl.html',
    '<div>\n' +
    '\n' +
    '	<div class="row">\n' +
    '\n' +
    '		<div class="col-sm-3">\n' +
    '		\n' +
    '			<div ng-include src="\'main-nav/main-nav.tpl.html\'"></div>\n' +
    '		\n' +
    '		</div>\n' +
    '		\n' +
    '		<div class="col-sm-9">\n' +
    '		\n' +
    '			<p>Welcome to the best party-planning app around. Use the menu links on the left to start creating events and inviting your friends, or to find events happening near you.</p>\n' +
    '			\n' +
    '			<h2>Your Profile</h2>\n' +
    '			\n' +
    '			<img ng-if="user.thirdPartyUserData.profile_image_url" class="user-photo" ng-src="{{ user.thirdPartyUserData.profile_image_url }}" ng-alt="Profile photo for {{ user.displayName }}">\n' +
    '\n' +
    '			<img ng-if="!user.thirdPartyUserData.profile_image_url" class="user-photo" src="http://placekitten.com/300/300" alt="Upload your own profile picture soon!">\n' +
    '			\n' +
    '			<p><b>Name:</b> {{ user.displayName }}</p>\n' +
    '			\n' +
    '			<p ng-if="user.thirdPartyUserData.description"><b>About:</b> {{ user.thirdPartyUserData.description }}</p>\n' +
    '			\n' +
    '			<p ng-if="!user.thirdPartyUserData.description"><b>About:</b> <a href="">Tell us a little about yourself.</a></p>\n' +
    '			\n' +
    '		</div>\n' +
    '\n' +
    '	</div>\n' +
    '\n' +
    '</div>');
}]);
})();
