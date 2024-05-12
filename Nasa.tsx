import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import useNasa from "./hooks/useNasa";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import downloadFile from "./utils/utils";
import ToDo from "./TodoApp";

const { width, height } = Dimensions.get("window");

export default function App() {
  const Nasa = useNasa();
  const [url, setUrl] = useState<string | null>("");
  const [date, setDate] = useState<Date>(new Date());
  const [uris, setUris] = useState<string[]>([]);
  const [isDatePickerVisible, setIsDatePickerVisible] =
    useState<boolean>(false);

  useEffect(() => {
    console.log("uri " + url);
  }, [url]);

  useEffect(() => {
    console.log(uris);
  }, [uris]);

  useEffect(() => {
    console.log(date);
  }, [date]);

  const show = () => {
    setIsDatePickerVisible(true);
  };

  const hide = () => {
    setIsDatePickerVisible(false);
  };

  const handleDatePicker = (
    event: DateTimePickerEvent,
    newDate: Date | undefined
  ) => {
    setDate(newDate as Date);
    hide();
  };

  const handleImageFetch = async () => {
    if (!date) {
      alert("Pls select date before loading");
    }
    let r = await Nasa.getResponseImage(
      date.toLocaleDateString("en-US", {
        year: "numeric",
        day: "2-digit",
        month: "2-digit",
      })
    );
    if (!r?.uri || r.type !== "image") {
      alert("failed to load from selected date.");
      return;
    }
    setUrl(r.uri as string);
    if (!uris.find((x) => x === r.uri)) uris.push(r.uri);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "transparent",
        height: height + 50,
        width: width,
      }}
    >
      {uris && (
        <FlatList
          horizontal={true}
          data={uris}
          renderItem={({ item }) => {
            return (
              <View style={{
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Image
                  style={[styles.ImageStyle]}
                  source={{
                    uri: item,
                  }}
                ></Image>
                <TouchableOpacity style={[styles.LoadBtn, {
                  marginTop: 20,
                }]} onPress={() => downloadFile(item)}>
                  <Text style={styles.LoadBtnText}>Download</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        ></FlatList>
      )}

      {isDatePickerVisible && (
        <DateTimePicker
          value={date as Date}
          mode="date"
          display="spinner"
          onChange={handleDatePicker}
          maximumDate={new Date()}
        />
      )}


      <View
        style={{
          height: 130,
          width: width,
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 20,
          paddingTop: 30,
        }}
      >
        <TouchableOpacity style={styles.LoadBtn} onPress={() => show()}>
          <Text style={styles.LoadBtnText}>Select date</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoadBtn} onPress={handleImageFetch}>
          <Text style={styles.LoadBtnText}>Load</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageStyle: {
    width: width,
    height: 270,
  },
  LoadBtn: {
    height: 80,
    width: 170,
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  LoadBtnText: {
    color: "white",
    fontSize: 27,
  },
});


/*

  {
                    transform: 'rotate(90deg)',
                    width: height,
                    height: width,
                    marginTop: 200,
                    marginLeft: -250
                  }
*/