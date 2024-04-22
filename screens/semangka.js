import React from "react";
import { RefreshControl } from "react-native";
import {
  Text,
  Avatar,
  Box,
  Pressable,
  HStack,
  VStack,
  Center,
  Image,
  View,
  ScrollView,
  FlatList,
  CheckIcon,
} from "native-base";
import { ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.assign_data = [
      {
        id: "1",
        day: "hari 1",
        pic: "https://t4.ftcdn.net/jpg/02/03/04/37/240_F_203043777_KNAEAEQyNVJCoi3NsDz5Oyji1MACCTvN.jpg",
        data: "Membersihkan dan Membajak Tanah",
        desk: "Menanam semangka dimulai dengan membersihkan dan membajak tanah. Kemudian dilanjutkan dengan pemberian kapur pertanian sebanyak 1,5 ton/ha untuk pH tanah dibawah 6. Campur tanah dengan pupuk kandang fermentasi sebanyak 1,5 ton/ha dan pupuk NPK perbandingan 15:15:15 sebanyak 100 kg/ha. Kemudian dilakukan pengadukan agar pupuk yang sudah diberikan bercampur dengan tanah.",
        isCompleted: false,
      },
      {
        id: "2",
        day: "hari 2",
        pic: "https://t3.ftcdn.net/jpg/01/21/81/34/240_F_121813469_TkzU6J4k87ML6jno6R5RD2plwcYust9C.jpg",
        data: "Membuat Bendeng(gulutan)",
        desk: "Membuat bedeng dilakukan dengan cara mencangkul tanah kemudian menaikkan tanah tersebut sehingga permukaan bedeng menjadi lebih tinggi. Bedeng untuk menanam semangka dibuat selebar lima meter, jarak antar bedeng adalah 60 cm serta tinggi bedeng adalah 40-60 cm. Langkah selanjutnya, tanah di bagian tengah bedeng dibagi menjadi dua bagian lalu diangkat ke tepi bedengan sehingga kedua tepi bedeng akan membentuk tanah dengan lebar satu meter. Sehingga dalam satu bedeng selebar lima meter terdapat dua bedeng tanam di kanan dan kiri selebar satu meter. Kedua bedeng tanam tersebut dibuat miring ke arah tengah. Pada titik tengah, pertemuan kedua bedeng dibuat saluran air selebar 20 cm dengan kedalaman 10 cm.",
        isCompleted: false,
      },
      {
        id: "3",
        day: "hari 3",
        pic: "https://t3.ftcdn.net/jpg/02/21/43/58/240_F_221435868_V7nQHeAgpqtCsxbWU87cJwya2LOSBcCX.jpg",
        data: "Menutupi Bendeng dengan Mulsa Plastic",
        desk: "Siapkan mulsa plastik dengan membuat lubang berdiameter 10 cm dengan jarak yang sama dengan jarak tanam. Mulsa plastik ditutup di atas bedeng. Pinggir mulsa dipasak dengan bilah bambu atau kawat.",
        isCompleted: false,
      },
      {
        id: "4",
        day: "hari 4",
        pic: "https://t3.ftcdn.net/jpg/02/99/38/38/240_F_299383897_U0ERLM0ovsjuMqbdAkylkeF89SNNUHUp.jpg",
        data: "Siapkan Bibit",
        desk: "Persiapan pembibitan untuk menanam semangka membutuhkan tempat semai benih untuk melindungi bibit muda. Sediakan media semai dengan komposisi 10 liter pupuk kandang, 20 liter tanah, dan 150 gram pupuk NPK halus. Campur media tersebut lalu masukkan ke dalam tempat semai. Setelah menyediakan media semai, ikuti langkah untuk menyiapkan bibit semangka sebagai berikut. Benih semangka direndam selama 8-12 jam lalu ditiriskan. Masukkan benih ke dalam kantong plastik ukuran 1 kg. Tiup dan ikat kantong plastik dengan karet. Benih semangka akan berkecambah setelah tiga sampai empat hari. Media semai disiram secukupnya. Benih terpilih yang sudah muncul akan langsung disemai dalam polybag ukuran 1-1,5 cm. Kantong persemaian diletakkan berderet agar terkena sinar matahari penuh. Beri plastik transparan dengan salah satu ujung/pinggirnya terbuka.",
        isCompleted: false,
      },
      {
        id: "5",
        day: "hari 5",
        pic: "https://t3.ftcdn.net/jpg/02/92/82/50/240_F_292825089_GR7iN6NsTqWBB8XKYzZfBTe0yHXzz4i6.jpg",
        data: "Pembuatan Lubang",
        desk: "Pembuatan lubang tanaman dilakukan satu minggu sebelum penanaman dengan kedalaman 8-10 cm dan berjarak 20-30 cm dari tepi bedeng. Jarak antar lubang tanam semangka adalah sekitar 90-100 cm.",
        isCompleted: false,
      },
      {
        id: "6",
        day: "hari 6",
        pic: "https://img.freepik.com/free-photo/organic-honeydew-harvest-nature-garden_53876-163272.jpg?size=626&ext=jpg&ga=GA1.2.1310168058.1657685739&semt=sph",
        data: "Menanam Bibit",
        desk: "Bibit yang sudah tumbuh daun sejati sejumlah empat helai siap dipindah ke lahan. Satu lubang tanam untuk satu bibit. Menanam semangka sebaiknya dilakukan saat pagi hari sebelum jam 10.00 WIB atau sore hari setelah jam 15.00 WIB untuk menghindari tanaman mengalami stress tinggi akibat sengatan terik matahari.",
        isCompleted: false,
      },
      {
        id: "7",
        day: "hari 7",
        pic: "https://t4.ftcdn.net/jpg/02/13/75/07/240_F_213750713_4MRVJsa96ar5NaLhhG2EAAWqmULOEOl8.jpg",
        data: "Memberi Pupuk ",
        desk: "Pupuk untuk tanaman semangka adalah jenis NPK dengan perbandingan 15:15:15 dan dosis dua sampai tiga gram per batang tanaman. Pemberian pupuk disiram selama seminggu sekali. Ketika tanaman sudah memasuki fase generatif, bisa diberikan pupuk KCl dengan dosis dua hingga tiga gram per batang tanaman semangka.",
        isCompleted: false,
      },
      {
        id: "8",
        day: "hari 8",
        pic: "https://t4.ftcdn.net/jpg/03/78/92/51/240_F_378925190_sc8hOQXsJiQbtIbI6lHSiZnJEqek3gim.jpg",
        data: "Penyulaman",
        desk: "Penyulaman tanaman semangka dilakukan tidak lebih dari 10 hari dari penanaman tahap pertama. Hal ini bertujuan agar pertumbuhan tanaman seragam. Bibit yang terserang penyakit rebah (busuk) batang perlu dimusnahkan kemudian permukaan tanahnya dibuang dan diganti dengan tanah yang baru kemudian ditanam bibit sulaman.  Penyulaman tanaman semangka paling lambat dilakukan umur 3 hari setelah tanam (HST) sampai umur tanaman 10 hari. Tanaman semangka yang sudah terlalu tua apabila masih terus disulam mengakibatkan pertumbuhannya menjadi tidak seragam. Hal tersebut akan berpengaruh terhadap perawatan tanaman semangka serta pengendalian hama penyakit ketika berumur dewasa.",
        isCompleted: false,
      },
      {
        id: "9",
        day: "hari 9",
        pic: "https://t3.ftcdn.net/jpg/00/43/47/98/240_F_43479841_YmapLWEXO8tyXSPNlgFt4SDnpV75IqOg.jpg",
        data: "Pemberian Alas pada Buah",
        desk: "Pemberian serasah/jerami untuk alas buah berfungsi untuk menekan pertumbuhan gulma. Buah yang tidak diberi alas berakibat pada bentuk yang tidak normal dan mudah terserang penyakit. Pada musim hujan, alas buah diganti dengan bilah bambu. Karena jerami basah dapat menyebabkan perkembangbiakan penyakit tanaman.",
        isCompleted: false,
      },
      {
        id: "10",
        day: "hari 10",
        pic: "https://t3.ftcdn.net/jpg/03/78/12/98/360_F_378129844_RfNbpC9ywHvt1GsHv2wj3EhDajdqeG6w.jpg",
        data: "Pengairan",
        desk: "Tanaman semangka memerlukan banyak air, terutama pada fase vegetatif. Pengairan pada fase generatif (muncul bunga) perlu dikurangi. Saat tanaman mulai berbuah, pengairan ditambah lagi dan dikurangi ketika fase pemasakan buah.",
        isCompleted: false,
      },
      {
        id: "11",
        day: "hari 11",
        pic: "https://t3.ftcdn.net/jpg/01/67/34/18/240_F_167341842_7wt6IDC9sh8OIJMdTpDi7YwHgSvOZPGX.jpg",
        data: "Penyiangan Tanaman",
        desk: "Penyiangan dilakukan dengan hati-hati agar tidak terkena akar tanamans semangka.",
        isCompleted: false,
      },
      {
        id: "12",
        day: "hari 12",
        pic: "https://t3.ftcdn.net/jpg/02/99/38/38/240_F_299383897_U0ERLM0ovsjuMqbdAkylkeF89SNNUHUp.jpg",
        data: "Memberi Pupuk Tambahan",
        desk: "Pupuk tambahan yang diberikan pada tanaman semangka pada umur 25 hari setelah tanam adalah pupuk daun dan pupuk siram dengan kandungan nitrogen yang tinggi. Pupuk daun yang digunakan adalah jenis multimikro dengan dosis 2 cc/liter dan campuran ZA + NPK (15:15:15). Pupuk tersebut dicairkan dengan perbandingan 1:1, yaitu 5 gram per liter air. Fase generatif dan pembuahan dengan pemberian NPK 10 gram per liter dicairkan dan disiramkan sebanyak 250 ml per lubang tanaman. Pada fase pembesaran dan peningkatan kadar gula buah (45-55 hari setelah tanam) diberikan tambahan pupuk KNO3 sejumlah 10-15 gram per liter dan dicairkan. Siram pupuk sebanyak 250 ml pe rlubang tanaman.",
        isCompleted: false,
      },
      {
        id: "13",
        day: "hari 13",
        pic: "https://img.freepik.com/free-photo/medium-shot-two-farm-coworkers-facing-camera-standing-greenhouse-looking-screen-tablet-pc_1098-19396.jpg?w=740&t=st=1674524563~exp=1674525163~hmac=2df013d2b806a4957d0afe7398b7f9587fa00dfeb87b018642404a3737a0a008",
        data: "Pembalikan Buah",
        desk: "Pembalikan buah semangka dilakukan dua kali seminggu. Warna kulit buah yang tidak pernah dibalik akan menjadi putih kekuningan karena tidak terkena sinar matahari.",
        isCompleted: false,
      },
      {
        id: "14",
        day: "hari 14",
        pic: "https://t3.ftcdn.net/jpg/04/60/35/96/240_F_460359613_XPekKlmgsCbsGrg67s3wB9lOI5x2hvKG.jpg",
        data: "Masa Panen",
        desk: "Saat panen yang tepat adalah di pagi hari, karena proses penimbunan zat makanan terjadi pada malam hari. Buah dipanen dengan pemotongan pada bagian tangkai menggunakan pisau dengan jarak tujuh sentimeter dari buah. Panen buah semangka dilakukan bertahap dengan mengutamakan tanaman yang sudah siap panen terlebih dahulu. Buah yang dipanen dikumpulkan dalam keranjang dengan hati-hati untuk mencegah cacat buah secara fisik.",
        isCompleted: false,
      },
    ];

    this.state = {
      refreshing: false,
      list: [],
    };
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    // Perform a refresh operation here (e.g. fetch data)
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem("semangka");
      this.setState({ list: JSON.parse(value) });
    } catch (error) {
      console.log(error);
    }
    if (this.state.list == null) {
      try {
        await AsyncStorage.setItem(
          "semangka",
          JSON.stringify(this.assign_data)
        );
        const value = await AsyncStorage.getItem("semangka");
        this.setState({ list: JSON.parse(value) });
      } catch (error) {
        console.log(error);
      }
      console.log("data inputed to async storage!");
    } else {
      console.log("data already satisfied!");
    }
  };

  handleCompleted = (index) => {
    const newList = this.state.list;
    newList[index].isCompleted = !newList[index].isCompleted;
    this.setState({ list: newList }, () => {
      try {
        AsyncStorage.setItem("semangka", JSON.stringify(this.state.list));
      } catch (e) {
        console.log("Error update status task: in task-all.js");
        console.error(e.message);
      }
    });
  };

  showListItem = ({ item, index }) => {
    const { navigation } = this.props;
    return (
      <Pressable
        onPress={() => navigation.navigate("DetailFromDetail", { data: item })}
        width={"90%"}
        mt={"20px"}
        alignSelf={"center"}
      >
        <ImageBackground
          source={{ uri: item.pic }}
          alt="Alternate Text"
          size={"100%"}
          resizeMode={"cover"}
          rounded="10px"
          borderRadius={10}
        >
          <View>
            <HStack
              p={"15px"}
              space="3"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Text color={"white"} fontSize="lg">
                {item.day}
              </Text>
              <Pressable
                onPress={() => {
                  this.handleCompleted(index);
                }}
              >
                {item.isCompleted ? (
                  <Box bg="primary.300" p="2" rounded="xl">
                    <CheckIcon />
                  </Box>
                ) : (
                  <Box bg="gray.300" p="2" rounded="xl">
                    <CheckIcon />
                  </Box>
                )}
              </Pressable>
            </HStack>
          </View>
        </ImageBackground>
      </Pressable>
    );
  };

  render() {
    return (
      <>
        <View>
          <Image
            width={"90%"}
            alignSelf={"center"}
            source={require("../assets/semangka1.png")}
            alt="Alternate Text"
            borderRadius={25}
            mb={"10px"}
          />
        </View>

        <FlatList
          data={this.state.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.showListItem}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          mb={"25px"}
        />
      </>
    );
  }
}

export default Detail;
