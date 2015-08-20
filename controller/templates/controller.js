angular.module('<%= appname %>').controller('<%= _.camelize(name) %>',[function() {
    return function(input,arg) {
        return 'output';
    };
}]);
