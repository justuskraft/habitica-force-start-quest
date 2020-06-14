function forceStartQuest() {
    var habId = "#HabiticaUserID#";
    var habToken = "#HabiticaAPIToken#";
    var scriptProperties = PropertiesService.getScriptProperties();
    var paramsTemplate = {
        "method": "get",
        "headers": {
            "x-api-user": habId,
            "x-api-key": habToken
        }
    }
    var response = UrlFetchApp.fetch("https://habitica.com/api/v3/groups/party", paramsTemplate);
    var party = JSON.parse(response);
    if (scriptProperties.getProperty('PENDING_QUEST') == 'true') {
        scriptProperties.setProperty('PENDING_QUEST', 'false');
        paramsTemplate = {
            "method": "post",
            "headers": {
                "x-api-user": habId,
                "x-api-key": habToken
            }
        }
        var params = paramsTemplate;
        UrlFetchApp.fetch("https://habitica.com/api/v3/groups/party/quests/force-start", params);
    } else if ((party.data.quest.key != undefined) && (party.data.quest.active != true)) {
        scriptProperties.setProperty('PENDING_QUEST', 'true');
    } else {
        scriptProperties.setProperty('PENDING_QUEST', 'false');
    }
}
