define('views/apps_installed_total', ['chartutils', 'l10n'], function(cutils, l10n) {

    var gettext = l10n.gettext;

    // Easy way to toggle regions for this view.
    var enableRegions = false;

    return function(builder) {
        var chartTitle = gettext('Total Apps Installed (All Regions)');
        var context = {title: chartTitle};
        if (enableRegions) context.regions = cutils.regions;

        builder.start('apps_chart.html', context).done(function() {
            cutils.createChart(
                'apps_installed_total',
                gettext('Apps'),
                gettext('Number of Apps'),
                {noregion: !enableRegions}
            );
        });

        builder.z('type', 'root');
        builder.z('title', chartTitle);
    };
});
