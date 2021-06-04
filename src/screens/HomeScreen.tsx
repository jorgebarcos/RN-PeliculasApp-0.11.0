import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying} from '../interfaces/movieInterface';

const HomeScreen = () => {
  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing').then(resp => {
      console.log(resp.data.results[0].title);
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
