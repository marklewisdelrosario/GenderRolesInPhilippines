import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

export default function Understanding() {
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  return (
    <ScrollView style={styles.container}>
      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>SECTION 01</Text>

        <Text style={[styles.heroTitle, isMobile && styles.mobileHeroTitle]}>
          Understanding Gender Roles
        </Text>

        <Text style={styles.heroText}>
          Gender roles are social expectations about how people are expected
          to behave, work, communicate, and participate in family and society.
          Studying them helps us understand how culture and institutions
          influence people's everyday experiences.
        </Text>
      </View>

      <View style={styles.content}>

        {/* DEFINITION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            What Are Gender Roles?
          </Text>

          <View style={styles.mainCard}>
            <Text style={styles.bodyText}>
              Gender roles are socially developed expectations about the
              behaviors, responsibilities, characteristics, and activities
              associated with people based on gender.
            </Text>

            <Text style={styles.bodyText}>
              These expectations can appear in many parts of life. For
              example, a society may develop ideas about who should provide
              income for a family, who should perform household work, what
              careers are considered appropriate, or who should take
              leadership roles.
            </Text>

            <Text style={styles.bodyText}>
              Importantly, gender roles are not identical in every society.
              They can change across historical periods, communities,
              socioeconomic groups, and generations.
            </Text>
          </View>
        </View>

        {/* SEX VS GENDER */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Sex and Gender
          </Text>

          <Text style={styles.sectionIntro}>
            Sex and gender are related concepts, but they are not identical.
            Understanding the distinction helps prevent biological
            characteristics from being treated as explanations for every
            social expectation.
          </Text>

          <View style={styles.comparison}>
            <View style={styles.comparisonCard}>
              <Text style={styles.cardLabel}>SEX</Text>

              <Text style={styles.cardTitle}>
                Biological characteristics
              </Text>

              <Text style={styles.cardText}>
                Sex generally refers to biological characteristics such as
                reproductive anatomy, chromosomes, and hormones. Biological
                characteristics themselves also have variation and are more
                complex than a simple two-category model in every context.
              </Text>
            </View>

            <View style={styles.comparisonCard}>
              <Text style={styles.cardLabel}>GENDER</Text>

              <Text style={styles.cardTitle}>
                Social expectations & identities
              </Text>

              <Text style={styles.cardText}>
                Gender refers to social and cultural meanings, expectations,
                roles, identities, and relationships associated with gender.
                These can differ across societies and change over time.
              </Text>
            </View>
          </View>
        </View>

        {/* WHY STUDY */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Why Study Gender Roles?
          </Text>

          <View style={styles.grid}>
            <TopicCard
              title="Family"
              text="Gender expectations can influence caregiving, household responsibilities, parenting, and decision-making."
            />

            <TopicCard
              title="Education"
              text="Gender expectations can influence subject choices, educational opportunities, classroom experiences, and career aspirations."
            />

            <TopicCard
              title="Work"
              text="Ideas about appropriate occupations and leadership can affect employment opportunities and workplace experiences."
            />

            <TopicCard
              title="Media"
              text="Movies, television, advertising, social media, and other forms of communication can reinforce or challenge gender stereotypes."
            />

            <TopicCard
              title="Leadership"
              text="Gender expectations can influence perceptions of who is expected to lead in communities, organizations, and public institutions."
            />

            <TopicCard
              title="Society"
              text="Studying gender helps identify patterns of opportunity, discrimination, representation, and social change."
            />
          </View>
        </View>

        {/* PHILIPPINE CONTEXT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            The Philippine Context
          </Text>

          <View style={styles.highlight}>
            <Text style={styles.highlightTitle}>
              Gender is connected to Philippine social life.
            </Text>

            <Text style={styles.highlightText}>
              In the Philippines, gender can be studied through family
              relationships, education, employment, media, politics,
              community participation, health, and other areas of social
              life.
            </Text>

            <Text style={styles.highlightText}>
              The Philippine Commission on Women explains that the Magna
              Carta of Women (Republic Act No. 9710) seeks to eliminate
              discrimination against women and promote substantive equality.
              The law also addresses education, employment, media portrayal,
              political participation, and gender mainstreaming.
            </Text>
          </View>
        </View>

        {/* IMPORTANT IDEA */}
        <View style={styles.finalBox}>
          <Text style={styles.finalLabel}>KEY IDEA</Text>

          <Text style={styles.finalTitle}>
            Gender roles are learned, negotiated, and changed.
          </Text>

          <Text style={styles.finalText}>
            Studying gender roles does not mean assuming that every Filipino
            experiences gender in the same way. Instead, it means examining
            how social expectations are created, how they affect different
            people, and how those expectations change over time.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

function TopicCard({ title, text }) {
  return (
    <View style={styles.topicCard}>
      <Text style={styles.topicTitle}>{title}</Text>
      <Text style={styles.topicText}>{text}</Text>
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

  section: {
    marginBottom: 50,
  },

  sectionTitle: {
    color: '#102F49',
    fontSize: 29,
    fontWeight: '900',
    marginBottom: 15,
  },

  sectionIntro: {
    color: '#607481',
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 22,
    maxWidth: 850,
  },

  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E1DED6',
    padding: 27,
  },

  bodyText: {
    color: '#536875',
    fontSize: 16,
    lineHeight: 27,
    marginBottom: 15,
  },

  comparison: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
  },

  comparisonCard: {
    flex: 1,
    minWidth: 290,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E1DED6',
    padding: 25,
  },

  cardLabel: {
    color: '#C9AA65',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 8,
  },

  cardTitle: {
    color: '#102F49',
    fontSize: 21,
    fontWeight: '900',
    marginBottom: 10,
  },

  cardText: {
    color: '#607481',
    fontSize: 15,
    lineHeight: 24,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },

  topicCard: {
    flex: 1,
    minWidth: 280,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E1DED6',
    padding: 22,
  },

  topicTitle: {
    color: '#102F49',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 8,
  },

  topicText: {
    color: '#607481',
    fontSize: 14,
    lineHeight: 23,
  },

  highlight: {
    backgroundColor: '#ECEAE4',
    borderRadius: 15,
    padding: 27,
  },

  highlightTitle: {
    color: '#102F49',
    fontSize: 23,
    fontWeight: '900',
    marginBottom: 13,
  },

  highlightText: {
    color: '#607481',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 12,
  },

  finalBox: {
    backgroundColor: '#163B59',
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