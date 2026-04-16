import { Product } from './types';

const DEFAULT_ENDPOINT = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

const clean = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

const normalizeProduct = (entry: Record<string, unknown>, index: number): Product => {
  const id = clean(entry.id) || clean(entry.ID) || `${clean(entry.code) || clean(entry.folderCode) || 'item'}-${index}`;

  return {
    id,
    title: clean(entry.title) || clean(entry.name) || clean(entry.productName) || 'Untitled Product',
    description: clean(entry.description) || clean(entry.desc) || clean(entry.summary) || 'No description provided.',
    image: clean(entry.image) || clean(entry.imageUrl) || clean(entry.thumbnail),
    link: clean(entry.link) || clean(entry.url),
    code: clean(entry.code) || clean(entry.folderCode) || clean(entry.kode)
  };
};

export async function getProducts(signal?: AbortSignal): Promise<Product[]> {
  const endpoint = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? DEFAULT_ENDPOINT;

  const response = await fetch(endpoint, {
    method: 'GET',
    cache: 'no-store',
    signal
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const payload = (await response.json()) as unknown;

  const source =
    (Array.isArray(payload) && payload) ||
    (typeof payload === 'object' && payload !== null && Array.isArray((payload as { data?: unknown[] }).data)
      ? (payload as { data: unknown[] }).data
      : []);

  return source
    .filter((item): item is Record<string, unknown> => typeof item === 'object' && item !== null)
    .map(normalizeProduct);
}
