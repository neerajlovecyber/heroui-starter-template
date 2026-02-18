import { useEffect, useState } from 'react';
import '../global.css';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { HeroUINativeProvider } from 'heroui-native/provider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        console.log('Checking onboarding status...');
        const hasSeenOnboarding = await AsyncStorage.getItem('hasSeenOnboarding');
        console.log('hasSeenOnboarding:', hasSeenOnboarding);
        if (hasSeenOnboarding !== 'true') {
          console.log('Redirecting to /onboarding');
          router.replace('/onboarding');
        } else {
          console.log('Onboarding seen, staying on main flow');
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
      } finally {
        console.log('Setting isReady to true');
        setIsReady(true);
      }
    };

    checkOnboarding();
  }, []);

  // if (!isReady) {
  //   return <View style={{flex:1, backgroundColor:'red'}} />; // Debugging color
  // }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
