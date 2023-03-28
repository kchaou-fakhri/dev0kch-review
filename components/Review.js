import React, { Component } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: props.style,
      nbStart: props.nbStart ? props.nbStart : 5,
      color: props.color ? props.color : "#888",
      review: props.review ? props.review : 0,
      size: props.size ? props.size : 24,
    };
  }

  static getDerivedStateFromProps(props, prevState) {
    return {
      nbStart: props.nbStart ? props.nbStart : 5,
      color: props.color ? props.color : "#888",
      review: props.review ? props.review : 0,
      size: props.size ? props.size : 24,
      style: props.style,
    };
  }

  render() {
    var starts = [];

    for (let i = 0; i < this.state.nbStart; i++) {
      if (i + 1 <= this.state.review) {
        starts.push(
          <View key={i}>
            <Icon name="star" size={this.state.size} color={this.state.color} />
          </View>
        );
      } else {
        if (this.state.review - i > 0) {
          starts.push(
            <View key={i}>
              <Icon
                name="star-half-empty"
                size={this.state.size}
                color={this.state.color}
              />
            </View>
          );
        } else {
          starts.push(
            <View key={i}>
              <Icon
                name="star-o"
                size={this.state.size}
                color={this.state.color}
              />
            </View>
          );
        }
      }
    }

    return (
      <View style={[{ flexDirection: "row" }, this.state.style]}>{starts}</View>
    );
  }
}
