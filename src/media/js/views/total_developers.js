define('views/total_developers', ['chartutils', 'l10n'], function(cutils, l10n) {

    var gettext = l10n.gettext;

    // Easy way to toggle regions for this view.
    var enableRegions = false;

    return function(builder) {
        var chartTitle = gettext('Total Developers');
        var context = {title: chartTitle};
        if (enableRegions) context.regions = cutils.regions;

        builder.start('apps_chart.html', context).done(function() {
            cutils.createChart(
                'total_developers',
                gettext('Developers'),
                gettext('Number of Developers'),
                {noregion: !enableRegions}
            );
        });

        builder.z('type', 'root');
        builder.z('title', chartTitle);
    };
});
