This is an example workspace to get users quickly started to see the power of SFDX to develop Analytics templates.  This assumes you have SFDX installed already and have authenticated to a developer hub.  If not see the quick start guide for the CLI installer:  https://developer.salesforce.com/tools/sfdxcli 

After cloning this repo and navigating to the sfdxAnalyticsQuickStart directory in a terminal:

1.  Update the adminEmail in config/project-scratch-def.json to your email address
2.  Authenticate to your dev hub.  For web auth 'sfdx force:auth:web:login -d'
3.  Create a scratch org 'sfdx force:org:create -s -f config/project-scratch-def.json' .  This will create an scratch org which is ready with Analytics enabled.
4.  Push the sample Analytics template from the local workspace to the scratch org by running 'sfdx force:source:push'

Now to install the Analytics SFDX plugin run:

sfdx plugins:install @salesforce/analytics

At this point you have a scratch org with an Analytics template installed.  Explore the Analytics commands by running 'sfdx analytics --help'

For example to create an Analytics template from an application run the following to see all the options available:

'sfdx analytics:app:create --help'

To view the Analytics template:
'sfdx analytics:template:list'

To create an Analytics application from the template:
'sfdx analytics:app:create -t templateid'

To to view the Analytics applications:
'sfdx analytics:app:list' 


