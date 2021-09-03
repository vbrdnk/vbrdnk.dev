import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { initializePerformance } from 'firebase/performance';

const app = initializeApp({
  apiKey: 'AIzaSyA3OkuE3T5i3bSVbnkfnxYZht8fjMrQgMg',
  authDomain: 'dev-blog-e09f2.firebaseapp.com',
  projectId: 'dev-blog-e09f2',
  storageBucket: 'dev-blog-e09f2.appspot.com',
  messagingSenderId: '218253540194',
  appId: '1:218253540194:web:e487082cbee1bb8f900a3b',
  measurementId: 'G-0WLJQ5PSV5',
});

getAnalytics(app);
initializePerformance(app);

export default app;
