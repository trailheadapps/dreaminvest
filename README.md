# DreamInvest Aura Sample Application

> IMPORTANT: This is the Aura version of the DreamInvest sample application. If you are looking for the new Lightning Web Components version, click [here](https://github.com/trailheadapps/dreaminvest-lwc).

![dreaminvest-logo](dreaminvest-logo.png)

[![CircleCI](https://circleci.com/gh/trailheadapps/dreaminvest.svg?style=svg)](https://circleci.com/gh/trailheadapps/dreaminvest)

DreamInvest is a sample financial services application. It features a mutual fund selector that illustrates standard coding practices and solutions to common problems when building applications with the Lightning Component Framework.

[![Thumbnail](http://img.youtube.com/vi/0gIT8la-GRM/0.jpg)](https://www.youtube.com/watch?v=0gIT8la-GRM)

## Table of contents

* [Installation](#installation)
    * [Installing DreamInvest using Salesforce DX](#installing-dreaminvest-using-salesforce-dx)
    * [Installing DreamInvest using an unlocked package](#installing-dreaminvest-using-an-unlocked-package)
* [Code highlights](#code-highlights)
* [Additional resources](#additional-resources)

## Installation

### Installing DreamInvest using Salesforce DX
This is the recommended installation option for developers who want to experience the app and the code.

1. Authenticate with your hub org (if not already done):
    ```
    sfdx force:auth:web:login -d -a myhuborg
    ```

1.  Clone this repository:

    ```zsh
    git clone https://github.com/trailheadapps/dreaminvest
    cd dreaminvest
    ```

1.  Create a scratch org and provide it with an alias (dreaminvest):

    ```zsh
    sfdx force:org:create -s -f config/project-scratch-def.json -a dreaminvest
    ```

1.  Push the app to your scratch org:

    ```zsh
    sfdx force:source:push
    ```

1.  Assign the dreaminvest permission set to the default user:

    ```zsh
    sfdx force:user:permset:assign -n dreaminvest
    ```

1. Upload Sector data:
    ```zsh
    sfdx force:data:bulk:upsert -s Sector__c -f ./data/sectors.csv -w 1 -i Sector_Id__c
    ```

1. Upload Fund data:
    ```zsh
    sfdx force:data:bulk:upsert -s Fund__c -f ./data/funds.csv -w 1 -i Id
    ```

1. Open the scratch org:
    ```zsh
    sfdx force:org:open -p /lightning/page/home
    ```

### Installing DreamInvest using an unlocked package
This is the recommended option for non developers. Use this option if you want to experience the sample app but do not plan to modify the code.

1. [Sign up](https://developer.salesforce.com/signup) for a developer edition.

1. Enable My Domain. Follow the instructions to enable My Domain [here](https://trailhead.salesforce.com/modules/identity_login/units/identity_login_my_domain).

1. Click [this link](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1I0000036toLQAQ) to install the DreamInvest unlocked package into your developer edition org.

1. Select **Install for All Users**.

1. Load sample data (Sectors):
    - In **Setup**, type **Data Import** in the Quick Find box and click **Data Import Wizard**.
    - Click **Launch Wizard**.
    - Click the **Custom objects** tab, click **Sectors**, and click **Add New Records**.
    - Drag **sectors.csv** from the data folder of this project to the upload area.
    - Click **Next**. Use the mapping wizard to map any unmapped fields. The source CSV shows the API names of the fields.
    - Click **Next**, and **Start Import**.

1. Load sample data (Funds):
    - In **Setup**, type **Data Import** in the Quick Find box and click **Data Import Wizard**.
    - Click **Launch Wizard**.
    - Click the **Custom objects** tab, click **Funds**, and click **Add New Records**.
    - For Which Sector field in your file specifies the Master/Detail relationship?, select **Sector Id (External ID)**.
    - Drag **funds.csv** from the data folder of this project to the upload area.
    - Click **Next**. Use the mapping wizard to map any unmapped fields. The source CSV shows the API names of the fields.
    - Click **Next**, and **Start Import**.

### Completing the installation

Follow the steps below to complete the installation regardless of the installation option you selected above. If you want to experience the StockService.cmp you have to obtain a free API key from [Alphavantage](https://www.alphavantage.co/support/#api-key):

1. In **Setup**, type **theme** in the quick find box. Click **Themes and Branding**, click the down arrow to the right of the **Lightning Lite** theme and select **Activate**.

1. In **Setup** type **custom settings** in the quick find box. Click **Custom Settings**, click **Manage** besides **DreamInvest Settings**. Then click **New** (top button), and enter the Alphavantage API key. Click **Save**.

1. In **App Launcher**, select the **DreamInvest** app

1. Click the **Fund Explorer** tab

## Code Highlights

### Caching data with storable actions
Storable actions make it easy to implement client-side data caching, which is one of the most impactful things you can do to improve the performance of your Lightning components. Check out the FundTileList component. A storable action is used to retrieve funds from the server and cache the response at the client-side. Read [this blog post](https://developer.salesforce.com/blogs/developer-relations/2017/03/lightning-components-best-practices-caching-data-storable-actions.html) for more information.

### Caching data with a custom cache
In addition to storable actions, you can also build your own custom cache solution. For example, for data that never (or rarely) changes, you can build a custom cache that retrieves the data from the server once, caches the response, and never goes back to the server. Check out the [DataCache](force-app/main/default/staticresources/DataCache.js) static resource for an example. And then check out the SectorSelector and AssetClassSelector components to see how it’s used to cache the list of sectors and asset classes. Read the [Modularizing Code in Lightning Components blog post](https://developer.salesforce.com/blogs/developer-relations/2016/12/lightning-components-code-sharing.html) for more details, and for different strategies to implement a custom cache.

### Creating a dropdown box from picklist values
Creating a dropdown box from picklist values is a common requirement. Take a look at the [AssetClassSelector](force-app/main/default/aura/AssetClassSelector) component for an example. The AssetClassSelector also uses the custom cache solution described previously to ensure that picklist values are only retrieved once from the server.

![Picklist dropdown](docs/dropdown_picklist.png)

### Creating a dropdown box from a list of records
Creating a dropdown box from a list of records is also a common requirement. Take a look at the [SectorSelector](force-app/main/default/aura/SectorClassSelector) component for an example. Like AssetClassSelector, SectorSelector uses the custom cache solution described previously to ensure that the list of sectors is only retrieved once from the server.

![Records dropdown](docs/dropdown_records.png)

### Event bubbling
When working with lists, letting events bubble, and registering a single event listener on a parent element instead of a separate event listener on every list item can significantly reduce the number of event listeners in your application, which can have a positive impact on performance. Check out the [FundTileList](force-app/main/default/aura/FundTileList) component, and see how a single onmousemove event listener is registered on the list element (```<ul>```) instead of a separate listener on every list item (```<li>```) (inside the [FundTile](force-app/main/default/aura/FundTile) component).

### Using application events
Application events are used for coarse-grained application-level communication, such as communication between components added to pages in App Builder. For example, in the Mutual Fund Explorer:
- The [FundFilter](force-app/main/default/aura/FundFilter) component fires the [FundFilterChange](force-app/main/default/aura/FundFilterChange) event to notify other components that the search parameters (searchKey, sector, asset class) have changed.
- The [PercentReturnRange](force-app/main/default/aura/PercentReturnRange) component fires the [ReturnRangeChange](force-app/main/default/aura/ReturnRangeChange) event to notify other components that a range has changed. The PercentReturnRange component has a [design attribute](force-app/main/default/aura/PercentReturnRange/PercentReturnRange.design) exposed in App Builder that lets you name the range so the listening component knows which range has changed. In the Mutual Fund Explorer page, the PercentReturnRange component is used three times to select a range for the following values: year-to-date return, one-year return, and five-year return.

### Using component events
Component Events are used for finer grained child-to-parent communication. For example, in the Mutual Fund Explorer:
- The [Paginator](force-app/main/default/aura/Paginator) component fires the pageNext and pagePrevious events to notify its parent (FundTileList) that the user requested the next or previous page.
- The [SearchBar](force-app/main/default/aura/SearchBar), [SectorSelector](force-app/main/default/aura/SectorSelector), and [AssetSelector](force-app/main/default/aura/AssetClassSelector) components fire the onchange event to notify their parent (**FundFilter**) that their value has changed.

### Using <aura:method>
To implement parent-to-child communication, you can either:
- Use data binding: Bind an attribute of the child to an attribute of the parent and track value changes in the child.
- Call a method (exposed with <aura:method>) in the child component

Check out the [FundInfoPopup](force-app/main/default/aura/FundInfoPopup) component for an example of using <aura:method>:

- The showPopup method provides an API to show a popup for a specific fund at specific x and y coordinates on the screen. showPopup is called by the FundTileList component (in the onMouseMove controller function).
    ```
    <aura:method name="showPopup" action="{!c.showPopup}">
        <aura:attribute name="fund" type="Fund__c"/>
        <aura:attribute name="x" type="Decimal"/>
        <aura:attribute name="y" type="Decimal"/>
    </aura:method>
    ```
- The **hidePopup** method provides an API to hide the popup.

### Using a third-party JavaScript library
The MutualFundExplorer uses the noUiSlider library to display a double slider. NoUiSlider is lightweight and doesn’t have dependencies (in particular, no jQuery dependency). Check out the [PercentReturnRange](force-app/main/default/aura/PercentReturnRange) component to see how it’s used.

![Double slider](docs/double_slider.png)

### Using bound vs unbound expressions
In the Mutual Fund Explorer sample application, components created inside <aura:iteration> use unbound expressions to avoid the proliferation of event listeners. Check out [FundTileList](force-app/main/default/aura/FundTileList) and [FundTile](force-app/main/default/aura/FundTile) for an example.
```
<c:FundTile fund="{#fund}" index="{#index}"/>
```

### Building admin-friendly components
When possible, make your components configurable using **design attributes**. Design attributes are exposed in App Builder and make your components more reusable by enabling admins to configure them for specific situations. For example, in the Mutual Fund Explorer page, the PercentReturnRange](force-app/main/default/aura/PercentReturnRange) component is used three times, configured differently each time to filter the list using different criteria: the year-to-date return, the one-year return, and the five-year return of the fund.

![Design attributes](docs/design_attributes.png)

## Additional resources

Blog post: [Mutual Fund Explorer: A New Lightning Components Sample Application](https://developer.salesforce.com/blogs/developer-relations/2017/04/mutual-fund-explorer-new-lightning-components-sample-application.html)
