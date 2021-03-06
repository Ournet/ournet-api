
export default `

enum QuoteTopicType {
    PERSON
    ORG
    PLACE
    PRODUCT
    WORK
    EVENT
}

enum QuoteTopicRelation {
    MENTION
}

type QuoteTopic {
    id: String!
    name: String!
    slug: String!
    abbr: String
    type: String
    rel: String
}

type Quote {
    id: String!
    lang: String!
    country: String!
    source: QuoteSource!
    author: QuoteAuthor!
    text: String!

    topics: [QuoteTopic]

    lastFoundAt: String!
    createdAt: String!
    expiresAt: Int!

    countViews: Int!

    events: [QuoteEvent]
}

type QuoteAuthor {
    name: String!
    slug: String!
    id: String!
}

type QuoteSource {
    host: String!
    path: String!
    title: String!
    id: String!
    imageId: String
}

type QuoteEvent {
    title: String!
    id: String!
    imageId: String
}

type QuoteTopItem {
    id: String!
    count: Int!
}

input ListQuotesQueryParams {
    lang: String!
    country: String!
    maxDate: String
    minDate: String
    limit: Int!
}

input ListQuotesByTopicQueryParams {
    lang: String!
    country: String!
    maxDate: String
    minDate: String
    limit: Int!
    topicId: String!
}

input ListQuotesByAuthorQueryParams {
    lang: String!
    country: String!
    maxDate: String
    minDate: String
    limit: Int!
    authorId: String!
}

input CountQuotesQueryParams {
    lang: String!
    country: String!
    maxDate: String
    minDate: String
}

input CountQuotesByTopicQueryParams {
    lang: String!
    country: String!
    maxDate: String
    minDate: String
    topicId: String!
}

input CountQuotesByAuthorQueryParams {
    lang: String!
    country: String!
    maxDate: String
    minDate: String
    authorId: String!
}

extend type Query {
    quotes_quoteById(id: String!): Quote
    quotes_quotesByIds(ids: [String!]!): [Quote]!
    quotes_latest(params: ListQuotesQueryParams): [Quote]!
    quotes_latestByTopic(params: ListQuotesByTopicQueryParams): [Quote]!
    quotes_latestByAuthor(params: ListQuotesByAuthorQueryParams): [Quote]!
    quotes_count(params: CountQuotesQueryParams): Int!
    quotes_countByTopic(params: CountQuotesByTopicQueryParams): Int!
    quotes_countByAuthor(params: CountQuotesByAuthorQueryParams): Int!
    quotes_topTopics(params: ListQuotesQueryParams): [QuoteTopItem]!
    quotes_topAuthors(params: ListQuotesQueryParams): [QuoteTopItem]!
    quotes_topAuthorTopics(params: ListQuotesByAuthorQueryParams): [QuoteTopItem]!
    quotes_popularByAuthor(params: ListQuotesByAuthorQueryParams): [Quote]!
}
`;
