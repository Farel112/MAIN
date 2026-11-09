import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Registrasi() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (!fullName.trim() || !email.trim() || !phone.trim() || !password || !confirmPassword) {
      setMessage("Harap lengkapi semua bidang isian.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setMessage("Periksa kembali format alamat email kamu.");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Konfirmasi kata sandi tidak cocok.");
      return;
    }
    if (!agreeTerms) {
      setMessage("Kamu harus menyetujui Syarat & Ketentuan.");
      return;
    }

    setMessage("");
    router.replace("/home");
  }

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-[#FAFBF7]">
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full max-w-[560px] self-center flex-grow">
            {/* Top Bar */}
            <View className="flex-row items-center justify-between px-5 py-3">
              <Pressable onPress={() => router.back()} className="p-1">
                <Text className="text-2xl color-[#163327] font-bold">‹</Text>
              </Pressable>
              <Text className="text-base font-bold color-[#163327]">daftar</Text>
              <View className="w-8 h-8 rounded-full bg-[#3B82F6] items-center justify-center">
                <Text className="text-sm color-white">👁</Text>
              </View>
            </View>

            {/* Hero Section */}
            <View className="min-h-[250px] px-6 pt-5 pb-6 bg-[#163327] rounded-[28px] mx-4 overflow-hidden relative">
              <View className="flex-row items-center h-9">
                <View className="w-[26px] h-[26px] border border-white/50 rounded-lg items-center justify-center -rotate-6">
                  <View className="w-2.5 h-2.5 bg-[#D2F543] rounded-[2px]" />
                </View>
                <Text className="ml-2 color-white text-lg font-extrabold">ruang.</Text>
                <Text className="ml-auto color-white/60 text-[9px] font-bold tracking-widest">
                  MEMBER SPACE
                </Text>
              </View>

              <View className="mt-5.5 max-w-[300px] z-10">
                <Text className="mb-2 color-[#D2F543] text-[10px] font-extrabold tracking-widest">
                  MULAI LANGKAH BARU
                </Text>
                <Text className="color-white text-[28px] leading-8 font-extrabold">
                  Mulai ruang untuk{"\n"}masa depanmu.
                </Text>
                <Text className="mt-2 color-white/75 text-xs leading-[18px]">
                  Daftarkan akun dan kelola finansial secara terarah bersama ruang.
                </Text>
              </View>

              <View pointerEvents="none" className="absolute right-[20px] top-[80px] w-[90px] h-[130px] items-end">
                <Text className="color-white/10 text-[60px] leading-[68px] font-black">02</Text>
                <View className="absolute right-[10px] top-[15px] w-[1px] h-[70px] bg-[#E78166] rotate-[30deg]" />
                <View className="absolute right-[3px] bottom-[10px] w-9 h-9 p-1.5 bg-[#D2F543] rounded-lg rotate-[6deg] justify-between">
                  <View className="w-3 h-[3px] bg-[#163327]" />
                  <View className="w-[20px] h-[3px] bg-[#163327]" />
                </View>
              </View>
            </View>

            {/* Form Section */}
            <View className="flex-grow px-6 pt-6 pb-[22px]">
              <View className="mb-[20px]">
                <Text className="color-[#163327] text-[22px] font-extrabold">Daftar akun</Text>
                <Text className="mt-1 color-[#64748B] text-xs">
                  Isi data berikut untuk memulai perjalananmu.
                </Text>
              </View>

              {/* Input Nama Lengkap */}
              <View className="mb-[14px]">
                <Text className="mb-[6px] color-[#163327] text-[10px] font-extrabold tracking-widest">
                  NAMA LENGKAP
                </Text>
                <View
                  className={`min-h-[50px] flex-row items-center px-[14px] border rounded-[16px] bg-white ${
                    focusedField === "fullName" ? "border-[#163327]" : "border-[#ECEEE5]"
                  }`}
                >
                  <Text className="w-[22px] text-xs">👤</Text>
                  <TextInput
                    autoCapitalize="words"
                    onBlur={() => setFocusedField(null)}
                    onChangeText={setFullName}
                    onFocus={() => setFocusedField("fullName")}
                    placeholder="contoh: Amanda Putri"
                    placeholderTextColor="#67756B"
                    returnKeyType="next"
                    className="flex-1 h-[48px] px-1 color-[#163327] text-sm"
                    value={fullName}
                  />
                </View>
              </View>

              {/* Input Email */}
              <View className="mb-[14px]">
                <Text className="mb-[6px] color-[#163327] text-[10px] font-extrabold tracking-widest">
                  ALAMAT EMAIL
                </Text>
                <View
                  className={`min-h-[50px] flex-row items-center px-[14px] border rounded-[16px] bg-white ${
                    focusedField === "email" ? "border-[#163327]" : "border-[#ECEEE5]"
                  }`}
                >
                  <Text className="w-[22px] color-[#163327] text-sm font-bold">@</Text>
                  <TextInput
                    autoCapitalize="none"
                    autoComplete="email"
                    keyboardType="email-address"
                    onBlur={() => setFocusedField(null)}
                    onChangeText={setEmail}
                    onFocus={() => setFocusedField("email")}
                    placeholder="nama@email.com"
                    placeholderTextColor="#67756B"
                    returnKeyType="next"
                    className="flex-1 h-[48px] px-1 color-[#163327] text-sm"
                    value={email}
                  />
                </View>
              </View>

              {/* Input Nomor Ponsel */}
              <View className="mb-[14px]">
                <Text className="mb-[6px] color-[#163327] text-[10px] font-extrabold tracking-widest">
                  NOMOR PONSEL
                </Text>
                <View
                  className={`min-h-[50px] flex-row items-center px-[14px] border rounded-[16px] bg-white ${
                    focusedField === "phone" ? "border-[#163327]" : "border-[#ECEEE5]"
                  }`}
                >
                  <Text className="w-[22px] text-xs">📱</Text>
                  <TextInput
                    keyboardType="phone-pad"
                    onBlur={() => setFocusedField(null)}
                    onChangeText={setPhone}
                    onFocus={() => setFocusedField("phone")}
                    placeholder="0812 3456 7890"
                    placeholderTextColor="#67756B"
                    returnKeyType="next"
                    className="flex-1 h-[48px] px-1 color-[#163327] text-sm"
                    value={phone}
                  />
                </View>
              </View>

              {/* Input Kata Sandi */}
              <View className="mb-[14px]">
                <Text className="mb-[6px] color-[#163327] text-[10px] font-extrabold tracking-widest">
                  KATA SANDI
                </Text>
                <View
                  className={`min-h-[50px] flex-row items-center px-[14px] border rounded-[16px] bg-white ${
                    focusedField === "password" ? "border-[#163327]" : "border-[#ECEEE5]"
                  }`}
                >
                  <Text className="w-[22px] color-[#163327] text-[10px]">◆</Text>
                  <TextInput
                    autoCapitalize="none"
                    onBlur={() => setFocusedField(null)}
                    onChangeText={setPassword}
                    onFocus={() => setFocusedField("password")}
                    placeholder="Buat kata sandi baru"
                    placeholderTextColor="#67756B"
                    returnKeyType="next"
                    secureTextEntry={!showPassword}
                    className="flex-1 h-[48px] px-1 color-[#163327] text-sm"
                    value={password}
                  />
                  <Pressable
                    onPress={() => setShowPassword((v) => !v)}
                    className="min-h-[40px] justify-center pl-2"
                  >
                    <Text className="color-[#163327] text-xs font-bold">
                      {showPassword ? "Tutup" : "Lihat"}
                    </Text>
                  </Pressable>
                </View>
              </View>

              {/* Konfirmasi Kata Sandi */}
              <View className="mb-[14px]">
                <Text className="mb-[6px] color-[#163327] text-[10px] font-extrabold tracking-widest">
                  KONFIRMASI KATA SANDI
                </Text>
                <View
                  className={`min-h-[50px] flex-row items-center px-[14px] border rounded-[16px] bg-white ${
                    focusedField === "confirmPassword" ? "border-[#163327]" : "border-[#ECEEE5]"
                  }`}
                >
                  <Text className="w-[22px] color-[#163327] text-[10px]">◆</Text>
                  <TextInput
                    autoCapitalize="none"
                    onBlur={() => setFocusedField(null)}
                    onChangeText={setConfirmPassword}
                    onFocus={() => setFocusedField("confirmPassword")}
                    placeholder="Ulangi kata sandi"
                    placeholderTextColor="#67756B"
                    returnKeyType="done"
                    secureTextEntry={!showConfirmPassword}
                    className="flex-1 h-[48px] px-1 color-[#163327] text-sm"
                    value={confirmPassword}
                  />
                  <Pressable
                    onPress={() => setShowConfirmPassword((v) => !v)}
                    className="min-h-[40px] justify-center pl-2"
                  >
                    <Text className="color-[#163327] text-xs font-bold">
                      {showConfirmPassword ? "Tutup" : "Lihat"}
                    </Text>
                  </Pressable>
                </View>
              </View>

              {/* Terms Checkbox */}
              <View className="flex-row items-start mt-1 mb-3">
                <Pressable
                  onPress={() => setAgreeTerms((checked) => !checked)}
                  className="min-h-[36px] justify-center mr-2"
                >
                  <View
                    className={`w-[18px] h-[18px] items-center justify-center border rounded-[5px] mt-[1px] ${
                      agreeTerms ? "border-[#163327] bg-[#163327]" : "border-[#CBD5E1]"
                    }`}
                  >
                    {agreeTerms && <Text className="color-white text-[11px] font-bold">✓</Text>}
                  </View>
                </Pressable>
                <Text className="flex-1 color-[#475569] text-xs leading-[18px]">
                  Saya menyetujui{" "}
                  <Text className="font-bold color-[#163327] underline">Syarat & Ketentuan</Text>{" "}
                  serta{" "}
                  <Text className="font-bold color-[#163327] underline">Kebijakan Privasi</Text>{" "}
                  ruang.
                </Text>
              </View>

              {message ? <Text className="mb-3 color-[#DC2626] text-xs">{message}</Text> : null}

              <Text className="color-[#64748B] text-[11px] mb-3">
                Lengkapi data di atas untuk melanjutkan registrasi.
              </Text>

              {/* Submit Button */}
              <Pressable
                onPress={handleSubmit}
                className="min-h-[52px] flex-row items-center justify-center rounded-[16px] bg-[#163327] active:bg-[#1A382C] mt-1 relative"
              >
                <Text className="color-white text-base font-bold">Daftar Sekarang</Text>
                <Text className="absolute right-4.5 color-[#D2F543] text-xl">→</Text>
              </Pressable>

              <View className="min-h-[48px] flex-row items-center justify-center gap-1.5 mt-3">
                <Text className="color-[#64748B] text-xs">Sudah punya akun?</Text>
                <Pressable onPress={() => router.back()} hitSlop={8}>
                  <Text className="color-[#163327] text-xs font-bold">Masuk sekarang</Text>
                </Pressable>
              </View>

              <View className="flex-row items-center justify-center mt-6 pt-3">
                <View className="w-5 h-[2px] mr-2 bg-[#E78166]" />
                <Text className="color-[#94A3B8] text-[9px] font-extrabold tracking-widest">
                  RUANG UNTUK TUMBUH, SETIAP HARI
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}