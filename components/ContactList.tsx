import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import humayunImage from '../assets/humayun.jpg';
import tahaImage from '../assets/taha.jpg';
import usamaImage from '../assets/usama.jpg';

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Humayun Maan',
          status: 'CEO and Lead Developer Zabani',
          imageUrl: humayunImage,
        },
        {
          uid: 2,
          name: 'Taha Khan',
          status: 'Marketing Lead',
          imageUrl: tahaImage,
        },
        {
          uid: 3,
          name: 'Usama Nasar',
          status: 'Backend Developer',
          imageUrl: usamaImage,
        },
      ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={imageUrl}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#10ac84',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12,
        color: '#c8d6e5'
    }
})