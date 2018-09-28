## Installation

1.  Authenticate with your hub org (if not already done):

    ```zsh
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

1.  Open the scratch org:
    ```
    sfdx force:org:open -p /lightning/page/home
    ```
