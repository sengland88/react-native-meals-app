# React Native Meals App

# Overview

This is the third React Native app that I built as I progressed through the "Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux" Udemy course. This app focused on Navigation.

# Issues w/ Fixes

app worked fine until using nested navigation (the drawer navigation with the native stack). when using `npm start` the app would crash with errors related to reanimate, which is part of the drawer navigation.

had to `expo install react-native-gesture-handler react-native-reanimated` then `expo r -c` which got the app to start running but still wouldnt work with the `npm start` that i had been using.

then i did `npx react-native start --reset-cache`. after this, i believe i saw an error that no metro.

then, i stopped the app and ran `npm start` again and it started working!
