## DreamInvest Sample App

DreamInvest is a sample financial services application. It features a mutual fund selector that illustrates standard coding practices and solutions to common problems when building applications with the Lightning Component Framework.

## Installation Instructions

1. Authenticate with your hub org (if not already done):
    ```
    sfdx force:auth:web:login -d -a myhuborg
    ```

1. Clone the dreaminvest repository:
    ```
    git clone https://github.com/trailheadapps/dreaminvest
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

1. Assign the dreaminvest permission set to the default user:
    ```
    sfdx force:user:permset:assign -n dreaminvest
    ```

1. Open the scratch org:
    ```
    sfdx force:org:open
    ```

1. In **Setup**, type **theme** in the quick find box. Click **Themes and Branding**, click the down arrow to the right of the **Lightning Lite** theme and select Activate.

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
    - For Which Sector field in your file specifies the Master/Detail relationship?, select **Sector Id (External ID)**.
    - Drag **funds.csv** from the data folder of this project to the upload area.
    - Click **Next**, **Next**, and **Start Import**.

1. In **App Launcher**, select the **DreamInvest** app

1. Click the **Fund Explorer** tab