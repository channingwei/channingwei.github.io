/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : joe Song
 创建时间 : 2016-03-10
 说明     : 自定义实体的列表页面
 *********************************************************/
function rtListController(scope, rt) {

    var self = this;
    var $scope = scope;
    var $state = rt.state;
    var $ionicHistory = rt.ionicHistory;
    var $rootScope = rt.rootScope;

    var pageIndex = 1;

    function _load() {
        //初始化
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
                isLoaded: false,
                isLoadMore: true,
            },
            actions: {
                goBack: _goBack,
                search: _search,
                refresh: _refresh,
                loadMore: _loadMore,
                gotoState: _gotoState
            }
        };

        _registerEvent();

        if (_isInitMethodDefined()) {
            self.onInit();
        }
    }

    function _search() {
        if (!_isSearchMethodDefined()) {
            return;
        }

        rt.showLoadingToast("正在查询...");
        self.onSearch(pageIndex, function() {
            rt.hideLoadingToast();
        }, function(errorMessage) {
            rt.hideLoadingToast();

            rt.showErrorToast(errorMessage);
        });
    }

    function _loadMore() {
        if (!_isSearchMethodDefined()) {
            return;
        }

        if (!$scope.rt.page.isLoadMore) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            return;
        }

        pageIndex += 1;

        self.onSearch(pageIndex, function(dataList, pageSize) {
            if (rt.isNull(pageSize)) {
                pageSize = rt.getPaginationSize();
            }

            if (rt.isNull(dataList) || dataList.length < pageSize) {
                $scope.rt.page.isLoadMore = false;
            }

            $scope.$broadcast('scroll.infiniteScrollComplete');
        }, function(errorMessage) {
            rt.showErrorToast(errorMessage);
        });
    }

    function _refresh() {
        if (!_isSearchMethodDefined()) {
            return;
        }

        pageIndex = 1;

        self.onSearch(pageIndex, function() {
            $scope.$broadcast('scroll.refreshComplete');
        }, function(errorMessage) {
            $scope.$broadcast('scroll.refreshComplete');
            rt.showErrorToast(errorMessage);
        });
    }

    function _isInitMethodDefined() {
        return rt.isFunction(self.onInit);
    }

    function _isLoadMethodDefined() {
        return rt.isFunction(self.onLoad);
    }

    function _isSearchMethodDefined() {
        return rt.isFunction(self.onSearch);
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

    this.registerSearchMethod = function(fn) {
        this.onSearch = fn;
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
