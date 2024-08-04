/** @format */

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomSwitch = () => {
	const [selectedOption, setSelectedOption] = useState("Daily");

	const handleOptionPress = (option: any) => {
		setSelectedOption(option);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.option, selectedOption === "Daily" && styles.selected]}
				onPress={() => handleOptionPress("Daily")}>
				<Text style={styles.optionText}>Daily</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.option, selectedOption === "Weekly" && styles.selected]}
				onPress={() => handleOptionPress("Weekly")}>
				<Text style={styles.optionText}>Weekly</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "70%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#dafcff", // Adjust background color as needed
		borderRadius: 30,
		paddingVertical: 10,
		paddingHorizontal: 10,
		padding: 7,
	},
	option: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	selected: {
		backgroundColor: "#9dc8cc", // Adjust selected background color as needed
		borderRadius: 20,
		padding: 8,
	},
	optionText: {
		fontSize: 16,
		fontWeight: "light",
	},
});

export default CustomSwitch;
