import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/products';

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="mb-8 inline-block text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Products
        </Link>

        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 sm:flex">
          <div className="flex h-64 flex-1 items-center justify-center bg-zinc-100 p-8 dark:bg-zinc-800 sm:h-auto sm:min-h-[400px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={120}
              height={120}
              className="object-contain dark:invert"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-8">
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {product.category}
            </span>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              {product.description}
            </p>
            <p className="mt-6 text-2xl font-bold text-zinc-950 dark:text-zinc-50">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
