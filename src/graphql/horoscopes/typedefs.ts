
export default `

type HoroscopePhrase {
    id: String!
    lang: String!
    source: String!
    text: String!
    length: Int!
    sign: Int!
    period: String!
    createdAt: String!
}
type HoroscopeReport {
    id: String!
    lang: String!
    text: String!
    length: Int!
    sign: Int!
    period: String!
    phrasesIds: [String!]!
    numbers: [Int!]!
    stats: HoroscopeReportStats!
    createdAt: String!
    expiresAt: Int!
}

type HoroscopeReportStats {
    love: Int!
    success: Int!
    health: Int!
}

input HoroscopeRandomPhrasesQueryParams {
    lang: String!
    limit: Int!
    sign: Int!
    period: String!
}

extend type Query {
    horoscopes_reportById(id: String!): HoroscopeReport
    horoscopes_reportsByIds(ids: [String!]!): [HoroscopeReport]!
    horoscopes_randomPhrases(params: HoroscopeRandomPhrasesQueryParams): [HoroscopePhrase]!
    horoscopes_phraseById(id: String!): HoroscopePhrase
}
`;