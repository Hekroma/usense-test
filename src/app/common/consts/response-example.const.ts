import { SearchResponse } from '@common/models/search-result.model';

export const RESPONSE_EXAMPLE_CONST: SearchResponse = {
  search_metadata: {
    id: '6a43a50c4de49ae09adceb6a',
    status: 'Success',
    json_endpoint:
      'https://serpapi.com/searches/ntArO5Dgh9b6gNcIhCB3gw/6a43a50c4de49ae09adceb6a.json',
    created_at: '2026-06-30 11:14:20 UTC',
    processed_at: '2026-06-30 11:14:20 UTC',
    google_local_url:
      'https://www.google.com/search?q=coffee&hl=en&gl=us&udm=1',
    raw_html_file:
      'https://serpapi.com/searches/ntArO5Dgh9b6gNcIhCB3gw/6a43a50c4de49ae09adceb6a.html',
    total_time_taken: 6.16,
  },
  search_parameters: {
    engine: 'google_local',
    q: 'coffee',
    google_domain: 'google.com',
    hl: 'en',
    gl: 'us',
    device: 'desktop',
  },
  local_map: {
    gps_coordinates: {
      latitude: 40.717273679029205,
      longitude: -73.99970054626465,
    },
  },
  local_results: [
    {
      position: 1,
      rating: 4.9,
      reviews: 476,
      reviews_original: '(476)',
      price: '$1–10',
      description:
        '"Wonderful coffee/matcha, delicious banana bread, and lovely service."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/Xo4Nq6GK2AQlbr3_3cjtoiFmYv6JyD6QMTxB0zpElMY.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-proxy/ALd4DhGuO7XnTR1HRIMQhN96I3zA1dHXozGq1-m72CJ3ZvMVK-DfNhTo6-6h3FWYj0JQ3nWwtGlfRGTflXUblQYuDhpiA5ZOutVsepWwcDlugjLa6-VJTrPAePdnFo9uIOizg5dISTp1kjzpaMrVPIXJYUgJTZXyg_0wpNgW6_UGDZKHfjYXiGBpdbjNpg=w1000-h1000-c-n',
      place_id: '3738640204286220643',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=3738640204286220643&q=coffee',
      provider_id: '/g/11x6wcq9w4',
      gps_coordinates: {
        latitude: 40.709848,
        longitude: -74.009123,
      },
      title: 'No Plates Coffee',
      type: 'Coffee shop',
      address: '12 John St',
    },
    {
      position: 2,
      rating: 4.8,
      reviews: 274,
      reviews_original: '(274)',
      price: '$1–10',
      description:
        '"... spot with a super friendly staff, delicious treats, and quality coffee."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/22BaGW5wvZF6rg5_44e8FHy8AwErI-7U3DdORIAocdc.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAETXK1Xg94ppqBb1a27G7ZJdDut1qjozY0vHPXqZvdZFrI3i1oQHCStEicWLACodFPXroA6UOrhHva2ajlYAwTEM-aSmCx-WeG0fHbqGGjfXbX27dJy15hruD0nrEyMQRkU3WCn=w1000-h1000-c-n',
      place_id: '3462602244802573968',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=3462602244802573968&q=coffee',
      provider_id: '/g/11t1k94gsr',
      gps_coordinates: {
        latitude: 40.709188,
        longitude: -74.0059,
      },
      title: 'MCM coffee',
      type: 'Coffee shop',
      address: '88 Fulton St Spc E',
    },
    {
      position: 3,
      rating: 4.8,
      reviews: 62,
      reviews_original: '(62)',
      price: '$1–10',
      description: '"High quality coffee, friendly baristas, and good vibes."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/Xb5zaoaf5X1TjLAZuFkeOKWS3plHMRw3N8B4sYjYs54.png',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFTOkrS251FHALPmwLGvu0_EjCzhfFFtQ_CJb7jnaygLHoPoFq7-w8IZT0nHFCl1aW1f_kaRnfYSDXNUuj3Yt3RZMHKni97uE7XWOzT2HP67SaSedROFJy0jngaIqO_Z9ZArERzcYdr87H8=w1000-h1000-c-n',
      place_id: '5058086879200145633',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=5058086879200145633&q=coffee',
      provider_id: '/g/11yznx29sw',
      gps_coordinates: {
        latitude: 40.714632,
        longitude: -74.008413,
      },
      title: 'Blue Dove Coffee',
      type: 'Coffee shop',
      address: '140 Church St',
    },
    {
      position: 4,
      rating: 4.9,
      reviews: 439,
      reviews_original: '(439)',
      price: '$1–10',
      description:
        '"Amazing coffee, relaxing environment, and fantastic service."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/25PJ32wS7cV7Q0wIQezxbLHbsL0fCsTwjntYpvkRh0o.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFnWoiltrCTUs7m-aCIRAhpxQ8vLZ6bF-TKh0AP33gGRsOJJlmrsfb2f23pUDN5zQ-6ti6WlF784goi81vN8mfiqfP1w1kX7C1DhHgMnAzZdSGTKIWQ2wWvZZTUuxC9AmR0ikn5LCucc2wc=w1000-h1000-c-n',
      place_id: '15121765596076200158',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=15121765596076200158&q=coffee',
      provider_id: '/g/11xcvy4hl7',
      gps_coordinates: {
        latitude: 40.721375,
        longitude: -73.992913,
      },
      title: 'Embriago Coffee',
      type: 'Coffee shop',
      address: '5 Rivington St',
    },
    {
      position: 5,
      rating: 4.3,
      reviews: 236,
      reviews_original: '(236)',
      price: '$1–10',
      description: '"Cozy atmosphere, good coffee, and friendly service!"',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/p55uyWREF-xruZnqK5cXD3OR1z9SvA_pg_kJziUUkMs.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGSz4_A98QNznER-68CtRkUkOYTX8nh931mEM7pmk_UVlD-YrVncCA359dsiOKpAAh8i85jeLSAK_SBw5vjuUsxHXl6XQRauQrkURx5uCLRTIeqf5K_bc6ke9xCgGd2YgBOFHE=w1000-h1000-c-n',
      place_id: '7879216324888957746',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=7879216324888957746&q=coffee',
      provider_id: '/g/1th7ntqn',
      gps_coordinates: {
        latitude: 40.715125,
        longitude: -73.990156,
      },
      title: 'Café Grumpy - Lower East Side',
      type: 'Coffee shop',
      address: '13 Essex St',
    },
    {
      position: 6,
      rating: 4.3,
      reviews: 606,
      reviews_original: '(606)',
      price: '$10–20',
      description:
        '"The coffee is fresh and the location is unbeatable for people watching."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/REl4mq7iMijhWq4SQYzKSGdyJ9Q06p1LNy3MG1HFSNI.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHXRIeCN6AyVfaORh1kiEJi1CDXa-N2pl_Up5MhXT5slSwWlfNAtX0GqWl2AxINnhQd3Wf_bNle4L6P0PFNQppgHjJLR6_sx9nusDiQlAu_LBV0-mvIVxrmjGNVF9kWX4ZDfKsj=w1000-h1000-c-n',
      place_id: '17947053150240049435',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=17947053150240049435&q=coffee',
      provider_id: '/g/11dz_2f0sf',
      gps_coordinates: {
        latitude: 40.716894,
        longitude: -74.003738,
      },
      title: 'Think Coffee',
      type: 'Coffee shop',
      address: '350 Broadway',
    },
    {
      position: 7,
      rating: 4.9,
      reviews: 772,
      reviews_original: '(772)',
      price: '$1–10',
      description:
        '"Amazing iced vanilla latte, amazing service and a beautiful establishment!"',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/MvN7ylIk3_8otK5F9aI9fK4vzoEdI2JAGPt90OG1xGI.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGBpy-YxPUxeDURwTdubBrK7DZFZmbiD-vp0JmV_IqHAMVdMO5r0KIP-qNNM_V5cLNKLAKtZFeaaDToTwG82j3tOaEBKYk-KlX9sHdfSN-_VfQtJIuVjecN1-yM_wysj0kbFqOd=w1000-h1000-c-n',
      place_id: '6799176821019939453',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=6799176821019939453&q=coffee',
      provider_id: '/g/11y297rpmw',
      gps_coordinates: {
        latitude: 40.709311,
        longitude: -74.008855,
      },
      title: 'Simpl Coffee',
      type: 'Coffee shop',
      address: '59 Nassau St',
    },
    {
      position: 8,
      rating: 4.7,
      reviews: 814,
      reviews_original: '(814)',
      price: '$1–10',
      description:
        '"Delicious coffee, and the baristas give the most attentive and kind service."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/V7ffV8NIqKyWycM6Us-JiAoHFaqIq14A8RccRIN_dwc.png',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-proxy/ALd4DhFAzTxO8COBltAB4TK80eHHoRxsTZ-W6F9sdy-Y53vONIhWcDLt3HlFwwORYJ3D6LzWY7Vr8Cf1bgJBmHV_LFHp5ARO9jTAASEMVygxfv5n3KqOtPhU1idwibykJqVoO-WMvDOOluXtccEwTkzKHZigjBxLOJ3IP22njCsYwwCtstN6rjHkMnw=w1000-h1000-c-n',
      place_id: '4491746069463994222',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=4491746069463994222&q=coffee',
      provider_id: '/g/11smx9yk9m',
      gps_coordinates: {
        latitude: 40.725412,
        longitude: -74.002083,
      },
      title: 'Drip Drop Café, coffee shop',
      type: 'Coffee shop',
      address: '98 Thompson St',
    },
    {
      position: 9,
      rating: 4.4,
      reviews: 161,
      reviews_original: '(161)',
      price: '$1–20',
      description:
        '"Friendly baristas, great service and my iced vanilla latte was top-notch."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/VNl-11xmlhYHt4nEqpp8-_9P8Zy0yUcJB_j8LbKADwI.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAE6ZRKJ5jrfttw7qXZXEW75le91CSEWkYLP2KDKPdDWsxxCjzyFtQcX1zy1c287z9eMdYfx1Pr17J-UW34bjyjF2p9ojiI84D2tU5_wipBnfTMmvVN50SJfst2LNJeD4GCC8pN9oqNBbYiY=w1000-h1000-c-n',
      place_id: '12243020605815710653',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=12243020605815710653&q=coffee',
      provider_id: '/g/11vm6hn948',
      gps_coordinates: {
        latitude: 40.707139,
        longitude: -74.005017,
      },
      title: 'Coffee Project New York | Financial District',
      type: 'Coffee shop',
      address: '135 John St',
    },
    {
      position: 10,
      rating: 4.7,
      reviews: 216,
      reviews_original: '(216)',
      price: '$1–10',
      description:
        '"Coffee made to perfection, and their specialty lattes are so good."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/4sYTIR1_NUzyaiY97h0aY7cQPtCqYJoOF_TOex_uN4Y.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH_D-lf-yQOjp5n5EJknUF43Q_pFLEXjb9iHAdHhmXXjT6UtF_TJu5Sk-rwUUfS2v8eT_J7OsxwZ9LxnrtJoucvuFjCTTF0V0nw9xQUKRsHv0l6Je0aNCBbmi1zH8iEDIf5h93Hqw=w1000-h1000-c-n',
      place_id: '12629769327428191682',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=12629769327428191682&q=coffee',
      provider_id: '/g/11w563nv91',
      gps_coordinates: {
        latitude: 40.709249,
        longitude: -74.006632,
      },
      title: 'Remi Flower & Coffee',
      type: 'Coffee shop',
      address: '130 William St',
    },
    {
      position: 11,
      rating: 4.8,
      reviews: 154,
      reviews_original: '(154)',
      price: '$1–10',
      description:
        '"Delicious coffee served at the perfect temp and a tasty croissant."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/8MJfj613zkYuWgnVbAp-hoFxpSVouvOOXTnppvxherE.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-proxy/ALd4DhFhbpr1G485cZDdZnnf6GJFfwnhkWmZabc2434Up98VeHqnoG-rvEQSIcGFkaQs1-FezLo5WnytbCLsTzfXyKTqCh7QM0_zg6lr07iryF7-7vwi_TARuswsRqvB-ME8G_AOQL-HU-hz4JZXWVeLhnfZ_I7vOb9O5M5j5isw0QTIv3YgEhkKKyvh=w1000-h1000-c-n',
      place_id: '12574681604274905751',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=12574681604274905751&q=coffee',
      provider_id: '/g/11y43604c7',
      gps_coordinates: {
        latitude: 40.719632,
        longitude: -73.988331,
      },
      title: 'Kaida Coffee and Bakery',
      type: 'Coffee shop',
      address: '122 Ludlow St',
    },
    {
      position: 12,
      rating: 4.9,
      reviews: 3100,
      reviews_original: '(3.1K)',
      price: '$1–10',
      description:
        '"The coffee is top-notch, rich, flavorful, and crafted to perfection."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/djOhDUVUb5LWL34hDA1KKfLomAsMKhppC3pb-AJXwaE.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEAkKtnys9YJLqrhWVC5E5dtQWHCP8HD41YdGKnInhzgNZowYqoXaVscZoTPF__GA3pwyXXc0D-CSSFsEe_fwrMxxGJyJoBIxBHbTeZKZ8BUqmxPOT1fO1uci4K4YBXpOSQ4uwMi-QKkG5C=w1000-h1000-c-n',
      place_id: '8519340534972759691',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=8519340534972759691&q=coffee',
      provider_id: '/g/11rdb54_6n',
      gps_coordinates: {
        latitude: 40.724418,
        longitude: -74.002929,
      },
      title: '787 Coffee',
      type: 'Coffee shop',
      address: '72 Thompson St',
    },
    {
      position: 13,
      rating: 4.7,
      reviews: 460,
      reviews_original: '(460)',
      price: '$1–10',
      description:
        '"The baristas are very friendly and made a delicious iced coffee."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/T2oSXz3CgoHaDn6gZ8m73LEWtLUPP8mTBFE9derituw.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-proxy/ALd4DhGrj7202kRyWlKRw7A6hQfzmgvKw5U0dpERMS7uJJ5Et6F_-TfeLMt1ViAmlqdmn3l8elucZSGGq0PEho_ybooxcdOPGrnKz01b8iwGjo4EQNgNdV7_NDSvfXpOmfNB-_2Xx-hGS8x8aFRHjExExm771ZIGlWyQsLqeKCVZ8G8FogzxDbQg69GtmA=w1000-h1000-c-n',
      place_id: '16816947930779800611',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=16816947930779800611&q=coffee',
      provider_id: '/g/11rzfzqqrx',
      gps_coordinates: {
        latitude: 40.709478,
        longitude: -74.006699,
      },
      title: 'Blank Street',
      type: 'Coffee shop',
      address: '135 William St',
    },
    {
      position: 14,
      rating: 4.8,
      reviews: 4000,
      reviews_original: '(4K)',
      price: '$10–20',
      description:
        '"The coffee was delicious — smooth, rich, and full of flavor."',
      thumbnail:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFY6Ph-lz6WySgMuEwlFMj-dGv8Pa1G1TvIU_zISrv31DsuuNv0U6dwQAFy9nNcvvy8wPart2sAsrSnLpv-WtThzK57uXeYP27YkXGNQgKiqRliTMg3DvAszm8m4jXOcEy7CNTD9A=w90-h90-n-k-no-l75',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFY6Ph-lz6WySgMuEwlFMj-dGv8Pa1G1TvIU_zISrv31DsuuNv0U6dwQAFy9nNcvvy8wPart2sAsrSnLpv-WtThzK57uXeYP27YkXGNQgKiqRliTMg3DvAszm8m4jXOcEy7CNTD9A=w1000-h1000-c-n',
      place_id: '11785376804253324318',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=11785376804253324318&q=coffee',
      provider_id: '/g/11j4jswld2',
      gps_coordinates: {
        latitude: 40.703485,
        longitude: -74.010831,
      },
      title: '787 Coffee',
      type: 'Coffee shop',
      address: '66 Pearl St',
    },
    {
      position: 15,
      rating: 4.7,
      reviews: 130,
      reviews_original: '(130)',
      price: '$1–10',
      description:
        '"Delicious coffee, a beautiful space, and the loveliest of baristas."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/qNMC2Q2Lm-q6E3oYLiMwRUB2wRrdnvSuo959km9VDYM.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEjT1OALaV-ZWeg0JE9Rg6zpH0WU1kJSXQr7GYCb3gQQ9ZgTiIbZjbwHFRh4GX4aipGc3FUFiHBZVjDOwGygNEGoYo91Be2Md9Hc3XZgfkaCPs0Np4JMLH68jjIKVB_HLupWCZMncZjlin5=w1000-h1000-c-n',
      place_id: '11946773204305716786',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=11946773204305716786&q=coffee',
      provider_id: '/g/11xlr6bhc4',
      gps_coordinates: {
        latitude: 40.719858,
        longitude: -74.002273,
      },
      title: 'Blue Dove Coffee',
      type: 'Coffee shop',
      address: '307 Canal St',
    },
    {
      position: 16,
      rating: 4.2,
      reviews: 484,
      reviews_original: '(484)',
      price: '$10–20',
      description: '"Absolutely delicious lattes in a beautiful environment."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/d9y7KhSa7Pr64mPA3INaklKhX20YXZFfw3UeLiER4jA.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-proxy/ALd4DhExInj_W5fEOuPvq3Nf2e4PkhTyT1CQ5P_8_Jayfeg2NHrNec1olAA2RZSojkVQP4D629AQlVbW_FO_cw9vQ4_dYgkAa_KyvcBpfzOuQZbhmJgcjThDLOatoaPlmHmzfCqAmv0xPm30UCWErvsgwxqZeDYlhVDnzLWbxXf4TScjMsARpFrX6nCl=w1000-h1000-c-n',
      place_id: '9483346445493326912',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=9483346445493326912&q=coffee',
      provider_id: '/g/11fnphcjp_',
      gps_coordinates: {
        latitude: 40.718503,
        longitude: -74.002472,
      },
      title: 'Blue Bottle Coffee',
      type: 'Coffee shop',
      address: '396 Broadway',
    },
    {
      position: 17,
      rating: 4.4,
      reviews: 335,
      reviews_original: '(335)',
      price: '$1–10',
      description:
        '"Affordable prices, great coffee, and a friendly welcoming atmosphere."',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/phFubALukQ2ogPN7ACAaTJI7HV3d9VtLn9l4iRJPUG4.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGxWhLvto3cQ0fLOd_fhhI1BHtUk4_TGSrwgzJMNxip773z8UEueoYN9p9aM1BnZyySqVNUXdyZncAJw-pvgPApjAltPj_XFN6vRt_UhyaoaxoL6lHPBzIeKhol0KVGT9Mcx_Oo=w1000-h1000-c-n',
      place_id: '15667002398697190332',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=15667002398697190332&q=coffee',
      provider_id: '/g/11sb3l7hry',
      gps_coordinates: {
        latitude: 40.711183,
        longitude: -74.006268,
      },
      title: 'Variety Coffee Roasters',
      type: 'Coffee shop',
      address: '140 Nassau St',
    },
    {
      position: 18,
      rating: 4.8,
      reviews: 327,
      reviews_original: '(327)',
      price: '$1–10',
      description: '"Fast service, super friendly atmosphere, great coffee!!"',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/EM8sIAnKdMLn1fJ3BCF9Yyz61PNqUqK68MbSSRihPWA.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-proxy/ALd4DhGYwOnmdhdwD4r4Xdufdbem8RBcPcws_-0iXFzvIAcDy7jxYG8S8rQbNJT-RxQZnlJYe4hjUCyjXnQ-XWdXp3t7PYmQPcWrNNQsXJc2vxQ4glxJ0N6jKmM19W8PnkVYNnn7mMKqItpfci2gVBJd-iY0rm3V9F0ncJLPFGqj6R_dVi4ZEGYlowo5Rg=w1000-h1000-c-n',
      place_id: '15418182845606448746',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=15418182845606448746&q=coffee',
      provider_id: '/g/11t804_t8r',
      gps_coordinates: {
        latitude: 40.714022,
        longitude: -74.008482,
      },
      title: 'Blank Street',
      type: 'Coffee shop',
      address: '125 Church St',
    },
    {
      position: 19,
      rating: 4.3,
      reviews: 577,
      reviews_original: '(577)',
      price: '$1–10',
      description:
        '"Stopped in for a coffee and service was quick and coffee was fairly priced!"',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/wXLilD4ozbAxR-bFs6W6h9csD6XM-4PdRD2b_dTBJYE.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAF1QC3VJ1KQQXLFLq2h2FoX1PZkmKJX8JxO9zvsM40WU4AOVX7UVyODztJWKLsJG5JZKhXZA4bDNtDsM8uNUP6TRK1nt5XnvgAZhhnMsh3-Ze1QwwF5L5YlQKXeQReXQ8Hwh-BR=w1000-h1000-c-n',
      place_id: '8842247816402036280',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=8842247816402036280&q=coffee',
      provider_id: '/g/11clv57m15',
      gps_coordinates: {
        latitude: 40.721683,
        longitude: -73.987397,
      },
      title: 'Ludlow Coffee Supply',
      type: 'Coffee shop',
      address: '176 Ludlow St',
    },
    {
      position: 20,
      rating: 4.5,
      reviews: 469,
      reviews_original: '(469)',
      price: '$1–10',
      description:
        '"Delicious coffee, friendly staff and they make their own milk!"',
      thumbnail:
        'https://serpapi.com/searches/6a43a50c4de49ae09adceb6a/images/8ymUXqmzHtM0J5lxDUL9oo6aa6v-8W735G3uhDH7oCY.jpeg',
      thumbnail_large:
        'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG1TNmDikb6FAFWFfxWxKJOxVHGgr7Qy8pB9JxvjZtTi21etQhlVHIfL5vuXtxhE2S0er6MwGutAqcvYA-hP64xc4xS7Ei7gOxrpgWHNgy7j87zTfEe49fWtuPGZvx2jvBABFLi=w1000-h1000-c-n',
      place_id: '13182349020049531595',
      place_id_search:
        'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=13182349020049531595&q=coffee',
      provider_id: '/g/11byx82myv',
      gps_coordinates: {
        latitude: 40.710952,
        longitude: -74.006024,
      },
      title: 'Birch Coffee',
      type: 'Coffee shop',
      address: '8 Spruce St',
    },
  ],
  pagination: {
    current: 1,
    next: 'https://www.google.com/search?q=coffee&hl=en&gl=us&start=20&udm=1',
    other_pages: {
      '2': 'https://www.google.com/search?q=coffee&hl=en&gl=us&start=20&udm=1',
      '3': 'https://www.google.com/search?q=coffee&hl=en&gl=us&start=40&udm=1',
      '4': 'https://www.google.com/search?q=coffee&hl=en&gl=us&start=60&udm=1',
      '5': 'https://www.google.com/search?q=coffee&hl=en&gl=us&start=80&udm=1',
    },
  },
  serpapi_pagination: {
    current: 1,
    next_link:
      'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=coffee&start=20',
    next: 'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=coffee&start=20',
    other_pages: {
      '2': 'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=coffee&start=20',
      '3': 'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=coffee&start=40',
      '4': 'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=coffee&start=60',
      '5': 'https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=coffee&start=80',
    },
  },
};
