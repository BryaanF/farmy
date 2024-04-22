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
        pic: "https://t3.ftcdn.net/jpg/00/03/49/30/240_F_3493020_gpLeoTlvaf81BLVnScmwbyzI5blZN1.jpg",
        data: "Penyiapan Benih",
        desk: "Benih yang bermutu harus memenuhi kriteria sebagai berikut: standar daya kecambah > 90%, ukuran batang dengan panjang ruas normal (tidak ada gejala hambatan pertumbuhan/kerdil), mata tunas masih dorman, benih tebu tidak kering, keriput dan berjamur. Standar benih tebu yang sehat berdasarkan Standar Nasional Indonesia (SNI) dengan kriteria sebagai berikut serangan hama penggerek batang < 2 % dari jumlah ruas, penggerek pucuk < 5 % dari jumlah ruas, hama lain < 5 %, benih harus diusahakan tidak terserang penyakit sistemik seperti RSD, mosaik dan blendok. Untuk mencegah hama dan penyakit pada tanaman, benih sebelum ditanam diperlakukan dengan perawatan air panas (HWT) pada suhu 500C selama 2 jam untuk pengendalian penyakit RSD, luka api, pengendalian spora jamur, serangga, dan kutu.",
        isCompleted: false,
      },
      {
        id: "2",
        day: "hari 2",
        pic: "https://t3.ftcdn.net/jpg/02/22/60/84/240_F_222608441_WrtmhNMKDUloph2ev1SQJzA6WROcYHlv.jpg",
        data: "Penyiapan Lahan",
        desk: "Penyiapan lahan tanam tebu disini termasuk adalah kegiatan pembajakan dengan tujuan pembalikan tanah guna membunuh gulma dan penyakit yang ada pada permukaan tanah. Dalam penyiapan lahan ini juga terkadang juga terdapat upaya penambahan nutrisi dan perbaikan sifat tanah dengan cara penambahan BO dari pupuk kandang dan ini dilakukan biasanya sebelum proses pembajakan. Kemudian setelah itu melakukan pembuatan bedengan bedengan atau guludan guludan, dimana bedengan tersebut disesuaikan dengan jaarak tanam tebu.",
        isCompleted: false,
      },
      {
        id: "3",
        day: "hari 3",
        pic: "https://t4.ftcdn.net/jpg/01/05/07/85/240_F_105078562_bRywiaGCN2h8tQRygAkUS3Dou1Ngjf3B.jpg",
        data: "Penanaman",
        desk: "Pelaksanaan tanam tebu bibit ini dilakukan pada bulan Desember-Januari dimana pada bulan tersebut merupakan musim hujan, dengan tujuan pada tanam tebu bibit ini tersedia cukup air untu memecah nutrisi yang tersimpan untuk membentuk tunas. Masa tanam tebu bibit ini hanya 6 bulan saja sehingga tebu bibit dapat dipanen pada bulan Juni-Juli bertepatan masa tanam tebu tebang giling.Jarak tanam tebu ini adalah menggunakan system PKP yaitu system jarak tanam dari pusat ke pusat dimana dari pusat kepusat memiliki jarak antara 100-120cm.",
        isCompleted: false,
      },
      {
        id: "4",
        day: "hari 4",
        pic: "https://t3.ftcdn.net/jpg/00/74/43/42/240_F_74434248_YRRXljJ4IV3RUIPucWBUeejl7JuqObln.jpg",
        data: "Pemberian Air",
        desk: "Pemberian air merupakan kegiatan menaambahkan air pada media tanam guna air dapat diserap tanaman untuk membantu setiap proses metabolisme tanaman. Pemberian air paada budidaya tanaman tebu dapat menggunakan air waduk dengan cara pengairan teknis, tadah hujan dengan cara sirat, atau dengan air sumur bor / pompanisasi menggunakan system leb. Pengairan atau pemberian air dalam praktek budidaya tebu dilakukan pada massa setelah tanam dan setiap setelah dilakukan pemupukan guna melarutkan pupuk/ unsure hara tambahan ke dalam tanah guna dapat diserap oleh akar-akar tanaman.",
        isCompleted: false,
      },
      {
        id: "5",
        day: "hari 5",
        pic: "https://t3.ftcdn.net/jpg/00/84/84/28/240_F_84842862_B1QS8JZKbVbSbdhbse3l24ghuJTpo7jq.jpg",
        data: "Penyiangan",
        desk: "Penyiangan adalah kegiatan membersihkan media tanam sekitar tanaman pokok dari taaman tanaman pengganggu ( gulma ). Penyiangan dapat dilakukan dengan cara mencabuti, menimbun tanaman pengganggu ( turun tanah), gulud atau bumbun. Penyiangan ini bertujuan untuk mengurangi atau menghilangkan persaingan antara tanaman utama denga tanaman pengganggu untuk mendapatkan air, unsure hara, cahaya, oksigen, dan ruang tumbuh dan penyiangan ini juga bertujuan mengurangi bahaya serangan hama dan penyakit tanaman. Penyiangan dapat juga menggunakan bentuan Herbisida tanpa membunuh tanaman utama. Namun dalam prinsip PHPT penggunaan herbisida kimia dapat menimbulkan residu yang berbahaya bagi media tanam (tanah) mapun residu bagi tanaman yang membahayakan bagi manusia yang mengonsumsinya.",
        isCompleted: false,
      },
      {
        id: "6",
        day: "hari 6",
        pic: "https://t4.ftcdn.net/jpg/01/04/49/41/240_F_104494111_yP3E8CJa4KNoOChxBPwpYSCTN6HGbxxP.jpg",
        data: "Pemupukan",
        desk: "Pemupukan adalah usaha memberikan unsure hara tambahan yang dibutuhkan tanaman guna membantu pertumbuhan dan perkembangan tanaman yang optimal. Dalam konsep budidaya tanaman yang sehat dan berkelanjutan pemberian pupuk harus sesuai dengan anjuran peberian dan sesuai dosis yang telah ditentukan. Pemupukan pertama dilakukan pada masa penyiapan lahan yaitu dengan pemberian pupuk organic (pupuk kandang/kompos). Pemberian pupuk I dilakukan pada usia 20-30hst yaitu dengan pemberian pupuk ZA dan Phonska dengan dosis  100kg/ha dan 140kg/ha. Dan pemupukan ke II dilakukan pada usia 2-3hst dengan memberikan ZA dan Phonska  dengan dosis masing-masing 400kg/ha dan 300kg/ha.",
        isCompleted: false,
      },
      {
        id: "7",
        day: "hari 7",
        pic: "https://t3.ftcdn.net/jpg/00/03/55/86/240_F_3558653_5A3HP52e258AkiBTwq8gSYkv2RKyLuPH.jpg",
        data: "Bumbun/Gulud/Ipuk",
        desk: "Pembumbunan ke-1 dilakukan pada umur 3-4 minggu, yaitu berdaun 3 – 4 helai. Pembumbunan dilakukan dengan cara membersihkan rumput-rumputan, membalik guludan dan menghancurkan tanah (jugar) lalu tambahkan tanah ke tanaman sehingga tertimbun tanah. Pembumbunan ke – 2 dilakukan jika anakan tebu sudah lengkap dan cukup besar + 20 cm, sehingga tidak dikuatirkan rusak atau patah sewaktu ditimbun tanah atau + 2 bulan. Pembumbunan ke-3 atau bacar dilakukan pada umur 3 bulan, semua got harus diperdalam ; got mujur sedalam 70 cm dan got malang 60 cm.",
        isCompleted: false,
      },
      {
        id: "8",
        day: "hari 8",
        pic: "https://t4.ftcdn.net/jpg/01/60/79/33/240_F_160793354_m3mpxkibwogPx6tExEzrNFTBYc9gG5Gs.jpg",
        data: "Klentek",
        desk: "Yaitu melepaskan daun kering, harus dilakukan 3 kali, yaitu sebelum gulud akhir, umur 7 bulan dan 4 minggu sebelum tebang. Kletek Perempalan daun. Kegiatan perempelan daun bertujuan untuk membersihkan daun-daun yang sudah kering pada tanaman tebu sehingga kelihatan bersih, mudah untukpengamatan , pengontrolan, menghindari kebakaran dan memudahkan pemeliharaan selanjutnya. Cara melakukan perempelan daun tebu Daun-daun yang sudah kering dilepaskan menggunakan sabit tajam/sabit bergigi dari tanaman tebu, kemudian daun diikat sesuai dengan kemampuan, kemudian di kumpulkan disisi sisi jalan untuk memudahkan pengangkutan. Daun-daun tersebut dikumpulkan menggunakan kendaraan Truk/Gerobag di suatu tempat, kemudian dapat diolah menjadi silase makanan ternak maupun diolah menjadi pupuk kompos. Perempalan pertama dilakukan pada saat tanaman berumur 4 bulan setelah tanam dan yang kedua ketika tebu berumur 6-7 bulan. Sehingga ruas-ruas tebu nampak bersih dari daun tebu kering.",
        isCompleted: false,
      },
      {
        id: "9",
        day: "hari 9",
        pic: "https://t4.ftcdn.net/jpg/03/52/16/23/240_F_352162348_n8itgbhCVY8aW7leFMMuzGjG4vFPDgZr.jpg",
        data: "Pengelolaan Hama dan Pentyakit Terpadu",
        desk: "Hama dan penyakit dalam budidaya tanaman merupakan hal yang perlu menjadi perhatian karena dapat menimbulkan kerugian ekonomi apabila serangan hama melebihi ambang ekonomi. Agar tidak terjadi ledakan serangan hama dan penyakit, maka perlu dilakukan pengendalian hama dan penyakit pada tanaman tebu mulai umur tanaman 1 bulan. Penggerek pucuk dan batang merupakan hama-hama utama di beberapa pabrik gula khususnya di Jawa dan Sumatera. Hama penggerek pucuk Triporyza nivela intacta menyerang tunas umur 2 minggu hingga saat tebang. Pucuk tebu yang terserang akan mati atau membentuk siwilan.",
        isCompleted: false,
      },
      {
        id: "10",
        day: "hari 10",
        pic: "https://t4.ftcdn.net/jpg/02/06/50/33/240_F_206503307_tkyxOBzntR4KhhhbYKhaJmCYVC6GzvAj.jpg",
        data: "Pemanenan",
        desk: "Pemanenan adalah kegiatan akhir dari setiap siklus penanaman tebu, dimana kegiatan pemanenan meliputi Tebang, Muat dan Angkut, yang bertujuan: memungut tebu dalam jumlah yang optimal dari setiap petak tebang, mengangkut tebu dari petak tebangan ke pabrik dan mempertahankan hasil gula yang secara potensial berada pada tanaman tebu. Kegiatan tebang muat angkut (TMA) adalah kegiatan yang sangat komplek, karena bukan saja merupakan rangkaian dari tiga kegiatan yang saling mempengaruhi, tapi juga karena sangat ketat dibatasi oleh waktu. Apabila terjadi kendala di salah satu kegiatan, maka kegiatan lainnya akan terganggu. Seluruh kegiatan pertanaman akan ditentukan hasilnya dalam kegiatan TMA, bahkan hasil kinerja perusahaan akan ditampilkan dari kegiatan TMA. Kinerja manajemen seolah-olah dipertaruhkan dalam kegiatan ini. Secara garis besar tujuan dari TMA adalah mendapatkan tebu giling yang masak segar bersih (MSB) sebanyak-banyaknya sejak ditebang hingga digiling dalam tempo secepatnya.",
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
      const value = await AsyncStorage.getItem("tebu");
      this.setState({ list: JSON.parse(value) });
    } catch (error) {
      console.log(error);
    }
    if (this.state.list == null) {
      try {
        await AsyncStorage.setItem("tebu", JSON.stringify(this.assign_data));
        const value = await AsyncStorage.getItem("tebu");
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
        AsyncStorage.setItem("tebu", JSON.stringify(this.state.list));
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
            source={require("../assets/tebu1.png")}
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
