import React, { Component } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

export default class Review extends Component {
  constructor(nbStart, color, review, size) {
    super();
    this.nbStart = nbStart;
    this.color = color;
    this.review = review;
    this.size = size;
  }

  render() {
    var starts = [];

    for (let i = 0; i < this.nbStart; i++) {
      if (i + 1 <= this.review) {
        starts.push(
          <View key={i}>
            <Icon name="star" size={this.size} color={this.color} />
          </View>
        );
      } else {
        if (this.review - i > 0) {
          starts.push(
            <View key={i}>
              <Icon name="star-half-empty" size={30} color={this.color} />
            </View>
          );
        } else {
          starts.push(
            <View key={i}>
              <Icon name="star-o" size={30} color={this.color} />
            </View>
          );
        }
      }
    }

    return <View style={{ flexDirection: "row" }}>{starts}</View>;
  }
}
