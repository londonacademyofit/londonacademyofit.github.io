(function(module) {
try {
  module = angular.module('angus.templates.app');
} catch (e) {
  module = angular.module('angus.templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('homepage/homepage.tpl.html',
    '<div class="row">\n' +
    '	<div class="col-sm-12 logged-out">\n' +
    '		<h2>Welcome to the best party-planning app around!</h2>\n' +
    '		<p>Login to get started:</p>\n' +
    '		<div class="login"><img class="loading-gif" src="assets/img/loading.gif"><input type="button" class="btn btn-default btn-large login-twitter" value="Login with Twitter"><br><input type="button" class="btn btn-default btn-large login-facebook" value="Login with Facebook"></div>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();
