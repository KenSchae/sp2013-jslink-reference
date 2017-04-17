(function() {
    var itemCtx = {};
    itemCtx.Templates = {}
	
    itemCtx.Templates.Header = "<div><b>Sample list items masked in VIEW</b></div><ul>";
    itemCtx.Templates.Item = ItemOverrideFunc;
    itemCtx.Templates.Footer = "</ul>";

	itemCtx.BaseViewID = 1;
	itemCtx.ListTemplateType = 11000;

	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(itemCtx);
})();

function ItemOverrideFunc(ctx) {

    return "<li>" + ctx.CurrentItem.Title + " - *****</li></span>";

}