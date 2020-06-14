# Habitica Force Start Quest


This script force starts a pending quest after a set time e.g. 1 hour.
It is best used in combination with the auto accept quest script. That way everyone who wants to participate in the quest can do so by enabling auto accept quest and if some people don't want to take part the quest owner doesn't have to start the quest manually after set time.


## Requirements
* You need to be the quest owner or the party leader.
* If you are the party leader you can force start any quest.


## Installation
* Go to script.google.com. If this is your first script, this will automatically create a new Google script for you and open an editor for it. Otherwise, edit an existing project by clicking the pencil icon next to it, or create another.
* Paste the code snippet below into the editor, replacing the spaces marked #HabiticaUserID# and #HabiticaAPIToken# with Habitica User Id and API Token (Leave the quotes). These can be found under the API tab in your Habitica settings.
* Under Edit, select Current project's triggers. Then add a trigger that runs scheduleJoinQuest Time-driven on a Hour timer with the parameter of Every hour.
Save and you're done!
