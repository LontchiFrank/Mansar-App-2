/** @format */

import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Home from "./Screens/Home/Home";
import Credit from "./Screens/Credit/Credit";
import Analytics from "./Screens/Analytics/Analytics";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions: any = {
	tabBarShowLbel: false,
	headerShown: false,
	tabBarStyle: {
		position: "absolute",
		botton: 0,
		right: 0,
		left: 0,
		elevation: 0,
		height: 60,
		backgroundColor: "#fff",
		paddingVertical: 17,
	},
	tabBarShowLabel: false,
};

type TabBarIconProps = {
	focused: boolean;
	color: string;
	size: number;
};

function MainTabs() {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<Ionicons
								name="home-outline"
								size={20}
								color={focused ? "#8db4a6" : "#000"}
							/>
							<Text
								style={{ fontSize: 12, color: focused ? "black" : "black" }}>
								Home
							</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Learn"
				component={Credit}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								top: -20,
								width: 60,
								height: 60,
								borderRadius: 30,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: "#8db4a6",
							}}>
							<AntDesign name="book" size={25} color="#fff" />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Category"
				component={Analytics}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<MaterialIcons
								name="category"
								size={20}
								color={focused ? "#8db4a6" : "black"}
							/>
							<Text
								style={{ fontSize: 12, color: focused ? "black" : "black" }}>
								Analytics
							</Text>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Main"
					component={MainTabs}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
