import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

export default function History() {
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  return (
    <ScrollView style={styles.container}>
      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>SECTION 02</Text>

        <Text style={[styles.heroTitle, isMobile && styles.mobileHeroTitle]}>
          Historical Perspective
        </Text>

        <Text style={styles.heroText}>
          Gender roles in the Philippines have developed through different
          historical periods. Looking at these changes helps explain why
          some expectations remain while others have transformed.
        </Text>
      </View>

      <View style={styles.content}>

        {/* INTRO */}
        <View style={styles.introBox}>
          <Text style={styles.introTitle}>
            History is not one single story.
          </Text>

          <Text style={styles.introText}>
            The Philippine archipelago has always contained diverse
            communities and cultural traditions. Therefore, historical
            discussions of gender should avoid assuming that every community
            followed exactly the same roles or expectations.
          </Text>

          <Text style={styles.introText}>
            The timeline below presents major periods that influenced
            Philippine society while recognizing that social change was
            complex and uneven.
          </Text>
        </View>

        {/* TIMELINE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Gender Roles Through Time
          </Text>

          <TimelineItem
            period="Before Spanish Colonization"
            title="Diverse pre-colonial communities"
            text="Before Spanish rule, societies across the archipelago had different political, economic, family, and spiritual systems. Historical scholarship describes women participating in economic and social life and identifies ritual specialists such as babaylan or related figures who could hold important spiritual authority."
          />

          <TimelineItem
            period="16th–19th Centuries"
            title="Spanish Colonial Period"
            text="Spanish colonization introduced and strengthened institutions influenced by Catholicism and colonial administration. Religious institutions, education, family expectations, and ideas about sexuality and morality became important parts of the changing gender order."
          />

          <TimelineItem
            period="Late 19th–Early 20th Century"
            title="Education and social transformation"
            text="The late Spanish period and transition into American rule brought major institutional changes. Education became an important arena in which ideas about gender, citizenship, family, and social roles were negotiated."
          />

          <TimelineItem
            period="American Colonial Period"
            title="Schooling, occupations, and gender expectations"
            text="American colonial education expanded formal schooling and influenced Philippine institutions. Research on Philippine higher education describes the gendering of certain courses and occupations and the continuing development of ideas about masculinity and femininity."
          />

          <TimelineItem
            period="Post-1946"
            title="Nation-building and changing family roles"
            text="After independence, urbanization, economic development, migration, expanding education, and women's participation in paid work contributed to changing expectations around family and employment."
          />

          <TimelineItem
            period="Late 20th Century"
            title="Women's rights and equality movements"
            text="Women's organizations, human-rights frameworks, and government programs increasingly challenged discrimination and promoted women's participation in education, employment, public life, and decision-making."
          />

          <TimelineItem
            period="21st Century"
            title="Contemporary gender transformation"
            text="Gender roles continue to change alongside digital media, education, labor-market changes, migration, legal reforms, and wider discussions of gender equality and inclusion."
          />
        </View>

        {/* BABAYLAN */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            The Babaylan and Spiritual Authority
          </Text>

          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>
              A more complex view of pre-colonial gender
            </Text>

            <Text style={styles.featureText}>
              Historical research on babaylan and related ritual specialists
              is important because it shows that spiritual authority could
              involve women and, in some communities, people whose gender
              expression did not fit later colonial expectations.
            </Text>

            <Text style={styles.featureText}>
              However, this should not be interpreted as proof that all
              pre-colonial Philippine communities were completely egalitarian.
              Political authority, economic power, social status, and gender
              relations could vary considerably between communities.
            </Text>
          </View>
        </View>

        {/* COLONIAL EFFECT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            How Colonial Institutions Changed Gender Expectations
          </Text>

          <View style={styles.grid}>
            <HistoryCard
              title="Religion"
              text="Religious institutions influenced ideas about sexuality, family, morality, and acceptable social behavior."
            />

            <HistoryCard
              title="Education"
              text="Schools became important institutions for shaping ideas about gender, citizenship, and appropriate social roles."
            />

            <HistoryCard
              title="Work"
              text="Economic and educational systems contributed to the development of gendered occupations and expectations."
            />

            <HistoryCard
              title="Family"
              text="Colonial institutions interacted with existing family structures and contributed to changing expectations around domestic roles."
            />
          </View>
        </View>

        {/* HISTORICAL LESSON */}
        <View style={styles.finalBox}>
          <Text style={styles.finalLabel}>
            HISTORICAL LESSON
          </Text>

          <Text style={styles.finalTitle}>
            Gender roles are shaped by historical conditions.
          </Text>

          <Text style={styles.finalText}>
            Philippine gender roles cannot be understood without considering
            culture, colonialism, religion, education, economic change, and
            local community traditions. Historical study helps explain why
            contemporary expectations can contain both older traditions and
            newer social ideas.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

function TimelineItem({ period, title, text }) {
  return (
    <View style={styles.timelineItem}>
      <View style={styles.timelineLine} />

      <View style={styles.dot} />

      <View style={styles.timelineCard}>
        <Text style={styles.period}>{period}</Text>

        <Text style={styles.timelineTitle}>
          {title}
        </Text>

        <Text style={styles.timelineText}>
          {text}
        </Text>
      </View>
    </View>
  );
}

function HistoryCard({ title, text }) {
  return (
    <View style={styles.historyCard}>
      <Text style={styles.historyTitle}>
        {title}
      </Text>

      <Text style={styles.historyText}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4EE',
  },

  hero: {
    backgroundColor: '#102F49',
    paddingHorizontal: 24,
    paddingVertical: 65,
  },

  eyebrow: {
    color: '#C9AA65',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 12,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 44,
    lineHeight: 52,
    fontWeight: '900',
    maxWidth: 850,
  },

  mobileHeroTitle: {
    fontSize: 33,
    lineHeight: 40,
  },

  heroText: {
    color: '#DCE5EA',
    fontSize: 17,
    lineHeight: 28,
    maxWidth: 850,
    marginTop: 20,
  },

  content: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 45,
  },

  introBox: {
    backgroundColor: '#ECEAE4',
    borderRadius: 15,
    padding: 28,
    marginBottom: 50,
  },

  introTitle: {
    color: '#102F49',
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 12,
  },

  introText: {
    color: '#607481',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 12,
  },

  section: {
    marginBottom: 50,
  },

  sectionTitle: {
    color: '#102F49',
    fontSize: 29,
    fontWeight: '900',
    marginBottom: 22,
  },

  timelineItem: {
    position: 'relative',
    paddingLeft: 30,
    marginBottom: 18,
  },

  timelineLine: {
    position: 'absolute',
    left: 8,
    top: 0,
    bottom: -20,
    width: 2,
    backgroundColor: '#C9AA65',
  },

  dot: {
    position: 'absolute',
    left: 2,
    top: 22,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#C9AA65',
    zIndex: 2,
  },

  timelineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E1DED6',
    padding: 24,
  },

  period: {
    color: '#C9AA65',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 7,
  },

  timelineTitle: {
    color: '#102F49',
    fontSize: 21,
    fontWeight: '900',
    marginBottom: 9,
  },

  timelineText: {
    color: '#607481',
    fontSize: 15,
    lineHeight: 25,
  },

  featureCard: {
    backgroundColor: '#163B59',
    borderRadius: 16,
    padding: 28,
  },

  featureTitle: {
    color: '#C9AA65',
    fontSize: 23,
    fontWeight: '900',
    marginBottom: 14,
  },

  featureText: {
    color: '#E1E9ED',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 13,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },

  historyCard: {
    flex: 1,
    minWidth: 270,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E1DED6',
    padding: 23,
  },

  historyTitle: {
    color: '#102F49',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 8,
  },

  historyText: {
    color: '#607481',
    fontSize: 14,
    lineHeight: 23,
  },

  finalBox: {
    backgroundColor: '#102F49',
    borderRadius: 16,
    padding: 30,
    marginBottom: 30,
  },

  finalLabel: {
    color: '#C9AA65',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 12,
  },

  finalTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    lineHeight: 35,
    fontWeight: '900',
    marginBottom: 14,
  },

  finalText: {
    color: '#E1E9ED',
    fontSize: 15,
    lineHeight: 25,
  },
});