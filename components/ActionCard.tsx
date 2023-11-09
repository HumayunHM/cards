import {
    StyleSheet,
    Text, View, Linking, Image, TouchableOpacity
} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]} >
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Duolingo's gamified success
                    </Text>
                </View>
                <Image
                    source={require('../assets/duolingo.png')}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer} >
                    <Text numberOfLines={3}>
                        Duolingo's language app soars with gamification, driving high user retention and rapid growth to 19M daily active users by 2023, leaving competitors behind. Read the blog to discover how you can borrow Duolingo’s money making secrets to help your app revenue grow as well.
                    </Text>
                </View>
                <View style={styles.footerContainer} >
                    <TouchableOpacity
                        onPress={() => openWebsite('https://sensortower.com/blog/duolingos-gamified-success-a-language-learning-triumph')}
                    >
                        <Text style={styles.socialLinks} >Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.instagram.com/zabaniapp')}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#55efc4',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190,
        width: 350
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6

    }

})