import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-[#f9faf5] relative">
      <StatusBar style="dark" />

      {/* Header Bar */}
      <View className="flex-row justify-between items-center px-5 h-[56px] bg-[#f9faf5] z-10">
        <View className="flex-row items-center">
          <Text className="text-xl font-black color-[#153328] mr-2">ruang.</Text>
          <Text className="text-[11px] font-bold tracking-widest color-[#414844]">
            MEMBER
          </Text>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity className="w-10 h-10 justify-center items-center mr-1">
            <MaterialIcons name="notifications-none" size={24} color="#1a1c19" />
          </TouchableOpacity>
          <View className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" }}
              className="w-full h-full"
            />
          </View>
        </View>
      </View>

      {/* Scrollable Content Area */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 110 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Member Hero Card */}
        <View className="bg-[#153328] rounded-b-[28px] px-5 pt-4 pb-6 relative overflow-hidden">
          <Text className="absolute -right-2.5 -top-[20px] text-[130px] font-black color-white/5">
            01
          </Text>

          {/* Tier & Verification Header */}
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center bg-white/10 px-2.5 py-1 rounded-full">
              <View className="w-1.5 h-1.5 rounded-full bg-[#cff04d] mr-1.5" />
              <Text className="text-[10px] font-extrabold color-[#cff04d] tracking-widest">
                MEMBER UTAMA
              </Text>
            </View>

            <View className="flex-row items-center bg-white/15 px-2.5 py-1 rounded-full">
              <MaterialIcons name="verified" size={14} color="#cff04d" />
              <Text className="text-[11px] color-white ml-1 font-semibold">
                KYC Terverifikasi
              </Text>
            </View>
          </View>

          {/* Identity Core */}
          <View className="flex-row items-center">
            <View className="relative mr-3.5">
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" }}
                className="w-[64px] h-[64px] rounded-[20px]"
              />
              <View className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#cff04d] items-center justify-center">
                <MaterialIcons name="check" size={12} color="#153328" />
              </View>
            </View>

            <View className="flex-1">
              <Text className="text-xl font-extrabold color-white">Fariel</Text>
              <View className="flex-row items-center mt-0.5">
                <Text className="text-xs font-bold color-[#cff04d]">@fariel</Text>
                <Text className="color-white/40 mx-1">•</Text>
                <Text className="text-xs color-white/80">fariel@ruang.id</Text>
              </View>
              <Text className="text-xs color-white/70 mt-0.5">+62 812-3456-7890</Text>
            </View>
          </View>

          {/* Quick Stats Pill */}
          <View className="flex-row justify-between items-center bg-black/20 rounded-[14px] px-3.5 py-2.5 mt-4">
            <View className="flex-row items-center">
              <MaterialIcons name="workspace-premium" size={18} color="#cff04d" />
              <Text className="text-xs color-white/90 ml-1.5">Bergabung Oktober 2026</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-[10px] font-extrabold color-white/70 tracking-widest mr-1.5">
                SKOR
              </Text>
              <View className="bg-[#cff04d]/15 px-2 py-0.5 rounded">
                <Text className="text-xs font-bold color-[#cff04d]">840 (Sehat)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Content Section Container */}
        <View className="px-5 pt-5">
          {/* Card Portfolio Terhubung */}
          <View className="bg-white rounded-[20px] p-4 mb-5 elevation-sm shadow-black/5">
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <View className="w-[34px] h-[34px] rounded-lg bg-[#f3f4ef] items-center justify-center mr-[10px]">
                  <MaterialIcons name="account-balance-wallet" size={18} color="#153328" />
                </View>
                <View>
                  <Text className="text-[10px] font-extrabold color-[#414844] tracking-widest">
                    PORTFOLIO TERHUBUNG
                  </Text>
                  <Text className="text-xs font-bold color-[#1a1c19] mt-0.5">
                    3 Bank & Dompet Digital
                  </Text>
                </View>
              </View>
              <View className="bg-[#cff04d]/30 px-2 py-1 rounded">
                <Text className="text-[11px] font-bold color-[#576a00]">Aktif</Text>
              </View>
            </View>

            {/* Bank Chips Strip */}
            <View className="flex-row gap-2 my-[14px]">
              <View className="flex-1 bg-[#f3f4ef] rounded-xl p-2.5">
                <Text className="text-[9px] font-extrabold color-[#414844]">BCA PRIORITAS</Text>
                <Text className="text-xs font-semibold color-[#1a1c19] mt-0.5">•••• 4892</Text>
              </View>
              <View className="flex-1 bg-[#f3f4ef] rounded-xl p-2.5">
                <Text className="text-[9px] font-extrabold color-[#414844]">BANK JAGO</Text>
                <Text className="text-xs font-semibold color-[#1a1c19] mt-0.5">•••• 1022</Text>
              </View>
              <View className="flex-1 bg-[#f3f4ef] rounded-xl p-2.5">
                <Text className="text-[9px] font-extrabold color-[#414844]">GOPAY PRO</Text>
                <Text className="text-xs font-semibold color-[#1a1c19] mt-0.5">Terkoneksi</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View className="flex-row gap-2.5">
              <TouchableOpacity className="flex-1 h-[44px] rounded-xl bg-[#e7e9e4] flex-row items-center justify-center gap-1.5">
                <MaterialIcons name="sync-alt" size={18} color="#1a1c19" />
                <Text className="text-xs font-bold color-[#1a1c19]">Kelola Akun</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 h-[44px] rounded-xl bg-[#cced4b] flex-row items-center justify-center gap-1.5">
                <MaterialIcons name="stars" size={18} color="#576a00" />
                <Text className="text-xs font-bold color-[#576a00]">Ruang Plus</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Section 1: Akun & Keamanan */}
          <View className="mb-[18px]">
            <View className="flex-row justify-between items-center mb-1.5">
              <Text className="text-[11px] font-extrabold color-[#414844] tracking-widest pl-1">
                AKUN & KEAMANAN
              </Text>
              <Text className="text-xs font-bold color-[#153328]">Tingkat 3 (Maksimal)</Text>
            </View>

            <View className="bg-white rounded-[20px] overflow-hidden">
              <MenuItem
                icon="badge"
                title="Data Diri & NIK"
                subtitle="KTP terdaftar, alamat domisili"
              />
              <View className="h-[1px] bg-[#f3f4ef] mx-4" />
              <MenuItem
                icon="fingerprint"
                title="PIN Transaksi & Biometrik"
                subtitle="Face ID aktif, 6-digit PIN terproteksi"
                showActiveDot
              />
              <View className="h-[1px] bg-[#f3f4ef] mx-4" />
              <MenuItem
                icon="credit-card"
                title="Rekening Bank & E-Wallet"
                subtitle="Atur rekening pencairan & top up"
              />
            </View>
          </View>

          {/* Section 2: Finansial & Preferensi */}
          <View className="mb-[18px]">
            <Text className="text-[11px] font-extrabold color-[#414844] tracking-widest mb-1.5 pl-1">
              FINANSIAL & PREFERENSI
            </Text>
            <View className="bg-white rounded-[20px] overflow-hidden">
              <MenuItem
                icon="tune"
                title="Batas Transaksi Harian"
                subtitle="Rp100.000.000 / hari"
              />
              <View className="h-[1px] bg-[#f3f4ef] mx-4" />
              <MenuItem
                icon="donut-large"
                title="Ruang Target & Kategori Budget"
                subtitle="4 pos tabungan sedang berjalan"
              />
              <View className="h-[1px] bg-[#f3f4ef] mx-4" />
              <MenuItem
                icon="notifications-active"
                title="Notifikasi & Pengingat Rutin"
                subtitle="Push notification & ringkasan email"
              />
              <View className="h-[1px] bg-[#f3f4ef] mx-4" />
              <MenuItem
                icon="language"
                title="Bahasa & Wilayah"
                subtitle="Bahasa Indonesia (IDR)"
              />
            </View>
          </View>

          {/* Section 3: Bantuan & Hukum */}
          <View className="mb-[18px]">
            <Text className="text-[11px] font-extrabold color-[#414844] tracking-widest mb-1.5 pl-1">
              DUKUNGAN & HUKUM
            </Text>
            <View className="bg-white rounded-[20px] overflow-hidden">
              <MenuItem
                icon="support-agent"
                title="Bantuan & Tanya Tim ruang."
                subtitle="Respon rata-rata di bawah 2 menit"
                rightBadge="24/7"
              />
              <View className="h-[1px] bg-[#f3f4ef] mx-4" />
              <MenuItem
                icon="policy"
                title="Syarat & Kebijakan Privasi"
                subtitle="Perlindungan data terenkripsi AES-256"
              />
              <View className="h-[1px] bg-[#f3f4ef] mx-4" />
              <View className="flex-row items-center bg-[#f3f4ef] p-3.5 gap-2.5">
                <MaterialIcons name="verified-user" size={20} color="#153328" />
                <Text className="flex-1 text-[11px] color-[#414844] leading-[16px]">
                  Diawasi dan terdaftar sesuai regulasi Bank Indonesia & Otoritas Jasa Keuangan (OJK).
                </Text>
              </View>
            </View>
          </View>

          {/* Tombol Keluar */}
          <TouchableOpacity
            className="h-[50px] rounded-2xl bg-[#ba1a1a]/10 flex-row items-center justify-center gap-2 mt-2"
            onPress={() => router.replace("/" as any)}
          >
            <MaterialIcons name="logout" size={20} color="#ba1a1a" />
            <Text className="text-sm font-bold color-[#ba1a1a]">Keluar dari Akun</Text>
          </TouchableOpacity>

          {/* Footer Slogan */}
          <View className="items-center mt-6 gap-1">
            <Text className="text-[9px] font-extrabold color-[#414844] tracking-widest">
              — RUANG UNTUK TUMBUH, SETIAP HARI —
            </Text>
            <Text className="text-[11px] color-[#727974]">
              Versi 2.4.0 • Edisi Ruang Member
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
        className="flex-row justify-around items-center h-[80px] bg-[#f9faf5] pb-5 border-t border-[#f3f4ef] z-20"
      >
        <NavItem
          icon="grid-view"
          label="Beranda"
          onPress={() => router.push("/home" as any)}
        />
        <NavItem
          icon="swap-horiz"
          label="Transaksi"
          onPress={() => router.push("/transaksi" as any)}
        />
        <NavItem icon="track-changes" label="Target" onPress={() => {}} />
        <NavItem icon="menu-book" label="Edukasi" onPress={() => {}} />
        <NavItem icon="account-circle" label="Akun" isActive onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

// Menu Item Component
interface MenuItemProps {
  icon: any;
  title: string;
  subtitle: string;
  showActiveDot?: boolean;
  rightBadge?: string;
  onPress?: () => void;
}

const MenuItem = ({
  icon,
  title,
  subtitle,
  showActiveDot,
  rightBadge,
  onPress,
}: MenuItemProps) => (
  <TouchableOpacity className="flex-row justify-between items-center px-4 py-[14px]" onPress={onPress}>
    <View className="flex-row items-center flex-1 mr-3">
      <View className="w-9 h-9 rounded-xl bg-[#f3f4ef] items-center justify-center mr-3">
        <MaterialIcons name={icon} size={20} color="#153328" />
      </View>
      <View className="flex-1">
        <Text className="text-xs font-bold color-[#1a1c19]">{title}</Text>
        <Text className="text-[11px] color-[#414844] mt-0.5">{subtitle}</Text>
      </View>
    </View>
    <View className="flex-row items-center gap-1.5">
      {showActiveDot && <View className="w-2 h-2 rounded-full bg-[#cff04d]" />}
      {rightBadge && (
        <View className="bg-[#cff04d]/25 px-2 py-0.5 rounded">
          <Text className="text-[11px] font-bold color-[#576a00]">{rightBadge}</Text>
        </View>
      )}
      <MaterialIcons name="chevron-right" size={22} color="#727974" />
    </View>
  </TouchableOpacity>
);

// Navigation Item Component
interface NavItemProps {
  icon: any;
  label: string;
  isActive?: boolean;
  onPress?: () => void;
}

const NavItem = ({ icon, label, isActive, onPress }: NavItemProps) => (
  <TouchableOpacity className="items-center justify-center flex-1" onPress={onPress}>
    <MaterialIcons
      name={icon}
      size={24}
      color={isActive ? "#153328" : "#414844"}
    />
    <Text
      className={`text-[11px] mt-1 ${
        isActive ? "#153328 font-bold" : "color-[#414844]"
      }`}
    >
      {label}
    </Text>
  </TouchableOpacity>
);