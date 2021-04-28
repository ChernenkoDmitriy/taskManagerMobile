## Run on Android ##

1) ```Open a new bash shell```
2) ```npm install```
3) ```npm run android```

## Run on iOS ##

1) Open a new bash shell
2) ```npm install```
3) ```cd ios```
4) ```rm -rf ~/Library/Caches/CocoaPods Pods ~/Library/Developer/Xcode/DerivedData/*; pod deintegrate; pod setup; pod install;```
5) ```open in folder ios filename extension with .xcworkspace```

## Create apk ##

1) ```cd android```
2) ```./gradlew assembleRelease```

## Add gradlew for ios
1) ```cd android```
2) ```chmod +x gradlew```

## Create react-native component from SVG ## 
1) Instal library ```npm install -g msvgc```
2) Convert file from root dir ```msvgc -f  ./src/assets/fileName.svg -o ./src/assets/ --react-native```

## Run e2e on Android ##
1) Open a new bash shell
2) ```npm install```
3) ```cd Android```
4) ```./gradlew clean```
5) ```npm run android```
6) Open a new bash shell
7) ```cd Android```
8) ```./gradlew assembleAndroidTest```
9) ```npm run detox-debug```

# Errors #

## ios - build ```Unknown type name 'BN_ULONG'``` ##

1) add pod 'OpenSSL-Universal', '~>1.0.2.20'
2) pod install

link https://github.com/facebook/react-native/issues/30922

## Fix error for running debbuger

1) npm cache verify
2) npm run android --reset-cache or npm run android --reset-cache

# Optimization #

1) Add  **useNativeDriver:true** to package ***react-native-actionsheet***
path **eact-native-actionsheet -> lib -> ActionSheetCustom** : line 68 and 76
