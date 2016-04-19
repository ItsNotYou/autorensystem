var _contactJS = require("contactJS");
var _d = new _contactJS.Discoverer();

var _rules = [
	{
		"id": "c7c7ba19-08e0-44d3-b91d-7b7b717484ed",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "RASPBERRY_PI"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unit41cafe05-2892-4af2-8eae-f107fb8217e4")) && (this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "RASPBERRY_PI"]]}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit85f73563-73c6-4073-9181-c64b775fb334", null);
	}
			R.next();
		}
	},
	{
		"id": "ecd65992-c817-45db-bc5d-9d175117ca49",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unit85f73563-73c6-4073-9181-c64b775fb334")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["preloadLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["preloadLearningUnitCallback"]("unit41cafe05-2892-4af2-8eae-f107fb8217e4", null);
	}
			R.next();
		}
	},
	{
		"id": "c2f6a926-80cc-4ed3-870f-da7e1d16685f",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}), "==", "true") && this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit79be15b9-f9ab-4979-8263-7f624f3aa701", null);
	}
			R.next();
		}
	},
	{
		"id": "9ee4e4e2-0414-4171-956a-d4f2736e8cbb",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_TIME", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_TIME", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS"]]}), "==", "false")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitc8c5a2a9-34b2-4797-9fba-96f5289138ae", null);
	}
			R.next();
		}
	},
	{
		"id": "73c2020c-bd3e-4bd2-833b-f9d9718e2050",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_TIME", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unitc8c5a2a9-34b2-4797-9fba-96f5289138ae")) && (this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_TIME", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS"]]}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitd553f504-495c-4c3d-978d-4185581f4eaf", null);
	}
			R.next();
		}
	},
	{
		"id": "11ff3cff-926e-43f0-9ec8-620e9039d7b9",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unitd553f504-495c-4c3d-978d-4185581f4eaf")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["preloadLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["preloadLearningUnitCallback"]("unitc8c5a2a9-34b2-4797-9fba-96f5289138ae", null);
	}
			R.next();
		}
	},
	{
		"id": "e3ccb37b-90f8-4094-902d-1b76b0b9e5db",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "RASPBERRY_PI"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "RASPBERRY_PI"]]}), "==", "false")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit41cafe05-2892-4af2-8eae-f107fb8217e4", null);
	}
			R.next();
		}
	},
	{
		"id": "ab8e0a34-6cf5-4182-8ac5-bfbf857fc60f",
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
		"id": "f08d37c8-e1dd-4299-b18a-e19c1428cd7c",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "RASPBERRY_PI"]]}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "RASPBERRY_PI"]]}), "==", "true") && this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS"]]}), "==", "false")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit462333bc-d90e-4195-8718-b92ec1949945", null);
	}
			R.next();
		}
	},
	{
		"id": "e31a963d-98c5-4b76-9209-d21e1e236b98",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unit462333bc-d90e-4195-8718-b92ec1949945")) && (this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS"]]}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitc7920511-e873-4eb2-856b-be250773211e", null);
	}
			R.next();
		}
	},
	{
		"id": "9cfbbffe-ad42-4775-a496-f95e9b9b61bc",
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
		"id": "92ba48e8-f0c2-4d00-8b44-ae316a3f32ed",
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
		"id": "ec0c69af-ed35-49c7-81b5-b19544b99850",
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
		"id": "6d38c2f2-303b-4e04-80e6-c19f8df6fbf0",
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
		"id": "d949b9b0-f5e0-47fc-b1b5-dd6eace5bcba",
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
		"id": "aa27ce43-89a4-4f94-84ec-f5325d63a104",
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