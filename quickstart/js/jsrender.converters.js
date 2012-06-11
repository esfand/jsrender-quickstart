var my = my || {};
my.converters = (function () {
    var registerConverters = function () {
        $.views.converters({
            ensureUrl: function (value) {
                return (value ? value : "/images/icon-nocover.png");
            },
            priceAlert: function (value) {
                return (value < 10 ? "1 Day Special!" : "Sale Price");
            }
        });
    };
    return {
        registerConverters: registerConverters
    };
})();
my.converters.registerConverters();
