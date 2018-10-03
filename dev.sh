#!/bin/bash

yarn remove @ournet/domain
yarn remove news-sources
yarn remove @ournet/news-domain
yarn remove @ournet/news-data
yarn remove @ournet/topics-domain
yarn remove @ournet/topics-data
yarn remove @ournet/quotes-domain
yarn remove @ournet/quotes-data
yarn remove @ournet/images-domain
yarn remove @ournet/images-data
yarn remove @ournet/weather-domain
yarn remove @ournet/weather-data
yarn remove @ournet/places-domain
yarn remove @ournet/places-data
yarn remove @ournet/horoscopes-domain
yarn remove @ournet/horoscopes-data

yarn link @ournet/domain
yarn link news-sources
yarn link @ournet/news-domain
yarn link @ournet/news-data
yarn link @ournet/topics-domain
yarn link @ournet/topics-data
yarn link @ournet/quotes-domain
yarn link @ournet/quotes-data
yarn link @ournet/images-domain
yarn link @ournet/images-data
yarn link @ournet/weather-domain
yarn link @ournet/weather-data
yarn link @ournet/places-domain
yarn link @ournet/places-data
yarn link @ournet/horoscopes-domain
yarn link @ournet/horoscopes-data

yarn test
