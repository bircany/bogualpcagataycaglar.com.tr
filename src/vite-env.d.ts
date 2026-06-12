/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_TAG_ID?: string;
  readonly VITE_GOOGLE_ADS_ID?: string;
  readonly VITE_GOOGLE_ADS_PHONE_CONVERSION_LABEL?: string;
  readonly VITE_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL?: string;
  readonly VITE_GOOGLE_ADS_EMAIL_CONVERSION_LABEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
