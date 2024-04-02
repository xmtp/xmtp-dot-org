---
sidebar_label: React Native
sidebar_position: 22
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import pushnotifsettings from '/docs/concepts/img/push-notif-settings.png';
import pushnotifsdecrypted from '/docs/concepts/img/push-notifs-decrypted.jpg';
import badgingorb from '/docs/concepts/img/badging-orb.jpg';
import unreadbadge from '/docs/concepts/img/unread-badge.png';

# Notifications in React Native

You can use a Firebase Cloud Messaging server and an example push notification server to enable the `xmtp-react-native` example app to send push notifications.

Perform this setup to understand how you might want to enable push notifications for your own app built with the `xmtp-react-native` SDK.

### Set up a Firebase Cloud Messaging server

For this tutorial, we'll use [Firebase Cloud Messaging](https://console.firebase.google.com/) (FCM) as a convenient way to set up a messaging server.

1. Create an FCM project.

2. Add the example app to the FCM project. This generates a `google-services.json` file that you need in subsequent steps.

3. Add the `google-services.json` file to the example app's project as described in the FCM project creation process.

4. Generate FCM credentials, which you need to run the example notification server. To do this, from the FCM dashboard, click the gear icon next to **Project Overview** and select **Project settings**. Select **Service accounts**. Select **Go** and click **Generate new private key**.

### Run an example notification server

Now that you have an FCM server set up, take a look at the [export-kotlin-proto-code](https://github.com/xmtp/example-notification-server-go/tree/np/export-kotlin-proto-code) branch in the `example-notifications-server-go` repo.

This example branch can serve as the basis for what you might want to provide for your own notification server. The branch also demonstrates how to generate the proto code if you decide to perform these tasks for your own app. This proto code from the example notification server has already been generated in the `xmtp-android` example app.

**To run a notification server based on the example branch:**

1. Clone the [example-notification-server-go](https://github.com/xmtp/example-notification-server-go) repo.

2. Complete the steps in [Local Setup](https://github.com/xmtp/example-notification-server-go/blob/np/export-kotlin-proto-code/README.md#local-setup).

3. Get the FCM project ID and FCM credentials you created earlier and run:

   ```bash
     YOURFCMJSON=`cat YOURFIREBASEADMINFROMSTEP4.json`
   ```

   ```bash
   dev/run \
   --xmtp-listener-tls \
   --xmtp-listener \
   --api \
   -x "production.xmtp.network:5556" \
   -d "postgres://postgres:xmtp@localhost:25432/postgres?sslmode=disable" \
   --fcm-enabled \
   --fcm-credentials-json=$YOURFCMJSON \
   --fcm-project-id="YOURFCMPROJECTID"
   ```

4. You should now be able to see push notifications coming across the local network.

### Update the Android example app to send push notifications

1. Add your `google-services.json` file to the `example/android/app` folder if you haven't already done it as a part of the FCM project creation process.

2. Uncomment `apply plugin: 'com.google.gms.google-services'` in the example app's `build.gradle` file.

3. Uncomment `classpath('com.google.gms:google-services:4.3.15')` in the top level of the example app's `build.gradle` file.

4. Sync the gradle project.

5. Replace `YOUR_SERVER_ADDRESS` in the `PullController.ts` file. If you're using the example notification server, it should be something like `YOURIPADDRESS:8080` since the Android emulator takes over localhost.

6. Change the example app's environment to `production` in both places in `AuthView.tsx`.

7. Replace `YOUR_FIREBASE_SENDER_ID` in the `PullController.ts` with your sender ID from Firebase.

### Update the iOS example app to send push notifications

Coming soon.
