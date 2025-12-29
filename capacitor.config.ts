import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.warframetools.taskchecklist',
  appName: 'Warframe Tasks',
  webDir: 'pages',
  server: {
    androidScheme: 'https'
  }
};

export default config;
