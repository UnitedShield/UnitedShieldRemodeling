# Umami Analytics Setup

Free, open-source, privacy-friendly analytics. No cookies, GDPR compliant, ~2KB script that won't slow down the site.

## Steps

1. Go to https://cloud.umami.is and create a free account
2. Click **Add website** and enter `unitedshieldremodeling.com`
3. Copy the **Website ID** from the tracking code snippet
4. Open `app/layout.tsx` and replace `REPLACE_WITH_YOUR_UMAMI_WEBSITE_ID` with your actual ID
5. Deploy — analytics will start tracking immediately

## What You Get (Free Tier)

- Pageviews & unique visitors
- Referral sources (where traffic comes from)
- Device types, browsers, OS
- Country/city breakdown
- Real-time active visitors
- Custom event tracking if needed later

## Why Umami

- Free hosted tier, no credit card needed
- Tiny script (~2KB) loaded after page renders, zero performance impact
- No cookies = no annoying cookie banner needed
- Helps with SEO by showing which pages get traffic so you can optimize
- Privacy-friendly, won't scare away visitors with tracking popups
