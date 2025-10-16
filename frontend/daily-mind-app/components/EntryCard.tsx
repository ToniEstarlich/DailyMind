import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Entry = { id?: number; text: string; mood: string; created_at: string };

export default function EntryCard({ entry }: { entry: Entry }) {
  const moodEmoji = entry.mood === 'positive' ? '😄' : entry.mood === 'negative' ? '😕' : '😐';
  return (
    <View style={styles.card}>
      <Text style={styles.date}>{new Date(entry.created_at).toLocaleString()}</Text>
      <Text style={styles.text}>{entry.text}</Text>
      <Text style={styles.mood}>
        {moodEmoji} {entry.mood}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  date: { fontSize: 12, color: '#666' },
  text: { marginTop: 6, fontSize: 16 },
  mood: { marginTop: 8, fontSize: 14 },
});
