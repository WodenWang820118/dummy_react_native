# Dummy App - React Native

## Table of Contents

- [Overview](#overview)
- [Objectives](#objectives)
- [Installation](#installation)
- [Training](#training)

## Overview

The project is a template for React Native projects.

## Objectives

It is a good starting point for:

1. Analytics project references.
2. Testing new libraries or features.
3. Firebase Analytics practices
4. React Native practices (Android)

## Installation

- Please install Android SDK or [Android Studio](https://developer.android.com/studio). Please upgrade the Java version to 17 or higher.
- Please be aware of the [minimum Firebase installation requirements](https://firebase.google.com/docs/android/setup); if necessary, you may update the configuration accordingly.
- [Install Android Studio, and add environment variables (Windows) for SDK and Platform tools](https://reactnative.dev/docs/environment-setup?guide=native).
- `npm install` all dependencies and do not update them.
- `npm run android` to open the emulator and the JS server. Two command lines will be opened. If it doesn't, kill the command line tools and re-run the command.
  - When receiving the error `Execution failed for task ':app:installDebug'`, keep the command lines open, close the app and run `npm run android` again.
  - If the app is blank and the command line ends after running, please run the command again
- Configure the Firebase project, but please don't update the dependencies on either Android or IOS

## Training

The analytics implementation is situated in the `libs/utils/analytics.ts` file. There are three events to be implemented:

1. Add to cart

```typescript
// itemId should be UUID
await analytics().logAddToCart({
  value: 200,
  currency: 'USD',
  items: [
    {
      item_id: 'itemId',
      item_name: 'Switzerland',
      item_category: 'Europe',
      quantity: 1,
      price: 200,
    },
  ],
});
```

2. Purchase

```typescript
// transactionId should be UUID
await analytics().logAddPurchase({
  value: 200,
  transactionId: 'transactionId'
  currency: 'USD',
  items: [
    {
      item_id: itemId,
      item_name: 'Switzerland',
      item_category: 'Europe',
      quantity: 1,
      price: 200,
    },
  ],
});
```

3. bottom navigation

```typescript
await analytics().logScreenView({
  screen_name: '$tab_label',
});
```
