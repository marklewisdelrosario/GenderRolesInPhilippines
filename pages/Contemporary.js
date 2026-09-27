import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

export default function Contemporary() {
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>SECTION 03</Text>

        <Text style={[styles.heroTitle, isMobile && styles.mobileHeroTitle]}>
          Contemporary Gender Roles
        </Text>

        <Text style={styles.heroText}>
          Gender roles in the Philippines continue to change as education,
          employment, technology, migration, family structures, and social
          attitudes develop.
        </Text>
      </View>

      <View style={styles.content}>

        <View style={styles.introBox}>
          <Text style={styles.introTitle}>
            Gender roles today are not the same for everyone.
          </Text>

          <Text style={styles.introText}>
            Contemporary Filipino society contains both traditional
            expectations and changing ideas about gender. People's
            experiences can differ depending on age, location, socioeconomic
            circumstances, occupation, family situation, and other factors.
          </Text>

          <Text style={styles.introText}>
            The areas below show some of the places where gender expectations
            can be observed in everyday Philippine life.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Family</Text>

          <AreaCard
            title="Changing responsibilities"
            text="Family roles are changing as women and men increasingly participate in both paid work and household responsibilities. At the same time, expectations that women should primarily handle caregiving and household work can continue to influence family life."
          />

          <AreaCard
            title="Parenting and caregiving"
            text="Ideas about motherhood, fatherhood, childcare, and eldercare can influence how responsibilities are divided within households."
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>

          <AreaCard
            title="Access and participation"
            text="Education is an important area for examining gender because schooling affects future employment, income, leadership opportunities, and social participation."
          />

          <AreaCard
            title="Gender expectations"
            text="Students can encounter expectations about which subjects, careers, behaviors, or leadership roles are considered appropriate for different genders."
          />

          <View style={styles.highlight}>
            <Text style={styles.highlightTitle}>
              Philippine policy context
            </Text>

            <Text style={styles.highlightText}>
              The Magna Carta of Women calls for equal access and elimination
              of discrimination in education, scholarships, and training.
              It also calls for educational materials and curricula to
              address gender stereotypes.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Workplace</Text>

          <View style={styles.dataCard}>
            <Text style={styles.dataLabel}>OFFICIAL DATA</Text>

            <Text style={styles.dataTitle}>
              Sex-disaggregated labor statistics
            </Text>

            <Text style={styles.dataText}>
              The Philippine Statistics Authority publishes labor-force
              tables that separate information by sex, including employment
              status, occupation, industry, educational attainment, hours
              worked, and class of worker.
            </Text>

            <Text style={styles.dataText}>
              These statistics are useful because gender differences in
              employment cannot be understood from a single number. Occupation,
              industry, working hours, employment status, and education can
              all provide additional context.
            </Text>
          </View>

          <AreaCard
            title="Workplace expectations"
            text="Gender expectations can influence perceptions of leadership, caregiving, occupations, working hours, and professional behavior."
          />

          <AreaCard
            title="Women's employment rights"
            text="The Magna Carta of Women includes provisions concerning non-discrimination in employment, equal opportunities, decent work, social protection, and participation in decision-making."
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Media</Text>

          <AreaCard
            title="Representation"
            text="Television, film, advertising, news, social media, and online content can influence ideas about femininity, masculinity, relationships, beauty, family, and leadership."
          />

          <AreaCard
            title="Stereotypes"
            text="Repeated portrayals can reinforce assumptions about what women and men should look like, how they should behave, and which roles they should occupy."
          />

          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>
              Philippine law specifically addresses nondiscriminatory and
              non-derogatory portrayal of women in media and film.
            </Text>

            <Text style={styles.quoteSource}>
              — Philippine Commission on Women, Magna Carta of Women
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Leadership</Text>

          <AreaCard
            title="Participation in decision-making"
            text="Leadership can take place in government, schools, workplaces, community organizations, professional associations, and households."
          />

          <AreaCard
            title="Representation matters"
            text="The Magna Carta of Women recognizes women's participation and representation in policy-making and decision-making bodies as an important part of substantive equality."
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Community</Text>

          <View style={styles.grid}>
            <SmallCard
              title="Barangays"
              text="Gender roles can influence community participation, caregiving, volunteer work, and local decision-making."
            />

            <SmallCard
              title="Civil Society"
              text="Women's organizations and other community groups contribute to discussions about equality, rights, and social change."
            />

            <SmallCard
              title="Digital Spaces"
              text="Social media provides new spaces for advocacy, education, discussion, and representation while also creating challenges involving stereotypes and harassment."
            />

            <SmallCard
              title="Everyday Life"
              text="Gender expectations can influence clothing, behavior, relationships, occupations, and perceptions of responsibility."
            />
          </View>
        </View>

        <View style={styles.finalBox}>
          <Text style={styles.finalLabel}>KEY OBSERVATION</Text>

          <Text style={styles.finalTitle}>
            Contemporary gender roles combine continuity and change.
          </Text>

          <Text style={styles.finalText}>
            Some traditional expectations remain influential, while changes
            in education, employment, technology, law, and social attitudes
            have expanded the roles available to many Filipinos.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

function AreaCard({ title, text }) {
  return (
    <View style={styles.areaCard}>
      <Text style={styles.areaTitle}>{title}</Text>
      <Text style={styles.areaText}>{text}</Text>
    </View>
  );
}

function SmallCard({ title, text }) {
  return (
    <View style={styles.smallCard}>
      <Text style={styles.smallTitle}>{title}</Text>
      <Text style={styles.smallText}>{text}</Text>
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
    marginBottom: 48,
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
    marginBottom: 10,
  },

  section: {
    marginBottom: 48,
  },

  sectionTitle: {
    color: '#102F49',
    fontSize: 29,
    fontWeight: '900',
    marginBottom: 20,
  },

  areaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E1DED6',
    padding: 23,
    marginBottom: 14,
  },

  areaTitle: {
    color: '#102F49',
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 8,
  },

  areaText: {
    color: '#607481',
    fontSize: 15,
    lineHeight: 25,
  },

  highlight: {
    backgroundColor: '#163B59',
    borderRadius: 14,
    padding: 25,
    marginTop: 10,
  },

  highlightTitle: {
    color: '#C9AA65',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 9,
  },

  highlightText: {
    color: '#E1E9ED',
    fontSize: 15,
    lineHeight: 25,
  },

  dataCard: {
    backgroundColor: '#102F49',
    borderRadius: 15,
    padding: 27,
    marginBottom: 15,
  },

  dataLabel: {
    color: '#C9AA65',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 9,
  },

  dataTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '900',
    marginBottom: 12,
  },

  dataText: {
    color: '#E1E9ED',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 10,
  },

  quoteBox: {
    backgroundColor: '#ECEAE4',
    borderLeftWidth: 5,
    borderLeftColor: '#C9AA65',
    padding: 22,
    marginTop: 5,
  },

  quoteText: {
    color: '#102F49',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 26,
  },

  quoteSource: {
    color: '#607481',
    fontSize: 13,
    marginTop: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },

  smallCard: {
    flex: 1,
    minWidth: 260,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E1DED6',
    padding: 22,
  },

  smallTitle: {
    color: '#102F49',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8,
  },

  smallText: {
    color: '#607481',
    fontSize: 14,
    lineHeight: 23,
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