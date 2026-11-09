import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#f9faf5]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 h-[60px] bg-[#f9faf5]/90 z-10">
        <View className="flex-row items-center">
          <View className="mr-2">
            <Text className="text-xl font-black color-[#153328]">ruang.</Text>
          </View>
          <Text className="text-[11px] font-bold tracking-widest color-[#414844]">MEMBER</Text>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity className="w-10 h-10 justify-center items-center mr-2">
            <MaterialIcons name="notifications-none" size={24} color="#1a1c19" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/profile" as any)}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              className="w-8 h-8 rounded-full"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1"
       contentContainerClassName="flex-grow pb-28"
       showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="bg-[#153328] rounded-b-[32px] px-5 pt-6 pb-[40px]">
          <View className="flex-row items-center bg-[#cced4b]/15 px-2.5 py-1 rounded-xl self-start mb-3">
            <View className="w-1.5 h-1.5 rounded-full bg-[#cced4b] mr-1.5" />
            <Text className="text-[10px] font-bold color-[#cff04d] tracking-widest">
              SELAMAT DATANG KEMBALI
            </Text>
          </View>
          <Text className="text-[28px] font-extrabold color-white mb-2">
            Senang melihatmu lagi, Fariel.
          </Text>
          <Text className="text-xs color-[#adcebe] leading-[18px]">
            Lanjutkan hal baik yang sedang kamu bangun bersama ruang.
          </Text>
        </View>

        {/* Ikhtisar Utama */}
        <View className="flex-row justify-between items-center px-5 mt-5 mb-3">
          <Text className="text-[11px] font-bold color-[#414844] tracking-widest">
            IKHTISAR UTAMA
          </Text>
          <View className="flex-row items-center">
            <View className="w-4 h-1.5 rounded-full bg-[#153328] ml-1" />
            <View className="w-1.5 h-1.5 rounded-full bg-[#727974] ml-1" />
            <View className="w-1.5 h-1.5 rounded-full bg-[#727974] ml-1" />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 16 }}
          snapToInterval={width * 0.85 + 16}
          decelerationRate="fast"
        >
          {/* Card 1: Saldo */}
          <View
            style={{ width: width * 0.85 }}
            className="bg-white rounded-[24px] p-4 mx-2 h-[190px] justify-between elevation-sm shadow-black/5"
          >
            <View className="flex-row justify-between">
              <View className="flex-row items-center">
                <View className="w-8 h-8 rounded-lg bg-[#f3f4ef] justify-center items-center mr-2">
                  <MaterialIcons name="account-balance-wallet" size={20} color="#153328" />
                </View>
                <View>
                  <Text className="text-[11px] font-bold color-[#414844]">TOTAL SALDO</Text>
                  <Text className="text-[11px] color-[#727974]">3 rekening terhubung</Text>
                </View>
              </View>
              <View className="flex-row items-center bg-[#cff04d] px-2 py-1 rounded-xl">
                <MaterialIcons name="trending-up" size={14} color="#576a00" />
                <Text className="text-xs font-bold color-[#576a00] ml-1">+12.4%</Text>
              </View>
            </View>

            <View className="mt-4">
              <Text className="text-xs color-[#414844]">IDR</Text>
              <Text className="text-[26px] font-extrabold color-[#1a1c19]">Rp 42.850.000</Text>
            </View>

            <View className="flex-row justify-between items-center mt-4">
              <View className="flex-row items-center">
                <View className="w-2 h-2 rounded-full bg-[#cced4b] mr-1.5" />
                <Text className="text-xs color-[#414844]">Arus kas optimal bulan ini</Text>
              </View>
              <MaterialIcons name="arrow-forward" size={18} color="#153328" />
            </View>
          </View>
        </ScrollView>

        {/* Riwayat Transaksi */}
        <View className="px-5 mt-6">
          <View className="flex-row justify-between items-center mb-3">
            <View>
              <Text className="text-lg font-bold color-[#1a1c19]">Riwayat Transaksi</Text>
              <Text className="text-xs color-[#414844]">Aktivitas keuangan terbaru kamu</Text>
            </View>
            <TouchableOpacity className="bg-[#e7e9e4] px-3 py-1.5 rounded-xl">
              <Text className="text-xs font-bold color-[#153328]">Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white rounded-2xl p-2">
            <TransactionItem
              icon="local-cafe"
              title="Kopi & Coworking Space"
              time="Hari ini, 10:15 • Gaya Hidup"
              amount="-Rp 55.000"
              status="Sukses"
            />
            <TransactionItem
              icon="payments"
              title="Transfer Masuk - Studio Klien"
              time="Kemarin, 16:30 • Pendapatan"
              amount="+Rp 7.500.000"
              status="Diterima"
              isPositive
            />
          </View>
        </View>

        {/* Financial Insight */}
        <View className="px-5 mt-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-[#cced4b] justify-center items-center mr-2">
              <MaterialIcons name="lightbulb" size={16} color="#153328" />
            </View>
            <Text className="text-lg font-bold color-[#1a1c19]">Financial Insight</Text>
          </View>

          <View className="bg-[#153328] rounded-[24px] p-5">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-[11px] font-bold color-[#cff04d] tracking-widest">
                ANALISIS BULAN INI
              </Text>
              <View className="bg-[#e2e3de]/20 px-2 py-1 rounded-xl">
                <Text className="text-[11px] color-[#adcebe]">Oktober 2026</Text>
              </View>
            </View>
            <Text className="text-sm color-[#f9faf5] leading-[22px] mb-5">
              Pengeluaran gaya hidupmu hemat{" "}
              <Text className="color-[#cff04d] font-bold">18%</Text> dibandingkan bulan lalu!
              Kamu siap menambah alokasi tabungan dana darurat.
            </Text>

            <TouchableOpacity className="bg-[#cced4b] flex-row justify-center items-center h-12 rounded-xl">
              <Text className="text-sm font-bold color-[#153328] mr-2">
                Pelajari Rincian Insight
              </Text>
              <MaterialIcons name="arrow-forward" size={18} color="#153328" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="h-[100px]" />
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 w-full flex-row justify-around items-center h-[80px] bg-[#f9faf5] pb-5 border-t border-[#f3f4ef]">
        <NavItem icon="grid-view" label="Beranda" isActive onPress={() => {}} />
        <NavItem
          icon="swap-horiz"
          label="Transaksi"
          onPress={() => router.push("/transaksi" as any)}
        />
        <NavItem icon="track-changes" label="Target" onPress={() => {}} />
        <NavItem icon="menu-book" label="Edukasi" onPress={() => {}} />
        <NavItem
          icon="account-circle"
          label="Akun"
          onPress={() => router.push("/profile" as any)}
        />
      </View>
    </SafeAreaView>
  );
}

interface TransactionItemProps {
  icon: any;
  title: string;
  time: string;
  amount: string;
  status: string;
  isPositive?: boolean;
}

interface NavItemProps {
  icon: any;
  label: string;
  isActive?: boolean;
  onPress?: () => void;
}

const TransactionItem = ({
  icon,
  title,
  time,
  amount,
  status,
  isPositive,
}: TransactionItemProps) => (
  <View className="flex-row justify-between items-center p-3 rounded-xl">
    <View className="flex-row items-center">
      <View
        className={`w-10 h-10 rounded-xl justify-center items-center mr-3 ${
          isPositive ? "bg-[#cff04d]/40" : "bg-[#f3f4ef]"
        }`}
      >
        <MaterialIcons
          name={icon}
          size={20}
          color={isPositive ? "#576a00" : "#153328"}
        />
      </View>
      <View>
        <Text className="text-sm font-bold color-[#1a1c19]">{title}</Text>
        <Text className="text-xs color-[#727974] mt-0.5">{time}</Text>
      </View>
    </View>
    <View className="items-end">
      <Text className={`text-sm font-bold ${isPositive ? "color-[#536500]" : "color-[#1a1c19]"}`}>
        {amount}
      </Text>
      <Text className={`text-[11px] mt-0.5 ${isPositive ? "color-[#536500] font-bold" : "color-[#727974]"}`}>
        {status}
      </Text>
    </View>
  </View>
);

const NavItem = ({ icon, label, isActive, onPress }: NavItemProps) => (
  <TouchableOpacity className="items-center justify-center flex-1" onPress={onPress}>
    <MaterialIcons
      name={icon}
      size={24}
      color={isActive ? "#153328" : "#414844"}
    />
    <Text
      className={`text-[11px] mt-1 ${
        isActive ? "color-[#153328] font-bold" : "color-[#414844]"
      }`}
    >
      {label}
    </Text>
  </TouchableOpacity>
);