GOOGLE_PROJECT_ID=promptopia-409618

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/mastanaapi \
  --project=$GOOGLE_PROJECT_ID

gcloud run deploy mastana-api \
  --image gcr.io/$GOOGLE_PROJECT_ID/mastanaapi \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --project=$GOOGLE_PROJECT_ID
