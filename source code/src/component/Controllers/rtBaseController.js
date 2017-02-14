function rtBaseController(scope, rt) {

    var self = this;
    var $scope = scope;
    var $state = rt.state;
    var $ionicHistory = rt.ionicHistory;
    var $rootScope = rt.rootScope;

    function _load() {
        _init();

        if (_isLoadMethodDefined()) {
            rt.showLoadingToast("正在加载...");
            self.onLoad(function() {
                rt.hideLoadingToast();

                $scope.rt.page.isLoaded = true;
            }, function(errorMessage, ignoreError) {
                rt.hideLoadingToast();

                $scope.rt.page.isLoaded = true;

                if (!ignoreError) {
                    rt.alert(errorMessage);
                }
            });
        }
    }

    function _init() {
        $scope.rt = {
            page: {
                isLoaded: false
            },
            actions: {
                goBack: _goBack,
                refresh: _refresh,
                gotoState: _gotoState
            }
        };

        _registerEvent();

        if (_isInitMethodDefined()) {
            self.onInit();
        }
    }

    function _refresh() {
        if (!_isLoadMethodDefined()) {
            return;
        }

        self.onLoad(function() {
            $scope.$broadcast('scroll.refreshComplete');
        }, function(errorMessage, ignoreError) {
            $scope.$broadcast('scroll.refreshComplete');

            if (!ignoreError) {
                rt.alert(errorMessage);
            }
        });
    }

    function _isInitMethodDefined() {
        return rt.isFunction(self.onInit);
    }

    function _isLoadMethodDefined() {
        return rt.isFunction(self.onLoad);
    }

    function _goBack() {
        if ($ionicHistory.currentView() !== null && $ionicHistory.currentView().goBack) {
            $ionicHistory.currentView().goBack();
        } else {
            rt.goBack();
        }
    }

    function _gotoState(state, params) {
        $state.go(state, params)
    }

    function _registerEvent() {
        // $scope.$on('popup.shown', function (event, popup) {
        //     $rootScope.$broadcast('xrm.popup.shown',popup);
        // });
        // $scope.$on('popup.hidden', function (event, popup) {
        //     $rootScope.$broadcast('xrm.popup.hidden',popup);
        // });

        // $scope.$on('popover.shown', function (event, popover) {
        //     $rootScope.$broadcast('xrm.popover.shown',popover);
        // });
        // $scope.$on('popover.hidden', function (event, popover) {
        //     $rootScope.$broadcast('xrm.popover.hidden',popover);
        // });

        // $scope.$on('modal.shown', function (event, modal) {
        //     $rootScope.$broadcast('xrm.modal.shown',modal);
        // });
        // $scope.$on('modal.hidden', function (event, modal) {
        //     $rootScope.$broadcast('xrm.modal.hidden',modal);
        // });
    }

    this.registerInitMethod = function(fn) {
        this.onInit = fn;
        return this;
    }

    this.registerGoBackMethod = function(fn) {
        $ionicHistory.currentView().goBack = fn;
        return this;
    };

    this.executeLoadMethod = function(fn) {
        this.onLoad = fn;
        _load();
    }
}
