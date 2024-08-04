/** @format */

import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

function Credit() {
	return (
		<View style={styles.container}>
			<View style={styles.firstPart}>
				<View style={styles.UserInfo}>
					<View style={{ display: "flex", justifyContent: "center" }}>
						<MaterialCommunityIcons name="menu" size={38} color="#4c645c" />
					</View>
				</View>
				<View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
					<View style={styles.notification}>
						<Fontisto name="bell" size={20} color="black" />
					</View>
					<Image
						src="https://imgsrv2.voi.id/WjEqMKzrXoQQvMyNmpfJrb69U5WO2jgd1eqrHg-lOyA/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNDMxMTEvMjAyMzEyMjkxMzI1LW1haW4uY3JvcHBlZF8xNzAzODM0OTI5LmpwZWc.jpg"
						style={styles.avatar}
					/>
				</View>
			</View>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					paddingBottom: 20,
				}}>
				<View style={styles.secondPart}>
					<Text style={{ fontSize: 20, fontWeight: "300", color: "#8388b1" }}>
						Your Card information
					</Text>
					<Text style={{ fontSize: 55, fontWeight: "500", color: "#121e02" }}>
						All Credit Cards <Text style={{ color: "#8388b1" }}>(2)</Text>
					</Text>
				</View>
				<ToggleSwitch />
			</View>
			<View style={styles.cardPlace}>
				<View style={styles.partOne}>
					<Text style={{ color: "white", fontSize: 25, fontWeight: "500" }}>
						**** 5482
					</Text>
					<Image source={require("../../assets/logo1.png")} />
				</View>
				<View style={styles.partTwo}>
					<View style={styles.partThree}>
						<Text style={{ color: "white", fontSize: 25, fontWeight: "500" }}>
							**** 5482
						</Text>
						<Image source={require("../../assets/logo2.png")} />
					</View>
					<View style={styles.partThree}>
						<View>
							<Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
								Card owner
							</Text>
							<Text style={{ color: "white", fontSize: 22, fontWeight: "700" }}>
								Jordan Smith
							</Text>
						</View>
						<Text style={{ fontSize: 18, color: "white" }}>04/24</Text>
					</View>
				</View>
			</View>
			<View style={styles.secondPart}>
				<Text style={{ fontSize: 20, fontWeight: "300", color: "#8388b1" }}>
					Latest
				</Text>
				<Text style={{ fontSize: 40, fontWeight: "400", color: "#121e02" }}>
					Transactions
				</Text>
			</View>
			<ScrollView>
				<View style={styles.cards}>
					<View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
						<View style={styles.cardIcon}>
							<Image
								src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg"
								style={styles.cardIcon}
							/>
						</View>
						<View style={{ paddingTop: 9 }}>
							<Text>Uber</Text>
							<Text style={{ fontSize: 13, color: "#5d6160" }}>
								Today,17:10
							</Text>
						</View>
					</View>
					<View style={{ paddingRight: 12 }}>
						<Text>-$17</Text>
					</View>
				</View>
				<View style={styles.cards}>
					<View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
						<View style={styles.cardIcon}>
							<Image
								src="https://www.1min30.com/wp-content/uploads/2018/02/Symbole-Lidl.jpg"
								style={styles.cardIcon}
							/>
						</View>
						<View style={{ paddingTop: 9 }}>
							<Text>Lidl</Text>
							<Text style={{ fontSize: 13, color: "#5d6160" }}>
								Today,17:10
							</Text>
						</View>
					</View>
					<View style={{ paddingRight: 12 }}>
						<Text>-$12</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

export default Credit;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#b6bced",
		paddingVertical: 82,
		paddingHorizontal: 20,
	},
	firstPart: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 10,
	},
	UserInfo: {
		width: "70%",
	},
	avatar: {
		width: 50,
		height: 50,
		padding: 8,
		borderRadius: 100,
	},
	notification: {
		width: 50,
		height: 50,
		padding: 8,
		borderRadius: 100,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#9fa5d9",
	},
	secondPart: {
		width: "60%",
		paddingBottom: 13,
	},
	cardPlace: {
		width: "100%",
		height: 310,
		backgroundColor: "#8a92d1",
		borderRadius: 25,
		marginBottom: 20,
	},
	partOne: {
		width: "100%",
		height: "30%",
		padding: 19,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	partTwo: {
		width: "100%",
		height: "70%",
		backgroundColor: "black",
		borderRadius: 25,
	},
	partThree: {
		padding: 19,
		paddingBottom: 45,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	cards: {
		width: "100%",
		height: 90,
		backgroundColor: "#d4d9ff",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: 20,
		padding: 9,
		marginBottom: 10,
	},
	cardIcon: {
		width: 60,
		height: 60,
		borderRadius: 20,
	},
});
