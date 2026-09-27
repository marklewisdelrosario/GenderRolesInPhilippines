import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
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

export default function Analysis() {
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      {/* HERO */}
      <View style={[styles.hero, isMobile && styles.heroMobile]}>
        <Text style={styles.eyebrow}>CRITICAL ANALYSIS</Text>

        <Text style={[styles.heroTitle, isMobile && styles.heroTitleMobile]}>
          Analysis & Reflection
        </Text>

        <Text style={styles.heroText}>
          Understanding gender roles requires looking at how expectations
          have developed over time, what has changed, and what inequalities
          continue to affect people in Philippine society.
        </Text>
      </View>

      {/* INTRO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Looking Beyond Description</Text>

        <Text style={styles.paragraph}>
          Gender roles in the Philippines cannot be understood simply as
          traditional versus modern. Social expectations have changed across
          historical periods, but some ideas about family responsibilities,
          work, leadership, appearance, and behavior continue to influence
          everyday life.
        </Text>

        <Text style={styles.paragraph}>
          Our analysis shows that gender roles are shaped by institutions,
          culture, family practices, education, economic conditions, media,
          and individual choices. These influences can change over time and
          can also differ between communities and individuals.
        </Text>
      </View>

      {/* COMPARISON */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Historical and Contemporary Comparison
        </Text>

        <View style={styles.comparisonRow}>

          <View style={[styles.compareCard, isMobile && styles.fullWidth]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>HISTORICAL CONTEXT</Text>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.compareTitle}>
                Roles were shaped by community and institutions
              </Text>

              <Text style={styles.bullet}>
                • Pre-colonial communities had diverse social arrangements,
                including women who participated in economic, community, and
                spiritual activities.
              </Text>

              <Text style={styles.bullet}>
                • Colonial institutions influenced family life, education,
                morality, and expectations about gender.
              </Text>

              <Text style={styles.bullet}>
                • Education and employment opportunities developed differently
                across historical periods.
              </Text>

              <Text style={styles.bullet}>
                • Gender expectations were never completely identical across
                all Philippine communities.
              </Text>
            </View>
          </View>

          <View style={[styles.compareCard, isMobile && styles.fullWidth]}>
            <View style={[styles.cardHeader, styles.currentHeader]}>
              <Text style={styles.cardHeaderText}>CONTEMPORARY CONTEXT</Text>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.compareTitle}>
                Roles are increasingly negotiated and challenged
              </Text>

              <Text style={styles.bullet}>
                • Women participate widely in education, employment,
                entrepreneurship, public service, and community leadership.
              </Text>

              <Text style={styles.bullet}>
                • Family responsibilities are increasingly discussed as
                shared responsibilities rather than fixed duties.
              </Text>

              <Text style={styles.bullet}>
                • Laws and government programs address discrimination and
                promote gender equality.
              </Text>

              <Text style={styles.bullet}>
                • Stereotypes and unequal experiences can still influence
                opportunities and social expectations.
              </Text>
            </View>
          </View>

        </View>
      </View>

      {/* WHAT CHANGED */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What Has Changed?</Text>

        <View style={styles.grid}>

          <View style={[styles.infoCard, isMobile && styles.fullWidth]}>
            <Text style={styles.number}>01</Text>
            <Text style={styles.infoTitle}>Education</Text>
            <Text style={styles.infoText}>
              Access to education and participation in professional fields
              have expanded. Gender expectations, however, can still influence
              subject choices, career expectations, and experiences in school.
            </Text>
          </View>

          <View style={[styles.infoCard, isMobile && styles.fullWidth]}>
            <Text style={styles.number}>02</Text>
            <Text style={styles.infoTitle}>Work</Text>
            <Text style={styles.infoText}>
              Women and men participate in many occupations, while laws and
              policies increasingly recognize equal opportunities and
              protection from discrimination.
            </Text>
          </View>

          <View style={[styles.infoCard, isMobile && styles.fullWidth]}>
            <Text style={styles.number}>03</Text>
            <Text style={styles.infoTitle}>Family</Text>
            <Text style={styles.infoText}>
              Families have become more diverse in structure and economic
              arrangements. Expectations about caregiving and household work
              are increasingly being questioned and negotiated.
            </Text>
          </View>

          <View style={[styles.infoCard, isMobile && styles.fullWidth]}>
            <Text style={styles.number}>04</Text>
            <Text style={styles.infoTitle}>Leadership</Text>
            <Text style={styles.infoText}>
              Women participate in leadership across government, business,
              education, communities, and civil society, while representation
              and access to decision-making remain important areas of study.
            </Text>
          </View>

        </View>
      </View>

      {/* CONTINUING CHALLENGES */}
      <View style={styles.darkSection}>
        <Text style={styles.darkEyebrow}>CONTINUING CHALLENGES</Text>

        <Text style={styles.darkTitle}>
          Progress does not mean every inequality has disappeared.
        </Text>

        <Text style={styles.darkText}>
          The Philippine Statistics Authority continues to collect
          sex-disaggregated information across areas such as work, education,
          health, violence, media, public life, and economic participation.
          This demonstrates why gender analysis needs evidence rather than
          assumptions.
        </Text>

        <View style={styles.challengeGrid}>

          <View style={styles.challengeCard}>
            <Text style={styles.challengeTitle}>Stereotypes</Text>
            <Text style={styles.challengeText}>
              Expectations about how women and men should behave can restrict
              individual choices and reinforce unequal treatment.
            </Text>
          </View>

          <View style={styles.challengeCard}>
            <Text style={styles.challengeTitle}>Unequal Opportunities</Text>
            <Text style={styles.challengeText}>
              Access to employment, resources, leadership, and other
              opportunities can differ depending on social and economic
              circumstances.
            </Text>
          </View>

          <View style={styles.challengeCard}>
            <Text style={styles.challengeTitle}>Representation</Text>
            <Text style={styles.challengeText}>
              Media and public institutions influence which roles and identities
              are considered normal, valuable, or appropriate.
            </Text>
          </View>

          <View style={styles.challengeCard}>
            <Text style={styles.challengeTitle}>Violence & Safety</Text>
            <Text style={styles.challengeText}>
              Gender-based violence remains an important issue monitored through
              national gender and development indicators.
            </Text>
          </View>

        </View>
      </View>

      {/* EFFECTS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          How Gender Expectations Affect People
        </Text>

        <Text style={styles.paragraph}>
          Gender expectations can influence decisions long before a person
          enters the workplace. Children may receive messages about what
          activities, careers, behaviors, or responsibilities are considered
          appropriate for them.
        </Text>

        <View style={styles.effectBox}>
          <Text style={styles.effectTitle}>For Individuals</Text>

          <Text style={styles.effectItem}>
            • Can influence confidence, career choices, relationships, and
            educational decisions.
          </Text>

          <Text style={styles.effectItem}>
            • Can create pressure to conform to expectations associated with
            masculinity or femininity.
          </Text>

          <Text style={styles.effectItem}>
            • Can also be challenged through personal choices, education,
            supportive families, and inclusive institutions.
          </Text>
        </View>

        <View style={styles.effectBox}>
          <Text style={styles.effectTitle}>For Society</Text>

          <Text style={styles.effectItem}>
            • Gender expectations can shape who performs unpaid care work and
            household responsibilities.
          </Text>

          <Text style={styles.effectItem}>
            • They can affect participation in employment, leadership, and
            public decision-making.
          </Text>

          <Text style={styles.effectItem}>
            • Challenging restrictive stereotypes can create space for people
            to contribute according to their abilities and circumstances.
          </Text>
        </View>
      </View>

      {/* EVIDENCE */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          What the Evidence Tells Us
        </Text>

        <View style={styles.evidenceCard}>
          <Text style={styles.evidenceNumber}>123</Text>

          <Text style={styles.evidenceTitle}>
            Philippine gender indicators
          </Text>

          <Text style={styles.evidenceText}>
            The 2026 Philippine Statistics Authority Women and Men factsheet
            contains 123 indicators covering 20 socioeconomic sectors and
            gender concerns.
          </Text>

          <Text style={styles.evidenceText}>
            These include education, work and economic participation, health,
            social protection, violence against women, media, public life,
            women empowerment, and other areas.
          </Text>
        </View>

        <Text style={styles.sourceNote}>
          Source: Philippine Statistics Authority, 2026 Women and Men in the
          Philippines / Core Gender and Development Indicators.
        </Text>
      </View>

      {/* GROUP REFLECTION */}
      <View style={styles.reflectionSection}>
        <Text style={styles.reflectionEyebrow}>GROUP REFLECTION</Text>

        <Text style={styles.reflectionTitle}>
          Our Critical Reflection
        </Text>

        <Text style={styles.reflectionText}>
          Based on our study, we learned that gender roles are not fixed
          characteristics of individuals. They are influenced by historical
          conditions, cultural beliefs, institutions, and everyday social
          interactions.
        </Text>

        <Text style={styles.reflectionText}>
          Philippine society has experienced significant changes in education,
          employment, family life, leadership, and legal protections. At the
          same time, some expectations and inequalities continue to affect
          people's choices and experiences.
        </Text>

        <Text style={styles.reflectionText}>
          We therefore believe that studying gender roles is important because
          it helps us recognize how social expectations are formed and how they
          can be changed when they become restrictive or unequal.
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quote}>
            “Gender roles can change when society changes.”
          </Text>

          <Text style={styles.quoteCaption}>
            Our central takeaway
          </Text>
        </View>
      </View>

      {/* FINAL TAKEAWAY */}
      <View style={styles.finalBox}>
        <Text style={styles.finalTitle}>Key Takeaway</Text>

        <Text style={styles.finalText}>
          The history of gender roles in the Philippines shows both continuity
          and change. Understanding that history allows us to examine present
          expectations critically, recognize continuing inequalities, and
          appreciate the different ways Filipino people contribute to families,
          communities, institutions, and society.
        </Text>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          Gender Roles in the Philippines
        </Text>

        <Text style={styles.footerText}>
          Analysis & Reflection • Academic Website Project
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
    paddingBottom: 50,
  },

  hero: {
    backgroundColor: NAVY,
    paddingHorizontal: 70,
    paddingVertical: 70,
  },

  heroMobile: {
    paddingHorizontal: 25,
    paddingVertical: 50,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 15,
  },

  heroTitle: {
    color: WHITE,
    fontSize: 46,
    fontWeight: '900',
    marginBottom: 20,
    maxWidth: 850,
  },

  heroTitleMobile: {
    fontSize: 34,
  },

  heroText: {
    color: '#DCE7EE',
    fontSize: 17,
    lineHeight: 28,
    maxWidth: 800,
  },

  section: {
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },

  sectionTitle: {
    color: NAVY,
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 22,
  },

  paragraph: {
    color: TEXT,
    fontSize: 16,
    lineHeight: 27,
    marginBottom: 16,
  },

  comparisonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 22,
  },

  compareCard: {
    flex: 1,
    minWidth: 300,
    backgroundColor: WHITE,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#DDD9D0',
  },

  fullWidth: {
    flexBasis: '100%',
    minWidth: '100%',
  },

  cardHeader: {
    backgroundColor: GOLD,
    padding: 17,
  },

  currentHeader: {
    backgroundColor: BLUE,
  },

  cardHeaderText: {
    color: WHITE,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },

  cardBody: {
    padding: 25,
  },

  compareTitle: {
    color: NAVY,
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 27,
    marginBottom: 18,
  },

  bullet: {
    color: TEXT,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 13,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
  },

  infoCard: {
    width: '48%',
    minWidth: 300,
    backgroundColor: WHITE,
    borderRadius: 15,
    padding: 25,
    borderWidth: 1,
    borderColor: '#DDD9D0',
  },

  number: {
    color: GOLD,
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 10,
  },

  infoTitle: {
    color: NAVY,
    fontSize: 21,
    fontWeight: '900',
    marginBottom: 10,
  },

  infoText: {
    color: MUTED,
    fontSize: 15,
    lineHeight: 24,
  },

  darkSection: {
    backgroundColor: BLUE,
    paddingHorizontal: 40,
    paddingVertical: 55,
  },

  darkEyebrow: {
    color: GOLD,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 14,
  },

  darkTitle: {
    color: WHITE,
    fontSize: 31,
    fontWeight: '900',
    maxWidth: 850,
    lineHeight: 40,
    marginBottom: 18,
  },

  darkText: {
    color: '#DCE7EE',
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 850,
    marginBottom: 30,
  },

  challengeGrid: {
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },

  challengeCard: {
    width: '48%',
    minWidth: 290,
    backgroundColor: '#244963',
    borderRadius: 14,
    padding: 22,
  },

  challengeTitle: {
    color: GOLD,
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 9,
  },

  challengeText: {
    color: '#E6EEF3',
    fontSize: 14,
    lineHeight: 23,
  },

  effectBox: {
    backgroundColor: WHITE,
    borderLeftWidth: 5,
    borderLeftColor: GOLD,
    borderRadius: 12,
    padding: 25,
    marginBottom: 18,
  },

  effectTitle: {
    color: NAVY,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 15,
  },

  effectItem: {
    color: TEXT,
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 9,
  },

  evidenceCard: {
    backgroundColor: NAVY,
    borderRadius: 18,
    padding: 32,
    maxWidth: 850,
  },

  evidenceNumber: {
    color: GOLD,
    fontSize: 48,
    fontWeight: '900',
  },

  evidenceTitle: {
    color: WHITE,
    fontSize: 23,
    fontWeight: '900',
    marginBottom: 14,
  },

  evidenceText: {
    color: '#DCE7EE',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 10,
  },

  sourceNote: {
    color: MUTED,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 12,
    maxWidth: 850,
  },

  reflectionSection: {
    backgroundColor: LIGHT,
    paddingHorizontal: 30,
    paddingVertical: 55,
  },

  reflectionEyebrow: {
    color: GOLD,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 12,
  },

  reflectionTitle: {
    color: NAVY,
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 22,
  },

  reflectionText: {
    color: TEXT,
    fontSize: 16,
    lineHeight: 27,
    maxWidth: 850,
    marginBottom: 16,
  },

  quoteBox: {
    marginTop: 15,
    maxWidth: 850,
    backgroundColor: WHITE,
    borderRadius: 15,
    padding: 25,
    borderWidth: 1,
    borderColor: '#D9D5CC',
  },

  quote: {
    color: NAVY,
    fontSize: 23,
    fontWeight: '800',
    lineHeight: 32,
  },

  quoteCaption: {
    color: MUTED,
    marginTop: 10,
    fontSize: 13,
    fontWeight: '700',
  },

  finalBox: {
    backgroundColor: GOLD,
    paddingHorizontal: 35,
    paddingVertical: 45,
  },

  finalTitle: {
    color: NAVY,
    fontSize: 27,
    fontWeight: '900',
    marginBottom: 12,
  },

  finalText: {
    color: NAVY,
    fontSize: 16,
    lineHeight: 27,
    maxWidth: 900,
  },

  footer: {
    backgroundColor: NAVY,
    paddingVertical: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  footerTitle: {
    color: WHITE,
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 6,
  },

  footerText: {
    color: '#B9CBD7',
    fontSize: 13,
  },
});