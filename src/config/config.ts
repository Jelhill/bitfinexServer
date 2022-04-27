require("dotenv").config()

export const config = {
    MONGODB_DEV_URI: process.env.MONGODB_DEV_URI,
    MONGODB_PROD_URI: process.env.MONGODB_PROD_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    TOKEN_DURATION: process.env.TOKEN_DURATION,
    MAILGUN_APIKEY: process.env.MAILGUN_APIKEY,
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    FRONT_END_BASE_URL: process.env.FRONT_END_BASE_URL,
    EMAIL_SENDER: process.env.EMAIL_SENDER,
    OTP_SECRET: process.env.OTP_SECRET,
    elasticSearch: {
        ELASTIC_HOST: process.env.ELASTIC_HOST,
        ELASTIC_USERNAME: process.env.ELASTIC_USERNAME,
        ELASTIC_PASSWORD: process.env.ELASTIC_PASSWORD
    }
}