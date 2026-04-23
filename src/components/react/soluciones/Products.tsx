import React, { useState, useMemo } from "react";
import {
  Code2,
  Globe2,
  Layers,
  Smartphone,
  Tv,
  Building,
  Bot,
  ShieldCheck,
  Network,
  Sparkles,
  Users,
  Search,
} from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { Card } from "../shared/ui/Card";
import { Button } from "../shared/ui/Button";
import { solutionsData } from "../../../data/solutions";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe2,
  Layers,
  Smartphone,
  Tv,
  Building,
  Bot,
  ShieldCheck,
  Network,
  Sparkles,
  Users,
};

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = useMemo(() => {
    const uniqueCats = Array.from(
      new Set(solutionsData.map((sol) => sol.category)),
    );
    return ["Todos", ...uniqueCats];
  }, []);

  const filteredSolutions = useMemo(() => {
    return solutionsData.filter((sol) => {
      const matchesSearch =
        sol.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sol.short_description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === "Todos" || sol.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
      <Reveal>
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-center">
          Soluciones de otro nivel.
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto text-center font-light mb-12">
          Elige el ecosistema que impulsará tu próxima era digital.
        </p>
      </Reveal>

      <Reveal delay={100} className="mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#288B88]/20 text-[#288B88] border-[#288B88]/50 shadow-[0_0_15px_rgba(40,139,136,0.2)]"
                    : "bg-white/[0.02] text-gray-400 border-transparent hover:text-white hover:bg-white/[0.06] hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 shrink-0">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar soluciones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#288B88]/60 focus:bg-white/[0.05] transition-all"
            />
          </div>
        </div>
      </Reveal>

      {filteredSolutions.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-gray-400 text-lg">
            No hemos encontrado soluciones que coincidan con tu búsqueda.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((prod, i) => {
            const IconComponent = iconMap[prod.icon_name] || Code2;
            const priceLower = prod.starting_price.toLowerCase();

            // Lógica inteligente para la etiqueta del precio
            let priceLabel = "A partir de";
            if (
              priceLower.includes("custom") ||
              priceLower.includes("demo") ||
              priceLower.includes("retainer")
            ) {
              priceLabel = "Modalidad";
            } else if (
              priceLower.includes("subvencionable") ||
              priceLower.includes("bono")
            ) {
              priceLabel = "Cobertura";
            }

            return (
              <Reveal key={prod.slug} delay={i * 50}>
                <Card className="group h-[500px]">
                  <div
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-0"
                    style={{
                      background: `radial-gradient(circle, ${prod.accent_color} 0%, transparent 70%)`,
                    }}
                  ></div>

                  <div className="flex flex-col justify-between h-full relative z-10">
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <IconComponent
                          className="w-10 h-10"
                          style={{ color: prod.accent_color }}
                          strokeWidth={1.5}
                        />
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02]">
                          {prod.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-semibold mb-4 text-white">
                        {prod.title}
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed mb-8 line-clamp-3">
                        {prod.short_description}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">{priceLabel}</p>
                      <p className="text-3xl font-semibold text-white mb-8">
                        {prod.starting_price}
                      </p>
                      <Button
                        href={`/soluciones/${prod.slug}`}
                        variant="primary"
                        size="lg"
                        fullWidth
                      >
                        Ver Solución
                      </Button>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      )}
    </div>
  );
};
