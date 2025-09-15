import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
  Svg,
  Path,
} from '@react-pdf/renderer';
import joaoPhoto from '../assets/photo.jpg';
import data from '../data/cv.json';

const COLORS = {
  accent: '#0f172a',
  heading: '#0f172a',
  text: '#111827',
  subtle: '#6b7280',
  border: '#e5e7eb',
};

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    paddingHorizontal: 56,
    paddingVertical: 48,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },

  headerText: {
    display: 'flex',
  },

  name: {
    fontSize: 20,
    fontWeight: 600,
    color: COLORS.heading,
  },

  pronouns: {
    fontSize: 10,
    fontWeight: 400,
    color: COLORS.subtle,
  },

  tagline: {
    paddingRight: 72,
    marginTop: 8,
    fontSize: 10,
    color: COLORS.text,
    lineHeight: 1.45,
  },

  photo: {
    width: 64,
    height: 64,
    borderRadius: 50,
    objectFit: 'cover',
    aspectRatio: 1,
  },

  contactRow: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 10,
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  contactText: {
    fontSize: 9,
    color: COLORS.text,
  },
  icon: {
    width: 10,
    height: 10,
  },

  sectionHeader: {
    fontSize: 20,
    color: COLORS.heading,
    fontWeight: 600,
    marginBottom: 14,
    paddingBottom: 8,
    borderBottom: `1px solid ${COLORS.border}`,
  },

  section: {
    marginBottom: 24,
  },

  entryList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },

  entryItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  entryContent: {
    flexGrow: 1,
    gap: 8,
  },

  entryHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  entryTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: COLORS.heading,
  },
  entryTitleCompany: {
    fontSize: 10,
    fontWeight: 400,
    color: COLORS.subtle,
  },

  entryMeta: {
    fontSize: 9,
    color: COLORS.subtle,
  },
  bullets: {
    marginLeft: 8,
    marginTop: 4,
  },

  bullet: {
    fontSize: 9.5,
    color: COLORS.text,
    marginBottom: 4,
    lineHeight: 1.5,
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  skillCategory: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: COLORS.heading,
  },
  skillList: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: COLORS.text,
  },
});

// A helper function to format the category titles nicely
const formatSkillCategory = (category: string) => {
  return category
    .replace(/_/g, ' & ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

function displayUrl(rawUrl: string) {
  try {
    const cleaned = rawUrl.replace(/^https?:\/\//, '').replace(/^www\./, '');
    return cleaned;
  } catch {
    return rawUrl;
  }
}

export function CV() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={joaoPhoto} style={styles.photo} />
          <View style={styles.headerText}>
            <Text style={styles.name}>
              {data.name} <Text style={styles.pronouns}>({data.pronouns})</Text>
            </Text>
            <Text style={styles.tagline}>{data.summary}</Text>
            <View style={styles.contactRow}>
              <View style={styles.contactItem}>
                <Svg style={styles.icon} viewBox="0 0 24 24">
                  <Path
                    d="M12 3 C9 3 7 5.2 7 8 c0 4.5 5 10 5 10 s5-5.5 5-10 c0-2.8-2-5-5-5 z"
                    fill="none"
                    stroke={COLORS.subtle}
                    strokeWidth={1.5}
                  />
                  <Path
                    d="M12 6.5 a1.5 1.5 0 1 1 0 3 a1.5 1.5 0 1 1 0 -3"
                    fill="none"
                    stroke={COLORS.subtle}
                    strokeWidth={1.5}
                  />
                </Svg>
                <Text style={styles.contactText}>{data.locations}</Text>
              </View>
              <View style={styles.contactItem}>
                <Svg style={styles.icon} viewBox="0 0 24 24">
                  <Path
                    d="M3 6 L21 6 L21 18 L3 18 Z"
                    fill="none"
                    stroke={COLORS.subtle}
                    strokeWidth={1.5}
                  />
                  <Path
                    d="M3 6 L12 13 L21 6"
                    fill="none"
                    stroke={COLORS.subtle}
                    strokeWidth={1.5}
                  />
                </Svg>
                <Link src={`mailto:${data.email}`} style={styles.contactText}>
                  {data.email}
                </Link>
              </View>
              {data.links?.linkedin && (
                <View style={styles.contactItem}>
                  <Svg style={styles.icon} viewBox="0 0 24 24">
                    <Path
                      d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"
                      fill={COLORS.subtle}
                    />
                  </Svg>
                  <Link src={data.links.linkedin} style={styles.contactText}>
                    {displayUrl(data.links.linkedin)}
                  </Link>
                </View>
              )}
              {data.links?.github && (
                <View style={styles.contactItem}>
                  <Svg style={styles.icon} viewBox="0 0 48 48">
                    <Path
                      d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"
                      fill={COLORS.subtle}
                    />
                  </Svg>
                  <Link src={data.links.github} style={styles.contactText}>
                    {displayUrl(data.links.github)}
                  </Link>
                </View>
              )}
            </View>
          </View>
        </View>
        <Section title="Experience" isList>
          {data.work.map((w, idx: number) => (
            <SectionEntry
              key={`${w.title}-${idx}`}
              title={w.title}
              titlePostfix={w.company}
              subtitle={w.location}
              rightText={`${w.start} — ${w.end}`}
              bullets={w.bullets}
            />
          ))}
        </Section>
        <Section title="Skills">
          <View style={styles.skillsContainer}>
            {Object.entries(data.skills).map(([category, skills]) => (
              <View key={category} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>
                  {formatSkillCategory(category)}
                </Text>
                <Text style={styles.skillList}>
                  {(skills as string[]).join(', ')}
                </Text>
              </View>
            ))}
          </View>
        </Section>
        <Section title="Education" isList>
          {data.education.map((e, idx: number) => (
            <SectionEntry
              key={`${e.degree}-${idx}`}
              title={e.degree}
              titlePostfix={e.institution}
              subtitle={e.location}
              rightText={`${e.start} — ${e.end}`}
            />
          ))}
        </Section>
        <Section title="Publications" isList>
          {data.publications.map((p, idx: number) => (
            <SectionEntry
              key={`${p.title}-${idx}`}
              title={p.title}
              subtitle={p.venue}
              rightText={p.year}
            />
          ))}
        </Section>
      </Page>
    </Document>
  );
}

function Section({
  title,
  isList = false,
  children,
}: {
  title: string;
  isList?: boolean;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>{title}</Text>
      <View style={isList ? styles.entryList : undefined}>{children}</View>
    </View>
  );
}

function SectionEntry({
  title,
  titlePostfix,
  subtitle,
  rightText,
  bullets,
}: {
  title: string;
  titlePostfix?: string;
  subtitle: string;
  rightText: string;

  bullets?: string[];
}) {
  return (
    <View style={styles.entryItem}>
      <View style={styles.entryContent}>
        <View style={styles.entryHeader}>
          <Text style={styles.entryTitle}>
            {title}
            {titlePostfix && (
              <Text style={styles.entryTitleCompany}> • {titlePostfix}</Text>
            )}
          </Text>
          <Text style={styles.entryMeta}>{rightText}</Text>
        </View>
        <Text style={styles.entryMeta}>{subtitle}</Text>
        {bullets && (
          <View style={styles.bullets}>
            {bullets?.map((b: string, bIdx: number) => (
              <Text key={`${bIdx}`} style={styles.bullet}>
                • {b}
              </Text>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
