#!/bin/bash

yarn unlink @ournet/domain
yarn unlink news-sources
yarn unlink @ournet/news-domain
yarn unlink @ournet/news-data
yarn unlink @ournet/topics-domain
yarn unlink @ournet/topics-data
yarn unlink @ournet/quotes-domain
yarn unlink @ournet/quotes-data
yarn unlink @ournet/images-domain
yarn unlink @ournet/images-data
yarn unlink @ournet/weather-domain
yarn unlink @ournet/weather-data
yarn unlink @ournet/places-domain
yarn unlink @ournet/places-data

yarn add @ournet/domain
yarn add news-sources
yarn add @ournet/news-domain
yarn add @ournet/news-data
yarn add @ournet/topics-domain
yarn add @ournet/topics-data
yarn add @ournet/quotes-domain
yarn add @ournet/quotes-data
yarn add @ournet/images-domain
yarn add @ournet/images-data
yarn add @ournet/weather-domain
yarn add @ournet/weather-data
yarn add @ournet/places-domain
yarn add @ournet/places-data

yarn test
