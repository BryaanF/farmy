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
        pic: "https://t3.ftcdn.net/jpg/02/99/95/66/240_F_299956651_vCp57ooqjvdEhjc74lldxrel6pzfDFhy.jpg",
        data: "Membersihkan dan Membajak Tanah",
        desk: "Menanam melon dimulai dengan membersihkan dan membajak tanah. Kemudian dilanjutkan dengan pemberian kapur pertanian sebanyak 1,5 ton/ha untuk pH tanah dibawah 6. Campur tanah dengan pupuk kandang fermentasi sebanyak 1,5 ton/ha dan pupuk NPK perbandingan 15:15:15 sebanyak 100 kg/ha. Kemudian dilakukan pengadukan agar pupuk yang sudah diberikan bercampur dengan tanah.",
        isCompleted: false,
      },
      {
        id: "2",
        day: "hari 2",
        pic: "https://t4.ftcdn.net/jpg/01/94/92/11/240_F_194921185_xUF6VxFqzo4Tfl3R6Lw8DvznYMFhHT65.jpg",
        data: "Membuat Bendeng(gulutan)",
        desk: "Membuat bedeng dilakukan dengan cara mencangkul tanah kemudian menaikkan tanah tersebut sehingga permukaan bedeng menjadi lebih tinggi. Bedeng untuk menanam melon dibuat selebar lima meter, jarak antar bedeng adalah 60 cm serta tinggi bedeng adalah 40-60 cm. Langkah selanjutnya, tanah di bagian tengah bedeng dibagi menjadi dua bagian lalu diangkat ke tepi bedengan sehingga kedua tepi bedeng akan membentuk tanah dengan lebar satu meter. Sehingga dalam satu bedeng selebar lima meter terdapat dua bedeng tanam di kanan dan kiri selebar satu meter. Kedua bedeng tanam tersebut dibuat miring ke arah tengah. Pada titik tengah, pertemuan kedua bedeng dibuat saluran air selebar 20 cm dengan kedalaman 10 cm.",
        isCompleted: false,
      },
      {
        id: "3",
        day: "hari 3",
        pic: "https://img.freepik.com/free-photo/growth-young-melon-glasshouse_1150-10631.jpg?size=626&ext=jpg&ga=GA1.2.1310168058.1657685739&semt=sph",
        data: "Menutupi Bendeng dengan Mulsa Plastic",
        desk: "Pemasangan Plastik Mulsa, setelah proses pemberian pupuk dasar selesai, bedengan yang sudah jadi kemudian ditutup dengan plastik mulsa untuk mencegah penguapan berlebih serta mencegah tumbuhnya gulma pada bedengan yang akan kita tanami benih melon.",
        isCompleted: false,
      },
      {
        id: "4",
        day: "hari 4",
        pic: "https://img.freepik.com/free-photo/japanese-melon-cantaloupe-cantaloupe-seasonal-fruit-health-concept_1150-23382.jpg?size=626&ext=jpg&ga=GA1.1.1310168058.1657685739&semt=sph",
        data: "Siapkan Bibit",
        desk: "Persiapan bibit melon unggul, sebelum di tanam terlebih dahulu rendam dalam air yang dicampur dengan zat pengatur tanaman (ZPT) dan bakterisida + fungisida kurang lebih 5 jam, setelah itu benih d letakkan di kain basah selama 1 sampai 2 hari sampai berkecambah, sambil menunggu benih berkecambah siapkan tanah taruh dalam polybag kecil lalu siram tanah dengan air.setelah bibit sudah berakar, segera tanam pada polybag yang sudah kita siapkan sebelumnya.",
        isCompleted: false,
      },
      {
        id: "5",
        day: "hari 5",
        pic: "https://img.freepik.com/free-photo/plant-researchers-are-checking-effects-cantaloupe_1150-10640.jpg?size=626&ext=jpg&ga=GA1.2.1310168058.1657685739&semt=sph",
        data: "Pembuatan Lubang Serta Menanam Bibit",
        desk: "Pembuatan lubang tanaman dilakukan satu minggu sebelum penanaman dengan kedalaman 8-10 cm dan berjarak 20-30 cm dari tepi bedeng. Jarak antar lubang tanam melon adalah sekitar 90-100 cm.",
        isCompleted: false,
      },
      {
        id: "6",
        day: "hari 6",
        pic: "https://img.freepik.com/free-photo/organic-honeydew-harvest-nature-garden_53876-163272.jpg?size=626&ext=jpg&ga=GA1.2.1310168058.1657685739&semt=sph",
        data: "persiapan Pembuatan Ajir",
        desk: "Persiapan ajir sembari menunggu bibit siap untuk di pindah di lahan, siapkan ajir pada lahan tanam sepanjang ± 2 meter sebelum proses penanaman, ajir ini nanti berfugsi sebagai penyangga batang atau tempat merambatnya tanaman.",
        isCompleted: false,
      },
      {
        id: "7",
        day: "hari 7",
        pic: "https://img.freepik.com/free-photo/front-view-sliced-fresh-melon-dark-light-background_140725-91806.jpg?size=626&ext=jpg&ga=GA1.2.1310168058.1657685739&semt=sph",
        data: "Memberi Pupuk ",
        desk: "Proses pemupukan tanaman melon, setelah selesai melakukan proses pemindahan bibit, selanjutnya dilakukan pemupukan selanjutnya pada tanaman melon, pemupukan ini bertujuan untuk memicu pertumbuhan serta perkembangan tanaman melon.pemupukan ini bisa dilakukan dengan cara kocor atau semprot. Dan pastikan selalu membersihkan dari gulma, hama penyakit.",
        isCompleted: false,
      },
      {
        id: "8",
        day: "hari 8",
        pic: "https://t4.ftcdn.net/jpg/02/72/06/73/240_F_272067330_kLFIKYrZboqGN8UpqgJF0ZdUosUJaiiA.jpg",
        data: "Penyulaman",
        desk: "Penyulaman tanaman melon dilakukan tidak lebih dari 10 hari dari penanaman tahap pertama. Hal ini bertujuan agar pertumbuhan tanaman seragam. Bibit yang terserang penyakit rebah (busuk) batang perlu dimusnahkan kemudian permukaan tanahnya dibuang dan diganti dengan tanah yang baru kemudian ditanam bibit sulaman.  Penyulaman tanaman melon paling lambat dilakukan umur 3 hari setelah tanam (HST) sampai umur tanaman 10 hari. Tanaman melon yang sudah terlalu tua apabila masih terus disulam mengakibatkan pertumbuhannya menjadi tidak seragam. Hal tersebut akan berpengaruh terhadap perawatan tanaman melon serta pengendalian hama penyakit ketika berumur dewasa.",
        isCompleted: false,
      },
      {
        id: "9",
        day: "hari 9",
        pic: "https://img.freepik.com/free-photo/plant-researchers-are-checking-effects-cantaloupe_1150-10635.jpg?size=626&ext=jpg&ga=GA1.2.1310168058.1657685739&semt=sph",
        data: "Pemberian Alas pada Buah",
        desk: "Pemberian serasah/jerami untuk alas buah berfungsi untuk menekan pertumbuhan gulma. Buah yang tidak diberi alas berakibat pada bentuk yang tidak normal dan mudah terserang penyakit. Pada musim hujan, alas buah diganti dengan bilah bambu. Karena jerami basah dapat menyebabkan perkembangbiakan penyakit tanaman.",
        isCompleted: false,
      },
      {
        id: "10",
        day: "hari 10",
        pic: "https://img.freepik.com/free-photo/top-view-sliced-fresh-melon-dark-light-table-sweet-fruit-mellow-summer_140725-81705.jpg?size=626&ext=jpg&ga=GA1.1.1310168058.1657685739&semt=sph",
        data: "Pengairan",
        desk: "Proses pengairan pada lahan penanaman harus juga di perhatikan untuk menjaga metabolisme tanaman, pengairian dilakukan dengan cara memompakan air ketengah bedengan, penyiraman hendaknya dilakukan setiap sore hinga umur tanaman satu minggu, selanjutnya penyiraman dilakukan setiap dua hari sekali, ketika musim hujan pastikan saluran air harus berfungsi dengan baik, jangan biarkan lahan tergenang air karena tanaman melon tidak menghendaki keadaan tanah terlalu basah.",
        isCompleted: false,
      },
      {
        id: "11",
        day: "hari 11",
        pic: "https://t4.ftcdn.net/jpg/00/54/31/45/240_F_54314584_7FEcN0ZXY113AE3yTbmm6H6GpwQM8FI6.jpg",
        data: "Penyiangan Tanaman",
        desk: "Penyiangan dilakukan dengan hati-hati agar tidak terkena akar tanaman melon.",
        isCompleted: false,
      },
      {
        id: "12",
        day: "hari 12",
        pic: "https://img.freepik.com/free-photo/medium-shot-two-farm-coworkers-facing-camera-standing-greenhouse-looking-screen-tablet-pc_1098-19396.jpg?w=740&t=st=1674524563~exp=1674525163~hmac=2df013d2b806a4957d0afe7398b7f9587fa00dfeb87b018642404a3737a0a008",
        data: "Memberi Pupuk Tambahan",
        desk: "Pupuk tambahan yang diberikan pada tanaman melon pada umur 25 hari setelah tanam adalah pupuk daun dan pupuk siram dengan kandungan nitrogen yang tinggi. Pupuk daun yang digunakan adalah jenis multimikro dengan dosis 2 cc/liter dan campuran ZA + NPK (15:15:15). Pupuk tersebut dicairkan dengan perbandingan 1:1, yaitu 5 gram per liter air. Fase generatif dan pembuahan dengan pemberian NPK 10 gram per liter dicairkan dan disiramkan sebanyak 250 ml per lubang tanaman. Pada fase pembesaran dan peningkatan kadar gula buah (45-55 hari setelah tanam) diberikan tambahan pupuk KNO3 sejumlah 10-15 gram per liter dan dicairkan. Siram pupuk sebanyak 250 ml perlubang tanaman.",
        isCompleted: false,
      },
      {
        id: "13",
        day: "hari 13",
        pic: "https://t3.ftcdn.net/jpg/04/60/35/96/240_F_460359613_XPekKlmgsCbsGrg67s3wB9lOI5x2hvKG.jpg",
        data: "Pembalikan Buah",
        desk: "Pembalikan buah melon dilakukan dua kali seminggu. Warna kulit buah yang tidak pernah dibalik akan menjadi putih kekuningan karena tidak terkena sinar matahari.",
        isCompleted: false,
      },
      {
        id: "14",
        day: "hari 14",
        pic: "https://img.freepik.com/free-photo/woman-hat-holding-funnel-works-garden_1157-38529.jpg?size=626&ext=jpg&ga=GA1.2.1310168058.1657685739&semt=sph",
        data: "Masa Panen",
        desk: "Saat panen yang tepat adalah di pagi hari, karena proses penimbunan zat makanan terjadi pada malam hari. Buah dipanen dengan pemotongan pada bagian tangkai menggunakan pisau dengan jarak tujuh sentimeter dari buah. Panen buah melon dilakukan bertahap dengan mengutamakan tanaman yang sudah siap panen terlebih dahulu. Buah yang dipanen dikumpulkan dalam keranjang dengan hati-hati untuk mencegah cacat buah secara fisik.",
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
      const value = await AsyncStorage.getItem("melon");
      this.setState({ list: JSON.parse(value) });
    } catch (error) {
      console.log(error);
    }
    if (this.state.list == null) {
      try {
        await AsyncStorage.setItem("melon", JSON.stringify(this.assign_data));
        const value = await AsyncStorage.getItem("melon");
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
        AsyncStorage.setItem("melon", JSON.stringify(this.state.list));
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
            source={require("../assets/melon1.png")}
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
