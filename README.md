# Tableau CRM Template and Lightning Web Components Examples

![recipes-logo](recipes-logo.png)

A collection of Tableau CRM code examples for Lightning Web Components (LWC) and App Templates.

For LWC, each example demonstrates how to code third party Analytics visualizations into LWC. Current examples include a Gantt Chart, a graph, a hierarchy, a list, and an integration with the [Chart.js library](https://www.chartjs.org/). For additional infomation, see the [Lightning Web Components in Tableau CRM Dashboards (Beta)](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_overview.htm) developer guide.

For App Templates, there is Quick Start project to get users using the power of SFDX to develop Analytics templates. For additional information on template creation and deep-dive details, see the [Tableau CRM Templates Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_intro_wave_templates.htm).

<div>
    <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70,w_50/learn/projects/quick-start-lwc-recipes-app/bb501c3216ac163958f036fb90357955_badge.png" align="left" alt="Trailhead Badge"/>
    Learn more about using generic LWC recipes by completing the <a href="https://trailhead.salesforce.com/content/learn/projects/quick-start-lwc-recipes-app">Quick Start: Explore the LWC Recipes Sample App</a> Trailhead project.
    <br/>
    <br/>
    <br/>
</div>

> These samples are designed to run on Salesforce Platform.

## Table of contents

- [Installing the app using a Scratch Org](#installing-the-app-using-a-scratch-org): This is the recommended installation option. Use this option if you are a developer who wants to experience the app and the code.

- [Tableau CRM LWC Metadata](#tableau-crm-lwc-metadata)

- [Tableau CRM LWC Features](#tableau-crm-lwc-features)

- [Tableau CRM App Templates](#tableau-crm-app-templates)

## Installing the app using a Scratch Org

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

   - Enable Dev Hub in your Trailhead Playground
   - Install Salesforce CLI
   - Install the Analytics Plugin for the Salesforce CLI
   - Install Visual Studio Code
   - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components ansd Salesforce Analytics - App Templates extensions.

1. If you haven't already done so, authorize your hub org and provide it with an alias (**myhuborg** in the command below):

   ```
   sfdx auth:web:login -d -a myhuborg
   ```

1. Clone the forcedotcom/sfdx-analytics repository:

   ```
   git clone https://github.com/forcedotcom/sfdx-analytics.git
   cd sfdx-analytics
   ```

1. Install the Analytics SFDX plugin

   ```
   sfdx plugins:install @salesforce/analytics
   ```

1. Update the adminEmail in config/project-scratch-def.json to your email address.

1. Create a scratch org, providing an org alias (sfdx-analytics in the command below):

   ```
   sfdx force:org:create -s -f config/project-scratch-def.json -a sfdx-analytics
   ```

1. Push the LWC and template sampleas to your scratch org:

   ```
   sfdx force:source:push
   ```

1. Open your scratch org.

   ```
   sfdx force:org:open -u myhuborg
   ```

## Tableau CRM LWC Metadata

Lightning Web Components used in Tableau CRM dashboards leverage the same file structure and [XML metadata format](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_configuration_tags) used by other LWCs on the Salesforce platform. Here are few additions to this metadata specific for Tableau CRM.

**analytics\_\_Dashboard Target**

Adding this target to the list of `<targets>` for your component allows it to be used in Tableau CRM dashboards, provided that your component is public. You can also add a `<targetConfig>` for the new target to further customize how your component appears in dashboards.

**`<hasStep>` Tag**

In an `analyticsDashboard` target config, you can choose to include a `<hasStep>true</hasStep>` tag to indicate that your component requires an attached step to function as expected. With this tag, the dashboard builder UI prompts you to attach an existing step or create a new step when creating an instance of your component. Components with an attached step have access to step-specific properties like `results` and `selection`. For more information on these properties, see [Tableau CRM LWC Features](#tableau-crm-lwc-features).

**Measure and Dimension Attribute Data Types**

Attributes specified in a LWC's `analtyicsDashboard` target config are displayed in the Tableau CRM dashboard builder UI for configuration. In addition to the common data types, this target also supports `Measure` and `Dimension` data types for components with `<hasStep>true</hasStep>`. Dashboard builders are able to choose a column of the given data type from the results of the attached step.

## Tableau CRM LWC Features

**Types**

Each component configured for the `analytics__Dashboard` target has properties that are set by the dashboard runtime dynamically. Here are the properties by `type`:

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

For more information on `type` syntax, see [Type Annotations](https://flow.org/en/docs/types/).

**Data**

Available when a component has `<hasStep>true</hasStep>`, `data` returns the query results of the step as an array of maps.

    [
        {columnOne: 'one', columnTwo: 123},
        {columnOne: 'two', columnTwo: 456}
    ]

**Metadata**

Available when a component has `<hasStep>true</hasStep>`, `metadata` describes the shape of the step results.

    {
        strings: ['columnOne'],
        numbers: ['columnTwo'],
        groups: []
    }

**Selection**

Available when a component has `<hasStep>true</hasStep>`, `selection` is the current selection of the associated step as an Array of objects, with each object being one or more selected rows from the results.

    return new Map((this.selection ?? []).map((row) => [this.hash(row), row]);

**setSelelction**

Available when a component has `<hasStep>true</hasStep>`, `setSelection` is a callback passed in that allows the component to update the attached step's selection in Tableau CRM. In doing so, it potentially applies filters to the rest of the dashboard's contents depending on how the widgets are configured.

    this.setSelection(this.isMultiSelect() ? [...selecedRowsByHash.values(), row] : [row]);

**Select Mode**

Available when a component has `<hasStep>true</hasStep>`, `selectMode` describes which select mode the results from the step are in. Possible values are `single`, `multi`, `singlerequired`, `multirequired`, and `none`.

    isMultiSelect() { return this.selectMode.includes('multi'); }

**getState**

Always available to the component, `getState` is used to retrieve the current state of the dashboard. The state format is documented [here](https://help.salesforce.com/articleView?id=sf.bi_embed_filters.htm&type=5).

**setState**

Always available to the component, `setState` is used to patch the current state of the dashboard.

    if (!this.getState().pageId == this.targetPage) {
        this.priorPage = this.getState().pageId;
        this.setState({...this.getState(), pageId : this.targetPage});
    }

**Create a LWC for Tableau CRM Dashboards**

Quickly create Lightning Web Components configured for use in Tableau CRM dashboards

1. Visual Studio command

   ```
   SFDX: Create Analytics Dashboard LWC
   ```

1. CLI command
   ```
   sfdx force:lightning:component:create --type lwc -t [analyticsDashboard|analyticsDashboardWithStep] -n <name>
   ```

## Tableau CRM App Templates

Use the Quick Start template to practice working with Tableau CRM app templates in your scratch org. Then, create
your own apps and templatize them using the Analytics CLI plugin and Visual Studio commands.

1. Now you have a scratch org with an Analytics template installed. Explore the Analytics commands by running
   `sfdx analytics --help`or open the Visual Studio command palette and search for available `SFDX` commands.

1. View the options available to create an Analytics template from an app

   ```
   sfdx analytics:app:create --help
   ```

   or

   ```
   SFDX: Create Analytics Template
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

      or

      ```
      SFDX: Create Analytics App from Template
      ```

   1. From Analytics Studio

      1. Open the scratch org

         ```
         sfdx force:org:open -p analytics
         ```

         or

         ```
         SFDX: Open Analytics Studio
         ```

      1. Select 'Create' > 'App' > 'Start From Template' in Analytics Studio

1. To view the Analytics applications from the CLI:
   ```
   sfdx analytics:app:list
   ```
