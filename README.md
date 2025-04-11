```markdown
# Team Builder v2

## Overview
The **Team Builder v2** application is a web-based tool designed for creating, managing, and optimizing character teams based on **Marvel Strike Force (MSF)** characters. Users can select characters, view their attributes, and build teams with features like **character synergies** and **advanced filtering options**.

This version of the app is built using **Angular 14+** and is hosted on **Firebase**. It integrates **character data** fetched through **web scraping**, and allows saving and retrieving team configurations from **Firebase Firestore**.

## Features
- **Character Selection & Team Building**: Users can add/remove characters from a staging area to build teams.
- **Character Synergy Suggestions**: The app suggests complementary characters based on attributes such as abilities and tags.
- **Search & Filtering**: Advanced search and filter by character attributes, including clickable tags (e.g., "taunt") for dynamic filtering.
- **Save Teams to Firestore**: User-created teams can be saved for future sessions.
- **Mobile-Friendly UI**: Optimized for smaller screens with collapsible sections and a responsive layout.

## Prerequisites
Ensure you have the following tools installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Angular CLI** (v13 or higher)
- **Firebase CLI** (v9 or higher)
- **Python** (for scraping data)

## Setting Up the Project

### 1. Clone the Repository
Start by cloning the repository:

```bash
git clone https://github.com/your-repository/team-builder-v2.git
cd team-builder-v2
```

### 2. Install Dependencies
Install the necessary dependencies:

```bash
npm install
```

### 3. Firebase Setup
To configure Firebase for the application:

- Create a **Firebase Project** in the Firebase Console.
- Enable **Firestore** and **Firebase Hosting**.
- Download the Firebase configuration file for your project and update the environment files:

In `src/environments/environment.ts` and `src/environments/environment.prod.ts`, update with your Firebase project’s config:

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
    measurementId: 'YOUR_MEASUREMENT_ID',
  },
};
```

### 4. Install Angular Fire & Angular Material
Add Angular Fire and Angular Material to the project:

```bash
ng add @angular/fire
ng add @angular/material
```

Choose a Material theme during the installation.

### 5. Modify `angular.json` for Firebase Hosting
Ensure your `angular.json` has the correct Firebase hosting configuration:

```json
"architect": {
  "build": {
    "options": {
      "outputPath": "dist/team-builder-v2",
      "firebase": "firebase.json"
    }
  }
}
```

### 6. Initialize Firebase Hosting
Run the following command to set up Firebase Hosting:

```bash
firebase init
```

Select **Hosting** and configure it with the default Firebase project. Set the public directory to `dist/team-builder-v2`.

### 7. Build the Application
Build the app for production:

```bash
ng build --prod
```

### 8. Deploy to Firebase Hosting
Deploy the app to Firebase Hosting:

```bash
firebase deploy
```

## Data Pipeline (Python-based Scraper)

### 9. Set up the Web Scraper
The `iso_scrapper.py` script scrapes character data from a Marvel site and stores it as JSON in Firebase.

- Install the required Python dependencies:

```bash
pip install selenium
```

- Ensure you have **Chromedriver** installed for Selenium.

- Run the scraper:

```bash
python data/iso_scrapper.py --max-pages 2
```

This will scrape the data and save it as `iso_data.json`.

### 10. Upload Scraped Data to Firestore
Upload the scraped data (`iso_data.json`) to Firebase Firestore manually or automate this using a Firebase SDK script.

## Connecting Data to Angular Application

### 11. Create Character Service
Generate a service to fetch data from Firestore:

```bash
ng generate service services/character
```

**Updated `character.service.ts`**:

```typescript
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private firestore: AngularFirestore) {}

  // Fetch characters from Firestore
  getCharacters(): Observable<any> {
    return this.firestore.collection('characters').valueChanges();
  }
}
```

Use this service in your components to load and display character data.

## Development Server

To start the local development server:

```bash
ng serve
```

Open your browser and go to `http://localhost:4200/`. The app will automatically reload when you modify any of the source files.

## Code Scaffolding

Generate a new component:

```bash
ng generate component component-name
```

For more available schematics, run:

```bash
ng generate --help
```

## Building

To build the project:

```bash
ng build
```

This will create the production-ready files in the `dist/` directory.

## Running Unit Tests

Execute unit tests with Karma:

```bash
ng test
```

## Running End-to-End Tests

For end-to-end testing, run:

```bash
ng e2e
```

## Troubleshooting and Modifications

- **Firebase Configuration Issues**: Ensure your Firebase config keys in `environment.ts` are correct.
- **Data Not Displaying**: Verify that your Firestore data exists and is structured correctly.
- **Service Fetching Issues**: Confirm that the Angular service is correctly fetching data from Firestore and binding it to the UI components.

## Additional Resources

For more information on using the Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
```

This README file is formatted in markdown and includes detailed instructions on setting up the project, building and deploying it to Firebase, and troubleshooting common issues. It also includes the necessary Angular CLI commands and relevant code snippets for integrating the character service and web scraping functionality.