import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const INITIAL_TRANSACTIONS = [
  {
    id: "1",
    dateGroup: "HARI INI — 6 OKT 2026",
    title: "Kopi & Coworking Space",
    time: "10:15 WIB",
    category: "Gaya Hidup",
    filterKey: "gaya-hidup",
    type: "pengeluaran",
    source: "BCA Prioritas",
    amount: "-Rp 55.000",
    status: "Berhasil",
    icon: "local-cafe",
    isPositive: false,
  },
  {
    id: "2",
    dateGroup: "HARI INI — 6 OKT 2026",
    title: "Langganan Internet Fiber",
    time: "08:30 WIB",
    category: "Tagihan",
    filterKey: "tagihan",
    type: "pengeluaran",
    source: "Bank Jago",
    amount: "-Rp 375.000",
    status: "Berhasil",
    icon: "wifi",
    isPositive: false,
  },
  {
    id: "3",
    dateGroup: "KEMARIN — 5 OKT 2026",
    title: "Transfer Masuk - Studio Klien",
    time: "16:30 WIB",
    category: "Pendapatan Proyek",
    filterKey: "pemasukan",
    type: "pemasukan",
    source: "Bank Jago",
    amount: "+Rp 7.500.000",
    status: "Diterima",
    icon: "payments",
    isPositive: true,
  },
  {
    id: "4",
    dateGroup: "KEMARIN — 5 OKT 2026",
    title: "Belanja Supermarket Segar",
    time: "14:10 WIB",
    category: "Kebutuhan",
    filterKey: "pengeluaran",
    type: "pengeluaran",
    source: "GoPay Pro",
    amount: "-Rp 420.000",
    status: "Berhasil",
    icon: "shopping-basket",
    isPositive: false,
  },
  {
    id: "5",
    dateGroup: "3 OKT 2026",
    title: "Reksa Dana Pasar Uang",
    time: "09:00 WIB",
    category: "Portofolio",
    filterKey: "investasi",
    type: "pengeluaran",
    source: "BCA Prioritas",
    amount: "-Rp 1.200.000",
    status: "Rutin",
    icon: "trending-up",
    isPositive: false,
  },
  {
    id: "6",
    dateGroup: "3 OKT 2026",
    title: "Makan Siang Resto Bistro",
    time: "13:20 WIB",
    category: "Gaya Hidup",
    filterKey: "gaya-hidup",
    type: "pengeluaran",
    source: "QRIS",
    amount: "-Rp 185.000",
    status: "Berhasil",
    icon: "restaurant",
    isPositive: false,
  },
];

const FILTER_CHIPS = [
  { label: "Semua (6)", key: "all" },
  { label: "Pengeluaran", key: "pengeluaran" },
  { label: "Pemasukan", key: "pemasukan" },
  { label: "Gaya Hidup & Kopi", key: "gaya-hidup" },
  { label: "Tagihan & Utilitas", key: "tagihan" },
  { label: "Investasi", key: "investasi" },
];

export default function TransaksiScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredTransactions = INITIAL_TRANSACTIONS.filter((tx) => {
    const matchesQuery =
      tx.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === "all" ||
      tx.type === selectedFilter ||
      tx.filterKey === selectedFilter;

    return matchesQuery && matchesFilter;
  });

  const groupedTransactions = filteredTransactions.reduce((acc, tx) => {
    if (!acc[tx.dateGroup]) {
      acc[tx.dateGroup] = [];
    }
    acc[tx.dateGroup].push(tx);
    return acc;
  }, {} as Record<string, typeof INITIAL_TRANSACTIONS>);

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-[#f9faf5] relative">
      <StatusBar style="dark" />

      {/* Header Bar */}
      <View className="flex-row justify-between items-center px-5 h-[60px] bg-[#f9faf5]/90 z-10">
        <View className="flex-row items-center">
          <Text className="text-xl font-black color-[#153328] mr-2">ruang.</Text>
          <Text className="text-[11px] font-bold tracking-widest color-[#414844]">
            MEMBER
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="w-10 h-10 justify-center items-center">
            <MaterialIcons name="notifications-none" size={24} color="#1a1c19" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/profile" as any)}>
            <View className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" }}
                className="w-full h-full"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content Area */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 110 }}
        showsVerticalScrollIndicator={false}
        className="px-5 pt-2"
      >
        {/* 1. arus kas transakasi saya */}
        <View className="w-full bg-[#153328] rounded-[24px] p-5 mb-5 relative overflow-hidden">
          <View className="flex-row items-center justify-between mb-4 z-10">
            <View className="flex-row items-center bg-black/40 px-3 py-1 rounded-full">
              <View className="w-2 h-2 rounded-full bg-[#cced4b] mr-2" />
              <Text className="text-[10px] font-extrabold color-[#cced4b] tracking-widest">
                ARUS KAS BULAN INI
              </Text>
            </View>
            <Text className="text-xs color-[#adcebe]">Okt 2026</Text>
          </View>

          {/* fitur utama saya */}
          <View className="mb-4 z-10">
            <Text className="text-xs color-[#adcebe]">Surplus Arus Kas Bersih</Text>
            <View className="flex-row items-baseline gap-1 mt-0.5">
              <Text className="text-[28px] font-black color-[#cced4b]">
                +Rp 8.930.000
              </Text>
              <Text className="text-xs color-[#adcebe]">(Sehat)</Text>
            </View>
          </View>

          {/* Perbandingan Pengeluaran vs Pemasukan */}
          <View className="flex-row bg-black/25 rounded-xl p-3 mb-4 z-10">
            <View className="flex-1">
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="arrow-downward" size={14} color="#ffb4a6" />
                <Text className="text-xs color-[#adcebe]">Pengeluaran</Text>
              </View>
              <Text className="text-base font-bold color-white mt-0.5">
                Rp 5.570.000
              </Text>
              <Text className="text-[11px] color-[#cced4b] mt-0.5">
                -18% vs lalu
              </Text>
            </View>

            <View className="w-[1px] bg-white/10 mx-2" />

            <View className="flex-1 pl-2">
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="arrow-upward" size={14} color="#cced4b" />
                <Text className="text-xs color-[#adcebe]">Pemasukan</Text>
              </View>
              <Text className="text-base font-bold color-white mt-0.5">
                Rp 14.500.000
              </Text>
              <Text className="text-[11px] color-[#adcebe] mt-0.5">
                Dari 3 sumber
              </Text>
            </View>
          </View>

          {/* Rasio Progress Bar */}
          <View className="mb-4 z-10">
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-[10px] color-[#adcebe]">
                Rasio Pengeluaran (38.4%)
              </Text>
              <Text className="text-[10px] color-[#adcebe]">
                Kapasitas Tabungan (61.6%)
              </Text>
            </View>
            <View className="w-full h-2 bg-black/40 rounded-full overflow-hidden flex-row">
              <View className="h-full bg-[#b3d331]" style={{ width: "38.4%" }} />
              <View className="h-full bg-[#cced4b]" style={{ width: "61.6%" }} />
            </View>
          </View>

          {/* Action tombol dalam Banner */}
          <View className="flex-row gap-2 z-10">
            <TouchableOpacity className="flex-1 h-11 bg-black/40 rounded-xl flex-row justify-center items-center gap-1.5">
              <MaterialIcons name="file-download" size={18} color="#cced4b" />
              <Text className="text-xs font-bold color-white">Unduh Rekap</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 h-11 bg-[#cced4b] rounded-xl flex-row justify-center items-center gap-1.5">
              <MaterialIcons name="tune" size={18} color="#153328" />
              <Text className="text-xs font-bold color-[#153328]">Atur Budget</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 2. aksi fast */}
        <View className="flex-row gap-2 mb-5">
          <QuickActionButton icon="send" label="Kirim Uang" highlight />
          <QuickActionButton icon="request-quote" label="Minta Dana" />
          <QuickActionButton icon="qr-code-scanner" label="Bayar & QRIS" />
          <QuickActionButton icon="account-balance-wallet" label="Tarik Saldo" />
        </View>

        {/* 3. Search & Filter Bar */}
        <View className="mb-4 gap-3">
          {/* Input Search */}
          <View className="relative w-full flex-row items-center bg-white rounded-xl px-3.5 h-12 border border-[#ECEEE5] shadow-sm">
            <MaterialIcons name="search" size={20} color="#727974" />
            <TextInput
              placeholder="Cari transaksi, merchant, referensi..."
              placeholderTextColor="#727974"
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="flex-1 ml-2.5 h-full text-xs color-[#1a1c19]"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <MaterialIcons name="close" size={18} color="#414844" />
              </TouchableOpacity>
            )}
          </View>

          {/* Horizontal Scrollable Filter Chips */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 6 }}
          >
            {FILTER_CHIPS.map((chip) => {
              const isActive = selectedFilter === chip.key;
              return (
                <TouchableOpacity
                  key={chip.key}
                  onPress={() => setSelectedFilter(chip.key)}
                  className={`px-3.5 py-2 rounded-full border ${
                    isActive
                      ? "bg-[#153328] border-[#153328]"
                      : "bg-white border-[#ECEEE5]"
                  }`}
                >
                  <Text
                    className={`text-xs ${
                      isActive
                        ? "color-[#cced4b] font-bold"
                        : "color-[#414844] font-medium"
                    }`}
                  >
                    {chip.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* 4. Transaction List data per grub */}
        {Object.keys(groupedTransactions).length > 0 ? (
          Object.entries(groupedTransactions).map(([dateGroup, items]) => (
            <View key={dateGroup} className="mb-5 gap-2">
              <View className="flex-row justify-between items-center px-1">
                <Text className="text-[11px] font-bold tracking-wider color-[#727974]">
                  {dateGroup}
                </Text>
                <Text className="text-[11px] color-[#414844]">
                  {items.length} Transaksi
                </Text>
              </View>

              {items.map((tx) => (
                <View
                  key={tx.id}
                  className="flex-row justify-between items-center bg-white p-3.5 rounded-xl border border-[#ECEEE5] shadow-sm"
                >
                  <View className="flex-row items-center flex-1 mr-2">
                    <View
                      className={`w-11 h-11 rounded-xl justify-center items-center mr-3 ${
                        tx.isPositive ? "bg-[#153328]" : "bg-[#f3f4ef]"
                      }`}
                    >
                      <MaterialIcons
                        name={tx.icon as any}
                        size={22}
                        color={tx.isPositive ? "#cced4b" : "#1a1c19"}
                      />
                    </View>
                    <View className="flex-1">
                      <Text
                        className="text-sm font-bold color-[#1a1c19]"
                        numberOfLines={1}
                      >
                        {tx.title}
                      </Text>
                      <Text
                        className="text-xs color-[#414844] mt-0.5"
                        numberOfLines={1}
                      >
                        {tx.time} • {tx.category} • {tx.source}
                      </Text>
                    </View>
                  </View>

                  <View className="items-end">
                    <Text
                      className={`text-sm font-bold ${
                        tx.isPositive ? "color-[#536500]" : "color-[#1a1c19]"
                      }`}
                    >
                      {tx.amount}
                    </Text>
                    <View className="flex-row items-center gap-1 mt-0.5">
                      <View
                        className={`w-1.5 h-1.5 rounded-full ${
                          tx.isPositive ? "bg-[#cced4b]" : "bg-[#cced4b]"
                        }`}
                      />
                      <Text
                        className={`text-[11px] ${
                          tx.isPositive
                            ? "color-[#536500] font-bold"
                            : "color-[#536500]"
                        }`}
                      >
                        {tx.status}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))
        ) : (
          /* Empty State Search Fallback */
          <View className="bg-white rounded-2xl p-8 items-center justify-center my-4">
            <View className="w-12 h-12 rounded-full bg-[#f3f4ef] items-center justify-center mb-2">
              <MaterialIcons name="search-off" size={28} color="#727974" />
            </View>
            <Text className="text-base font-bold color-[#1a1c19]">
              Transaksi Tidak Ditemukan
            </Text>
            <Text className="text-xs color-[#414844] text-center mt-1">
              Coba gunakan kata kunci lain atau ubah filter kategori di atas.
            </Text>
          </View>
        )}

        {/* 5. Footer & Regulatory Info */}
        <View className="gap-3 mt-2">
          <View className="bg-[#f3f4ef] p-3.5 rounded-xl flex-row items-start gap-2.5">
            <MaterialIcons
              name="verified-user"
              size={20}
              color="#536500"
              style={{ marginTop: 2 }}
            />
            <Text className="flex-1 text-[11px] color-[#414844] leading-[16px]">
              Semua transaksi dilindungi sistem enkripsi mutakhir 256-bit dan diawasi
              oleh <Text className="font-bold color-[#1a1c19]">OJK & Bank Indonesia</Text>.
            </Text>
          </View>

          <View className="items-center py-3 gap-1">
            <Text className="text-[9px] font-extrabold color-[#414844] tracking-widest">
              — RUANG UNTUK TUMBUH, SETIAP HARI —
            </Text>
            <Text className="text-[11px] color-[#727974]">
              Versi 2.4.0 • Edisi Ruang Member
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
        className="flex-row justify-around items-center h-[80px] bg-[#f9faf5] pb-5 border-t border-[#f3f4ef] z-20"
      >
        <NavItem
          icon="grid-view"
          label="Beranda"
          onPress={() => router.push("/home" as any)}
        />
        <NavItem icon="swap-horiz" label="Transaksi" isActive onPress={() => {}} />
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

// Reusable Quick Action Button Component
function QuickActionButton({
  icon,
  label,
  highlight,
}: {
  icon: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <TouchableOpacity className="flex-1 items-center justify-center p-2.5 bg-white rounded-xl border border-[#ECEEE5] shadow-sm">
      <View
        className={`w-11 h-11 rounded-full items-center justify-center mb-1.5 ${
          highlight ? "bg-[#153328]" : "bg-[#f3f4ef]"
        }`}
      >
        <MaterialIcons
          name={icon as any}
          size={22}
          color={highlight ? "#cced4b" : "#1a1c19"}
        />
      </View>
      <Text className="text-[11px] font-semibold color-[#1a1c19] text-center" numberOfLines={1}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

// Reusable Bottom Navigation Item Component
function NavItem({
  icon,
  label,
  isActive,
  onPress,
}: {
  icon: string;
  label: string;
  isActive?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity className="items-center justify-center flex-1" onPress={onPress}>
      <MaterialIcons
        name={icon as any}
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
}