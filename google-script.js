function forceStartQuest() {
    var habId = "#HabiticaUserID#";
    var habToken = "#HabiticaAPIToken#";
    var timeToWait = 3780; // In Seconds

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

        Utilities.sleep(timeToWait * 1000);
        UrlFetchApp.fetch("https://habitica.com/api/v3/groups/party/quests/force-start", params);

    }
}
