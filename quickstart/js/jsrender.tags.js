var my = my || {};
my.customTags = (function () {
    var registerTags = function () {
        // compiles and registers it with a name
        $.templates("compiledRatingTmpl", "<li class='{{:#data}}'></li>");
        // registers custom tags
        $.views.tags({
            createStars: function (rating) {
                var ratingArray = [], defaultMax = 5;
                var max = this.props.max ? this.props.max : defaultMax;
                for (var i = 1; i <= max; i++) {
                    ratingArray.push(i <= rating ? "rating fullStar" : "rating emptyStar");
                }
                var htmlString = "";
                if (this.tmpl) {
                    // use the content, or the template passed in with tmpl property
                    htmlString = this.renderContent(ratingArray);
                    //htmlString = $(this.tmpl).render(ratingArray);
                } else {
                    // use the compiled named template
                    htmlString = $.render.compiledRatingTmpl(ratingArray);
                }
                return htmlString;
            },
            trimText: function (text) {
                var ret = "";
                if (this.props.max) {
                    var maxChars = isNaN(this.props.max) || this.props.max === '' || this.props.max === null ? 0 : this.props.max;
                    ret = text.substring(0, maxChars - 1) + " ...";
                }
                else {
                    ret = text;
                }
                return ret;
            },
            sort: function (array) {
                var ret = "";
                if (this.props.reverse) {
                    for (var i = array.length; i; i--) {
                        ret += this.renderContent(array[i - 1]);
                        //ret += this.tmpl.render(array[i - 1]);
                    }
                }
                else {
                    // Render in original order
                    ret += this.renderContent(array);
                    //ret += this.tmpl.render(array);
                }
                return ret;
            },
            get: function (value) {
                return value || this.props.defaultValue;
            },
            // yesNo is better off as a built in expression.
            // {{:x ? 'render this' : 'render that'}}
            // instead of
            // {{yesNo x yes='render this' no='render that'}}
            yesNo: function (value) {
                return value ? this.props.yes : this.props.no;
            }
        });
    };
    return {
        registerTags: registerTags
    };
})();
my.customTags.registerTags();
