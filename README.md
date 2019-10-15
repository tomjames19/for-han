# Demo site for Han

This is a demo site that when configured with Amplify will allow any user to upload a file to an s3 bucket.


**Security: ANYONE CAN UPLOAD - there are no permission checks on who can upload a file**

## Amplify setup

### Prequisites
1. AWS Account
2. Amplify CLI installed
3. AWS Profile setup in ./aws/config

### `amplify init`

Will have you name the project and set the environment name (prod, dev, etc.). <br />
It will also have you select a profile which Amplify will use to build the project. <br />
If you do not select a profile it will take inputs for programatic AWS credentials.

### `amplify add storage`

Select storage for images, files, and audio. (S3) <br />
A message will respond saying you cannot add storage without first adding authentication first <br />
Select 'Y' to adding authentication and select defaults for all auth categories <br />
Amplify will ask who you want to be able to access the s3 bucket, select authenticated users and guests <br />
This is what allows anyone to use the site. 
In permissions give both authenticated users and guests permission to create/update. **DO NOT GIVE ANY OTHER PERMISSIONS** <br />

### `amplify add hosting`

Select the option and includes cloudfront. Select the default for any additional requests.

### `amplify push`

Pushes local resources to the cloud

### `amplify publish`

Within 5-10 minutes a URL will be display where the project can be found and used.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

