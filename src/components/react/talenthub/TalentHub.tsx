import React, { useState, useMemo, useEffect, useRef } from "react";
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle, 
  SquareGanttChart,
  Rocket,
  Search,
  Filter,
  ArrowUpDown,
  Download,
  Briefcase,
  Clock,
  Linkedin
} from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { talentsData } from "../../../data/talents";
import { Dropdown } from "../shared/ui/Dropdown";
import { Button } from "../shared/ui/Button";

// --- LANDING PAGE (TALENT HUB) ---
export const TalentHub = () => {
  const navigateToAlumni = () => {
    window.location.href = "/talent-hub/antiguos-alumnos";
  };

  const [positions, setPositions] = useState<{ [key: number]: { x: number; y: number } }>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPositions(prev => ({
      ...prev,
      [index]: { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }));
  };

  const cardBaseClasses = "relative h-full w-full rounded-[2.5rem] bg-white/[0.03] border border-white/8 backdrop-blur-2xl overflow-hidden isolate transition-colors duration-500";

  return (
    <div className="pt-28 pb-32 px-6 max-w-7xl mx-auto min-h-screen font-sans relative overflow-hidden">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#288B88]/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D9C58F]/5 blur-[150px] rounded-full -z-10"></div>

      <Reveal>
      <section className="text-center pt-15 pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#288B88]/10 blur-[120px] rounded-full -z-10"></div>
        
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white">
            Talento certificado,<br /> Resultados excepcionales.
        </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Accede a nuestra red exclusiva de ingenieros y especialistas que han sido formados y rigurosamente validados por Quark Techie.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={navigateToAlumni}
            className="uppercase text-xs tracking-[0.2em]"
          >
            Conoce a nuestro talento <ArrowRight size={16} />
          </Button>
        </section>
      </Reveal>

      {/* --- BENTO GRID COMPLETO (LAS 4 CARTAS) --- */}
      <section className="py-24 border-t border-white/5 relative">
        <Reveal>
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 uppercase">El valor de nuestra certificación.</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[380px] relative z-10">
          
          <Reveal delay={100} className="md:col-span-2 h-full">
            <div 
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${cardBaseClasses} p-10 group`}
            >
              <div className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                style={{
                  opacity: hoveredIndex === 0 ? 1 : 0,
                  background: `radial-gradient(600px circle at ${positions[0]?.x || 0}px ${positions[0]?.y || 0}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <BookOpen className="w-12 h-12 text-[#63A3A4]" strokeWidth={1.5} />
                <div>
                  <h3 className="text-3xl font-semibold mb-3 text-white uppercase tracking-wider">Formación de Vanguardia.</h3>
                  <p className="text-gray-400 text-lg max-w-md font-light">Programa intensivo diseñado por expertos para dominar las herramientas que impulsan a las empresas líderes.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="md:col-span-1 h-full">
            <div 
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${cardBaseClasses} p-10 flex flex-col justify-between items-center text-center group`}
            >
              <div className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                style={{
                  opacity: hoveredIndex === 1 ? 1 : 0,
                  background: `radial-gradient(600px circle at ${positions[1]?.x || 0}px ${positions[1]?.y || 0}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#A3B899] to-[#63A3A4] blur-xl absolute opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <SquareGanttChart className="w-12 h-12 text-white relative z-10" strokeWidth={1.5} />
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl font-semibold mb-2 text-white uppercase">Perfilado Especializado</h3>
                <p className="text-gray-400 font-light text-sm">Asignación precisa de roles y stacks tecnológicos según el proyecto.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} className="md:col-span-1 h-full">
            <div 
              onMouseMove={(e) => handleMouseMove(e, 2)}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${cardBaseClasses} p-10 flex flex-col justify-between group`}
            >
              <div className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                style={{
                  opacity: hoveredIndex === 2 ? 1 : 0,
                  background: `radial-gradient(600px circle at ${positions[2]?.x || 0}px ${positions[2]?.y || 0}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />
              <CheckCircle className="w-12 h-12 text-[#D9C58F] relative z-10" strokeWidth={1.5} />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 text-white uppercase">Validación Rigurosa</h3>
                <p className="text-gray-400 font-light text-sm">Pruebas técnicas reales que aseguran la excelencia estructural en cada línea.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400} className="md:col-span-2 h-full">
            <div 
              onMouseMove={(e) => handleMouseMove(e, 3)}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${cardBaseClasses} p-10 group`}
            >
              <div className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
                style={{
                  opacity: hoveredIndex === 3 ? 1 : 0,
                  background: `radial-gradient(600px circle at ${positions[3]?.x || 0}px ${positions[3]?.y || 0}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-[#288B88]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <Rocket className="w-12 h-12 text-white" strokeWidth={1.5} />
                <div>
                  <h3 className="text-3xl font-semibold mb-3 text-white uppercase tracking-wider">Listo para el desafío.</h3>
                  <p className="text-gray-400 text-lg max-w-md font-light">Profesionales con experiencia práctica para impactar desde el primer día en entornos de alta exigencia.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <Reveal>
        <section className="text-center py-32 relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 uppercase tracking-tighter leading-none bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Tu próximo ingeniero clave <br /> te está esperando.
          </h2>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={navigateToAlumni}
            className="uppercase text-xs tracking-[0.2em]"
          >
            Explorar base de candidatos <ArrowRight size={18} />
          </Button>
        </section>
      </Reveal>
    </div>
  );
};

// --- LA TABLA ORIGINAL (AHORA TRANSPARENTE) ---
export const TalentTable = () => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [techFilter, setTechFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState("date-desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const roleOptions = [{ label: "Todos los Roles", value: "All" }, ...Array.from(new Set(talentsData.map((p) => p.role))).map((r) => ({ label: r, value: r }))];
  const techOptions = [{ label: "Todas las Tech", value: "All" }, ...Array.from(new Set(talentsData.flatMap((p) => p.techs))).map((t) => ({ label: t, value: t }))];
  const sortOptions = [{ label: "Recientes", value: "date-desc" }, { label: "Nombre (A-Z)", value: "name-asc" }];

  const filteredAndSortedData = useMemo(() => {
    let result = [...talentsData];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.email.toLowerCase().includes(q));
    }
    if (roleFilter !== "All") result = result.filter(p => p.role === roleFilter);
    if (techFilter !== "All") result = result.filter(p => p.techs.includes(techFilter));

    result.sort((a, b) => {
      const [sortBy, sortOrder] = sortConfig.split("-");
      let comp = sortBy === "name" ? a.name.localeCompare(b.name) : new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
      return sortOrder === "asc" ? comp : -comp;
    });
    return result;
  }, [search, roleFilter, techFilter, sortConfig]);

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const paginatedData = filteredAndSortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    // CAMBIO CLAVE: He quitado el bg-[#0A0A0A] y puesto bg-transparent
    <div className="w-full bg-transparent font-sans">
      
      {/* Toolbar Transparente */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-8 border-b border-white/5 bg-white/[0.01]">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={20} />
          <input 
            type="text" 
            placeholder="Buscar por nombre o email..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            className="w-full bg-white/[0.03] border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm text-white focus:border-[#288B88] outline-none backdrop-blur-md" 
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <Dropdown icon={<Filter size={14} />} value={roleFilter} options={roleOptions} onChange={setRoleFilter} />
          <Dropdown icon={<ArrowUpDown size={14} className="text-[#288B88]" />} prefix="Orden:" value={sortConfig} options={sortOptions} onChange={setSortConfig} />
        </div>
      </div>

      <div className="overflow-x-auto min-h-[500px]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.2em] text-white/30 bg-white/[0.03] backdrop-blur-sm">
              <th className="px-8 py-6 text-left">Miembro</th>
              <th className="px-8 py-6 text-left">Rol & Stack</th>
              <th className="px-8 py-6 text-left">Nivel</th>
              <th className="px-8 py-6 text-left">Disponibilidad</th>
              <th className="px-8 py-6 text-center">Linkedin</th>
              <th className="px-8 py-6 text-right">Currículum</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {paginatedData.map((profile) => (
              <tr key={profile.id} className="hover:bg-white/[0.03] transition-all group">
                <td className="px-8 py-7">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border border-white/10 bg-gradient-to-br shadow-lg ${profile.avatarGradient}`}>{profile.emoji}</div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-[#288B88] transition-colors">{profile.name}</div>
                      <div className="text-[11px] text-white/40">{profile.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-7">
                  <div className="text-sm text-gray-300">{profile.role}</div>
                  <div className="flex gap-2 mt-2">
                    {profile.techs.map(t => <span key={t} className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/40">{t}</span>)}
                  </div>
                </td>
                <td className="px-8 py-7 text-sm text-white/60">
                  <Briefcase size={14} className="inline mr-2 text-[#288B88]" /> {profile.level}
                </td>
                <td className="px-8 py-7 text-sm text-[#D9C58F]">
                  <Clock size={14} className="inline mr-2" /> {profile.availability}
                </td>
                <td className="px-8 py-7 text-center">
                  <a href={profile.linkedinUrl} target="_blank" className="inline-block p-2 rounded-lg bg-white/5 text-white/20 hover:text-[#0077B5] transition-all">
                    <Linkedin size={18} />
                  </a>
                </td>
                <td className="px-8 py-7 text-right">
                  <a href={profile.cvUrl} download className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/10 text-xs font-bold hover:bg-white hover:text-black transition-all backdrop-blur-sm">
                    Descargar CV
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Transparente */}
      <div className="p-8 border-t border-white/5 flex justify-between items-center text-[10px] tracking-widest text-white/20 uppercase font-bold bg-white/[0.01]">
        <div>Mostrando {paginatedData.length} de {filteredAndSortedData.length} perfiles</div>
        <div className="flex gap-6 items-center">
           <button onClick={() => setCurrentPage(p => Math.max(1, p-1))} disabled={currentPage === 1} className="hover:text-white transition-colors disabled:opacity-10">Anterior</button>
           <div className="flex gap-2">
             {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentPage(i+1)} 
                  className={`w-8 h-8 rounded-lg text-xs transition-all ${currentPage === i+1 ? 'bg-[#288B88]/20 text-[#288B88] border border-[#288B88]/30' : 'hover:bg-white/5 text-white/20'}`}
                >
                  {i+1}
                </button>
              ))}
           </div>
           <button onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))} disabled={currentPage === totalPages} className="hover:text-white transition-colors disabled:opacity-10">Siguiente</button>
        </div>
      </div>
    </div>
  );
};