import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'heroui-native/tabs';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const insets = useSafeAreaInsets();
    const activeRouteName = state.routes[state.index].name;

    return (
        <View style={{ bottom: insets.bottom + 10, left: 16, right: 16 }} className="absolute bg-white dark:bg-zinc-900 rounded-3xl shadow-lg border border-gray-100 dark:border-zinc-800">
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
                className="w-full bg-transparent"
                variant="primary"
            >
                <Tabs.List className="w-full bg-transparent p-0">
                    <Tabs.Indicator />
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;

                        return (
                            <Tabs.Trigger key={route.key} value={route.name} className="flex-1">
                                <View className="items-center justify-center gap-1 py-1">
                                    {options.tabBarIcon?.({
                                        focused: isFocused,
                                        color: isFocused ? 'currentColor' : '#a1a1aa', // Use style color or generic gray
                                        size: 24,
                                    })}
                                    <Tabs.Label className="text-xs">{label as string}</Tabs.Label>
                                </View>
                            </Tabs.Trigger>
                        );
                    })}
                </Tabs.List>
            </Tabs>
        </View>
    );
}
