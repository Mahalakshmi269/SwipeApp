import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  Image
} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import profiles from './data';
import Swipe from './Swipe';

class App extends Component {
  state = {
    leftClicks: 0,
    rightClicks: 0,
    displayTextStatus: false
  };

  handleLeftClick = () => {
    this.setState(({ leftClicks }) => ({
      leftClicks: leftClicks + 1
    }));
  };

  handleRightClick = () => {
    this.setState(({ rightClicks }) => ({
      rightClicks: rightClicks + 1
    }));
  };

  renderProfiles(profile) {
    return (
      <Card title={profile.name} titleStyle={{ fontSize: 14 }}>
        <View style={{ height: 200 }}>
          <Image
            source={require(profile.pic)}
            style={{ width: '100%', height: 200 }}
          />
        </View>
      </Card>
    );
  }

  renderNoMoreProfiles = () => {
    return (
      <Card title="No More Profiles">
        <Button
          title="Done"
          large
          backgroundColor="#03A9F4"
          onPress={onDonePress}
        />
      </Card>
    );
  };

  onDonePress = () => {
    this.setState(({ displayTextStatus }) => ({
      displayTextStatus: true
    }));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        this.state.displayTextStatus ? <View style={styles.statusStyle}>
          <Text style={styles.displayTextStyle}>Right Click(s): {this.state.rightClicks}</Text>
          <Text style={styles.displayTextStyle}>Left Click(s): {this.state.leftClicks}</Text>
        </View> : null        
        <Swipe
          onSwipeRight={this.handleRightClick}
          onSwipeLeft={this.handleLeftClick}
          keyProp="profileId"
          data={profiles}
          renderCard={this.renderProfiles}
          renderNoMoreCards={this.renderNoMoreProfiles}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusStyle: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  displayTextStyle: {
    fontSize: 20,
    color: 'blue'
  }
});

export default App;
