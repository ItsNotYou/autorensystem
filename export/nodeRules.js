var _contactJS = require("contactJS");
var _d = new _contactJS.Discoverer();

var _rules = [
	{
		"id": "93813afa-66aa-4ca7-a4b8-971f54a6d8fc",
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
		"id": "6e793969-792f-49e4-8232-2b51d7ef9913",
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
		"id": "7b36a87d-9d99-43ed-bc47-9a6879869f2a",
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
		"id": "567bc858-61a3-4289-a5ce-b66e980d3f5a",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "RASPBERRY_PI"]]}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS"]]}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_TIME", type: "BOOLEAN", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "RASPBERRY_PI"]]}), "==", "true") && this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_DEVICES", type: "BOOLEAN", parameterList: [["CP_DEVICE", "STRING", "TROVIS"]]}), "==", "true") && this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_TIME", type: "BOOLEAN", parameterList: []}), "==", "false")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitc8c5a2a9-34b2-4797-9fba-96f5289138ae", null);
	}
			R.next();
		}
	},
	{
		"id": "d0a92a71-fd5d-4a6b-9022-7254fa0e0204",
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
		"id": "e244c85e-3598-4692-8908-45fd7e585b42",
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
		"id": "8620fa61-fdb0-45d9-b69e-737e3f403703",
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
		"id": "29c7d8b6-d1df-4749-ae25-583a9589b954",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_WIFI"]]}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_NTP_REQUIRED", type: "BOOLEAN", parameterList: []}), "==", "true") && this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_AVAILABLE_NTP", type: "BOOLEAN", parameterList: [["CP_CONNECTION_TYPE", "STRING", "CONNECTION_WIFI"]]}), "==", "false")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitcd9eff2a-ab5a-41cc-b91d-2d6db33a25fe", null);
	}
			R.next();
		}
	},
	{
		"id": "b5be4969-9849-457b-80ef-d1b3b37d7963",
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
		"id": "8e094d04-9626-46b5-bd90-fdba13c03646",
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
		"id": "b3d124f6-ade5-424e-bd09-75182472c7d3",
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
		"id": "7d9ee83f-77b2-40fb-a057-4107054f8884",
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
		"id": "de22ed26-89d0-408b-b751-13d69c82d1d6",
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
		"id": "8385d628-049c-482d-9e93-971abcb6d01d",
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
		"id": "dafe9013-5ac8-4327-8362-a50c9f48cc0b",
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
		"id": "ade52a2f-de85-4d46-971e-cf1e60ce59f2",
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