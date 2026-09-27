import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Linking,
} from 'react-native';

export default function References() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>REFERENCES</Text>

        <Text style={styles.heroTitle}>
          Sources & References
        </Text>

        <Text style={styles.heroText}>
          This project uses government statistics, Philippine policy
          documents, and academic research to support its discussion of
          gender roles in the Philippines.
        </Text>
      </View>

      <View style={styles.content}>

        {/* GOVERNMENT */}
        <ReferenceSection
          title="Government Sources"
          references={[
            {
              title:
                'Philippine Statistics Authority. (2026). Women and Men in the Philippines.',
              description:
                'The PSA 2026 factsheet provides updated gender statistics across 20 socioeconomic sectors and gender concerns.',
              url:
                'https://psa.gov.ph/content/philippine-statistics-authority-issues-updates-women-and-men-philippines',
            },
            {
              title:
                'Philippine Statistics Authority. Gender and Development Statistics.',
              description:
                'Official Philippine gender statistics and the Philippine Core Gender and Development indicators.',
              url:
                'https://psa.gov.ph/gender-statistics',
            },
            {
              title:
                'Philippine Commission on Women. Republic Act No. 9710 — Magna Carta of Women.',
              description:
                'Official information about the Magna Carta of Women and its provisions concerning discrimination, education, employment, media, political participation, and gender mainstreaming.',
              url:
                'https://pcw.gov.ph/magna-carta-of-women/',
            },
            {
              title:
                'Philippine Commission on Women. FAQ: Republic Act 9710 or the Magna Carta of Women.',
              description:
                'Official explanation of the law and its definition of discrimination against women.',
              url:
                'https://pcw.gov.ph/faq-republic-act-9710-the-magna-carta-of-women/',
            },
          ]}
          openLink={openLink}
        />

        {/* ACADEMIC */}
        <ReferenceSection
          title="Academic & Scholarly Sources"
          references={[
            {
              title:
                'Rodriguez, A. M. L. (2022). Filipinising colonial gender values: A history of gender formation in Philippine higher education.',
              description:
                'Examines Spanish and American colonial influences on gender relations and Philippine higher education.',
              url:
                'https://www.tandfonline.com/doi/full/10.1080/00131857.2022.2128760',
            },
            {
              title:
                'Aguilar, F. V. Jr. (2015). The Passing of Rice Spirits: Cosmology, Technology, and Gender Relations in the Colonial Philippines.',
              description:
                'Academic research examining gender relations, colonial change, and spiritual authority in the Philippines.',
              url:
                'https://archium.ateneo.edu/history-faculty-pubs/99/',
            },
            {
              title:
                'Nono, G. (2023). Babaylan Sing Back: Philippine Shamans and Voice, Gender, and Place.',
              description:
                'Ateneo University Press publication examining babaylan traditions, gender, spirituality, and contemporary cultural memory.',
              url:
                'https://unipress.ateneo.edu/product/babaylan-sing-back-philippine-shamans-and-voice-gender-and-place',
            },
          ]}
          openLink={openLink}
        />

        {/* LAWS AND POLICY */}
        <ReferenceSection
          title="Policies & Gender Equality"
          references={[
            {
              title:
                'Republic Act No. 9710 — The Magna Carta of Women.',
              description:
                'Philippine law establishing protections and mechanisms related to women’s human rights and gender equality.',
              url:
                'https://pcw.gov.ph/magna-carta-of-women/',
            },
            {
              title:
                'PCW-DILG-DBM-NEDA Joint Memorandum Circular 2024-01.',
              description:
                'Revised guidelines concerning the localization of the Magna Carta of Women.',
              url:
                'https://pcw.gov.ph/pcw-dilg-dbm-neda-joint-memorandum-circular-2024-01-revised-guidelines-on-the-localization-of-the-magna-carta-of-women/',
            },
          ]}
          openLink={openLink}
        />

        {/* MULTIMEDIA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Multimedia Attribution
          </Text>

          <View style={styles.noteBox}>
            <Text style={styles.noteText}>
              Images, videos, charts, illustrations, and other multimedia
              materials should be credited to their original creators or
              organizations. Materials used for educational purposes should
              retain their original attribution and should not be presented
              as original work by the group.
            </Text>
          </View>
        </View>

        {/* CITATION NOTE */}
        <View style={styles.finalBox}>
          <Text style={styles.finalTitle}>
            Research Note
          </Text>

          <Text style={styles.finalText}>
            The information presented on this website is intended for
            academic and educational purposes. Sources should be checked
            directly for the complete context, methodology, publication
            date, and original data.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

function ReferenceSection({ title, references, openLink }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      {references.map((reference, index) => (
        <View key={index} style={styles.referenceCard}>
          <Text style={styles.referenceNumber}>
            {String(index + 1).padStart(2, '0')}
          </Text>

          <View style={styles.referenceContent}>
            <Text style={styles.referenceTitle}>
              {reference.title}
            </Text>

            <Text style={styles.referenceDescription}>
              {reference.description}
            </Text>

            <Pressable
              style={styles.linkButton}
              onPress={() => openLink(reference.url)}
            >
              <Text style={styles.linkText}>
                Open Source
              </Text>
            </Pressable>
          </View>
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
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 12,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 44,
    fontWeight: '900',
  },

  heroText: {
    color: '#DCE5EA',
    fontSize: 17,
    lineHeight: 28,
    maxWidth: 800,
    marginTop: 18,
  },

  content: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 45,
  },

  section: {
    marginBottom: 45,
  },

  sectionTitle: {
    color: '#102F49',
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 18,
  },

  referenceCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1DED6',
    borderRadius: 13,
    padding: 22,
    marginBottom: 15,
  },

  referenceNumber: {
    color: '#C9AA65',
    fontSize: 20,
    fontWeight: '900',
    width: 45,
  },

  referenceContent: {
    flex: 1,
  },

  referenceTitle: {
    color: '#102F49',
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '800',
    marginBottom: 8,
  },

  referenceDescription: {
    color: '#607481',
    fontSize: 14,
    lineHeight: 23,
    marginBottom: 14,
  },

  linkButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#102F49',
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 9,
  },

  linkText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
  },

  noteBox: {
    backgroundColor: '#ECEAE4',
    borderRadius: 13,
    padding: 25,
  },

  noteText: {
    color: '#607481',
    fontSize: 15,
    lineHeight: 25,
  },

  finalBox: {
    backgroundColor: '#163B59',
    borderRadius: 15,
    padding: 28,
    marginBottom: 30,
  },

  finalTitle: {
    color: '#C9AA65',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 10,
  },

  finalText: {
    color: '#E1E9ED',
    fontSize: 15,
    lineHeight: 25,
  },
});