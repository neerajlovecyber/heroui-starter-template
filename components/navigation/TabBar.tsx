import { useColorScheme } from '@/hooks/use-color-scheme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'heroui-native/tabs';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const insets = useSafeAreaInsets();
    const activeRouteName = state.routes[state.index].name;
    const colorScheme = useColorScheme();

    return (
        <View style={{ bottom: insets.bottom + 10, left: 24, right: 24 }} className="absolute items-center justify-center">
            <Tabs
                value={activeRouteName}
                onValueChange={(value) => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: state.routes.find((r) => r.name === value)?.key,
                        canPreventDefault: true,
                    });

                    if (!event.defaultPrevented) {
                        navigation.navigate(value);
                    }
                }}
                className="bg-white dark:bg-zinc-900 rounded-full shadow-lg border border-gray-100 dark:border-zinc-800 p-1 min-w-[200px]"
                variant="primary"
            >
                <Tabs.List className="flex-row items-center justify-between bg-transparent p-0 w-full h-14">
                    <Tabs.Indicator className="bg-black dark:bg-white rounded-full translate-y-[-50%]" />
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const isFocused = state.index === index;

                        return (
                            <Tabs.Trigger key={route.key} value={route.name} className="flex-1 h-full items-center justify-center rounded-full">
                                <View className="items-center justify-center w-12 h-12">
                                    {options.tabBarIcon?.({
                                        focused: isFocused,
                                        color: isFocused ? (colorScheme === 'dark' ? 'black' : 'white') : (colorScheme === 'dark' ? '#71717a' : '#a1a1aa'), // Inverted text color for active state
                                        size: 24,
                                    })}
                                </View>
                            </Tabs.Trigger>
                        );
                    })}
                </Tabs.List>
            </Tabs>
        </View>
    );
}
