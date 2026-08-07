interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
}