import { View, StyleSheet, Image } from 'react-native'; 
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants'; 

const TabIcon = ({ icon, color }) => {
    return (
        <View style={styles.tabContainer}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: color }}
            />
        </View>
    );
};

const Layout = () => {
    return (
        <View style={styles.container}>
            <Tabs
                screenOptions={{
                    tabBarStyle: { backgroundColor: '#888B8D' }, 
                    tabBarActiveTintColor: '#FF6F61', // Change active icon color
                    tabBarInactiveTintColor: '#fff', // Change inactive icon color to white
                }}
            >
                <Tabs.Screen
                    name="notes"
                    options={{
                        title: 'Notes',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.notes}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="group"
                    options={{
                        title: 'Group',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.group}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="user"
                    options={{
                        title: 'User',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.user}
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="menu"
                    options={{
                        title: 'Menu',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                icon={icons.menu}
                                color={color}
                            />
                        )
                    }}
                />
            </Tabs>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#888B8D',
    },
    tabContainer: {
        alignItems: 'center',
    },
});

export default Layout;
