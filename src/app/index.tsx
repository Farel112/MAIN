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

export default function Index() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (!email.trim() || !password) {
      setMessage("Isi email dan kata sandi.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setMessage("Periksa kembali format alamat email kamu.");
      return;
    }
    router.replace("/home");
  }

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-[#F3F5EF]">
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
            {/* Hero Section */}
            <View className="min-h-[282px] px-7 pt-5 pb-[30px] bg-[#173A31] rounded-b-[30px] overflow-hidden relative">
              <View className="flex-row items-center h-10">
                <View className="w-[34px] h-[34px] border border-white/50 rounded-[11px] items-center justify-center -rotate-6">
                  <View className="w-3 h-3 bg-[#DDF06A] rounded-[3px]" />
                </View>
                <Text className="ml-2.5 color-white text-xl font-bold">ruang.</Text>
                <Text className="ml-auto color-[#C0D0C7] text-[9px] font-bold tracking-widest">
                  MEMBER SPACE
                </Text>
              </View>

              <View className="mt-7 max-w-[330px] z-10">
                <Text className="mb-2.5 color-[#DDF06A] text-[10px] font-bold tracking-widest">
                  SELAMAT DATANG KEMBALI
                </Text>
                <Text className="color-white text-[34px] leading-9 font-bold">
                  Senang melihatmu{"\n"}
                  <Text className="color-[#DDF06A]">lagi.</Text>
                </Text>
                <Text className="mt-2.5 max-w-[285px] color-[#C0D0C7] text-sm leading-[21px]">
                  Masuk dan lanjutkan hal baik yang sedang kamu bangun.
                </Text>
              </View>

              <View pointerEvents="none" className="absolute right-[23px] top-[99px] w-[94px] h-[138px] items-end">
                <Text className="color-white/10 text-[56px] leading-[65px] font-bold">01</Text>
                <View className="absolute right-[11px] top-[15px] w-[1px] h-[76px] bg-[#E78166] rotate-[30deg]" />
                <View className="absolute right-[3px] bottom-0 w-[38px] h-[38px] p-1.5 bg-[#DDF06A] rotate-[8deg] justify-between">
                  <View className="w-3 h-[3px] bg-[#173A31]" />
                  <View className="w-[24px] h-[3px] bg-[#173A31]" />
                </View>
              </View>
            </View>

            {/* Form Section */}
            <View className="flex-grow px-7 pt-7 pb-[22px]">
              <View className="mb-[22px]">
                <Text className="color-[#173A31] text-[22px] leading-[28px] font-bold">
                  Masuk ke akun
                </Text>
                <Text className="mt-1 color-[#77847C] text-sm">Senang kamu kembali.</Text>
              </View>

              {/* Email Field */}
              <View className="mb-[17px]">
                <Text className="mb-2 color-[#53655B] text-[10px] font-bold tracking-widest">
                  ALAMAT EMAIL
                </Text>
                <View
                  className={`min-h-[54px] flex-row items-center px-[15px] border rounded-xl bg-white ${
                    focusedField === "email" ? "border-[#295447]" : "border-[#DDE3DB]"
                  }`}
                >
                  <Text className="w-[22px] color-[#295447] text-lg font-semibold">@</Text>
                  <TextInput
                    autoCapitalize="none"
                    autoComplete="email"
                    keyboardType="email-address"
                    onBlur={() => setFocusedField(null)}
                    onChangeText={setEmail}
                    onFocus={() => setFocusedField("email")}
                    onSubmitEditing={() => setFocusedField("password")}
                    placeholder="nama@email.com"
                    placeholderTextColor="#8B958E"
                    returnKeyType="next"
                    className="flex-1 h-[52px] px-1 color-[#173A31] text-sm"
                    value={email}
                  />
                </View>
              </View>

              {/* Password Field */}
              <View className="mb-[17px]">
                <Text className="mb-2 color-[#53655B] text-[10px] font-bold tracking-widest">
                  KATA SANDI
                </Text>
                <View
                  className={`min-h-[54px] flex-row items-center px-[15px] border rounded-xl bg-white ${
                    focusedField === "password" ? "border-[#295447]" : "border-[#DDE3DB]"
                  }`}
                >
                  <Text className="w-[22px] color-[#295447] text-[10px]">◆</Text>
                  <TextInput
                    autoCapitalize="none"
                    autoComplete="current-password"
                    onBlur={() => setFocusedField(null)}
                    onChangeText={setPassword}
                    onFocus={() => setFocusedField("password")}
                    onSubmitEditing={handleSubmit}
                    placeholder="Masukkan kata sandi"
                    placeholderTextColor="#8B958E"
                    returnKeyType="done"
                    secureTextEntry={!showPassword}
                    className="flex-1 h-[52px] px-1 color-[#173A31] text-sm"
                    value={password}
                  />
                  <Pressable
                    onPress={() => setShowPassword((visible) => !visible)}
                    className="min-h-[44px] justify-center pl-2"
                  >
                    <Text className="color-[#295447] text-xs font-bold">
                      {showPassword ? "Tutup" : "Lihat"}
                    </Text>
                  </Pressable>
                </View>
              </View>

              {/* Options */}
              <View className="min-h-[28px] flex-row items-center justify-between mt-[-1px] mb-4">
                <Pressable
                  onPress={() => setRememberMe((checked) => !checked)}
                  className="min-h-[40px] flex-row items-center"
                >
                  <View
                    className={`w-[18px] h-[18px] items-center justify-center border rounded-[5px] ${
                      rememberMe ? "border-[#173A31] bg-[#173A31]" : "border-[#AAB5AC]"
                    }`}
                  >
                    {rememberMe && <Text className="color-white text-xs font-bold">✓</Text>}
                  </View>
                  <Text className="ml-2 color-[#53655B] text-xs">Ingat saya</Text>
                </Pressable>
                <Pressable
                  onPress={() => setMessage("Fitur lupa kata sandi belum tersedia.")}
                  hitSlop={8}
                >
                  <Text className="color-[#295447] text-xs font-bold">Lupa kata sandi?</Text>
                </Pressable>
              </View>

              {message ? (
                <Text className="mb-3 color-[#295447] text-xs leading-[18px]">
                  {message}
                </Text>
              ) : null}

              {/* Submit Button */}
              <Pressable
                onPress={handleSubmit}
                className="min-h-[54px] flex-row items-center justify-center rounded-xl bg-[#173A31] active:bg-[#295447] relative"
              >
                <Text className="color-white text-base font-bold">Masuk</Text>
                <Text className="absolute right-4.5 color-[#DDF06A] text-[22px]">→</Text>
              </Pressable>

              <View className="min-h-[52px] flex-row items-center justify-center gap-1.5">
                <Text className="color-[#77847C] text-xs">Belum punya akun?</Text>
                <Pressable
                  onPress={() => {
                    setMessage("");
                    router.push("/registrasi" as any);
                  }}
                  hitSlop={8}
                >
                  <Text className="color-[#295447] text-xs font-bold">Daftar sekarang</Text>
                </Pressable>
              </View>

              <View className="flex-row items-center justify-center mt-auto pt-[15px]">
                <View className="w-5 h-[2px] mr-2 bg-[#E78166]" />
                <Text className="color-[#89958C] text-[9px] font-bold tracking-widest">
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