import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from 'react-native';

const NAVY = '#102F49';
const BLUE = '#163B59';
const GOLD = '#C9AA65';
const CREAM = '#F7F4EE';
const LIGHT = '#ECEAE4';
const TEXT = '#334E5F';
const MUTED = '#607481';
const WHITE = '#FFFFFF';

export default function Home({ navigation }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  const members = [
    'Francisco, Jelyza Reoyan',
    'Genoguin, Jane Clea Castañas',
    'Gonzaga, Maria Mae Galit',
    'Jaropojop, John Lorenz Aquino',
    'Labbao, Angelica Rollo',
    'Labonite, Roxanne Mae Saloritos',
    'Lamor, Rayven Esmabe',
    'Lentejas, John Lorenz Bacaycay',
  ];

  const topics = [
    {
      number: '01',
      title: 'Understanding Gender Roles',
      text: 'Learn what gender roles are, how they differ from biological sex, and why they are important to study.',
      screen: 'Understanding',
    },
    {
      number: '02',
      title: 'Historical Perspective',
      text: 'Explore gender roles in pre-colonial communities and how Spanish, American, and later periods shaped society.',
      screen: 'History',
    },
    {
      number: '03',
      title: 'Contemporary Gender Roles',
      text: 'Examine present-day expectations and experiences in family, education, work, media, leadership, and community.',
      screen: 'Contemporary',
    },
    {
      number: '04',
      title: 'Gender Issues & Realities',
      text: 'Explore stereotypes, discrimination, unequal opportunities, representation, and other gender-related issues.',
      screen: 'Issues',
    },
    {
      number: '05',
      title: 'Multimedia',
      text: 'Explore timelines, visual information, statistics, and educational resources.',
      screen: 'Multimedia',
    },
    {
      number: '06',
      title: 'Analysis & Reflection',
      text: 'Compare historical and contemporary gender roles and examine continuing challenges and social effects.',
      screen: 'Analysis',
    },
    {
      number: '07',
      title: 'Conclusion',
      text: 'Review the important findings and the group’s overall understanding of gender roles in the Philippines.',
      screen: 'Conclusion',
    },
    {
      number: '08',
      title: 'References',
      text: 'View the books, academic sources, government resources, websites, and other materials used.',
      screen: 'References',
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      {/* HERO */}
      <View style={[styles.hero, isMobile && styles.heroMobile]}>
        <View style={styles.heroContent}>

          <Text style={styles.eyebrow}>
            GENDER AND SOCIETY
          </Text>

          <Text
            style={[
              styles.title,
              isMobile && styles.titleMobile,
            ]}
          >
            Gender Roles in the Philippines
          </Text>

          <Text style={styles.subtitle}>
            A historical and contemporary exploration of how gender
            expectations, opportunities, and experiences have developed
            in Philippine society.
          </Text>

          <View style={styles.goldLine} />

          <Text style={styles.introduction}>
            This academic website examines gender roles from historical
            perspectives to contemporary realities. It considers the
            influence of culture, family, education, work, media,
            institutions, and social change.
          </Text>

          <Pressable
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Understanding')}
          >
            <Text style={styles.primaryButtonText}>
              START EXPLORING →
            </Text>
          </Pressable>

        </View>
      </View>

      {/* GROUP INFORMATION */}
      <View style={styles.groupSection}>
        <View style={styles.groupContent}>

          <Text style={styles.sectionLabel}>
            GROUP INFORMATION
          </Text>

          <Text style={styles.groupTitle}>
            Our Research Team
          </Text>

          <Text style={styles.groupSubtitle}>
            Group Number:{' '}
            <Text style={styles.bold}>3</Text>
          </Text>

          <View
            style={[
              styles.membersContainer,
              isMobile && styles.membersMobile,
            ]}
          >

            {members.map((member, index) => (
              <View
                key={member}
                style={[
                  styles.memberCard,
                  isMobile && styles.memberCardMobile,
                ]}
              >

                <View style={styles.memberNumber}>
                  <Text style={styles.memberNumberText}>
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                </View>

                <View style={styles.memberInfo}>
                  <Text style={styles.memberName}>
                    {member}
                  </Text>

                  <Text style={styles.memberRole}>
                    Group Member
                  </Text>
                </View>

              </View>
            ))}

          </View>

        </View>
      </View>

      {/* ABOUT PROJECT */}
      <View style={styles.aboutSection}>
        <View style={styles.aboutText}>

          <Text style={styles.sectionLabel}>
            ABOUT THE PROJECT
          </Text>

          <Text style={styles.sectionTitle}>
            Understanding gender through history and society
          </Text>

          <Text style={styles.paragraph}>
            Gender roles are expectations about behaviors, responsibilities,
            and activities that societies associate with people based on
            gender. These expectations can change across time and can differ
            between communities and individuals.
          </Text>

          <Text style={styles.paragraph}>
            In the Philippine context, understanding gender roles requires
            looking at historical experiences, cultural practices, colonial
            influences, laws, education, employment, family life, media,
            leadership, and contemporary social change.
          </Text>

          <View style={styles.highlight}>
            <Text style={styles.highlightText}>
              “Gender roles are shaped by society and can change as society
              changes.”
            </Text>
          </View>

        </View>
      </View>

      {/* TOPICS */}
      <View style={styles.topicsSection}>

        <Text style={styles.sectionLabel}>
          EXPLORE THE WEBSITE
        </Text>

        <Text style={styles.sectionTitle}>
          Research Sections
        </Text>

        <Text style={styles.sectionDescription}>
          Navigate through each section of our study.
        </Text>

        <View style={styles.topicGrid}>

          {topics.map((topic) => (
            <Pressable
              key={topic.screen}
              style={({ pressed }) => [
                styles.topicCard,
                isMobile && styles.topicMobile,
                pressed && styles.topicPressed,
              ]}
              onPress={() => navigation.navigate(topic.screen)}
            >

              <Text style={styles.topicNumber}>
                {topic.number}
              </Text>

              <Text style={styles.topicTitle}>
                {topic.title}
              </Text>

              <Text style={styles.topicText}>
                {topic.text}
              </Text>

              <Text style={styles.topicArrow}>
                EXPLORE →
              </Text>

            </Pressable>
          ))}

        </View>

      </View>

      {/* RESEARCH APPROACH */}
      <View style={styles.approachSection}>

        <View style={styles.approachContent}>

          <Text style={styles.sectionLabel}>
            OUR APPROACH
          </Text>

          <Text style={styles.approachTitle}>
            Evidence, history, and critical reflection
          </Text>

          <View
            style={[
              styles.approachGrid,
              isMobile && styles.approachMobile,
            ]}
          >

            <View style={styles.approachCard}>
              <Text style={styles.approachIcon}>01</Text>

              <Text style={styles.approachCardTitle}>
                Historical
              </Text>

              <Text style={styles.approachCardText}>
                We examine how gender expectations developed across
                different periods of Philippine history.
              </Text>
            </View>

            <View style={styles.approachCard}>
              <Text style={styles.approachIcon}>02</Text>

              <Text style={styles.approachCardTitle}>
                Contemporary
              </Text>

              <Text style={styles.approachCardText}>
                We examine current experiences in family, education,
                work, media, leadership, and community.
              </Text>
            </View>

            <View style={styles.approachCard}>
              <Text style={styles.approachIcon}>03</Text>

              <Text style={styles.approachCardTitle}>
                Evidence-Based
              </Text>

              <Text style={styles.approachCardText}>
                We use government statistics, academic research, legal
                references, and credible educational sources.
              </Text>
            </View>

          </View>

        </View>

      </View>

      {/* DATA CALLOUT */}
      <View
        style={[
          styles.dataSection,
          isMobile && styles.dataSectionMobile,
        ]}
      >

        <Text style={styles.dataNumber}>
          123
        </Text>

        <View style={styles.dataTextContainer}>

          <Text style={styles.dataTitle}>
            Gender-related indicators
          </Text>

          <Text style={styles.dataText}>
            The Philippine Statistics Authority's 2026 Women and Men
            factsheet contains 123 indicators covering 20 socioeconomic
            sectors and gender concerns.
          </Text>

        </View>

      </View>

      {/* FOOTER */}
      <View style={styles.footer}>

        <Text style={styles.footerTitle}>
          Gender Roles in the Philippines
        </Text>

        <Text style={styles.footerText}>
          Gender and Society • Academic Website Project
        </Text>

        <Text style={styles.footerText}>
          Historical Perspective • Contemporary Realities • Critical Analysis
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CREAM,
  },

  content: {
    paddingBottom: 0,
  },

  hero: {
    backgroundColor: NAVY,
    paddingHorizontal: 70,
    paddingVertical: 80,
  },

  heroMobile: {
    paddingHorizontal: 25,
    paddingVertical: 55,
  },

  heroContent: {
    width: '100%',
    maxWidth: 1050,
    alignSelf: 'center',
  },

  eyebrow: {
    color: GOLD,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2.5,
    marginBottom: 18,
  },

  title: {
    color: WHITE,
    fontSize: 52,
    lineHeight: 60,
    fontWeight: '900',
    maxWidth: 900,
    marginBottom: 22,
  },

  titleMobile: {
    fontSize: 36,
    lineHeight: 44,
  },

  subtitle: {
    color: '#DCE7EE',
    fontSize: 19,
    lineHeight: 30,
    maxWidth: 820,
  },

  goldLine: {
    width: 70,
    height: 4,
    backgroundColor: GOLD,
    marginVertical: 25,
  },

  introduction: {
    color: '#C8D7E0',
    fontSize: 15,
    lineHeight: 25,
    maxWidth: 820,
  },

  primaryButton: {
    backgroundColor: GOLD,
    alignSelf: 'flex-start',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 30,
  },

  primaryButtonText: {
    color: NAVY,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },

  groupSection: {
    backgroundColor: WHITE,
    paddingHorizontal: 30,
    paddingVertical: 55,
  },

  groupContent: {
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },

  sectionLabel: {
    color: GOLD,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 10,
  },

  groupTitle: {
    color: NAVY,
    fontSize: 31,
    fontWeight: '900',
    marginBottom: 8,
  },

  groupSubtitle: {
    color: MUTED,
    fontSize: 15,
    marginBottom: 28,
  },

  bold: {
    fontWeight: '900',
    color: NAVY,
  },

  membersContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },

  membersMobile: {
    flexDirection: 'column',
  },

  memberCard: {
    width: '48%',
    minWidth: 350,
    backgroundColor: CREAM,
    borderRadius: 12,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD9D0',
  },

  memberCardMobile: {
    width: '100%',
    minWidth: 0,
  },

  memberNumber: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: NAVY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
    flexShrink: 0,
  },

  memberNumberText: {
    color: GOLD,
    fontWeight: '900',
    fontSize: 12,
  },

  memberInfo: {
    flex: 1,
  },

  memberName: {
    color: NAVY,
    fontSize: 14,
    fontWeight: '900',
    lineHeight: 20,
  },

  memberRole: {
    color: MUTED,
    fontSize: 12,
    marginTop: 3,
  },

  aboutSection: {
    backgroundColor: LIGHT,
    paddingHorizontal: 30,
    paddingVertical: 65,
  },

  aboutText: {
    maxWidth: 1000,
    width: '100%',
    alignSelf: 'center',
  },

  sectionTitle: {
    color: NAVY,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '900',
    marginBottom: 20,
  },

  paragraph: {
    color: TEXT,
    fontSize: 16,
    lineHeight: 27,
    marginBottom: 15,
    maxWidth: 850,
  },

  highlight: {
    backgroundColor: WHITE,
    borderLeftWidth: 5,
    borderLeftColor: GOLD,
    padding: 22,
    borderRadius: 10,
    marginTop: 15,
    maxWidth: 850,
  },

  highlightText: {
    color: NAVY,
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 28,
  },

  topicsSection: {
    paddingHorizontal: 30,
    paddingVertical: 65,
    maxWidth: 1150,
    width: '100%',
    alignSelf: 'center',
  },

  sectionDescription: {
    color: MUTED,
    fontSize: 16,
    marginBottom: 30,
  },

  topicGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
  },

  topicCard: {
    width: '48%',
    minWidth: 300,
    backgroundColor: WHITE,
    borderRadius: 15,
    padding: 25,
    borderWidth: 1,
    borderColor: '#DDD9D0',
  },

  topicMobile: {
    width: '100%',
    minWidth: 0,
  },

  topicPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.99 }],
  },

  topicNumber: {
    color: GOLD,
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 13,
  },

  topicTitle: {
    color: NAVY,
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 27,
    marginBottom: 10,
  },

  topicText: {
    color: MUTED,
    fontSize: 14,
    lineHeight: 23,
    marginBottom: 18,
  },

  topicArrow: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },

  approachSection: {
    backgroundColor: NAVY,
    paddingHorizontal: 30,
    paddingVertical: 65,
  },

  approachContent: {
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },

  approachTitle: {
    color: WHITE,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '900',
    maxWidth: 850,
    marginBottom: 30,
  },

  approachGrid: {
    width: '100%',
    flexDirection: 'row',
    gap: 18,
  },

  approachMobile: {
    flexDirection: 'column',
  },

  approachCard: {
    flex: 1,
    backgroundColor: BLUE,
    borderRadius: 14,
    padding: 25,
  },

  approachIcon: {
    color: GOLD,
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 15,
  },

  approachCardTitle: {
    color: WHITE,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 10,
  },

  approachCardText: {
    color: '#DCE7EE',
    fontSize: 14,
    lineHeight: 23,
  },

  /* FIXED RESPONSIVE DATA SECTION */

  dataSection: {
    backgroundColor: GOLD,
    paddingHorizontal: 35,
    paddingVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },

  dataSectionMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 25,
    paddingVertical: 35,
    gap: 8,
  },

  dataNumber: {
    color: NAVY,
    fontSize: 52,
    fontWeight: '900',
  },

  dataTextContainer: {
    maxWidth: 650,
    flexShrink: 1,
  },

  dataTextContainerMobile: {
    width: '100%',
    maxWidth: '100%',
    flexShrink: 1,
  },

  dataTitle: {
    color: NAVY,
    fontSize: 21,
    fontWeight: '900',
    marginBottom: 7,
  },

  dataText: {
    color: NAVY,
    fontSize: 14,
    lineHeight: 22,
    width: '100%',
    flexShrink: 1,
  },

  footer: {
    backgroundColor: NAVY,
    paddingVertical: 35,
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  footerTitle: {
    color: WHITE,
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 7,
    textAlign: 'center',
  },

  footerText: {
    color: '#B9CBD7',
    fontSize: 12,
    marginTop: 3,
    textAlign: 'center',
  },
});