# Stowe Health Website - Setup Guide

This guide will help you set up your website with Firebase so you can easily manage all content through the admin dashboard.

---

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"** (or "Add project")
3. Enter project name: `stowe-health` (or any name you prefer)
4. Click **Continue**
5. Disable Google Analytics (optional) and click **Create project**
6. Wait for the project to be created, then click **Continue**

---

## Step 2: Enable Authentication

1. In your Firebase project, click **"Authentication"** in the left sidebar
2. Click **"Get started"**
3. Click on **"Email/Password"** under Sign-in providers
4. Toggle **"Enable"** to ON
5. Click **Save**

### Create Your Admin Account:
1. Go to **Authentication > Users** tab
2. Click **"Add user"**
3. Enter your email and a strong password
4. Click **"Add user"**

**Save these credentials - you'll use them to log into the admin dashboard!**

---

## Step 3: Set Up Firestore Database

1. In the left sidebar, click **"Firestore Database"**
2. Click **"Create database"**
3. Select **"Start in production mode"**
4. Choose a location close to your users (e.g., `us-central` for North America)
5. Click **Enable**

### Set Up Security Rules:
1. Go to **Firestore Database > Rules** tab
2. Replace the existing rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Anyone can read content
    match /content/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **Publish**

---

## Step 4: Set Up Storage (for images/videos)

1. In the left sidebar, click **"Storage"**
2. Click **"Get started"**
3. Click **"Start in production mode"** then **Next**
4. Select the same location as your Firestore
5. Click **Done**

### Set Up Storage Rules:
1. Go to **Storage > Rules** tab
2. Replace the existing rules with:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **Publish**

---

## Step 5: Get Your Firebase Configuration

1. Click the **gear icon** (Settings) next to "Project Overview"
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **web icon** `</>`
5. Register your app with nickname: `stowe-website`
6. Click **"Register app"**
7. You'll see a code block with your configuration. Copy these values:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## Step 6: Update Your Website Files

1. Open the file `firebase-config.js` in a text editor
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

3. Save the file

---

## Step 7: Host Your Website

You can host your website on Firebase Hosting (free) or any other hosting service.

### Option A: Firebase Hosting (Recommended)

1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Open Terminal/Command Prompt
3. Install Firebase CLI: `npm install -g firebase-tools`
4. Navigate to your website folder: `cd path/to/stowe`
5. Login to Firebase: `firebase login`
6. Initialize hosting: `firebase init hosting`
   - Select your project
   - Set public directory to `.` (current folder)
   - Configure as single-page app: **No**
   - Don't overwrite index.html
7. Deploy: `firebase deploy`
8. Your site will be live at: `https://your-project.web.app`

### Option B: Other Hosting Services

Upload all files to any web hosting service:
- Netlify (free): [netlify.com](https://netlify.com)
- Vercel (free): [vercel.com](https://vercel.com)
- GitHub Pages (free)
- Any traditional web host

---

## Using the Admin Dashboard

1. Open `admin.html` in your browser (or go to `https://your-site.com/admin.html`)
2. Log in with the email and password you created in Step 2
3. Edit any content using the form fields
4. Click **"Save Changes"** when done
5. Your changes will appear on the live website immediately!

### What You Can Edit:

- **Brand & Colors**: Site name, tagline, color scheme
- **Hero Section**: Main headline, subheadlines, background video
- **Overview**: Vision statement and description
- **Target Audience**: The four audience cards
- **Features**: Feature titles and descriptions
- **Side Section**: Content and image
- **Call to Action**: Signup section text
- **Footer**: Footer text, copyright year, social links

---

## File Structure

```
stowe/
├── stowe-converted.html   # Main website (public)
├── admin.html             # Admin dashboard (for content management)
├── firebase-config.js     # Firebase configuration (update with your credentials)
├── index.html             # Original hero file (backup)
├── myhealthprac.html      # Reference file (can be deleted)
└── SETUP-GUIDE.md         # This guide
```

---

## Troubleshooting

### "Permission denied" error
- Make sure you're logged in to the admin dashboard
- Check that Firestore rules are set correctly (Step 3)

### Content not updating on website
- Make sure `firebase-config.js` has the correct credentials
- Check browser console for errors (F12 > Console)
- Clear browser cache and refresh

### Can't log in to admin
- Double-check your email and password
- Make sure Authentication is enabled in Firebase
- Verify your user account exists in Firebase > Authentication > Users

### Images/videos not uploading
- Check Storage rules are set correctly (Step 4)
- Make sure file is under the size limit (images: 5MB, videos: 50MB)

---

## Support

For technical issues, please contact your developer.

---

*Last updated: December 2024*
