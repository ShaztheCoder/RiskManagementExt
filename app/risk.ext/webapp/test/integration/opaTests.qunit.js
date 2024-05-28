sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'risk/ext/risk/ext/test/integration/FirstJourney',
		'risk/ext/risk/ext/test/integration/pages/RisksList',
		'risk/ext/risk/ext/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('risk/ext/risk/ext') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);