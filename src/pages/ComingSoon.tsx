interface ComingSoonProps {
  title: string;
  description: string;
}

export const ComingSoon = ({ title, description }: ComingSoonProps) => {
  return (
    <section className="min-h-screen bg-[#faf8f5] pt-44 pb-24 px-5 md:px-[50px] lg:px-[130px]">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xl font-semibold text-primary uppercase tracking-widest px-3 py-1 bg-amber-50 rounded-full border border-amber-300/60">
          Aurea Home
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
