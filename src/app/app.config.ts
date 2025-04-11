import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "team-builder---marvel", appId: "1:281264877007:web:7b2b7db4dfc55f1ddff6ba", databaseURL: "https://team-builder---marvel-default-rtdb.firebaseio.com", storageBucket: "team-builder---marvel.firebasestorage.app", apiKey: "AIzaSyAFpy3F_M0NTXUw7bly4iH6bw77dn3rDX8", authDomain: "team-builder---marvel.firebaseapp.com", messagingSenderId: "281264877007", measurementId: "G-D6XFCBR4KG" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
