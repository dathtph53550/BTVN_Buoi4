import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Bai4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bài 4</Text>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/800px-Lionel_Messi_20180626.jpg',
        }}
        style={styles.containerImg}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    marginBottom: 10, 
    color: '#333',
  },
  containerImg: {
    width: 200, // Chiều rộng cố định
    height: 200, // Chiều cao cố định
    resizeMode: 'cover', // Cách ảnh hiển thị
    borderRadius: 10, // Bo tròn ảnh (tuỳ chọn)
  },
});

export default Bai4;
