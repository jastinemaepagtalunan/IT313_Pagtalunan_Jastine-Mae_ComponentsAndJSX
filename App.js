import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const students = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false }
];

function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>Course: {course}</Text>
      <Text style={styles.info}>Units: {units}</Text>
      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

export default function StudentRoster() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Class Roster — {students.length} Students
      </Text>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
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
    paddingTop: 50
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#2c3e50'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50'
  },
  info: {
    fontSize: 15,
    marginBottom: 3,
    color: '#34495e'
  },
  fullLoad: {
    marginTop: 8,
    fontWeight: 'bold',
    color: '#27ae60'
  }
});
