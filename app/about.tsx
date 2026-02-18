import { Stack } from 'expo-router';
import { Linking, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Card } from 'heroui-native/card';
import { PressableFeedback } from 'heroui-native/pressable-feedback';

export default function AboutScreen() {
    const insets = useSafeAreaInsets();

    return (
        <ThemedView style={{ flex: 1 }}>
            <Stack.Screen options={{ title: 'About Us' }} />
            <ScrollView contentContainerClassName="p-6 pb-20 items-center justify-center min-h-[50%]">

                <View className="items-center gap-6 w-full max-w-md">
                    <View className="w-32 h-32 bg-gray-200 dark:bg-zinc-800 rounded-3xl items-center justify-center mb-4">
                        <ThemedText type="title" className="text-4xl">🚀</ThemedText>
                    </View>

                    <ThemedText type="title" className="text-center">HeroUI Starter</ThemedText>

                    <ThemedText className="text-center text-gray-500 dark:text-gray-400">
                        Version 1.0.0
                    </ThemedText>

                    <Card className="p-6 w-full bg-gray-50 dark:bg-zinc-900 border-0">
                        <ThemedText className="text-center leading-6">
                            This application is built with the HeroUI Native library, designed to provide a premium and consistent user experience across platforms.
                            We aim to deliver high-quality mobile interfaces with ease.
                        </ThemedText>
                    </Card>

                    <View className="w-full gap-4 mt-8 items-center">
                        <ThemedText type="subtitle" className="text-center">Contact Us</ThemedText>
                        <PressableFeedback onPress={() => Linking.openURL('mailto:theneerajsec@gmail.com')}>
                            <ThemedText className="text-center text-blue-500 underline">
                                theneerajsec@gmail.com
                            </ThemedText>
                        </PressableFeedback>

                        <ThemedText className="text-center text-gray-500 mt-4">
                            Built with ❤️ by the HeroUI Team
                        </ThemedText>
                    </View>
                </View>

            </ScrollView>
        </ThemedView>
    );
}
