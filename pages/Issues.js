import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

export default function Issues() {
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>SECTION 04</Text>

        <Text style={[styles.heroTitle, isMobile && styles.mobileHeroTitle]}>
          Gender Issues & Realities
        </Text>

        <Text style={styles.heroText}>
          Gender issues involve the ways social expectations, discrimination,
          unequal opportunities, representation, and access to resources
          affect people in Philippine society.
        </Text>
      </View>

      <View style={styles.content}>

        <View style={styles.introBox}>
          <Text style={styles.introTitle}>
            From expectations to real-world consequences
          </Text>

          <Text style={styles.introText}>
            Gender stereotypes may seem like simple assumptions, but they can
            affect educational choices, employment, family responsibilities,
            leadership opportunities, and how people are treated.
          </Text>

          <Text style={styles.introText}>
            Examining these issues requires evidence and attention to the
            experiences of different groups rather than assuming that every
            person has the same experience.
          </Text>
        </View>

        {/* STEREOTYPES */}
        <IssueCard
          number="01"
          title="Gender Stereotypes"
          text="Gender stereotypes are generalized beliefs about the characteristics, behavior, abilities, or responsibilities associated with a gender."
          examples={[
            'Assuming women are naturally better suited to caregiving.',
            'Assuming men should always be financial providers.',
            'Expecting particular occupations to belong primarily to one gender.',
            'Judging people who do not conform to traditional gender expectations.'
          ]}
        />

        {/* DISCRIMINATION */}
        <IssueCard
          number="02"
          title="Discrimination"
          text="Discrimination occurs when gender-based distinctions, exclusions, restrictions, or practices limit a person's rights or opportunities."
          examples={[
            'Unequal treatment in employment.',
            'Barriers to education or training.',
            'Discriminatory treatment based on pregnancy.',
            'Unequal access to decision-making opportunities.'
          ]}
        />

        <View style={styles.legalBox}>
          <Text style={styles.legalLabel}>PHILIPPINE LAW</Text>

          <Text style={styles.legalTitle}>
            Magna Carta of Women
          </Text>

          <Text style={styles.legalText}>
            Republic Act No. 9710 recognizes discrimination against women as
            a gender-based distinction, exclusion, or restriction that
            impairs or limits the equal enjoyment of rights and opportunities.
          </Text>

          <Text style={styles.legalText}>
            The law also addresses education, employment, media, political
            participation, health, social protection, and other areas.
          </Text>
        </View>

        {/* EQUAL OPPORTUNITIES */}
        <IssueCard
          number="03"
          title="Equal Opportunities"
          text="Equal opportunity means that gender should not unjustly restrict a person's access to education, employment, training, leadership, resources, or participation."
          examples={[
            'Equal access to education and scholarships.',
            'Fair opportunities for employment and promotion.',
            'Access to training and professional development.',
            'Participation in decision-making and leadership.'
          ]}
        />

        {/* MEDIA */}
        <IssueCard
          number="04"
          title="Media Representation"
          text="Media can influence public ideas about gender by determining which people are visible, how they are portrayed, and which roles are repeatedly associated with them."
          examples={[
            'Women being represented mainly through appearance or domestic roles.',
            'Men being portrayed primarily as powerful, aggressive, or financially responsible.',
            'Limited representation of people who do not fit traditional gender expectations.',
            'Positive representation challenging traditional stereotypes.'
          ]}
        />

        {/* INEQUALITY */}
        <IssueCard
          number="05"
          title="Gender-Based Inequality"
          text="Gender inequality can appear in differences in access to resources, safety, employment, leadership, political participation, education, health services, and social protection."
          examples={[
            'Differences in labor-market experiences.',
            'Unequal distribution of unpaid caregiving responsibilities.',
            'Barriers to leadership and decision-making.',
            'Exposure to gender-based violence and harassment.'
          ]}
        />

        {/* OPPORTUNITIES */}
        <IssueCard
          number="06"
          title="Changing Expectations"
          text="Gender expectations are not fixed. Social attitudes, education, law, technology, economic change, and advocacy can contribute to changing ideas about gender."
          examples={[
            'Greater participation of women in professional fields.',
            'Changing expectations around fathers and caregiving.',
            'More public discussion of gender equality.',
            'Greater attention to inclusive and gender-sensitive language.'
          ]}
        />

        {/* ANALYSIS */}
        <View style={styles.analysisBox}>
          <Text style={styles.analysisLabel}>
            WHY THIS MATTERS
          </Text>

          <Text style={styles.analysisTitle}>
            Equality requires more than simply changing individual attitudes.
          </Text>

          <Text style={styles.analysisText}>
            Gender inequality can be influenced by institutions, policies,
            economic structures, cultural expectations, and social practices.
            This is why Philippine gender policy includes both individual
            rights and institutional responsibilities.
          </Text>

          <Text style={styles.analysisText}>
            The Magna Carta of Women, for example, directs government
            institutions to use gender mainstreaming and to address
            discriminatory systems and practices.
          </Text>
        </View>

        {/* FINAL */}
        <View style={styles.finalBox}>
          <Text style={styles.finalTitle}>
            A gender-sensitive approach
          </Text>

          <Text style={styles.finalText}>
            A respectful study of gender should avoid blaming individuals
            for social problems, avoid reinforcing stereotypes, and recognize
            that people's experiences can differ. Evidence, context, and
            inclusive language are essential when examining gender issues.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

function IssueCard({ number, title, text, examples }) {
  return (
    <View style={styles.issueCard}>
      <View style={styles.issueHeader}>
        <View style={styles.number}>
          <Text style={styles.numberText}>{number}</Text>
        </View>

        <Text style={styles.issueTitle}>{title}</Text>
      </View>

      <Text style={styles.issueText}>{text}</Text>

      <Text style={styles.exampleHeading}>
        Examples
      </Text>

      {examples.map((example, index) => (
        <View key={index} style={styles.exampleRow}>
          <Text style={styles.bullet}>•</Text>

          <Text style={styles.exampleText}>
            {example}
          </Text>
        </View>
      ))}
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
    marginBottom: 45,
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

  issueCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E1DED6',
    padding: 25,
    marginBottom: 17,
  },

  issueHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  number: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#102F49',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  numberText: {
    color: '#C9AA65',
    fontWeight: '900',
  },

  issueTitle: {
    flex: 1,
    color: '#102F49',
    fontSize: 21,
    fontWeight: '900',
  },

  issueText: {
    color: '#607481',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 16,
  },

  exampleHeading: {
    color: '#102F49',
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 9,
  },

  exampleRow: {
    flexDirection: 'row',
    marginBottom: 7,
  },

  bullet: {
    color: '#C9AA65',
    fontSize: 18,
    marginRight: 8,
  },

  exampleText: {
    flex: 1,
    color: '#607481',
    fontSize: 14,
    lineHeight: 22,
  },

  legalBox: {
    backgroundColor: '#163B59',
    borderRadius: 15,
    padding: 28,
    marginBottom: 20,
  },

  legalLabel: {
    color: '#C9AA65',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 10,
  },

  legalTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 12,
  },

  legalText: {
    color: '#E1E9ED',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 10,
  },

  analysisBox: {
    backgroundColor: '#ECEAE4',
    borderRadius: 15,
    padding: 28,
    marginBottom: 25,
  },

  analysisLabel: {
    color: '#C9AA65',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 10,
  },

  analysisTitle: {
    color: '#102F49',
    fontSize: 25,
    fontWeight: '900',
    lineHeight: 33,
    marginBottom: 13,
  },

  analysisText: {
    color: '#607481',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 11,
  },

  finalBox: {
    backgroundColor: '#102F49',
    borderRadius: 16,
    padding: 30,
    marginBottom: 30,
  },

  finalTitle: {
    color: '#C9AA65',
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 12,
  },

  finalText: {
    color: '#E1E9ED',
    fontSize: 15,
    lineHeight: 25,
  },
});