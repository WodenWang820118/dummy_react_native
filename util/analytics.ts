import analytics from '@react-native-firebase/analytics';

export async function selectPromotion() {
  await analytics().setUserId('$user_id');

  /* This 'user-properties' section has to be implemented only if a variable value has changed */
  await analytics().setUserProperties({
    membership_level: '$membership_level',
  });

  await analytics().logEvent('select_promotion', {
    allow_ad_features: '$allow_ad_features',
    consent_mode: '$consent_mode',
    container_id: '$container_id',
    container_version: '$container_version',
    discount: '$discount',
    ff_client_id: '$ga_client_id', //ga_client_id is preserved
    gclid: '$gclid',
    next_page: '$next_page',
    screen_class: '$screen_class',
    // promotions: [{ //array is only accepted with items key
    //   creative_name: "$creative_name",
    //   creative_slot: "$creative_slot",
    //   promotion_id: "$promotion_id",
    //   promotion_name: "$promotion_name",
    // }, {
    //   creative_name: "$creative_name2",
    //   creative_slot: "$creative_slot",
    //   promotion_id: "$promotion_id",
    //   promotion_name: "$promotion_name",
    // }],
    items: [
      {
        location_id: '$location_id',
      },
      {
        location_id: '$location_id2',
      },
    ],
  });
}

export async function addPaymentInfo() {
  /* Don’t forget to implement TMS code on each page load BEFORE this code to be executed */
  await analytics().setUserId('$user_id');

  await analytics().logEvent('add_payment_info', {
    allow_ad_features: '$allow_ad_features',
    consent_mode: '$consent_mode',
    container_id: '$container_id',
    container_version: '$container_version',
    currency: '$currency',
    discount: '$discount',
    ff_client_id: '$ga_client_id',
    gclid: '$gclid',
    item_id: '$item_id',
    item_name: '$item_name',
    payment_type: '$payment_type',
    value: '$value',
    coupon: '$coupon',
    items: [
      {
        affiliation: '$affiliation',
        index: '$index',
        item_brand: '$item_brand',
        item_category: '$item_category',
        item_category2: '$item_category2',
        item_category3: '$item_category3',
        item_category4: '$item_category4',
        item_category5: '$item_category5',
        item_list_id: '$item_list_id',
        item_list_name: '$item_list_name',
        item_variant: '$item_variant',
        price: '$price',
        quantity: '$quantity',
      },
      {
        affiliation: '$affiliation',
        index: '$index',
        item_brand: '$item_brand',
        item_category: '$item_category',
        item_category2: '$item_category2',
        item_category3: '$item_category3',
        item_category4: '$item_category4',
        item_category5: '$item_category5',
        item_list_id: '$item_list_id',
        item_list_name: '$item_list_name',
        item_variant: '$item_variant',
        price: '$price',
        quantity: '$quantity',
      },
    ],
  });
}

export async function log_screen_view() {
  await analytics().logEvent('screen_view', {
    screen_name: '$screen_name',
    screen_category: '$screen_category',
    screen_subcategory: '$screen_subcategory',
    app_country_code: '$app_country_code',
  });
}

export async function log_scroll() {
  await analytics().logEvent('scroll', {
    screen_name: '$screen_name',
    screen_category: '$screen_category',
    screen_subcategory: '$screen_subcategory',
    app_country_code: '$app_country_code',
    scroll_percentage: '$scroll_percentage',
  });
}
