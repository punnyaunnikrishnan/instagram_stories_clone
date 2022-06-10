import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from './app/components/Header';
import Constants from 'expo-constants';
import StoryList from './app/components/StoryList';
import ProfileInfo from './app/components/ProfileInfo';
import PostPreview from './app/components/PostPreview';
const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView >
        {/* <Button title="I'm a button" onPress={()=>alert("you just pressed!")}/> */}
        <StoryList />
        <ProfileInfo />
        <PostPreview />
        <ProfileInfo />
        <PostPreview />
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
  },
});
export default App;