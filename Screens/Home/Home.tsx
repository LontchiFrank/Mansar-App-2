/** @format */

import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import AntDesign1 from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { dataLink } from "../../data";

function Home() {
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
			<View style={styles.secondPart}>
				<Text style={{ fontSize: 20, fontWeight: "300", color: "#89b1a2" }}>
					Credit Card
				</Text>
				<Text style={{ fontSize: 48, fontWeight: "500", color: "#121e02" }}>
					Total Balance
				</Text>
			</View>
			<View style={styles.thirdPart}>
				<View style={styles.thirdPartContent}>
					<View
						style={{
							width: "30%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Image
							source={require("../../assets/logo.png")} // Adjust the path as needed
							style={styles.logo}
							resizeMode="contain"
						/>
					</View>
					<Text style={{ fontSize: 15, fontWeight: "500", color: "#000" }}>
						{" "}
						****5482
					</Text>
					<AntDesign name="down" size={24} color="black" />
				</View>
				<Text style={{ fontSize: 30, fontWeight: "400", color: "#121e02" }}>
					40 540.74 <Text style={{ color: "#8db4a6" }}>USD</Text>
				</Text>
			</View>
			<View style={styles.fourthPart}>
				<View style={{ display: "flex", flexDirection: "column" }}>
					<View style={styles.iconContent}>
						<Text>
							<Feather name="arrow-up-right" size={24} color="white" />
						</Text>
					</View>
					<Text style={{ textAlign: "center", color: "#5d6160" }}>Send</Text>
				</View>
				<View style={{ display: "flex", flexDirection: "column" }}>
					<View style={styles.iconContent}>
						<Text>
							<AntDesign1 name="arrowdown" size={24} color="white" />
						</Text>
					</View>
					<Text style={{ textAlign: "center", color: "#5d6160" }}>Recieve</Text>
				</View>
				<View style={{ display: "flex", flexDirection: "column" }}>
					<View style={styles.iconContent}>
						<Text>
							<Feather name="plus" size={24} color="white" />
						</Text>
					</View>
					<Text style={{ textAlign: "center", color: "#5d6160" }}>Add</Text>
				</View>
			</View>
			<View style={styles.secondPart}>
				<Text style={{ fontSize: 20, fontWeight: "300", color: "#89b1a2" }}>
					Last Resipients
				</Text>
				<Text style={{ fontSize: 48, fontWeight: "500", color: "#121e02" }}>
					Send to
				</Text>
			</View>
			<View style={styles.fifthPart}>
				<View style={styles.userContent}>
					<Image
						src="https://t3.ftcdn.net/jpg/02/81/95/74/360_F_281957418_FUg0HnmpGIT5jvHZcegT1G7FA3VYgR8l.jpg"
						style={{ width: "100%", height: "100%", borderRadius: 50 }}
					/>
					<Text>Mary</Text>
				</View>
				<View style={styles.userContent}>
					<Image
						src="https://www.shutterstock.com/image-photo/studio-portrait-black-businesswoman-toothy-260nw-2162336027.jpg"
						style={{ width: "100%", height: "100%", borderRadius: 50 }}
					/>
					<Text>Emily</Text>
				</View>
				<View style={styles.userContent}>
					<Image
						src="https://www.shutterstock.com/image-photo/young-cheerful-girl-wearing-winter-260nw-581213023.jpg"
						style={{ width: "100%", height: "100%", borderRadius: 50 }}
					/>
					<Text>Jessica</Text>
				</View>
				<View style={styles.userContent}>
					<Image
						src="https://t4.ftcdn.net/jpg/03/05/10/01/360_F_305100138_mhiuobkf9y1wjjmlTVWRxAS0MeZEOku1.jpg"
						style={{ width: "100%", height: "100%", borderRadius: 50 }}
					/>
					<Text>Brenda</Text>
				</View>
			</View>
			{/* <ScrollView horizontal={false} contentContainerStyle={{ width: "100%" }}>
				{dataLink?.map((el: any) => {
					<View
						style={{
							display: "flex",
							flexDirection: "column",
							paddingBottom: 15,
						}}
						key={el.id}>
						<View style={styles.cards}>
							<View style={styles.cardIcon}>
								<Feather name={el.icon} size={24} color="black" />
							</View>
							<View>
								<Text>{el.title} </Text>
								<Text>{el.date} </Text>
							</View>
						</View>
						;
					</View>;
				})}
			</ScrollView> */}
			<ScrollView>
				<View style={styles.cards}>
					<View style={{ display: "flex", flexDirection: "row" }}>
						<View style={styles.cardIcon}>
							<Feather name="arrow-down" size={24} color="black" />
						</View>
						<View style={{ paddingTop: 9 }}>
							<Text>From Jordan R.</Text>
							<Text style={{ fontSize: 10, color: "#5d6160" }}>
								Today,17:10
							</Text>
						</View>
					</View>
					<View style={{ paddingRight: 12 }}>
						<Text>-$200</Text>
					</View>
				</View>
				<View style={styles.cards}>
					<View style={{ display: "flex", flexDirection: "row" }}>
						<View style={styles.cardIcon}>
							<Feather name="arrow-down" size={24} color="black" />
						</View>
						<View style={{ paddingTop: 9 }}>
							<Text>From Jordan R.</Text>
							<Text style={{ fontSize: 10, color: "#5d6160" }}>
								Today,17:10
							</Text>
						</View>
					</View>
					<View style={{ paddingRight: 12 }}>
						<Text>-$200</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#cef1e5",
		paddingVertical: 82,
		paddingHorizontal: 20,
	},
	firstPart: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 12,
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
		backgroundColor: "#afdecd",
	},
	secondPart: {
		width: "100%",
		paddingBottom: 20,
	},
	thirdPart: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
	},
	thirdPartContent: {
		width: "60%",
		height: 60,
		backgroundColor: "#e4fff6",
		display: "flex",
		borderRadius: 30,
		flexDirection: "row",
		alignItems: "center",
		gap: 18,
		marginBottom: 12,
		padding: 8,
	},
	logo: {
		width: 50,
		height: "100%",
	},
	fourthPart: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		gap: 20,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
	},
	iconContent: {
		width: 60,
		height: 60,
		borderRadius: 50,
		backgroundColor: "#8db4a6",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
	},
	fifthPart: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		gap: 15,
		marginBottom: 20,
	},
	userContent: {
		width: 60,
		height: 60,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
	},
	cards: {
		width: "100%",
		height: 90,
		backgroundColor: "#e7fff7",
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
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
	},
});
