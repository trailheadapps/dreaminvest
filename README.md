## DreamInvest Sample App

Read [this blog post](https://developer.salesforce.com/blogs/developer-relations/2017/04/mutual-fund-explorer-new-lightning-components-sample-application.html) to learn more about the application.

## Installation Instructions

1. Authenticate with your hub org (if not already done):
    ```
    sfdx force:auth:web:login -d -a myhuborg
    ```

1. Clone the dreaminvest repository:
    ```
    git clone https://github.com/ccoenraets/dreaminvest
    cd dreaminvest
    ```

1. Create a scratch org and provide it with an alias (nto):
    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a dreaminvest
    ```

1. Push the app to your scratch org:
    ```
    sfdx force:source:push
    ```

1. Assign the nto permission set to the default user:
    ```
    sfdx force:user:permset:assign -n dreaminvest
    ```

1. Open the scratch org:
    ```
    sfdx force:org:open
    ```

1. In **Setup**, type **theme** in the quick find box. Click **Themes and Branding**, and flip the toggle to hide background images in Lightning Experience.

1. Load sample data (Sectors):
    - In **Setup**, type **Data Import** in the Quick Find box and click **Data Import Wizard**.
    - Click **Launch Wizard**.
    - Click the **Custom objects** tab, click **Sectors**, and click **Add New Records**.
    - Drag **sectors.csv** from the data folder of this project to the upload area.
    - Click **Next**, **Next**, and **Start Import**.

1. Load sample data (Funds):
    - In **Setup**, type **Data Import** in the Quick Find box and click **Data Import Wizard**.
    - Click **Launch Wizard**.
    - Click the **Custom objects** tab, click **Funds**, and click **Add New Records**.
    - For Which Sector field in your file specifies the Master/Detail relationship?, select **External ID**.
    - Drag **funds.csv** from the data folder of this project to the upload area.
    - Click **Next**, **Next**, and **Start Import**.

1. In **App Launcher**, select the **DreamInvest** app

1. Click the **Fund Explorer** tab