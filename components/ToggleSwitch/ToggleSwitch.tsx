/** @format */

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// You can use another icon library if preferred

const ToggleSwitch = () => {
	return (
		<View style={styles.content}>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Add</Text>
				<View style={styles.addHolder}>
					<MaterialIcons
						name="add"
						size={24}
						color="white"
						style={styles.buttonIcon}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		display: "flex",
		justifyContent: "flex-end",
		marginBottom: 25,

		// alignItems: "flex-end",
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingVertical: 3,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: "#9fa5d9",
		padding: 10,
		gap: 10,
		backgroundColor: "#b6bced", // Adjust background color as needed
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "black",
		marginRight: 8,
	},
	buttonIcon: {
		// marginLeft: 8,
	},
	addHolder: {
		width: 50,
		height: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#8489b2",
		borderRadius: 100,
	},
});

export default ToggleSwitch;
