var _contactJS = require("contactJS");
var _d = new _contactJS.Discoverer();

var _rules = [
	{
		"id": "a2c1dcb1-ef41-4523-b85e-ab134461b45b",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}), "==", "true") && this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit79be15b9-f9ab-4979-8263-7f624f3aa701", null);
	}
			R.next();
		}
	},
	{
		"id": "af13f02a-f157-482d-b22e-f5a85ec829fa",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_SUPPORT_KEYWORD", type: "STRING", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_SUPPORT_KEYWORD", type: "STRING", parameterList: []}), "", "time")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitc8c5a2a9-34b2-4797-9fba-96f5289138ae", null);
	}
			R.next();
		}
	},
	{
		"id": "c812e20d-7058-4703-8f7a-2c5bf318f4a1",
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
	},
	{
		"id": "678ce953-3b60-48e5-860f-fae274e99e41",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICE", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS_5573"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICE", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS_5573"]]}), "==", "false")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit462333bc-d90e-4195-8718-b92ec1949945", null);
	}
			R.next();
		}
	},
	{
		"id": "019c01df-51f0-49da-9d12-ffd105c513c3",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICE", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS_5573"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unit462333bc-d90e-4195-8718-b92ec1949945")) && (this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICE", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS_5573"]]}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitc7920511-e873-4eb2-856b-be250773211e", null);
	}
			R.next();
		}
	},
	{
		"id": "fc992482-ac55-41cb-909c-65fbda72fd44",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unitc7920511-e873-4eb2-856b-be250773211e")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["preloadLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["preloadLearningUnitCallback"]("unit462333bc-d90e-4195-8718-b92ec1949945", null);
	}
			R.next();
		}
	},
	{
		"id": "3d3b933d-41b5-45e6-9ebc-e0b305aa0dba",
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
		"id": "29559435-0cc3-4a5d-8f33-f5ce0636e319",
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
		"id": "e62684b9-b388-4d74-b5af-22e9f238147b",
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
		"id": "bed6540e-fea5-4c0c-8d86-d97bbee2469b",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unit901b61b2-9397-4eec-80c0-0b248ceffde4")) && (this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unita974fc8c-04bb-462d-b961-4a8de6e7e725", null);
	}
			R.next();
		}
	},
	{
		"id": "b03a3b9d-6705-4a06-a46e-1a2195c37870",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unita974fc8c-04bb-462d-b961-4a8de6e7e725")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["preloadLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["preloadLearningUnitCallback"]("unit901b61b2-9397-4eec-80c0-0b248ceffde4", null);
	}
			R.next();
		}
	}
];