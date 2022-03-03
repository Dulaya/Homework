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
    <SafeAreaView style={[ fontStyles.marginTop ]}>
      <ScrollView>
        <Text style={[ fontStyles.orange, fontStyles.margin ]}> This is text example</Text>
        <Text style={[ fontStyles.green, fontStyles.margin, fontStyles.largeFont ]}> This is text example</Text>
        <Text style={[ fontStyles.black, fontStyles.margin, fontStyles.bold ]}> This is text example</Text>
        <Text style={[ fontStyles.black, fontStyles.margin, fontStyles.italic ]}> This is text example</Text>
        <Text style={[ fontStyles.black, fontStyles.margin, fontStyles.underline ]}> This is text example</Text>
        <Text style={[ fontStyles.black, fontStyles.margin ]}> This is text example</Text>
        <Text style={[ fontStyles.orange, fontStyles.margin, fontStyles.italic ]}> This is text example</Text>
        <Text style={[ fontStyles.black, fontStyles.margin, fontStyles.indent ]}> This is text example</Text>
        <Text style={[ fontStyles.margin,  ]}>
                <Text style={[ fontStyles.black, fontStyles.yellowHighlight ]}> This is text example</Text>
        </Text>
        <Text style={[ fontStyles.margin,  ]}>
                <Text style={[ fontStyles.orange, fontStyles.greenHighlight ]}> This is text example</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const fontStyles = StyleSheet.create({

    // Font Colors
    black: { color: 'black'},
    green: { color: '#6EBF8B'},
    orange: { color: '#FFC300'},

    // Font Sizes
    largeFont: { fontSize: 20 },

    // Font Styling
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic' },
    underline: {textDecorationLine: 'underline' },

    // Margin
    margin: { margin: 10 },
    marginTop: { marginTop: 50 },
    indent: { marginLeft: 40 },

    // Highlight
    yellowHighlight: { backgroundColor: 'yellow'},
    greenHighlight: { backgroundColor: '#C1F8CF' }

  });


