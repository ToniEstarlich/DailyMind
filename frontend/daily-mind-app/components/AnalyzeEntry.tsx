import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import api from '../utils/api';

export default function AnalyzeEntry() {
  const [text, setText] = useState('');
  const [mood, setMood] = useState('');

  const handleAnalyze = async () => {
    if (!text.trim()) return Alert.alert('Write something to analyze');
    try {
      const res = await api.post('/entries/analyze/', { text });
      setMood(res.data.mood);
    } catch (err) {
      console.warn(err);
      Alert.alert('Error', 'Could not analyze');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Write your entry..." value={text} onChangeText={setText} />
      <Button title="Analyze" onPress={handleAnalyze} />
      {mood !== '' && <Text style={styles.result}>Mood: {mood}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 12 },
  result: { fontSize: 18, marginTop: 12 },
});
