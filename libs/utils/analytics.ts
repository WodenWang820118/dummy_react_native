import analytics from '@react-native-firebase/analytics';
import uuid from 'react-native-uuid';

export async function logAddToCart() {
  const itemId = uuid.v4() as string;
  await analytics().logAddToCart({
    value: 200,
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
}

export async function logPurchase() {
  const itemId = uuid.v4() as string;
  await analytics().logPurchase({
    value: 200,
    currency: 'USD',
    transaction_id: itemId,
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
}

export async function logScreenView(label: string) {
  await analytics().logScreenView({
    screen_name: label,
  });
}
