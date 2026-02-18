
import { Avatar } from 'heroui-native/avatar';
import { Button } from 'heroui-native/button';
import { Card } from 'heroui-native/card';
import { PressableFeedback } from 'heroui-native/pressable-feedback';
import { Separator } from 'heroui-native/separator';
import { Switch } from 'heroui-native/switch';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Uniwind, useUniwind } from 'uniwind';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function SettingsScreen() {
    const insets = useSafeAreaInsets();
    const { theme } = useUniwind();
    const [isDarkMode, setIsDarkMode] = React.useState(theme === 'dark');
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

    const toggleTheme = (isSelected: boolean) => {
        const newTheme = isSelected ? 'dark' : 'light';
        setIsDarkMode(isSelected);
        Uniwind.setTheme(newTheme);
    };

    const iconColor = theme === 'dark' ? '#A1A1AA' : '#52525B'; // Zinc-400 : Zinc-600

    return (
        <ThemedView style={{ flex: 1, paddingTop: insets.top }}>
            <View className="px-5 py-4">
                <ThemedText type="title" className="text-3xl font-bold">
                    Settings
                </ThemedText>
            </View>

            <ScrollView contentContainerClassName="px-4 gap-6 pb-20">
                {/* Profile Section */}
                <PressableFeedback onPress={() => { }}>
                    <Card className="flex-row items-center gap-4 bg-gray-100/50 dark:bg-zinc-800/50 p-4 rounded-2xl overflow-hidden border-0">
                        <PressableFeedback.Ripple />
                        <Avatar alt="Jane Doe" className="w-16 h-16 border-2 border-white dark:border-zinc-700">
                            <Avatar.Image
                                source={{ uri: "https://i.pravatar.cc/150?u=a042581f4e29026024d" }}
                            />
                            <Avatar.Fallback>JD</Avatar.Fallback>
                        </Avatar>
                        <View className="flex-1">
                            <ThemedText type="subtitle" className="text-xl">Jane Doe</ThemedText>
                            <ThemedText className="text-gray-500 dark:text-gray-400">Product Designer</ThemedText>
                        </View>
                        <View className="bg-gray-200 dark:bg-zinc-700 p-2 rounded-full">
                            <IconSymbol name="chevron.right" size={20} color={iconColor} />
                        </View>
                    </Card>
                </PressableFeedback>

                {/* Preferences */}
                <View className="gap-3">
                    <ThemedText className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase ml-2">Preferences</ThemedText>
                    <Card className="bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 p-0">
                        <View className="flex-row items-center justify-between p-4">
                            <View className="flex-row items-center gap-3">
                                <View className="w-8 h-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                    <IconSymbol name="moon.fill" size={18} color="#3B82F6" />
                                </View>
                                <ThemedText className="font-medium text-base">Dark Mode</ThemedText>
                            </View>
                            <Switch isSelected={isDarkMode} onSelectedChange={toggleTheme} />
                        </View>
                        <Separator className="opacity-50" />
                        <View className="flex-row items-center justify-between p-4">
                            <View className="flex-row items-center gap-3">
                                <View className="w-8 h-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                                    <IconSymbol name="bell.fill" size={18} color="#EF4444" />
                                </View>
                                <ThemedText className="font-medium text-base">Notifications</ThemedText>
                            </View>
                            <Switch isSelected={notificationsEnabled} onSelectedChange={setNotificationsEnabled} />
                        </View>
                    </Card>
                </View>

                {/* Account */}
                <View className="gap-3">
                    <ThemedText className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase ml-2">Account</ThemedText>
                    <Card className="bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 p-0">
                        <PressableFeedback onPress={() => { }}>
                            <View className="flex-row items-center justify-between p-4 overflow-hidden relative">
                                <PressableFeedback.Ripple />
                                <View className="flex-row items-center gap-3">
                                    <View className="w-8 h-8 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                                        <IconSymbol name="person.circle" size={18} color="#6366F1" />
                                    </View>
                                    <ThemedText className="font-medium text-base">Personal Information</ThemedText>
                                </View>
                                <IconSymbol name="chevron.right" size={20} color={iconColor} />
                            </View>
                        </PressableFeedback>
                        <Separator className="opacity-50" />
                        <PressableFeedback onPress={() => { }}>
                            <View className="flex-row items-center justify-between p-4 overflow-hidden relative">
                                <PressableFeedback.Ripple />
                                <View className="flex-row items-center gap-3">
                                    <View className="w-8 h-8 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                                        <IconSymbol name="lock.fill" size={18} color="#F97316" />
                                    </View>
                                    <ThemedText className="font-medium text-base">Security</ThemedText>
                                </View>
                                <IconSymbol name="chevron.right" size={20} color={iconColor} />
                            </View>
                        </PressableFeedback>
                    </Card>
                </View>

                {/* Support */}
                <View className="gap-3">
                    <ThemedText className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase ml-2">Support</ThemedText>
                    <Card className="bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 p-0">
                        <PressableFeedback onPress={() => { }}>
                            <View className="flex-row items-center justify-between p-4 overflow-hidden relative">
                                <PressableFeedback.Ripple />
                                <View className="flex-row items-center gap-3">
                                    <View className="w-8 h-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                                        <IconSymbol name="questionmark.circle" size={18} color="#22C55E" />
                                    </View>
                                    <ThemedText className="font-medium text-base">Help & Support</ThemedText>
                                </View>
                                <IconSymbol name="chevron.right" size={20} color={iconColor} />
                            </View>
                        </PressableFeedback>
                        <Separator className="opacity-50" />
                        <PressableFeedback onPress={() => { }}>
                            <View className="flex-row items-center justify-between p-4 overflow-hidden relative">
                                <PressableFeedback.Ripple />
                                <View className="flex-row items-center gap-3">
                                    <View className="w-8 h-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                                        <IconSymbol name="doc.text" size={18} color="#A855F7" />
                                    </View>
                                    <ThemedText className="font-medium text-base">Terms & Policies</ThemedText>
                                </View>
                                <IconSymbol name="chevron.right" size={20} color={iconColor} />
                            </View>
                        </PressableFeedback>
                        <Separator className="opacity-50" />
                        <PressableFeedback onPress={() => { }}>
                            <View className="flex-row items-center justify-between p-4 overflow-hidden relative">
                                <PressableFeedback.Ripple />
                                <View className="flex-row items-center gap-3">
                                    <View className="w-8 h-8 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                                        <IconSymbol name="info.circle" size={18} color="#14B8A6" />
                                    </View>
                                    <ThemedText className="font-medium text-base">About</ThemedText>
                                </View>
                                <IconSymbol name="chevron.right" size={20} color={iconColor} />
                            </View>
                        </PressableFeedback>
                    </Card>
                </View>

                <Button
                    className="w-full bg-red-500 dark:bg-red-600 rounded-2xl py-3.5 mt-6 shadow-sm active:opacity-90"
                    onPress={() => { }}
                >
                    <Button.Label className="text-white font-bold text-lg">Log Out</Button.Label>
                </Button>

                <View className="items-center py-4">
                    <ThemedText className="text-gray-400 text-xs">Version 1.0.0</ThemedText>
                </View>

            </ScrollView>
        </ThemedView>
    );
}
