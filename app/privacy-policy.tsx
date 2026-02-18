import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function PrivacyPolicyScreen() {
    const insets = useSafeAreaInsets();

    return (
        <ThemedView style={{ flex: 1 }}>
            <Stack.Screen options={{ title: 'Privacy Policy' }} />
            <ScrollView contentContainerClassName="p-6 pb-20 gap-4">
                <ThemedText type="title">Privacy Policy</ThemedText>
                <ThemedText>Last updated: February 18, 2026</ThemedText>

                <View className="gap-2">
                    <ThemedText type="subtitle">1. Introduction</ThemedText>
                    <ThemedText>
                        Welcome to our application. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our app
                        and tell you about your privacy rights and how the law protects you.
                    </ThemedText>
                </View>

                <View className="gap-2">
                    <ThemedText type="subtitle">2. Data We Collect</ThemedText>
                    <ThemedText>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        - Identity Data
                        - Contact Data
                        - Technical Data
                        - Usage Data
                    </ThemedText>
                </View>

                <View className="gap-2">
                    <ThemedText type="subtitle">3. How We Use Your Data</ThemedText>
                    <ThemedText>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        - Where we need to perform the contract we are about to enter into or have entered into with you.
                        - Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
                        - Where we need to comply with a legal or regulatory obligation.
                    </ThemedText>
                </View>

                <View className="gap-2">
                    <ThemedText type="subtitle">4. Contact Us</ThemedText>
                    <ThemedText>
                        If you have any questions about this privacy policy or our privacy practices, please contact us.
                    </ThemedText>
                </View>
            </ScrollView>
        </ThemedView>
    );
}
