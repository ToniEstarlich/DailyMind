import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import api from '../../utils/api';

export default function AddEntry() {
  const router = useRouter();
  const [text, setText] = useState('');
  const [mood, setMood] = useState('');

  const submit = async () => {
    if (!text.trim()) return;
    try {
      await api.post('/entries/', { text });
      setText('');
      setMood('');
      router.back();
    } catch (err) {
      console.warn(err);
    }
  };

  const analyze = async () => {
    if (!text.trim()) return;
    try {
      const res = await api.post('/entries/analyze/', { text });
      setMood(res.data.mood);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.input}
        placeholder="Write how you feel..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Analyze" onPress={analyze} />
      <View style={{ height: 8 }} />
      <Button title="Save" onPress={submit} />
      {mood !== '' && <Text style={styles.mood}>Mood: {mood}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 6, minHeight: 100, textAlignVertical: 'top' },
  mood: { marginTop: 12, fontSize: 16, fontWeight: '600' }
});
