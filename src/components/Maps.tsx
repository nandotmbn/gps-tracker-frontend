/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	MapContainerProps,
} from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MAP_BOX_API } from "../config/key";
import socketIOClient from "socket.io-client";
import axios from "axios";

function CustomMarker({device}: any) {
	const init: any = [-7.2758471, 112.791567];
	const [location, setLocation] = useState(init);

	const socket = () => {
		const id = device?._id;
		const socket = socketIOClient("ws://localhost:8888");
		socket.on(`point${id}`, async (data: any) => {
			setLocation([data.latitude, data.longitude]);
		});
	};

	useEffect(() => {
		socket();
	}, []);

	return (
		<Marker position={location} draggable={true}>
			<Popup>Hey ! I live here</Popup>
		</Marker>
	);
}

function Maps() {
	const init: any = [-7.2758471, 112.791567];
	const [devices, setDevices] = useState<any>([])

	const getDevicesData = async () => {
		const result = await axios.get("http://localhost:8888/device")
		setDevices(result.data)
	};

	useEffect(() => {
		getDevicesData();
	}, []);

	return (
		<MapContainer
			center={init}
			zoom={18}
			scrollWheelZoom={true}
			style={{ height: "100%", width: "100%" }}
		>
			<TileLayer
				url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_BOX_API}`}
				attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
			/>
			{devices?.map((e: any, i: number) => {
				return <CustomMarker key={i} device={e}  />;
			})}
		</MapContainer>
	);
}

export default Maps;
