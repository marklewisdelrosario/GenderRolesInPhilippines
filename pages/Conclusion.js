import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

export default function Conclusion() {
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  return (
    <ScrollView style={styles.container}>
      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>CONCLUSION</Text>

        <Text style={[styles.heroTitle, isMobile && styles.mobileHeroTitle]}>
          What We Learned
        </Text>

        <Text style={styles.heroText}>
          Understanding gender roles in the Philippines requires looking
          beyond stereotypes and examining how history, culture, institutions,
          and social change shape people's experiences.
        </Text>
      </View>

      <View style={styles.content}>
        {/* FINDINGS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Important Findings</Text>

          <Finding
            number="01"
            title="Gender roles are shaped by society"
            text="Gender expectations are influenced by family practices, cultural traditions, education, religion, economic conditions, media, and institutions. They are therefore not simply determined by biological sex."
          />

          <Finding
            number="02"
            title="Gender roles have changed over time"
            text="Philippine gender relations have developed through pre-colonial traditions, Spanish colonization, American influence, post-war social change, and contemporary transformations."
          />

          <Finding
            number="03"
            title="Historical experiences were diverse"
            text="Historical evidence does not support a single simple story about gender. Sources on babaylan and gender-nonconforming ritual specialists, for example, show that gender and authority could take different forms in different communities."
          />

          <Finding
            number="04"
            title="Progress and challenges exist together"
            text="Contemporary Philippine society has expanded opportunities and legal protections, while gender stereotypes, discrimination, unequal opportunities, and other challenges continue to require attention."
          />
        </View>

        {/* COMPARISON */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Historical and Contemporary Comparison
          </Text>

          <View style={styles.comparison}>
            <View style={styles.column}>
              <Text style={styles.columnTitle}>Historical Perspective</Text>

              <Text style={styles.item}>• Roles varied between communities</Text>
              <Text style={styles.item}>• Spiritual authority could involve women and gender-diverse people</Text>
              <Text style={styles.item}>• Colonial institutions changed social expectations</Text>
              <Text style={styles.item}>• Education and religion influenced gender norms</Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.columnTitle}>Contemporary Perspective</Text>

              <Text style={styles.item}>• Education and employment opportunities have expanded</Text>
              <Text style={styles.item}>• Gender expectations continue to influence family and work</Text>
              <Text style={styles.item}>• Media affects public ideas about gender</Text>
              <Text style={styles.item}>• Laws and policies address discrimination and equality</Text>
            </View>
          </View>
        </View>

        {/* CHALLENGES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Continuing Challenges
          </Text>

          <View style={styles.challengeBox}>
            <Text style={styles.challengeTitle}>
              Stereotypes
            </Text>

            <Text style={styles.challengeText}>
              Expectations about what women, men, and gender-diverse people
              "should" be like can restrict individual choices and reinforce
              unequal expectations.
            </Text>
          </View>

          <View style={styles.challengeBox}>
            <Text style={styles.challengeTitle}>
              Unequal Opportunities
            </Text>

            <Text style={styles.challengeText}>
              Differences in access to resources, leadership, employment,
              education, safety, and decision-making remain important areas
              for gender research.
            </Text>
          </View>

          <View style={styles.challengeBox}>
            <Text style={styles.challengeTitle}>
              Representation
            </Text>

            <Text style={styles.challengeText}>
              Media representation can influence how people understand
              masculinity, femininity, relationships, leadership, and the
              roles available to different groups.
            </Text>
          </View>
        </View>

        {/* GROUP REFLECTION */}
        <View style={styles.reflection}>
          <Text style={styles.reflectionLabel}>GROUP REFLECTION</Text>

          <Text style={styles.reflectionTitle}>
            Gender roles are changing, but change is not always uniform.
          </Text>

          <Text style={styles.reflectionText}>
            Our group learned that studying gender roles requires both
            historical understanding and attention to present-day evidence.
            Philippine society has experienced significant changes in
            education, employment, family life, representation, and
            participation in public life. At the same time, expectations
            about gender can continue to influence people's opportunities
            and everyday experiences.
          </Text>

          <Text style={styles.reflectionText}>
            We therefore believe that understanding gender should involve
            listening to different experiences, examining evidence carefully,
            recognizing historical context, and avoiding assumptions about
            what people can or cannot do because of gender.
          </Text>
        </View>

        {/* FINAL MESSAGE */}
        <View style={styles.finalBox}>
          <Text style={styles.finalTitle}>
            Understanding is the first step.
          </Text>

          <Text style={styles.finalText}>
            By studying the history, realities, and continuing changes
            surrounding gender roles in the Philippines, students can better
            understand how social expectations affect individuals and
            communities.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

function Finding({ number, title, text }) {
  return (
    <View style={styles.finding}>
      <View style={styles.number}>
        <Text style={styles.numberText}>{number}</Text>
      </View>

      <View style={styles.findingContent}>
        <Text style={styles.findingTitle}>{title}</Text>
        <Text style={styles.findingText}>{text}</Text>
      </View>
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
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 12,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 46,
    fontWeight: '900',
    maxWidth: 850,
  },

  mobileHeroTitle: {
    fontSize: 34,
  },

  heroText: {
    color: '#DCE5EA',
    fontSize: 17,
    lineHeight: 28,
    maxWidth: 800,
    marginTop: 20,
  },

  content: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 45,
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

  finding: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1DED6',
    borderRadius: 13,
    padding: 22,
    marginBottom: 15,
  },

  number: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#102F49',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },

  numberText: {
    color: '#C9AA65',
    fontWeight: '900',
  },

  findingContent: {
    flex: 1,
  },

  findingTitle: {
    color: '#102F49',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 7,
  },

  findingText: {
    color: '#607481',
    fontSize: 15,
    lineHeight: 24,
  },

  comparison: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
  },

  column: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E1DED6',
    padding: 25,
    flex: 1,
    minWidth: 290,
  },

  columnTitle: {
    color: '#102F49',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 15,
  },

  item: {
    color: '#607481',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 10,
  },

  challengeBox: {
    backgroundColor: '#ECEAE4',
    borderRadius: 12,
    padding: 22,
    marginBottom: 15,
  },

  challengeTitle: {
    color: '#102F49',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 7,
  },

  challengeText: {
    color: '#607481',
    fontSize: 15,
    lineHeight: 24,
  },

  reflection: {
    backgroundColor: '#163B59',
    borderRadius: 16,
    padding: 30,
    marginBottom: 30,
  },

  reflectionLabel: {
    color: '#C9AA65',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 12,
  },

  reflectionTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
    lineHeight: 35,
    marginBottom: 18,
  },

  reflectionText: {
    color: '#E1E9ED',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 14,
  },

  finalBox: {
    backgroundColor: '#102F49',
    borderRadius: 16,
    padding: 30,
    marginBottom: 30,
    alignItems: 'center',
  },

  finalTitle: {
    color: '#C9AA65',
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 12,
  },

  finalText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    maxWidth: 750,
  },
});