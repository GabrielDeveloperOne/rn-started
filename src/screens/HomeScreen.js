import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate('Components')} 
          title="Go to Components Demo" 
      />
    <Button 
      onPress={() => navigation.navigate('List')}
      title="Go to List"
    />

    <Button 
      onPress={() => navigation.navigate('Image')}
      title="Go To Image"
    />

    <Button 
      onPress={() => navigation.navigate('Counter')}
      title="Go To Counter Screen"
    />

    <Button 
      onPress={() => navigation.navigate('Color')}
      title="Go To Screen"
    />

    <Button 
      onPress={() => navigation.navigate('Square')}
      title="Go To Square"
    />
    <Button 
      onPress={() => navigation.navigate('Text')}
      title="Go to text"
    />
    </View>
    
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
