import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.warframetools.taskchecklist',
  appName: 'Warframe Tasks',
  webDir: 'pages',
  server: {
    androidScheme: 'https',
    // Allow navigation to external URLs
    allowNavigation: ['*']
  },
  android: {
    // Enable web content debugging for testing
    webContentsDebuggingEnabled: true
  }
};

export default config;
