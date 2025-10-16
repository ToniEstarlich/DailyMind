import React, { useState, useCallback } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import api from '../../utils/api';
import EntryCard from '../../components/EntryCard';

interface Entry {
  id: number;
  text: string;
  mood: string;
  created_at: string;
}

export default function HomeScreen() {
  const router = useRouter();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const res = await api.get('/entries/');
      setEntries(res.data);
    } catch (err) {
      console.warn('fetchEntries', err);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchEntries();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DailyMind</Text>
        <Button title="New" onPress={() => router.push('/add-entry')} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={entries}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <EntryCard entry={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: { fontSize: 24, fontWeight: 'bold' },
});
