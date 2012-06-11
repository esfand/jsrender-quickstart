var my = my || {};
my.utils = (function () {
    var 
        formatTemplatePath = function (name) {
            return "/templates/_" + name + ".tmpl.html";
        },
        renderTemplate = function (tmplName, targetSelector, data) {
            var file = formatTemplatePath(tmplName);
            $.get(file, null, function (template) {
                var tmpl = $.templates(template);
                var htmlString = tmpl.render(data);
                if (targetSelector) {
                    $(targetSelector).html(htmlString);
                }
                return htmlString;
            });
        };
    return {
        formatTemplatePath: formatTemplatePath,
        renderExternalTemplate: renderTemplate
    };
})();
