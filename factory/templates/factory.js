angular.module('<%= appname %>').factory('<%= _.camelize(name) %>',[function() {
    return function(input,arg) {
        return 'output';
    };
}]);
