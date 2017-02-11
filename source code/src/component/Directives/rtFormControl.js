/********************************************************
 Copyright @ 苏州瑞泰信息技术有限公司 All rights reserved.
 创建人   : east lv & channing guo
 创建时间 : 2016-05-12
 说明     : 表单输入组件
 *********************************************************/
/*global angular:false */

(function(window, document, undefined) {
    'use strict';

    angular.module('xrmApp')
        /*-------   表单   -------*/
        .directive('rtForm', function() {
            return {
                restrict: 'E',
                scope: {
                    rtTextAlign: "@"
                },
                replace: true,
                //transclude: true,
                //template: '<div class="rt-form" ng-transclude></div>',
                compile: function($element, $attr) {
                    $element.addClass("rt-form");
                },
                controller: function($scope, $element) {
                    this.textAlign = angular.isDefined($scope.rtTextAlign) ? $scope.rtTextAlign : "left";
                }
            };
        })
        /*-------   标签 + 文本   -------*/
        .directive('rtFormRowText', function() {
            return {
                restrict: 'EA',
                scope: {
                    rtLabel: "@",
                    rtText: "@"
                },
                replace: true,
                require: '^rtForm',
                template: '<div class="rt-form-row rt-form-row-readonly">' +
                    '    <span class="_input-label">{{rtLabel}}</span>' +
                    '    <span class="_input-readonly">{{rtText}}</span>' +
                    '</div>',
                link: function($scope, $element, $attr, $ctrl) {
                    var inputEl = $element.children()[1];
                    inputEl.style.textAlign = $ctrl.textAlign;
                }
            };
        })
        /*-------   标签 + 文本   -------*/
        .directive('rtFormRow2Text', function() {
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                    rtLabel: "@",
                    rtText: "@"
                },
                template: '<div class="rt-form-row-2 rt-form-row-readonly">' +
                    '    <span class="_input-label">{{rtLabel}}</span>' +
                    '    <span class="_input-readonly">{{rtText}}</span>' +
                    '</div>'
            };
        })
        /*-------   标签 + 输入   -------*/
        .directive('rtFormRowInput', ['rt', function(rt) {
            return {
                restrict: 'E',
                replace: true,
                require: '^rtForm',
                scope: {
                    rtLabel: "@",
                    rtPlaceholder: "@",
                    rtType: "@",
                    rtFocusOn: "@",
                    rtRequired: "=",
                    rtDisabled: "=",
                    rtModel: '='
                },
                template: '<div class="rt-form-row rt-form-row-input">' +
                    '    <label class="_input-label">{{rtLabel}}<span ng-if="rtRequired" style="color: red;"> *</span></label>' +
                    '    <input class="_input-text" ng-disabled="rtDisabled" ng-model="rtModel" focus-on="{{rtFocusOn}}" />' +
                    '</div>',
                link: function($scope, $element, $attr, $ctrl) {
                    var placeholder = $attr.rtPlaceholder;
                    var type = $attr.rtType || "text";
                    var disabled = rt.isNull($attr.rtDisabled) ? false : $attr.rtDisabled.toLocaleLowerCase() === "true";

                    var inputEl = $element.find("input")[0];

                    inputEl.type = type;

                    if (!disabled) {
                        if (placeholder !== null && placeholder !== undefined) {
                            inputEl.placeholder = placeholder;
                        } else {
                            inputEl.placeholder = rt.translate("component_PleaseEnter") + $attr.rtLabel;
                        }
                    }

                    inputEl.style.textAlign = $ctrl.textAlign;
                }
            };
        }])
        /*-------   标签 + 输入   -------*/
        .directive('rtFormRow2Input', ['rt', function(rt) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    rtLabel: "@",
                    rtTips: "@",
                    rtPlaceholder: "@",
                    rtType: "@",
                    rtFocusOn: "@",
                    rtRequired: "=",
                    rtDisabled: "=",
                    rtModel: '='
                },
                template: '<div class="rt-form-row-2 rt-form-row-input">' +
                    '    <label class="_input-label">{{rtLabel}}<span ng-if="rtRequired" class="_require">*</span><span class="_tips">{{rtTips}}</span></label>' +
                    '    <input class="_input-text" ng-disabled="rtDisabled" ng-model="rtModel" focus-on="{{rtFocusOn}}" />' +
                    '</div>',
                link: function($scope, $element, $attr, $ctrl) {
                    var placeholder = $attr.rtPlaceholder;
                    var type = $attr.rtType || "text";
                    var disabled = rt.isNull($attr.rtDisabled) ? false : $attr.rtDisabled.toLocaleLowerCase() === "true";

                    var inputEl = $element.find("input")[0];

                    inputEl.type = type;

                    if (!disabled) {
                        if (placeholder !== null && placeholder !== undefined) {
                            inputEl.placeholder = placeholder;
                        } else {
                            inputEl.placeholder = rt.translate("component_PleaseEnter") + $attr.rtLabel;
                        }
                    }
                }
            };
        }])
        /*-------   标签 + 多行输入   -------*/
        .directive('rtFormRowTextarea', ['rt', function(rt) {
            return {
                restrict: 'E',
                replace: true,
                require: '^rtForm',
                scope: {
                    rtLabel: "@",
                    rtPlaceholder: "@",
                    rtRequired: "=",
                    rtDisabled: "=",
                    rtModel: '='
                },
                template: '<div class="rt-form-row rt-form-row-textarea">' +
                    '    <label class="_input-label">{{rtLabel}}<span ng-if="rtRequired" style="color: red;"> *</span></label>' +
                    '    <textarea class="_input-textarea" ng-disabled="rtDisabled" ng-model="rtModel" />' +
                    '</div>',
                link: function($scope, $element, $attr, $ctrl) {
                    var placeholder = $attr.rtPlaceholder;
                    var disabled = rt.isNull($attr.rtDisabled) ? false : $attr.rtDisabled.toLocaleLowerCase() === "true";

                    var inputEl = $element.find("textarea")[0];

                    if (!disabled) {
                        if (placeholder !== null && placeholder !== undefined) {
                            inputEl.placeholder = placeholder;
                        } else {
                            inputEl.placeholder = rt.translate("component_PleaseEnter") + $attr.rtLabel;
                        }
                    }

                    inputEl.style.textAlign = $ctrl.textAlign;
                }
            };
        }])
        /*-------   标签 + 多行输入   -------*/
        .directive('rtFormRow2Textarea', ['rt', function(rt) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    rtLabel: "@",
                    rtPlaceholder: "@",
                    rtRequired: "=",
                    rtDisabled: "=",
                    rtModel: '='
                },
                template: '<div class="rt-form-row-2 rt-form-row-textarea">' +
                    '    <label class="_input-label">{{rtLabel}}<span ng-if="rtRequired" class="_require">*</span><span class="_tips">{{rtTips}}</span></label>' +
                    '    <textarea class="_input-textarea" ng-disabled="rtDisabled" ng-model="rtModel" />' +
                    '</div>',
                link: function($scope, $element, $attr, $ctrl) {
                    var placeholder = $attr.rtPlaceholder;
                    var disabled = rt.isNull($attr.rtDisabled) ? false : $attr.rtDisabled.toLocaleLowerCase() === "true";

                    var inputEl = $element.find("textarea")[0];

                    if (!disabled) {
                        if (placeholder !== null && placeholder !== undefined) {
                            inputEl.placeholder = placeholder;
                        } else {
                            inputEl.placeholder = rt.translate("component_PleaseEnter") + $attr.rtLabel;
                        }
                    }
                }
            };
        }])
        /*-------   标签 + 开关   -------*/
        .directive('rtFormRowToggle', function() {
            return {
                restrict: 'EA',
                require: '^rtForm',
                replace: true,
                scope: {
                    rtLabel: "@",
                    rtModel: "=",
                    rtDisabled: "=",
                    rtRequired: "="
                },
                template: '<div class="rt-form-row rt-form-toggle">' +
                    '    <label class="_input-label">{{rtLabel}}<span ng-if="rtRequired" style="color: red;"> *</span></label>' +
                    '    <div class="_input-toggle">' +
                    '        <label class="toggle">' +
                    '           <input type="checkbox" ng-model="rtModel" ng-checked="rtModel" ng-disabled="rtDisabled">' +
                    '           <div class="track"><div class="handle"></div></div>' +
                    '       </label>' +
                    '    </div>' +
                    '</div>',
                link: function($scope, $element, $attr, $ctrl) {
                    var inputEl = $element.find("label")[1];
                    inputEl.style.float = $ctrl.textAlign;
                }
            };
        })
        /*-------   标签 + 日期   -------*/
        .directive('rtFormRowDate', function(rt) {
            return {
                restrict: 'E',
                replace: true,
                require: '^rtForm',
                scope: {
                    rtLabel: "@",
                    rtPlaceholder: "@",
                    rtDatepickerMode: "@",
                    rtType: "@",
                    rtRequired: "=",
                    rtDisabled: "=",
                    rtModel: "="
                },
                template: '<div class="rt-form-row rt-form-row-date">' +
                    '    <label class="_input-label">{{rtLabel}}<span ng-if="rtRequired" style="color: red;"> *</span></label>' +
                    '    <div class="_input-date">' +
                    '        <input ng-disabled="rtDisabled" ng-model="rtModel">' +
                    '        <i class="icon ion-ios-arrow-right"></i>' +
                    '    </div>' +
                    '</div>',
                link: function($scope, $element, $attr, $ctrl) {
                    var type = $attr.rtType || "date";

                    var inputEl = $element.find("input")[0];
                    inputEl.type = type;

                    inputEl.style.textAlign = $ctrl.textAlign;

                    var datePicker = $attr.rtDatepickerMode;
                    if (type === "date" && datePicker === "calandar") {
                        inputEl.readOnly = true;
                        inputEl.parentElement.onclick = function() {
                            rt.showDatePickerDialog({
                                selectedValue: inputEl.value === "" ? null : new Date(inputEl.value),
                                scope: $scope,
                                success: function(result) {
                                    $scope.rtModel = rt.formatDateTime(result, "yyyy-MM-dd");
                                }
                            });
                        };
                    }
                }
            };
        })
        /*-------   标签 + 日期   -------*/
        .directive('rtFormRow2Date', function(rt) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    rtLabel: "@",
                    rtPlaceholder: "@",
                    rtType: "@",
                    rtDatepickerMode: "@",
                    rtRequired: "=",
                    rtDisabled: "=",
                    rtModel: "="
                },
                template: '<div class="rt-form-row-2 rt-form-row-date">' +
                    '    <label class="_input-label">{{rtLabel}}<span ng-if="rtRequired" class="_require">*</span><span class="_tips">{{rtTips}}</span></label>' +
                    '    <div class="_input-date">' +
                    '        <input ng-disabled="rtDisabled" ng-model="rtModel">' +
                    '        <i class="icon ion-ios-arrow-down"></i>' +
                    '    </div>' +
                    '</div>',
                link: function($scope, $element, $attr, $ctrl) {
                    var type = $attr.rtType || "date";

                    var inputEl = $element.find("input")[0];
                    inputEl.type = type;

                    var datePicker = $attr.rtDatepickerMode;
                    if (type === "date" && datePicker === "calandar") {
                        inputEl.readOnly = true;
                        inputEl.parentElement.onclick = function() {
                            rt.showDatePickerDialog({
                                selectedValue: inputEl.value === "" ? null : new Date(inputEl.value),
                                scope: $scope,
                                success: function(result) {
                                    $scope.rtModel = rt.formatDateTime(result, "yyyy-MM-dd");
                                }
                            });
                        };
                    }
                }
            };
        })
        /*-------   标签 + 下拉框   -------*/
        .directive('rtFormRowSelect', function() {
            return {
                restrict: 'E',
                replace: true,
                require: '^rtForm',
                scope: false,
                template: function(element, attrs) {
                    return '<div class="rt-form-row rt-form-row-select">' +
                        '    <label class="_input-label">' + attrs.rtLabel + (attrs.rtRequired === "true" ? '<span style="color: red;"> *</span>' : '') + '</label>' +
                        '    <div class="_input-select">' +
                        '        <i class="icon ion-ios-arrow-right"></i>' +
                        '        <select ng-disabled="' + attrs.rtDisabled + '" ng-model="' + attrs.rtModel + '" ng-options="' + attrs.rtOptions + '">' +
                        '                <option value="" ng-if="false"></option>' +
                        '        </select>' +
                        '    </div>' +
                        '</div>';
                },
                link: function($scope, $element, $attr, $ctrl) {
                    var inputEl = $element.find("select")[0];
                    inputEl.style.textAlign = $ctrl.textAlign;
                    inputEl.style.direction = $ctrl.textAlign === "right" ? "rtl" : "ltr";
                }
            };
        })
        .directive('rtFormRow2Select', function() {
            return {
                restrict: 'E',
                replace: true,
                scope: false,
                template: function(element, attrs) {
                    return '<div class="rt-form-row-2 rt-form-row-select">' +
                        '    <label class="_input-label">' + attrs.rtLabel + (attrs.rtRequired === "true" ? '<span class="_require">*</span>' : '') + '<span class="_tips">{{rtTips}}</span></label>' +
                        '    <div class="_input-select">' +
                        '        <i class="icon ion-ios-arrow-down"></i>' +
                        '        <select ng-disabled="' + attrs.rtDisabled + '" ng-model="' + attrs.rtModel + '" ng-options="' + attrs.rtOptions + '">' +
                        '                <option value="" ng-if="false"></option>' +
                        '        </select>' +
                        '    </div>' +
                        '</div>';
                }
            };
        })
        /*-------   标签 + 查找   -------*/
        .directive('rtFormRowLookup', ['rt', function(rt) {
            return {
                restrict: 'E',
                replace: true,
                require: '^rtForm',
                scope: {
                    rtLabel: "@",
                    rtPlaceholder: "@",
                    rtRequired: "=",
                    rtDisabled: "=",
                    rtTextModel: "=",
                    rtOnLookup: "&"
                },
                template: '<div class="rt-form-row rt-form-row-lookup">' +
                    '    <label class="_input-label">{{rtLabel}}<span ng-if="rtRequired" style="color: red;"> *</span></label>' +
                    '    <div class="_input-lookup" ng-click="openLookupView()">' +
                    '        <i class="icon ion-ios-arrow-right"></i>' +
                    '        <input type="text" readonly="readonly" ng-disabled="rtDisabled" ng-model="rtTextModel" />' +
                    '    </div>' +
                    '</div>',
                link: function($scope, $element, $attr, $ctrl) {
                    var placeholder = $attr.rtPlaceholder;
                    var disabled = rt.isNull($attr.rtDisabled) ? false : $attr.rtDisabled.toLocaleLowerCase() === "true";

                    var inputEl = $element.find("input")[0];

                    if (!disabled) {
                        if (placeholder !== null && placeholder !== undefined) {
                            inputEl.placeholder = placeholder;
                        } else {
                            inputEl.placeholder = rt.translate('component_PleaseSelect') + $attr.rtLabel;
                        }
                    }

                    inputEl.style.textAlign = $ctrl.textAlign;
                },
                controller: function($scope) {
                    $scope.openLookupView = function() {
                        var disabled = $scope.rtDisabled;
                        if (!disabled && $scope.rtOnLookup !== null && $scope.rtOnLookup !== undefined) {
                            $scope.rtOnLookup();
                        }
                    };
                }
            };
        }])
        /*-------   标签 + 查找   -------*/
        .directive('rtFormRow2Lookup', ['rt', function(rt) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    rtLabel: "@",
                    rtPlaceholder: "@",
                    rtRequired: "=",
                    rtDisabled: "=",
                    rtTextModel: "=",
                    rtOnLookup: "&"
                },
                template: '<div class="rt-form-row-2 rt-form-row-lookup">' +
                    '    <label class="_input-label">{{rtLabel}}<span ng-if="rtRequired" class="_require">*</span><span class="_tips">{{rtTips}}</span></label>' +
                    '    <div class="_input-lookup" ng-click="openLookupView()">' +
                    '        <i class="icon ion-ios-search"></i>' +
                    '        <input type="text" readonly="readonly" ng-disabled="rtDisabled" ng-model="rtTextModel" />' +
                    '    </div>' +
                    '</div>',
                link: function($scope, $element, $attr, $ctrl) {
                    var placeholder = $attr.rtPlaceholder;
                    var disabled = rt.isNull($attr.rtDisabled) ? false : $attr.rtDisabled.toLocaleLowerCase() === "true";

                    var inputEl = $element.find("input")[0];

                    if (!disabled) {
                        if (placeholder !== null && placeholder !== undefined) {
                            inputEl.placeholder = placeholder;
                        } else {
                            inputEl.placeholder = rt.translate('component_PleaseSelect') + $attr.rtLabel;
                        }
                    }
                },
                controller: function($scope) {
                    $scope.openLookupView = function() {
                        var disabled = $scope.rtDisabled;
                        if (!disabled && $scope.rtOnLookup !== null && $scope.rtOnLookup !== undefined) {
                            $scope.rtOnLookup();
                        }
                    };
                }
            };
        }]);
})(window, document);
