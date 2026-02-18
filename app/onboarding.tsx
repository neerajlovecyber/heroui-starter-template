import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlashList } from '@shopify/flash-list';
import { Stack, useRouter } from 'expo-router'; // Correct import for Stack
import { Button } from 'heroui-native/button';
import React, { useRef, useState } from 'react';
import { Dimensions, Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const { width } = Dimensions.get('window');

const SLIDES = [
    {
        id: '1',
        title: 'Welcome to HeroUI',
        description: 'The ultimate starter template for building beautiful React Native apps.',
        image: 'https://cdn-icons-png.flaticon.com/512/3063/3063823.png', // Placeholder icon
    },
    {
        id: '2',
        title: 'Super Fast',
        description: 'Powered by FlashList and Expo Router for maximum performance.',
        image: 'https://cdn-icons-png.flaticon.com/512/3665/3665922.png',
    },
    {
        id: '3',
        title: 'Ready to Go',
        description: 'Just clone and start coding. Dark mode included!',
        image: 'https://cdn-icons-png.flaticon.com/512/1006/1006555.png',
    },
];

export default function OnboardingScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const flatListRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const completeOnboarding = async () => {
        try {
            await AsyncStorage.setItem('hasSeenOnboarding', 'true');
            router.replace('/(tabs)');
        } catch (error) {
            console.error('Error saving onboarding status:', error);
            router.replace('/(tabs)');
        }
    };

    const handleNext = () => {
        if (currentIndex < SLIDES.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
            setCurrentIndex(currentIndex + 1);
        } else {
            completeOnboarding();
        }
    };

    const handleSkip = () => {
        completeOnboarding();
    };

    return (
        <ThemedView style={{ flex: 1 }}>
            <Stack.Screen options={{ headerShown: false }} />

            <FlashList
                ref={flatListRef}
                style={{ flex: 1 }}
                data={SLIDES}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                estimatedItemSize={width}
                keyExtractor={(item) => item.id}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
                renderItem={({ item }) => (
                    <View style={{ width, padding: 32, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 250, height: 250, marginBottom: 40 }}
                            resizeMode="contain"
                        />
                        <ThemedText type="title" className="text-center mb-4 text-3xl">{item.title}</ThemedText>
                        <ThemedText className="text-center text-gray-500 text-lg leading-6 dark:text-gray-400">
                            {item.description}
                        </ThemedText>
                    </View>
                )}
            />

            {/* Footer Controls */}
            <View
                style={{ paddingBottom: insets.bottom + 20, paddingHorizontal: 32 }}
                className="flex-row items-center justify-between w-full"
            >
                <Button variant="ghost" onPress={handleSkip} className="px-0">
                    <Button.Label className="text-gray-500 dark:text-gray-400">Skip</Button.Label>
                </Button>

                {/* Pagination Dots */}
                <View className="flex-row gap-2">
                    {SLIDES.map((_, index) => (
                        <View
                            key={index}
                            className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300 dark:bg-zinc-700'}`}
                        />
                    ))}
                </View>

                <Button onPress={handleNext} className="bg-blue-500 dark:bg-blue-600 rounded-full px-6">
                    <Button.Label className="text-white font-bold">
                        {currentIndex === SLIDES.length - 1 ? 'Start' : 'Next'}
                    </Button.Label>
                </Button>
            </View>
        </ThemedView>
    );
}
