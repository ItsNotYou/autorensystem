var _contactJS = require("contactJS");
var _d = new _contactJS.Discoverer();

var _rules = [
	{
		"id": "ffac7bbf-dfaf-4b56-aa44-02627aa4fd1a",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICE", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS_5573"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unit41cafe05-2892-4af2-8eae-f107fb8217e4")) && (this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICE", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS_5573"]]}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit85f73563-73c6-4073-9181-c64b775fb334", null);
	}
			R.next();
		}
	},
	{
		"id": "afe50018-ff41-4df8-9321-d83c6f8f9017",
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
		"id": "1e1fe58b-54f8-45c5-b3ab-1fa663072ff4",
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
		"id": "f98b4a3d-56d8-45b4-9edc-49ab35065193",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_TIME", type: "BOOLEAN", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_TIME", type: "BOOLEAN", parameterList: []}), "!=", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitc8c5a2a9-34b2-4797-9fba-96f5289138ae", null);
	}
			R.next();
		}
	},
	{
		"id": "d3a92bc1-4253-4250-a120-3f4e1e10d894",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_TIME", type: "BOOLEAN", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unitc8c5a2a9-34b2-4797-9fba-96f5289138ae")) && (this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_TIME", type: "BOOLEAN", parameterList: []}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitd553f504-495c-4c3d-978d-4185581f4eaf", null);
	}
			R.next();
		}
	},
	{
		"id": "0669be99-c9e6-432f-8c5a-4bd8c603be03",
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
		"id": "80f54bd3-2b7d-4cbd-806f-cb79e7c79213",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICE", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS_5573"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICE", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS_5573"]]}), "==", "false")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit41cafe05-2892-4af2-8eae-f107fb8217e4", null);
	}
			R.next();
		}
	},
	{
		"id": "f69236b3-fc56-409c-bd44-26f6c9bbcfff",
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
		"id": "e33bc423-9d07-4612-b1eb-002e7e358039",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_TROVIS", type: "BOOLEAN", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_TROVIS", type: "BOOLEAN", parameterList: []}), "!=", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit462333bc-d90e-4195-8718-b92ec1949945", null);
	}
			R.next();
		}
	},
	{
		"id": "a7a622d5-28c0-4120-963a-917be42f8b0d",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_TROVIS", type: "BOOLEAN", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unit462333bc-d90e-4195-8718-b92ec1949945")) && (this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_TROVIS", type: "BOOLEAN", parameterList: []}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitc7920511-e873-4eb2-856b-be250773211e", null);
	}
			R.next();
		}
	},
	{
		"id": "bd9353a1-b91a-4e4c-ac5c-dbe9d5d74d2f",
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
		"id": "1ace0772-4e83-40f4-8a66-c16b546b2b4b",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_CELL"]]}), "==", "false") && this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}), "==", "true")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit901b61b2-9397-4eec-80c0-0b248ceffde4", null);
	}
			R.next();
		}
	},
	{
		"id": "5d9d7704-595d-4f3e-934b-1a806c5143d2",
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
		"id": "36d6dd4e-f9c5-4581-bed2-06653e1511b5",
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
		"id": "46d4c89a-7a92-4022-b727-81d01f9e247a",
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
		"id": "9b6e8eda-c98e-4412-843d-36e4c3b6e247",
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