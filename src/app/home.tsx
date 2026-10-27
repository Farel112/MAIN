import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

const colors = {
  surface: '#f9faf5',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f3f4ef',
  surfaceContainerHigh: '#e7e9e4',
  onSurface: '#1a1c19',
  onSurfaceVariant: '#414844',
  outline: '#727974',
  primaryContainer: '#153328',
  onPrimary: '#ffffff',
  secondaryContainer: '#cced4b',
  onSecondaryContainer: '#576a00',
  secondaryFixed: '#cff04d',
  primaryFixedDim: '#adcebe',
  tertiaryFixed: '#ffdad4',
  tertiary: '#3b0200',
  error: '#ba1a1a',
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>ruang.</Text>
          </View>
          <Text style={styles.headerTitle}>MEMBER</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="notifications-none" size={24} color={colors.onSurface} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
              source={{ uri: 'https://via.placeholder.com/150' }} 
              style={styles.profilePic} 
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.welcomeBadge}>
            <View style={styles.pulseDot} />
            <Text style={styles.welcomeBadgeText}>SELAMAT DATANG KEMBALI</Text>
          </View>
          <Text style={styles.heroTitle}>Senang melihatmu lagi, Fariel.</Text>
          <Text style={styles.heroSubtitle}>Lanjutkan hal baik yang sedang kamu bangun bersama ruang.</Text>
        </View>

        {/* Ikhtisar Utama - Horizontal Scroll */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitleOverline}>IKHTISAR UTAMA</Text>
          <View style={styles.carouselDots}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.carouselContainer}
          snapToInterval={width * 0.85 + 16}
          decelerationRate="fast"
        >
          {/* Card 1: Saldo */}
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.cardHeaderLeft}>
                <View style={styles.iconBox}>
                  <MaterialIcons name="account-balance-wallet" size={20} color={colors.primaryContainer} />
                </View>
                <View>
                  <Text style={styles.cardOverline}>TOTAL SALDO</Text>
                  <Text style={styles.cardSubText}>3 rekening terhubung</Text>
                </View>
              </View>
              <View style={styles.trendBadge}>
                <MaterialIcons name="trending-up" size={14} color={colors.onSecondaryContainer} />
                <Text style={styles.trendText}>+12.4%</Text>
              </View>
            </View>
            <View style={styles.cardMiddle}>
              <Text style={styles.currencyText}>IDR</Text>
              <Text style={styles.balanceText}>Rp 42.850.000</Text>
            </View>
            <View style={styles.cardBottom}>
              <View style={styles.statusRow}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Arus kas optimal bulan ini</Text>
              </View>
              <MaterialIcons name="arrow-forward" size={18} color={colors.primaryContainer} />
            </View>
          </View>
        </ScrollView>

        {/* Riwayat Transaksi */}
        <View style={styles.contentSection}>
          <View style={styles.sectionHeaderRow}>
            <View>
              <Text style={styles.sectionTitle}>Riwayat Transaksi</Text>
              <Text style={styles.sectionSubtitle}>Aktivitas keuangan terbaru kamu</Text>
            </View>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
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
        <View style={styles.contentSection}>
          <View style={styles.insightHeader}>
            <View style={styles.insightIconBox}>
              <MaterialIcons name="lightbulb" size={16} color={colors.primaryContainer} />
            </View>
            <Text style={styles.sectionTitle}>Financial Insight</Text>
          </View>
          
          <View style={styles.insightCard}>
            <View style={styles.insightTopRow}>
              <Text style={styles.insightOverline}>ANALISIS BULAN INI</Text>
              <View style={styles.insightMonthBadge}>
                <Text style={styles.insightMonthText}>Oktober 2026</Text>
              </View>
            </View>
            <Text style={styles.insightBody}>
              Pengeluaran gaya hidupmu hemat <Text style={{color: colors.secondaryFixed, fontWeight: 'bold'}}>18%</Text> dibandingkan bulan lalu! Kamu siap menambah alokasi tabungan dana darurat.
            </Text>
            
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Pelajari Rincian Insight</Text>
              <MaterialIcons name="arrow-forward" size={18} color={colors.primaryContainer} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={{height: 100}} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem icon="grid-view" label="Beranda" isActive />
        <NavItem icon="swap-horiz" label="Transaksi" />
        <NavItem icon="track-changes" label="Target" />
        <NavItem icon="menu-book" label="Edukasi" />
        <NavItem icon="account-circle" label="Akun" />
      </View>
    </SafeAreaView>
  );
}

// ---------------------------------------------
// TYPESCRIPT INTERFACES
// ---------------------------------------------

interface TransactionItemProps {
  icon: any; 
  title: string;
  time: string;
  amount: string;
  status: string;
  isPositive?: boolean; // Tanda '?' membuatnya menjadi opsional
}

interface NavItemProps {
  icon: any;
  label: string;
  isActive?: boolean; // Tanda '?' membuatnya menjadi opsional
}

// ---------------------------------------------
// COMPONENTS
// ---------------------------------------------

const TransactionItem = ({ icon, title, time, amount, status, isPositive }: TransactionItemProps) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionLeft}>
      <View style={[styles.transactionIcon, isPositive && {backgroundColor: 'rgba(207, 240, 77, 0.4)'}]}>
        <MaterialIcons name={icon} size={20} color={isPositive ? colors.onSecondaryContainer : colors.primaryContainer} />
      </View>
      <View>
        <Text style={styles.transactionTitle}>{title}</Text>
        <Text style={styles.transactionTime}>{time}</Text>
      </View>
    </View>
    <View style={styles.transactionRight}>
      <Text style={[styles.transactionAmount, isPositive && {color: '#536500'}]}>{amount}</Text>
      <Text style={[styles.transactionStatus, isPositive && {color: '#536500', fontWeight: 'bold'}]}>{status}</Text>
    </View>
  </View>
);

const NavItem = ({ icon, label, isActive }: NavItemProps) => (
  <TouchableOpacity style={styles.navItem}>
    <MaterialIcons name={icon} size={24} color={isActive ? colors.primaryContainer : colors.onSurfaceVariant} />
    <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>{label}</Text>
  </TouchableOpacity>
);

// ---------------------------------------------
// STYLES
// ---------------------------------------------

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.surface },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, height: 60, backgroundColor: 'rgba(249, 250, 245, 0.9)', zIndex: 10 },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logoPlaceholder: { marginRight: 8 },
  logoText: { fontSize: 20, fontWeight: '900', color: colors.primaryContainer },
  headerTitle: { fontSize: 11, fontWeight: '700', letterSpacing: 1.5, color: colors.onSurfaceVariant },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  iconButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  profilePic: { width: 32, height: 32, borderRadius: 16 },
  scrollView: { flex: 1 },
  heroSection: { backgroundColor: colors.primaryContainer, borderBottomLeftRadius: 32, borderBottomRightRadius: 32, paddingHorizontal: 20, paddingTop: 24, paddingBottom: 40 },
  welcomeBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(204, 237, 75, 0.15)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, alignSelf: 'flex-start', marginBottom: 12 },
  pulseDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.secondaryContainer, marginRight: 6 },
  welcomeBadgeText: { fontSize: 10, fontWeight: 'bold', color: colors.secondaryFixed, letterSpacing: 1.2 },
  heroTitle: { fontSize: 28, fontWeight: '800', color: colors.onPrimary, marginBottom: 8 },
  heroSubtitle: { fontSize: 12, color: colors.primaryFixedDim, lineHeight: 18 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 20, marginBottom: 12 },
  sectionTitleOverline: { fontSize: 11, fontWeight: 'bold', color: colors.onSurfaceVariant, letterSpacing: 1.2 },
  carouselDots: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.outline, marginLeft: 4 },
  dotActive: { width: 16, backgroundColor: colors.primaryContainer },
  carouselContainer: { paddingHorizontal: 12, paddingBottom: 16 },
  card: { width: width * 0.85, backgroundColor: colors.surfaceContainerLowest, borderRadius: 24, padding: 16, marginHorizontal: 8, height: 190, justifyContent: 'space-between', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between' },
  cardHeaderLeft: { flexDirection: 'row', alignItems: 'center' },
  iconBox: { width: 32, height: 32, borderRadius: 8, backgroundColor: colors.surfaceContainerLow, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  cardOverline: { fontSize: 11, fontWeight: 'bold', color: colors.onSurfaceVariant },
  cardSubText: { fontSize: 11, color: colors.outline },
  trendBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.secondaryFixed, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  trendText: { fontSize: 12, fontWeight: 'bold', color: colors.onSecondaryContainer, marginLeft: 4 },
  cardMiddle: { marginTop: 16 },
  currencyText: { fontSize: 12, color: colors.onSurfaceVariant },
  balanceText: { fontSize: 26, fontWeight: '800', color: colors.onSurface },
  cardBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 },
  statusRow: { flexDirection: 'row', alignItems: 'center' },
  statusDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.secondaryContainer, marginRight: 6 },
  statusText: { fontSize: 12, color: colors.onSurfaceVariant },
  contentSection: { paddingHorizontal: 20, marginTop: 24 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: colors.onSurface },
  sectionSubtitle: { fontSize: 12, color: colors.onSurfaceVariant },
  seeAllButton: { backgroundColor: colors.surfaceContainerHigh, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  seeAllText: { fontSize: 12, fontWeight: 'bold', color: colors.primaryContainer },
  listContainer: { backgroundColor: colors.surfaceContainerLowest, borderRadius: 16, padding: 8 },
  transactionItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, borderRadius: 12 },
  transactionLeft: { flexDirection: 'row', alignItems: 'center' },
  transactionIcon: { width: 40, height: 40, borderRadius: 12, backgroundColor: colors.surfaceContainerLow, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  transactionTitle: { fontSize: 14, fontWeight: 'bold', color: colors.onSurface },
  transactionTime: { fontSize: 12, color: colors.outline, marginTop: 2 },
  transactionRight: { alignItems: 'flex-end' },
  transactionAmount: { fontSize: 14, fontWeight: 'bold', color: colors.onSurface },
  transactionStatus: { fontSize: 11, color: colors.outline, marginTop: 2 },
  insightHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  insightIconBox: { width: 28, height: 28, borderRadius: 14, backgroundColor: colors.secondaryContainer, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  insightCard: { backgroundColor: colors.primaryContainer, borderRadius: 24, padding: 20 },
  insightTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  insightOverline: { fontSize: 11, fontWeight: 'bold', color: colors.secondaryFixed, letterSpacing: 1.2 },
  insightMonthBadge: { backgroundColor: 'rgba(226, 227, 222, 0.2)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  insightMonthText: { fontSize: 11, color: colors.primaryFixedDim },
  insightBody: { fontSize: 14, color: colors.surface, lineHeight: 22, marginBottom: 20 },
  primaryButton: { backgroundColor: colors.secondaryContainer, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 48, borderRadius: 12 },
  primaryButtonText: { fontSize: 14, fontWeight: 'bold', color: colors.primaryContainer, marginRight: 8 },
  bottomNav: { position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 80, backgroundColor: colors.surface, paddingBottom: 20, borderTopWidth: 1, borderTopColor: colors.surfaceContainerLow },
  navItem: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  navLabel: { fontSize: 11, marginTop: 4, color: colors.onSurfaceVariant },
  navLabelActive: { color: colors.primaryContainer, fontWeight: 'bold' }
});