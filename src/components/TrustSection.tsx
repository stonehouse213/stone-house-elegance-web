import { Check } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: "🏢",
      text: "U.S.-Based Inventory"
    },
    {
      icon: "💳",
      text: "Flexible B2B Credit Terms"
    },
    {
      icon: "🌍",
      text: "Reliable Supply from India & Brazil"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-card border-b border-border">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center justify-center sm:justify-start space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="text-2xl sm:text-3xl">{point.icon}</div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-foreground">
                    {point.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection; 