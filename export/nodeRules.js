var _contactJS = require("contactJS");
var _d = new _contactJS.Discoverer();

var _rules = [
	{
		"id": "f2037301-b50b-4f1d-86d4-9a1b37357b2f",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_SUPPORT_KEYWORD", type: "STRING", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_SUPPORT_KEYWORD", type: "STRING", parameterList: []}), "", "zeit")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitc8c5a2a9-34b2-4797-9fba-96f5289138ae", null);
	}
			R.next();
		}
	},
	{
		"id": "da8a2ada-4ed1-4ec2-945f-26cb799b9b00",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}), "==", "true") && this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit490c7966-3286-46ea-9f24-12dc7fdc04fb", null);
	}
			R.next();
		}
	},
	{
		"id": "24aebf55-c9cb-49c1-ab98-ab47cf676a25",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}), "==", "true") && this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}), "==", "false")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit901b61b2-9397-4eec-80c0-0b248ceffde4", null);
	}
			R.next();
		}
	},
	{
		"id": "a7c30a60-d2de-4200-927c-b4738d41a0b1",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_WIFI"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unitcd9eff2a-ab5a-41cc-b91d-2d6db33a25fe")) && (this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_WIFI"]]}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit65230de1-bcbb-424f-be49-16eaf8df33be", null);
	}
			R.next();
		}
	},
	{
		"id": "09ce948f-1710-4953-9308-96c337241250",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unit65230de1-bcbb-424f-be49-16eaf8df33be")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["preloadLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["preloadLearningUnitCallback"]("unitcd9eff2a-ab5a-41cc-b91d-2d6db33a25fe", null);
	}
			R.next();
		}
	},
	{
		"id": "ff40a26d-3d68-432e-8cbb-6418d6e90779",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICE", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "CONTROLLER"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICE", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "CONTROLLER"]]}), "==", "false")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit462333bc-d90e-4195-8718-b92ec1949945", null);
	}
			R.next();
		}
	},
	{
		"id": "4b5e4d3d-224b-416f-b3be-9efdd5ee30de",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_WIFI"]]}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_WIFI"]]}), "==", "false") && this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitcd9eff2a-ab5a-41cc-b91d-2d6db33a25fe", null);
	}
			R.next();
		}
	}
];