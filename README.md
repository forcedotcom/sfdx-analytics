# Tableau CRM Template and Lightning Web Components Examples

![recipes-logo](recipes-logo.png)

A collection of Tableau CRM code examples for Lightning Web Components (LWC) and App Templates. 

For LWC, each example demonstrates how to code third party Analytics visualizations into LWC. Current examples include a Gantt Chart, a graph, a hierarchy, a list, and an integration with the [Chart.js library](https://www.chartjs.org/).

For App Templates, there is Quick Start project to get users using the power of SFDX to develop Analytics templates.

<div>
    <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70,w_50/learn/projects/quick-start-lwc-recipes-app/bb501c3216ac163958f036fb90357955_badge.png" align="left" alt="Trailhead Badge"/>
    Learn more about using generic LWC recipes by completing the <a href="https://trailhead.salesforce.com/content/learn/projects/quick-start-lwc-recipes-app">Quick Start: Explore the LWC Recipes Sample App</a> Trailhead project.
    <br/>
    <br/>
    <br/>
</div>

> This sample application is designed to run on Salesforce Platform.

## Table of contents

-   [Installing the app using a Scratch Org](#installing-the-app-using-a-scratch-org): This is the recommended installation option. Use this option if you are a developer who wants to experience the app and the code.

-   [Installing the app using a Developer Edition Org or a Trailhead Playground](#installing-the-app-using-a-developer-edition-org-or-a-trailhead-playground): Useful when tackling Trailhead Badges or if you want the app deployed to a more permanent environment than a Scratch org.

-   [Optional installation instructions](#optional-installation-instructions)

-   [Code tours](#code-tours)

-   [Tableau CRM LWC Features](#tableau-crm-lwc-features)

-   [Tableau CRM LWC Metadata](#tableau-crm-lwc-metadata)

-   [Tableau CRM App Templates](#tableau-crm-app-templates)

## Installing the app using a Scratch Org

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

    - Enable Dev Hub in your Trailhead Playground
    - Install Salesforce CLI
    - Install Visual Studio Code
    - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. If you haven't already done so, authorize your hub org and provide it with an alias (**myhuborg** in the command below):

    ```
    sfdx auth:web:login -d -a myhuborg
    ```

1. Clone the ****<NEED OUR PUBLIC REPO HERE>** repository:

    ```
    git clone **<NEED OUR PUBLIC REPO HERE>**
    cd **<NEED OUR PUBLIC REPO HERE>**
    ```

1. Create a scratch org and provide it with an alias (**<NEED OUR PUBLIC REPO HERE>s** in the command below):

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a **<NEED OUR PUBLIC REPO HERE>**
    ```

1. Push the app to your scratch org:

    ```
    sfdx force:source:push
    ```

1. Open the scratch org:

    ```
    sfdx force:org:open
    ```

1. In App Launcher, click **View All** then select the **<NEED OUR APP>** app.

## Installing the App using a Developer Edition Org or a Trailhead Playground

Follow this set of instructions if you want to deploy the app to a more permanent environment than a Scratch org.
This includes non source-tracked orgs such as a [free Developer Edition Org](https://developer.salesforce.com/signup) or a [Trailhead Playground](https://trailhead.salesforce.com/).

Make sure to start from a brand-new environment to avoid conflicts with previous work you may have done.

1. Clone this repository:

    ```
    git clone **<NEED OUR PUBLIC REPO HERE>**
    cd **<NEED OUR PUBLIC REPO HERE>**
    ```

1. Authorize your Trailhead Playground or Developer org and provide it with an alias (**mydevorg** in the command below):

    ```
    sfdx auth:web:login -s -a mydevorg
    ```

1. Run this command in a terminal to deploy the app.

    ```
    sfdx force:source:deploy -p force-app
    ```

1. Assign the `recipes` permission set to the default user. **<DO WE NEED THIS IN OUR REPO???>**

    ```
    sfdx force:user:permset:assign -n recipes
    ```

1. (Optional) Assign the `Walkthroughs` permission set to the default user. **<DO WE NEED THIS IN OUR REPO???>**

> Note: this will enable In App Guidance Walkthroughs, allowing you to be taken through a guided tour of the sample app.

    ```
    sfdx force:user:permset:assign -n Walkthroughs
    ```

1. Import some sample data. **<DO WE NEED THIS IN OUR REPO???>**

    ```
    sfdx force:data:tree:import -p ./data/data-plan.json
    ```

1. If your org isn't already open, open it now:

    ```
    sfdx force:org:open -u mydevorg
    ```


1. In App Launcher, select the **<NEED OUR PUBLIC REPO HERE>** app.

## Optional Installation Instructions **<DO WE NEED THIS IN OUR REPO???>**

This repository contains several files that are relevant if you want to integrate modern web development tooling to your Salesforce development processes, or to your continuous integration/continuous deployment processes.

### Code formatting

[Prettier](https://prettier.io/) is a code formatter used to ensure consistent formatting across your code base. To use Prettier with Visual Studio Code, install [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) from the Visual Studio Code Marketplace. The [.prettierignore](/.prettierignore) and [.prettierrc](/.prettierrc) files are provided as part of this repository to control the behavior of the Prettier formatter.

### Code linting

[ESLint](https://eslint.org/) is a popular JavaScript linting tool used to identify stylistic errors and erroneous constructs. To use ESLint with Visual Studio Code, install [this extension](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-lwc) from the Visual Studio Code Marketplace. The [.eslintignore](/.eslintignore) file is provided as part of this repository to exclude specific files from the linting process in the context of Lightning Web Components development.

### Pre-commit hook

This repository also comes with a [package.json](./package.json) file that makes it easy to set up a pre-commit hook that enforces code formatting and linting by running Prettier and ESLint every time you `git commit` changes.

To set up the formatting and linting pre-commit hook:

1. Install [Node.js](https://nodejs.org) if you haven't already done so
1. Run `npm install` in your project's root folder to install the ESLint and Prettier modules (Note: Mac users should verify that Xcode command line tools are installed before running this command.)

Prettier and ESLint will now run automatically every time you commit changes. The commit will fail if linting errors are detected. You can also run the formatting and linting from the command line using the following commands (check out [package.json](./package.json) for the full list):

```
npm run lint:lwc
npm run prettier
```

## Code Tours **<DO WE NEED THIS IN OUR REPO??? THIS ONE WOULD BE EXTRA WORK>**

Code Tours are guided walkthroughs that will help you understand the app code better. To be able to run them, install the [CodeTour VSCode extension](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour).

## Tableau CRM LWC Features

**Types**

```
type Row = {[string]: mixed, ...};
type Data = Array<Row>;
type Metadata = {|
    groups: Array<string>,
    strings: Array<string>,
    numbers: Array<string>
|};
type Selection = Data;
type SetSelection = (Selection) => void;
type SelectMode = 
    | 'none'
    | 'single'
    | 'multi'
    | 'singlerequired'
    | 'multirequired';

type State = {|
    pageId: string,
    state: DashboardStateJson
|};
type GetState = () => State,
type SetState = (State) => void;
```

**Data**

Data is the result rows returned by the query as an array of maps.
```
[
    {columnOne: 'one', columnTwo: 123},
    {columnOne: 'two', columnTwo: 456}
]
```

**Metadata**

Metadata describes the shape of the results.
```
{
    strings: ['columnOne'],
    numbers: ['columnTwo']
}
```

**Selection**

Selection takes the same shape as data includes the currently-selected rows.

**setSelelction**

`setSelection` is a callback passed in that allows the component to update the attached step's selection in Tableau CRM. In doing so, it potentially applies filters to the rest of the dashboard's contents depending on how the widges are configured.
```type SetSelection = (Selection) => void;```

**Select Mode**

Select mode describes which select mode the data source is in.

**getState**

`getState` is used to retrieve the current state of the dashboard. The state format is documented [here](https://help.salesforce.com/articleView?id=sf.bi_embed_filters.htm&type=5).

**setState**

`setState` is used to patch the current state of the dashboard.

## Tableau CRM LWC Metadata

Lightning Web Components used in Tableau CRM dashboards leverage the same file structure and [XML metadata format](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_configuration_tags) used by other LWCs on the Salesforce platform. Here are few additions to this metadata specific for Tableau CRM.

**analytics__Dashboard Target**

Adding this target to the list of `<targets>` for your component allows it to be used in Tableau CRM dashboards, provided that your component is public. You can also add a `<targetConfig>` for the new target to further customize how your component appears in dashboards.

**`<hasStep>` Tag**

In an `analyticsDashboard` target config, you can choose to include a `<hasStep>true</hasStep>` tag to indicate that your component requires an attached step to function as expected. With this tag, the dashboard builder UI prompts you to attach an existing step or create a new step when creating an instance of your component. Components with an attached step have access to step-specific properties like `results` and `selection`. For more information on these properties, see [Tableau CRM LWC Features](#tableau-crm-lwc-features).

**Measure and Dimension Attribute Data Types**

Attributes specified in a LWC's `analtyicsDashboard` target config are displayed in the Tableau CRM dashboard builder UI for configuration. In addition to the common data types, this target also supports `Measure` and `Dimension` data types for components with `<hasStep>true</hasStep>`. Dashboard builders are able to choose a column of the given data type from the results of the attached step.

## Tableau CRM App Templates

Use the Quick Start template to practice working with Tableau CRM app templates in your scratch org. Then, create
your own apps and templatize them using the Analytics CLI plugin and Visual Studio commands.

Navigate to the sfdx-analytics directory in a terminal:

1. Update the adminEmail in config/project-scratch-def.json to your email address

    ```
    sfdx force:org:open -u mydevorg
    ```

1.  Authenticate to your dev hub.
    ```
    sfdx force:auth:web:login -d
    ```

1.  Create a scratch org that is Analytics enabled.
    ```
    sfdx force:org:create -s -f config/project-scratch-def.json
    ```

1.  Push the sample Analytics template from the local workspace to the scratch org
    ```
    sfdx force:source:push
    ```

1. Install the Analytics SFDX plugin
    ```
    sfdx plugins:install @salesforce/analytics
    ```

## Tableau CRM App Template Commands

1. Now you have a scratch org with an Analytics template installed.  Explore the Analytics commands by running
    ```
    sfdx analytics --help
    ```

1. View the options available to create an Analytics template from an app
    ```
    sfdx analytics:app:create --help
    ```

1. View the Analytics template:
    ```
    sfdx analytics:template:list
    ```

1. To create an Analytics application from the template you have two options:

    1. From CLI:
        ```
        sfdx analytics:app:create -t <templateid>
        ```

    1. From Analytics Studio

        1. Onetime: set environment variable so you always open to Analytics Page
            ```
            export FORCE_OPEN_URL=/analytics/wave/wave.apexp
            ```

        1. Open the scratch org
            ```
            sfdx force:org:open
            ```

        1. Select 'Create' > 'App' > 'Start From Template' in Analytics Studio

1. To view the Analytics applications from the CLI:
    ```
    sfdx analytics:app:list
    ``` 
