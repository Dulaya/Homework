import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[ viewStyles.marginTop ]} >
      <ScrollView>
        <View style={[ viewStyles.borderGreenSolid, viewStyles.height, viewStyles.color, viewStyles.margin, ]}></View>
        <View style={[ {borderWidth: 10, borderStyle: 'dashed'}, viewStyles.height, viewStyles.color, viewStyles.margin, ]}></View>
        <View style={[ viewStyles.borderRedSolid, viewStyles.height, viewStyles.color, viewStyles.margin, ]}></View>
        <View style={[ viewStyles.borderTurquoiseDotted, viewStyles.height, viewStyles.color, viewStyles.margin, ]}></View>
        <View style={[ viewStyles.borderNormal, viewStyles.height, viewStyles.color, viewStyles.margin, viewStyles.verticalAlign ]}>
            <Text style={[ viewStyles.font, viewStyles.horizontalAlign, ]} >Here we go, how it's going. There we go...</Text>
        </View>
        <View style={[ viewStyles.borderNormal, viewStyles.height, viewStyles.color, viewStyles.margin, ]}></View>
        <View style={[ viewStyles.borderNormal, viewStyles.height, viewStyles.color, viewStyles.margin, ]}></View>
        <View style={[ viewStyles.borderNormal, viewStyles.height, viewStyles.color, viewStyles.margin, ]}></View>
        <View style={[ viewStyles.borderNormal, viewStyles.height, viewStyles.color, viewStyles.margin, ]}></View>

      </ScrollView>
    </SafeAreaView>
  );
}

const viewStyles = StyleSheet.create({

  // Borders
  borderNormal: { borderColor: '#6EBF8B', borderWidth: 3 },
  borderGreenSolid: { borderColor: '#6EBF8B', borderWidth: 5 },
  borderGreenDashed: { borderColor: '#6EBF8B', borderWidth: 5, borderStyle: 'dashed' },
  borderRedSolid: { borderColor: '#FC4F4F', borderWidth: 10,  },
  borderTurquoiseDotted: { borderColor: '#54BAB9', borderWidth: 5, borderStyle: 'dotted' },

  color: { backgroundColor:  'yellow' },
  font: { fontSize: 16 },
  height: { height: 58 },
  margin: { margin: 25 },
  marginTop: { marginTop: 25 },

  // Text Align
  horizontalAlign: { textAlign: 'center' },
  verticalAlign: { justifyContent: 'center' },
});



