import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (!email.trim() || !password) {
      setMessage("Isi email dan kata sandi untuk melanjutkan.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setMessage("Periksa kembali format alamat email kamu.");
      return;
    }

    setMessage("Tampilan ini belum terhubung ke layanan autentikasi.");
  }

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.paper} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.page}>
            <View style={styles.hero}>
              <View style={styles.brandRow}>
                <View style={styles.brandMark}>
                  <View style={styles.brandMarkInner} />
                </View>
                <Text style={styles.brandName}>ruang.</Text>
                <Text style={styles.brandTag}>MEMBER SPACE</Text>
              </View>

              <View style={styles.heroCopy}>
                <Text style={styles.eyebrow}>SELAMAT DATANG KEMBALI</Text>
                <Text style={styles.title}>
                  Senang melihatmu{"\n"}
                  <Text style={styles.titleAccent}>lagi.</Text>
                </Text>
                <Text style={styles.subtitle}>
                  Masuk dan lanjutkan hal baik yang sedang kamu bangun.
                </Text>
              </View>

              <View pointerEvents="none" style={styles.heroArtwork}>
                <Text style={styles.artworkNumber}>01</Text>
                <View style={styles.artworkRule} />
                <View style={styles.artworkTile}>
                  <View style={styles.artworkTileTop} />
                  <View style={styles.artworkTileBottom} />
                </View>
              </View>
            </View>

            <View style={styles.formSection}>
              <View style={styles.formHeading}>
                <Text style={styles.formTitle}>Masuk ke akun</Text>
                <Text style={styles.formHint}>Senang kamu kembali.</Text>
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>ALAMAT EMAIL</Text>
                <View
                  style={[
                    styles.inputShell,
                    focusedField === "email" && styles.inputShellFocused,
                  ]}
                >
                  <Text style={styles.inputPrefix}>@</Text>
                  <TextInput
                    autoCapitalize="none"
                    autoComplete="email"
                    keyboardType="email-address"
                    onBlur={() => setFocusedField(null)}
                    onChangeText={setEmail}
                    onFocus={() => setFocusedField("email")}
                    onSubmitEditing={() => setFocusedField("password")}
                    placeholder="nama@email.com"
                    placeholderTextColor={colors.muted}
                    returnKeyType="next"
                    style={styles.input}
                    value={email}
                  />
                </View>
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>KATA SANDI</Text>
                <View
                  style={[
                    styles.inputShell,
                    focusedField === "password" && styles.inputShellFocused,
                  ]}
                >
                  <Text style={styles.lockMark}>◆</Text>
                  <TextInput
                    autoCapitalize="none"
                    autoComplete="current-password"
                    onBlur={() => setFocusedField(null)}
                    onChangeText={setPassword}
                    onFocus={() => setFocusedField("password")}
                    onSubmitEditing={handleSubmit}
                    placeholder="Masukkan kata sandi"
                    placeholderTextColor={colors.muted}
                    returnKeyType="done"
                    secureTextEntry={!showPassword}
                    style={styles.input}
                    value={password}
                  />
                  <Pressable
                    accessibilityLabel={
                      showPassword ? "Sembunyikan kata sandi" : "Lihat kata sandi"
                    }
                    accessibilityRole="button"
                    onPress={() => setShowPassword((visible) => !visible)}
                    style={styles.visibilityButton}
                  >
                    <Text style={styles.visibilityText}>
                      {showPassword ? "Tutup" : "Lihat"}
                    </Text>
                  </Pressable>
                </View>
              </View>

              <View style={styles.formOptions}>
                <Pressable
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: rememberMe }}
                  onPress={() => setRememberMe((checked) => !checked)}
                  style={styles.rememberButton}
                >
                  <View
                    style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
                  >
                    {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                  <Text style={styles.rememberText}>Ingat saya</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => setMessage("Fitur lupa kata sandi belum tersedia.")}
                  hitSlop={8}
                >
                  <Text style={styles.forgotText}>Lupa kata sandi?</Text>
                </Pressable>
              </View>

              {message ? (
                <Text style={styles.message} accessibilityLiveRegion="polite">
                  {message}
                </Text>
              ) : null}

              <Pressable
                accessibilityRole="button"
                onPress={handleSubmit}
                style={({ pressed }) => [
                  styles.submitButton,
                  pressed && styles.submitButtonPressed,
                ]}
              >
                <Text style={styles.submitText}>Masuk</Text>
                <Text style={styles.submitArrow}>→</Text>
              </Pressable>

              <View style={styles.signupRow}>
                <Text style={styles.signupPrompt}>Belum punya akun?</Text>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => setMessage("Pendaftaran akun belum tersedia.")}
                  hitSlop={8}
                >
                  <Text style={styles.signupLink}>Daftar sekarang</Text>
                </Pressable>
              </View>

              <View style={styles.footer}>
                <View style={styles.footerLine} />
                <Text style={styles.footerText}>RUANG UNTUK TUMBUH, SETIAP HARI</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const colors = {
  paper: "#F3F5EF",
  ink: "#173A31",
  forest: "#173A31",
  forestLight: "#295447",
  muted: "#8B958E",
  lime: "#DDF06A",
  coral: "#E78166",
  line: "#DDE3DB",
  white: "#FFFFFF",
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  page: {
    width: "100%",
    maxWidth: 560,
    alignSelf: "center",
    flexGrow: 1,
  },
  hero: {
    minHeight: 282,
    paddingHorizontal: 28,
    paddingTop: 22,
    paddingBottom: 30,
    backgroundColor: colors.forest,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 42,
  },
  brandMark: {
    width: 34,
    height: 34,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.48)",
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-8deg" }],
  },
  brandMarkInner: {
    width: 12,
    height: 12,
    backgroundColor: colors.lime,
    borderRadius: 3,
  },
  brandName: {
    marginLeft: 10,
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0,
  },
  brandTag: {
    marginLeft: "auto",
    color: "#C0D0C7",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.1,
  },
  heroCopy: {
    marginTop: 28,
    maxWidth: 330,
    zIndex: 1,
  },
  eyebrow: {
    marginBottom: 10,
    color: colors.lime,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.4,
  },
  title: {
    color: colors.white,
    fontSize: 34,
    lineHeight: 38,
    fontWeight: "700",
    letterSpacing: 0,
  },
  titleAccent: {
    color: colors.lime,
  },
  subtitle: {
    marginTop: 10,
    maxWidth: 285,
    color: "#C0D0C7",
    fontSize: 14,
    lineHeight: 21,
  },
  heroArtwork: {
    position: "absolute",
    right: 23,
    top: 99,
    width: 94,
    height: 138,
    alignItems: "flex-end",
  },
  artworkNumber: {
    color: "rgba(255,255,255,0.09)",
    fontSize: 56,
    lineHeight: 65,
    fontWeight: "700",
  },
  artworkRule: {
    position: "absolute",
    right: 11,
    top: 15,
    width: 1,
    height: 76,
    backgroundColor: colors.coral,
    transform: [{ rotate: "30deg" }],
  },
  artworkTile: {
    position: "absolute",
    right: 3,
    bottom: 0,
    width: 38,
    height: 38,
    padding: 6,
    backgroundColor: colors.lime,
    transform: [{ rotate: "8deg" }],
    justifyContent: "space-between",
  },
  artworkTileTop: {
    width: 12,
    height: 3,
    backgroundColor: colors.forest,
  },
  artworkTileBottom: {
    width: 24,
    height: 3,
    backgroundColor: colors.forest,
  },
  formSection: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 27,
    paddingBottom: 22,
  },
  formHeading: {
    marginBottom: 22,
  },
  formTitle: {
    color: colors.ink,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "700",
    letterSpacing: 0,
  },
  formHint: {
    marginTop: 3,
    color: "#77847C",
    fontSize: 14,
  },
  fieldGroup: {
    marginBottom: 17,
  },
  fieldLabel: {
    marginBottom: 8,
    color: "#53655B",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.1,
  },
  inputShell: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  inputShellFocused: {
    borderColor: colors.forestLight,
  },
  inputPrefix: {
    width: 22,
    color: colors.forestLight,
    fontSize: 17,
    fontWeight: "600",
  },
  lockMark: {
    width: 22,
    color: colors.forestLight,
    fontSize: 10,
  },
  input: {
    flex: 1,
    height: 52,
    paddingHorizontal: 3,
    color: colors.ink,
    fontSize: 14,
  },
  visibilityButton: {
    minHeight: 44,
    justifyContent: "center",
    paddingLeft: 8,
  },
  visibilityText: {
    color: colors.forestLight,
    fontSize: 12,
    fontWeight: "700",
  },
  formOptions: {
    minHeight: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: -1,
    marginBottom: 16,
  },
  rememberButton: {
    minHeight: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#AAB5AC",
    borderRadius: 5,
  },
  checkboxChecked: {
    borderColor: colors.forest,
    backgroundColor: colors.forest,
  },
  checkmark: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "700",
  },
  rememberText: {
    marginLeft: 8,
    color: "#53655B",
    fontSize: 12,
  },
  forgotText: {
    color: colors.forestLight,
    fontSize: 12,
    fontWeight: "700",
  },
  message: {
    marginBottom: 12,
    color: colors.forestLight,
    fontSize: 12,
    lineHeight: 18,
  },
  submitButton: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: colors.forest,
  },
  submitButtonPressed: {
    backgroundColor: colors.forestLight,
  },
  submitText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
  },
  submitArrow: {
    position: "absolute",
    right: 18,
    color: colors.lime,
    fontSize: 22,
    lineHeight: 26,
  },
  signupRow: {
    minHeight: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  signupPrompt: {
    color: "#77847C",
    fontSize: 12,
  },
  signupLink: {
    color: colors.forestLight,
    fontSize: 12,
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    paddingTop: 15,
  },
  footerLine: {
    width: 20,
    height: 2,
    marginRight: 8,
    backgroundColor: colors.coral,
  },
  footerText: {
    color: "#89958C",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
