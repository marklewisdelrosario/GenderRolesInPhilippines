import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
  useWindowDimensions,
} from 'react-native';

const COLORS = {
  navy: '#102F49',
  blue: '#163B59',
  gold: '#C9AA65',
  cream: '#F7F4EE',
  light: '#ECEAE4',
  white: '#FFFFFF',
  text: '#334E5F',
  muted: '#607481',
  softBlue: '#E7EEF3',
  softGold: '#F3EBD9',
  green: '#4E7D68',
};

const VIDEO_URL = 'https://www.youtube.com/watch?v=yNq_-P8rNkY';
const PSA_URL = 'https://psa.gov.ph/gender-stat/wmf';
const PSA_GAD_URL = 'https://psa.gov.ph/gender-statistics';
const PCW_URL = 'https://pcw.gov.ph/';
const MCW_URL = 'https://pcw.gov.ph/magna-carta-of-women/';
const HISTORY_SOURCE =
  'https://archium.ateneo.edu/history-faculty-pubs/99/';

const timeline = [
  {
    period: 'Before Spanish Colonization',
    title: 'Diverse community roles',
    text:
      'Gender roles varied across communities. Historical research describes women as active in economic, social, family, and spiritual life, including the presence of female ritual specialists known as babaylan in some communities.',
  },
  {
    period: 'Spanish Colonial Period',
    title: 'Colonial institutions reshape expectations',
    text:
      'Spanish colonial rule introduced and strengthened institutions and cultural expectations connected to Catholicism, family life, education, morality, and social organization.',
  },
  {
    period: 'American Colonial Period',
    title: 'Education and public participation',
    text:
      'Expanded formal education and changing occupational opportunities influenced expectations for women and men. Gender roles continued to develop alongside new institutions and economic conditions.',
  },
  {
    period: 'Post-Independence',
    title: 'Work, family, and nation-building',
    text:
      'Urbanization, economic change, education, and women’s participation in paid work contributed to changing ideas about family responsibilities and social participation.',
  },
  {
    period: 'Contemporary Philippines',
    title: 'Changing roles and continuing issues',
    text:
      'Gender expectations continue to change through education, employment, media, public leadership, law, advocacy, and everyday family and community life.',
  },
];

const infographicItems = [
  {
    icon: '⌂',
    title: 'Family',
    text:
      'Caregiving and household responsibilities are increasingly discussed as shared responsibilities rather than roles automatically assigned by gender.',
  },
  {
    icon: '▣',
    title: 'Education',
    text:
      'Schools can challenge stereotypes by giving learners equal opportunities to participate, lead, study, and pursue different fields.',
  },
  {
    icon: '◈',
    title: 'Workplace',
    text:
      'Gender roles affect expectations about occupations, leadership, caregiving, and participation in the labor force.',
  },
  {
    icon: '◉',
    title: 'Media',
    text:
      'Films, television, advertising, and social media can either reinforce stereotypes or show people in diverse roles.',
  },
  {
    icon: '◆',
    title: 'Leadership',
    text:
      'Participation in public life provides an important way to examine who has access to decision-making positions.',
  },
  {
    icon: '◎',
    title: 'Community',
    text:
      'Gender roles are also shaped through barangays, organizations, workplaces, families, religious communities, and digital spaces.',
  },
];

function openLink(url) {
  Linking.openURL(url);
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
      {text ? <Text style={styles.sectionIntro}>{text}</Text> : null}
    </View>
  );
}

function SourceButton({ label, url }) {
  return (
    <TouchableOpacity
      style={styles.sourceButton}
      onPress={() => openLink(url)}
      activeOpacity={0.8}
    >
      <Text style={styles.sourceButtonText}>{label} ↗</Text>
    </TouchableOpacity>
  );
}

export default function Multimedia() {
  const { width } = useWindowDimensions();
  const isWide = width >= 800;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* HERO */}
      <View style={styles.hero}>
        <View style={styles.heroGlowOne} />
        <View style={styles.heroGlowTwo} />

        <Text style={styles.heroEyebrow}>MULTIMEDIA & VISUAL LEARNING</Text>

        <Text style={styles.heroTitle}>
          Exploring Gender Roles Through
          {'\n'}
          <Text style={styles.heroAccent}>Images, Data & Video</Text>
        </Text>

        <Text style={styles.heroText}>
          Multimedia helps us understand gender roles by connecting historical
          evidence, Philippine statistics, visual timelines, and educational
          resources.
        </Text>

        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeNumber}>123</Text>
          <View>
            <Text style={styles.heroBadgeTitle}>PSA gender indicators</Text>
            <Text style={styles.heroBadgeText}>
              covering 20 sectors and gender concerns
            </Text>
          </View>
        </View>
      </View>

      {/* VIDEO */}
      <View style={styles.section}>
        <SectionTitle
          eyebrow="01 • VIDEO"
          title="Watch: Magna Carta of Women"
          text="This educational video introduces Republic Act No. 9710, also known as the Magna Carta of Women, and explains important rights and responsibilities connected with gender equality."
        />

        <TouchableOpacity
          style={styles.videoCard}
          onPress={() => openLink(VIDEO_URL)}
          activeOpacity={0.9}
        >
          <Image
            source={{
              uri: 'https://img.youtube.com/vi/yNq_-P8rNkY/maxresdefault.jpg',
            }}
            style={styles.videoImage}
            resizeMode="cover"
          />

          <View style={styles.videoOverlay}>
            <View style={styles.playButton}>
              <Text style={styles.playIcon}>▶</Text>
            </View>
          </View>

          <View style={styles.videoInfo}>
            <Text style={styles.videoLabel}>EDUCATIONAL VIDEO</Text>
            <Text style={styles.videoTitle}>
              Magna Carta of Women in the Philippines
            </Text>
            <Text style={styles.videoDescription}>
              DFA Philippines • Republic Act No. 9710 • Educational resource
            </Text>
            <Text style={styles.watchText}>Watch on YouTube ↗</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.sourceNote}>
          <Text style={styles.sourceNoteTitle}>Why this supports the topic</Text>
          <Text style={styles.sourceNoteText}>
            The video provides an accessible introduction to a Philippine law
            addressing discrimination, women’s rights, participation, and
            equality. It can be viewed alongside the official PCW information
            on the Magna Carta of Women.
          </Text>
        </View>
      </View>

      {/* HISTORICAL TIMELINE */}
      <View style={[styles.section, styles.timelineSection]}>
        <SectionTitle
          eyebrow="02 • TIMELINE"
          title="Gender Roles Across Philippine History"
          text="Gender roles are not fixed. This timeline shows major historical periods and some of the institutions and social changes that influenced gender expectations."
        />

        <View style={styles.timeline}>
          {timeline.map((item, index) => (
            <View key={item.period} style={styles.timelineItem}>
              <View style={styles.timelineRail}>
                <View style={styles.timelineDot}>
                  <Text style={styles.timelineNumber}>{index + 1}</Text>
                </View>

                {index !== timeline.length - 1 && (
                  <View style={styles.timelineLine} />
                )}
              </View>

              <View style={styles.timelineContent}>
                <Text style={styles.timelinePeriod}>{item.period}</Text>
                <Text style={styles.timelineTitle}>{item.title}</Text>
                <Text style={styles.timelineText}>{item.text}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.historySource}>
          <Text style={styles.historySourceTitle}>
            Historical research connection
          </Text>
          <Text style={styles.historySourceText}>
            Research on gender relations in the colonial Philippines discusses
            precolonial gender relations, female spiritual specialists, and the
            ways colonial rule interacted with existing cultural practices.
          </Text>

          <SourceButton
            label="Read Ateneo historical research"
            url={HISTORY_SOURCE}
          />
        </View>
      </View>

      {/* DATA VISUALIZATION */}
      <View style={styles.section}>
        <SectionTitle
          eyebrow="03 • DATA VISUALIZATION"
          title="Gender and Public Life"
          text="Statistics provide another way to examine contemporary gender roles. The chart below uses PSA data on occupied elective positions in 2025."
        />

        <View style={styles.dataCard}>
          <Text style={styles.dataCardEyebrow}>PSA • 2025</Text>
          <Text style={styles.dataCardTitle}>
            Occupied Elective Positions
          </Text>

          <View style={styles.chartArea}>
            <View style={styles.chartRow}>
              <View style={styles.chartLabelArea}>
                <Text style={styles.chartLabel}>Women</Text>
                <Text style={styles.chartSubLabel}>24.2%</Text>
              </View>

              <View style={styles.barBackground}>
                <View
                  style={[
                    styles.barFill,
                    {
                      width: '24.2%',
                      backgroundColor: COLORS.gold,
                    },
                  ]}
                />
              </View>
            </View>

            <View style={styles.chartRow}>
              <View style={styles.chartLabelArea}>
                <Text style={styles.chartLabel}>Men</Text>
                <Text style={styles.chartSubLabel}>75.8%</Text>
              </View>

              <View style={styles.barBackground}>
                <View
                  style={[
                    styles.barFill,
                    {
                      width: '75.8%',
                      backgroundColor: COLORS.navy,
                    },
                  ]}
                />
              </View>
            </View>
          </View>

          <View style={styles.dataInsight}>
            <Text style={styles.dataInsightTitle}>What the data shows</Text>
            <Text style={styles.dataInsightText}>
              For 2025, the PSA reported women occupying 24.2% and men 75.8%
              of occupied elective positions. This illustrates how gender
              participation can be examined using sex-disaggregated public-life
              data.
            </Text>
          </View>

          <Text style={styles.dataSource}>
            Source: Philippine Statistics Authority, 2026 Fact Sheet on Women
            and Men in the Philippines.
          </Text>

          <SourceButton
            label="View the complete PSA gender data"
            url={PSA_URL}
          />
        </View>
      </View>

      {/* INFOGRAPHIC */}
      <View style={styles.section}>
        <SectionTitle
          eyebrow="04 • INFOGRAPHIC"
          title="Where Do Gender Roles Appear?"
          text="Gender expectations can be observed across everyday institutions and social environments."
        />

        <View
          style={[
            styles.infoGrid,
            isWide ? styles.infoGridWide : styles.infoGridSmall,
          ]}
        >
          {infographicItems.map((item) => (
            <View
              key={item.title}
              style={[
                styles.infoCard,
                isWide ? styles.infoCardWide : styles.infoCardSmall,
              ]}
            >
              <View style={styles.infoIcon}>
                <Text style={styles.infoIconText}>{item.icon}</Text>
              </View>

              <Text style={styles.infoTitle}>{item.title}</Text>
              <Text style={styles.infoText}>{item.text}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* PSA DATA SCOPE */}
      <View style={styles.section}>
        <View style={styles.scopeCard}>
          <View style={styles.scopeNumberBox}>
            <Text style={styles.scopeNumber}>123</Text>
            <Text style={styles.scopeNumberLabel}>INDICATORS</Text>
          </View>

          <View style={styles.scopeContent}>
            <Text style={styles.scopeTitle}>
              A broad picture of gender in the Philippines
            </Text>

            <Text style={styles.scopeText}>
              The 2026 PSA Women and Men in the Philippines factsheet contains
              123 indicators across 20 socioeconomic sectors and gender
              concerns, including education, work, health, media, public life,
              violence, social protection, and women empowerment.
            </Text>

            <TouchableOpacity
              style={styles.scopeLink}
              onPress={() => openLink(PSA_GAD_URL)}
            >
              <Text style={styles.scopeLinkText}>
                Explore PSA Gender and Development statistics ↗
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* VISUAL RESEARCH GUIDE */}
      <View style={styles.section}>
        <SectionTitle
          eyebrow="05 • RESEARCH GUIDE"
          title="How to Read the Multimedia"
          text="Each visual should answer a research question rather than simply decorate the page."
        />

        <View style={styles.guideList}>
          <View style={styles.guideItem}>
            <View style={styles.guideNumber}>
              <Text style={styles.guideNumberText}>01</Text>
            </View>
            <View style={styles.guideContent}>
              <Text style={styles.guideTitle}>Compare historical periods</Text>
              <Text style={styles.guideText}>
                Use the timeline to identify how institutions and social
                conditions influenced gender expectations over time.
              </Text>
            </View>
          </View>

          <View style={styles.guideItem}>
            <View style={styles.guideNumber}>
              <Text style={styles.guideNumberText}>02</Text>
            </View>
            <View style={styles.guideContent}>
              <Text style={styles.guideTitle}>Use data as evidence</Text>
              <Text style={styles.guideText}>
                Statistical information can show patterns in education,
                employment, public life, health, and other areas.
              </Text>
            </View>
          </View>

          <View style={styles.guideItem}>
            <View style={styles.guideNumber}>
              <Text style={styles.guideNumberText}>03</Text>
            </View>
            <View style={styles.guideContent}>
              <Text style={styles.guideTitle}>Question representation</Text>
              <Text style={styles.guideText}>
                When viewing media, consider whose experiences are represented,
                which roles are shown, and whether stereotypes are reinforced
                or challenged.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* OFFICIAL RESOURCES */}
      <View style={styles.resourcesSection}>
        <Text style={styles.resourcesEyebrow}>OFFICIAL RESOURCES</Text>
        <Text style={styles.resourcesTitle}>
          Explore the evidence behind the topic
        </Text>

        <Text style={styles.resourcesText}>
          These resources can be used for further research, verification,
          statistics, and legal context.
        </Text>

        <View style={styles.resourceButtons}>
          <SourceButton
            label="Philippine Statistics Authority"
            url={PSA_URL}
          />

          <SourceButton
            label="PSA Gender and Development"
            url={PSA_GAD_URL}
          />

          <SourceButton
            label="Philippine Commission on Women"
            url={PCW_URL}
          />

          <SourceButton
            label="Magna Carta of Women"
            url={MCW_URL}
          />
        </View>
      </View>

      {/* ATTRIBUTION */}
      <View style={styles.attribution}>
        <Text style={styles.attributionTitle}>
          Multimedia attribution
        </Text>

        <Text style={styles.attributionText}>
          Video: DFA Philippines, educational Information, Education and
          Communication material on Republic Act No. 9710, published on
          YouTube. Historical discussion: Filomeno V. Aguilar Jr., Ateneo de
          Manila University. Statistics: Philippine Statistics Authority,
          2026 Fact Sheet on Women and Men in the Philippines.
        </Text>

        <Text style={styles.attributionText}>
          Images and external materials should remain credited to their
          respective creators or organizations when additional materials are
          added to this page.
        </Text>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          Gender Roles in the Philippines
        </Text>

        <Text style={styles.footerText}>
          Multimedia supports evidence-based understanding of gender, history,
          society, and contemporary Philippine life.
        </Text>

        <Text style={styles.footerCopyright}>
          Academic Project • Gender and Society
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  content: {
    paddingBottom: 50,
  },

  hero: {
    backgroundColor: COLORS.navy,
    paddingHorizontal: 28,
    paddingVertical: 52,
    position: 'relative',
    overflow: 'hidden',
  },

  heroGlowOne: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#214965',
    right: -100,
    top: -80,
    opacity: 0.55,
  },

  heroGlowTwo: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#C9AA65',
    right: 70,
    bottom: -100,
    opacity: 0.12,
  },

  heroEyebrow: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 15,
  },

  heroTitle: {
    color: COLORS.white,
    fontSize: 36,
    lineHeight: 44,
    fontWeight: '900',
    maxWidth: 780,
  },

  heroAccent: {
    color: COLORS.gold,
  },

  heroText: {
    color: '#D8E1E7',
    fontSize: 16,
    lineHeight: 27,
    maxWidth: 700,
    marginTop: 18,
  },

  heroBadge: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#173B57',
    borderWidth: 1,
    borderColor: '#45637A',
    borderRadius: 14,
    padding: 14,
  },

  heroBadgeNumber: {
    color: COLORS.gold,
    fontSize: 28,
    fontWeight: '900',
    marginRight: 12,
  },

  heroBadgeTitle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },

  heroBadgeText: {
    color: '#B8C9D3',
    fontSize: 12,
    marginTop: 2,
  },

  section: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 58,
  },

  timelineSection: {
    backgroundColor: COLORS.cream,
  },

  sectionHeading: {
    marginBottom: 28,
  },

  eyebrow: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.8,
    marginBottom: 8,
  },

  sectionTitle: {
    color: COLORS.navy,
    fontSize: 29,
    lineHeight: 36,
    fontWeight: '900',
  },

  sectionIntro: {
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 25,
    maxWidth: 800,
    marginTop: 10,
  },

  videoCard: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#DCE2E5',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },

  videoImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#D8DEE2',
  },

  videoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(16,47,73,0.25)',
  },

  playButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },

  playIcon: {
    color: COLORS.white,
    fontSize: 25,
    marginLeft: 4,
  },

  videoInfo: {
    padding: 22,
  },

  videoLabel: {
    color: COLORS.gold,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  videoTitle: {
    color: COLORS.navy,
    fontSize: 23,
    fontWeight: '900',
    marginTop: 6,
  },

  videoDescription: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 7,
  },

  watchText: {
    color: COLORS.blue,
    fontWeight: '800',
    fontSize: 14,
    marginTop: 14,
  },

  sourceNote: {
    marginTop: 18,
    backgroundColor: COLORS.softGold,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.gold,
    padding: 18,
    borderRadius: 10,
  },

  sourceNoteTitle: {
    color: COLORS.navy,
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 5,
  },

  sourceNoteText: {
    color: COLORS.text,
    fontSize: 13,
    lineHeight: 21,
  },

  timeline: {
    marginTop: 4,
  },

  timelineItem: {
    flexDirection: 'row',
  },

  timelineRail: {
    width: 48,
    alignItems: 'center',
  },

  timelineDot: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.navy,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },

  timelineNumber: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: '900',
  },

  timelineLine: {
    position: 'absolute',
    width: 2,
    top: 38,
    bottom: 0,
    backgroundColor: '#C9D2D8',
  },

  timelineContent: {
    flex: 1,
    paddingLeft: 16,
    paddingBottom: 34,
  },

  timelinePeriod: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },

  timelineTitle: {
    color: COLORS.navy,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 4,
  },

  timelineText: {
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 23,
    marginTop: 7,
  },

  historySource: {
    marginTop: 6,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#DCE2E5',
  },

  historySourceTitle: {
    color: COLORS.navy,
    fontSize: 17,
    fontWeight: '900',
  },

  historySourceText: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 7,
    marginBottom: 14,
  },

  dataCard: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 24,
    borderWidth: 1,
    borderColor: '#DCE2E5',
  },

  dataCardEyebrow: {
    color: COLORS.gold,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  dataCardTitle: {
    color: COLORS.navy,
    fontSize: 23,
    fontWeight: '900',
    marginTop: 5,
  },

  chartArea: {
    marginTop: 28,
  },

  chartRow: {
    marginBottom: 22,
  },

  chartLabelArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  chartLabel: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '800',
  },

  chartSubLabel: {
    color: COLORS.muted,
    fontSize: 13,
    fontWeight: '800',
  },

  barBackground: {
    height: 28,
    backgroundColor: '#E3E8EB',
    borderRadius: 14,
    overflow: 'hidden',
  },

  barFill: {
    height: '100%',
    borderRadius: 14,
  },

  dataInsight: {
    backgroundColor: COLORS.softBlue,
    borderRadius: 12,
    padding: 17,
    marginTop: 3,
  },

  dataInsightTitle: {
    color: COLORS.navy,
    fontSize: 15,
    fontWeight: '900',
  },

  dataInsightText: {
    color: COLORS.text,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 5,
  },

  dataSource: {
    color: COLORS.muted,
    fontSize: 11,
    lineHeight: 17,
    marginTop: 16,
  },

  sourceButton: {
    backgroundColor: COLORS.navy,
    borderRadius: 9,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginTop: 13,
  },

  sourceButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '800',
  },

  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },

  infoGridWide: {
    justifyContent: 'space-between',
  },

  infoGridSmall: {
    justifyContent: 'center',
  },

  infoCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: '#DCE2E5',
  },

  infoCardWide: {
    width: '31.8%',
  },

  infoCardSmall: {
    width: '100%',
  },

  infoIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.softGold,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13,
  },

  infoIconText: {
    color: COLORS.navy,
    fontSize: 22,
    fontWeight: '900',
  },

  infoTitle: {
    color: COLORS.navy,
    fontSize: 18,
    fontWeight: '900',
  },

  infoText: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 7,
  },

  scopeCard: {
    backgroundColor: COLORS.navy,
    borderRadius: 20,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },

  scopeNumberBox: {
    width: 110,
    height: 110,
    borderRadius: 18,
    backgroundColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22,
  },

  scopeNumber: {
    color: COLORS.navy,
    fontSize: 38,
    fontWeight: '900',
  },

  scopeNumberLabel: {
    color: COLORS.navy,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  scopeContent: {
    flex: 1,
  },

  scopeTitle: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: '900',
  },

  scopeText: {
    color: '#C9D5DD',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 7,
  },

  scopeLink: {
    marginTop: 12,
  },

  scopeLinkText: {
    color: COLORS.gold,
    fontSize: 13,
    fontWeight: '900',
  },

  guideList: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DCE2E5',
    overflow: 'hidden',
  },

  guideItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9EB',
  },

  guideNumber: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.softGold,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  guideNumberText: {
    color: COLORS.navy,
    fontSize: 11,
    fontWeight: '900',
  },

  guideContent: {
    flex: 1,
  },

  guideTitle: {
    color: COLORS.navy,
    fontSize: 16,
    fontWeight: '900',
  },

  guideText: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 5,
  },

  resourcesSection: {
    backgroundColor: COLORS.blue,
    marginTop: 60,
    paddingHorizontal: 28,
    paddingVertical: 45,
  },

  resourcesEyebrow: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.8,
  },

  resourcesTitle: {
    color: COLORS.white,
    fontSize: 28,
    lineHeight: 35,
    fontWeight: '900',
    marginTop: 7,
  },

  resourcesText: {
    color: '#C8D5DD',
    fontSize: 14,
    lineHeight: 23,
    maxWidth: 700,
    marginTop: 8,
  },

  resourceButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 18,
  },

  attribution: {
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 35,
  },

  attributionTitle: {
    color: COLORS.navy,
    fontSize: 15,
    fontWeight: '900',
  },

  attributionText: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
  },

  footer: {
    marginTop: 35,
    padding: 28,
    backgroundColor: COLORS.navy,
    alignItems: 'center',
  },

  footerTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '900',
  },

  footerText: {
    color: '#AFC0CB',
    textAlign: 'center',
    maxWidth: 650,
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
  },

  footerCopyright: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: '800',
    marginTop: 15,
  },
});