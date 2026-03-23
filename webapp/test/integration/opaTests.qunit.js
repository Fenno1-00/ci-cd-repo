/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["ns/ciapp/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
