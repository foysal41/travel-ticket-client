const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;