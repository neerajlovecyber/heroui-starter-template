import { FlashList } from '@shopify/flash-list';
import { Card } from 'heroui-native/card';
import { PressableFeedback } from 'heroui-native/pressable-feedback';
import React from 'react';
import { Image, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

interface FeedItem {
    id: string;
    title: string;
    description: string;
    avatar: string;
    image: string;
}

const DATA: FeedItem[] = Array.from({ length: 20 }).map((_, i) => ({
    id: i.toString(),
    title: `Item ${i + 1}`,
    description: 'This is a description for the item. It demonstrates the FlashList performance.',
    avatar: `https://i.pravatar.cc/150?u=${i}`,
    image: `https://picsum.photos/seed/${i}/400/200`,
}));

export function FlashListFeed() {
    return (
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <FlashList
                data={DATA}
                renderItem={({ item }) => (
                    <PressableFeedback onPress={() => { }}>
                        <Card className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 p-0 mb-4 mx-4">
                            <View className="h-40 w-full bg-gray-200 dark:bg-zinc-800">
                                <Image
                                    source={{ uri: item.image }}
                                    className="w-full h-full"
                                    resizeMode="cover"
                                />
                            </View>
                            <View className="p-4 gap-2">
                                <View className="flex-row items-center gap-3">
                                    <Image
                                        source={{ uri: item.avatar }}
                                        className="w-8 h-8 rounded-full bg-gray-200"
                                    />
                                    <ThemedText className="font-bold text-lg">{item.title}</ThemedText>
                                </View>
                                <ThemedText className="text-gray-500 dark:text-gray-400">{item.description}</ThemedText>
                                <View className="flex-row gap-4 mt-2">
                                    <PressableFeedback>
                                        <ThemedText className="text-gray-400 text-sm">❤️ Like</ThemedText>
                                    </PressableFeedback>
                                    <PressableFeedback>
                                        <ThemedText className="text-gray-400 text-sm">💬 Comment</ThemedText>
                                    </PressableFeedback>
                                </View>
                            </View>
                            <PressableFeedback.Ripple />
                        </Card>
                    </PressableFeedback>
                )}
                estimatedItemSize={280}
                contentContainerStyle={{ paddingVertical: 16 }}
            />
        </View>
    );
}
