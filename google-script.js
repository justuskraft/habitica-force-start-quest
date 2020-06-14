function forceStartQuest() {
    var habId = "069f51dd-a6f0-49ba-bae5-8df76195fb3c";
    var habToken = "24544036-a40a-4087-b66d-19baacd63adc";

    var paramsTemplate = {
        "method": "get",
        "headers": {
            "x-api-user": habId,
            "x-api-key": habToken
        }
    }
    var response = UrlFetchApp.fetch("https://habitica.com/api/v3/groups/party", paramsTemplate);
    var party = JSON.parse(response);

    if ((party.data.quest.key != undefined) && (party.data.quest.active != true)) {
        paramsTemplate = {
            "method": "post",
            "headers": {
                "x-api-user": habId,
                "x-api-key": habToken
            }
        }
        var params = paramsTemplate;

        Utilities.sleep(4200 * 1000);
        UrlFetchApp.fetch("https://habitica.com/api/v3/groups/party/quests/force-start", params);


    }
}
