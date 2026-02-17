import { Button } from 'heroui-native/button';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Button onPress={() => console.log('Pressed!')}>Get Started</Button>
    </View>
  );
}
