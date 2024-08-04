/** @format */

import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CustomToggle from "../../components/MasterCardIcon/MasterCardIcon";

function Analytics() {
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
					<Text style={{ fontSize: 20, fontWeight: "300", color: "#85abae" }}>
						Optimize performances
					</Text>
					<Text style={{ fontSize: 45, fontWeight: "500", color: "#121e02" }}>
						Analytics
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Text
						style={{
							color: "#85abae",
							fontSize: 29,
							paddingTop: 30,
							display: "flex",
							gap: 22,
						}}>
						Dec 22
					</Text>
					<View
						style={{
							display: "flex",
							justifyContent: "center",
							paddingTop: 23,
							paddingHorizontal: 20,
						}}>
						<FontAwesome6 name="chevron-down" size={20} color="black" />
					</View>
				</View>
			</View>
			<View
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					paddingBottom: 20,
				}}>
				<CustomToggle />
			</View>
			<View style={styles.secondPart}>
				<Text style={{ fontSize: 14, fontWeight: "300", color: "#8eb4b8" }}>
					Total Amount
				</Text>
				<Text style={{ fontSize: 30, fontWeight: "400", color: "#121e02" }}>
					21 023.45{" "}
					<Text style={{ fontSize: 30, fontWeight: "400", color: "#8eb4b8" }}>
						USD
					</Text>
				</Text>
			</View>
			<View
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "row",
					paddingHorizontal: 20,
				}}>
				<View
					style={{
						flexDirection: "row",
					}}>
					<View style={{ marginBottom: 20 }}>
						<View
							style={{
								flexDirection: "row",
								gap: 5,
								marginTop: 39,
								marginBottom: 10,
							}}>
							<View
								style={{
									height: 90,
									width: "14%",
									backgroundColor: "#9dc8cc",
									borderTopRightRadius: 30,
									borderTopLeftRadius: 30,
								}}></View>
							<View
								style={{
									height: 49,
									width: "14%",
									marginTop: 40,
									backgroundColor: "#6b8688",
									borderTopRightRadius: 30,
									borderTopLeftRadius: 30,
								}}></View>
						</View>
						<Text style={{ fontSize: 10 }}>1st Week</Text>
					</View>
					<View style={{ marginBottom: 20 }}>
						<View style={{ flexDirection: "row", gap: 5, marginBottom: 10 }}>
							<View
								style={{
									height: 90,
									width: "14%",
									marginTop: 40,
									backgroundColor: "#9dc8cc",
									borderTopRightRadius: 30,
									borderTopLeftRadius: 30,
								}}></View>
							<View
								style={{
									height: 130,
									width: "14%",
									backgroundColor: "#6b8688",
									borderTopRightRadius: 30,
									borderTopLeftRadius: 30,
								}}></View>
						</View>
						<Text style={{ fontSize: 10 }}>2nd Week</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						gap: 7,
					}}>
					<View style={{ marginBottom: 20 }}>
						<View style={{ flexDirection: "row", gap: 5, marginBottom: 10 }}>
							<View
								style={{
									height: 89,
									width: "14%",
									marginTop: 40,
									backgroundColor: "#9dc8cc",
									borderTopRightRadius: 30,
									borderTopLeftRadius: 30,
								}}></View>
							<View
								style={{
									height: 130,
									width: "14%",
									backgroundColor: "#6b8688",
									borderTopRightRadius: 30,
									borderTopLeftRadius: 30,
								}}></View>
						</View>
						<Text style={{ fontSize: 10 }}>3rd Week</Text>
					</View>
					<View style={{ marginBottom: 20 }}>
						<View
							style={{
								flexDirection: "row",
								gap: 5,
								marginTop: 39,
								marginBottom: 10,
							}}>
							<View
								style={{
									height: 90,
									width: "14%",
									backgroundColor: "#9dc8cc",
									borderTopRightRadius: 30,
									borderTopLeftRadius: 30,
								}}></View>
							<View
								style={{
									height: 49,
									width: "14%",
									marginTop: 40,
									backgroundColor: "#6b8688",
									borderTopRightRadius: 30,
									borderTopLeftRadius: 30,
								}}></View>
						</View>
						<Text style={{ fontSize: 10 }}>4th Week</Text>
					</View>
				</View>
			</View>
			<View style={{ gap: 7, flexDirection: "row", marginBottom: 20 }}>
				<View
					style={{
						width: "30%",
						paddingHorizontal: 15,
						borderWidth: 1,
						borderRadius: 20,
						paddingVertical: 10,
					}}>
					<Text> January 23</Text>
				</View>
				<View
					style={{
						width: "30%",
						paddingHorizontal: 15,
						borderWidth: 1,
						borderRadius: 20,
						paddingVertical: 10,
					}}>
					<Text> February 23</Text>
				</View>
				<View
					style={{
						width: "20%",
						paddingHorizontal: 15,
						borderWidth: 1,
						borderRadius: 20,
						paddingVertical: 10,
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Text> Now</Text>
				</View>
			</View>
			<ScrollView>
				<View style={styles.cards}>
					<View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
						<View style={styles.cardIcon}>
							<Image
								src="https://i.ytimg.com/vi/GV3HUDMQ-F8/hqdefault.jpg"
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

export default Analytics;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#c0ecf0",
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
		backgroundColor: "#acd6da",
	},
	secondPart: {
		width: "60%",
		paddingBottom: 30,
	},
	cards: {
		width: "100%",
		height: 90,
		backgroundColor: "#dafcff",
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
