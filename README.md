## Novaa (Next.js)

Modern rebuild of the Novaa product-discovery site.

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set Apps Script endpoint:
   ```bash
   cp .env.example .env.local
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```

### Environment variables

- `NEXT_PUBLIC_APPS_SCRIPT_URL`: Existing Google Apps Script endpoint returning product JSON.
