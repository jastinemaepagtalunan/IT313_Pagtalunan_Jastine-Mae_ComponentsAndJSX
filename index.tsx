import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const students = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false }
];

export default function StudentRoster() {
  const [reverse, setReverse] = useState(false);
  
  const displayList = reverse ? [...students].reverse() : students;

  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total Enrolled Students: {students.length}</Text>
      
      <TouchableOpacity style={styles.btn} onPress={() => setReverse(!reverse)}>
        <Text style={styles.btnText}>REVERSE ORDER</Text>
      </TouchableOpacity>
      
      {displayList.map((student) => (
        <View key={student.id} style={styles.card}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.info}>Course: {student.course}</Text>
          <Text style={styles.info}>Units Enrolled: {student.units}</Text>
          {student.isFullLoad && (
            <Text style={styles.fullLoad}>Full Load</Text>
          )}
        </View>
      ))}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 40
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#000'
  },
  btn: {
    backgroundColor: '#0066cc',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    marginBottom: 12,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000'
  },
  info: {
    fontSize: 15,
    marginBottom: 3,
    color: '#333'
  },
  fullLoad: {
    marginTop: 8,
    backgroundColor: '#2ecc71',
    color: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    fontWeight: 'bold'
  }
});
