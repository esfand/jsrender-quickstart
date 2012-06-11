var my = my || {};
my.helpers = (function () {
    var registerHelpers = function () {
        $.views.helpers({
            toUpperCase: function (value) {
                return value.toUpperCase();
            },
            not: function (value) {
                return !value;
            },
            concat: function () {
                return "".concat.apply("", arguments) + "top";
            },
            formatLanguages: function () {
                var view = this;
                var text = "";
                if (view.index === view.parent.data.length - 2) {
                    text = " and";
                } else if (view.index < view.parent.data.length - 2) {
                    text = ",";
                }
                return text;
            }
        });
    };
    return {
        registerHelpers: registerHelpers
    };
})();
my.helpers.registerHelpers();
