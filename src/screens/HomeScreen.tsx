import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';

const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
