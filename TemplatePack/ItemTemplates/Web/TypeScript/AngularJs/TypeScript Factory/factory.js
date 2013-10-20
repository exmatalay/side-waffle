﻿// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resovle the .d.ts reference paths,
// then adjust the path value to be relative to this file
/// <reference path="app1.ts" />
/// <reference path='../Scripts/typings/angularjs/angular.d.ts'/>
/// <reference path='../Scripts/typings/angularjs/angular-resource.d.ts'/>
var $safeitemname$ = (function () {
    function $safeitemname$($http, $resource) {
        this.$http = $http;
        this.$resource = $resource;
        this.greeting = "Hello";
    }
    $safeitemname$.prototype.changeGreeting = function () {
        this.greeting = "Bye";
    };
    $safeitemname$.serviceId = "$safeitemname$";
    return $safeitemname$;
})();

// Update the app variable name to be that of your module variable
app.factory($safeitemname$.serviceId, [
    '$http',
    '$resource',
    function ($scope, $http, $resource) {
        return new $safeitemname$($http, $resource);
    }
]);
