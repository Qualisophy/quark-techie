import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  Download,
  Briefcase,
  Clock,
  Linkedin,
} from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { Dropdown } from "../shared/ui/Dropdown";
import { talentsData } from "../../../data/talents";

export const TalentHub = () => {
  // 1. ESTADOS DE FILTRADO
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [techFilter, setTechFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState("date-desc");

  // 2. ESTADOS DE PAGINACIÓN
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Si cambian los filtros, reseteamos a la página 1 para que el usuario no se quede en una página vacía
  useEffect(() => {
    setCurrentPage(1);
  }, [search, roleFilter, techFilter, sortConfig]);

  // 3. OPCIONES DINÁMICAS PARA LOS DROPDOWNS
  const roleOptions = [
    { label: "Todos los Roles", value: "All" },
    ...Array.from(new Set(talentsData.map((p) => p.role))).map((r) => ({
      label: r,
      value: r,
    })),
  ];

  const techOptions = [
    { label: "Todas las Tech", value: "All" },
    ...Array.from(new Set(talentsData.flatMap((p) => p.techs))).map((t) => ({
      label: t,
      value: t,
    })),
  ];

  const sortOptions = [
    { label: "Más recientes", value: "date-desc" },
    { label: "Más antiguos", value: "date-asc" },
    { label: "Nombre (A-Z)", value: "name-asc" },
    { label: "Rol (A-Z)", value: "role-asc" },
  ];

  // 4. LÓGICA DE FILTRADO Y ORDENACIÓN
  const filteredAndSortedData = useMemo(() => {
    let result = [...talentsData];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) || p.email.toLowerCase().includes(q),
      );
    }

    if (roleFilter !== "All")
      result = result.filter((p) => p.role === roleFilter);
    if (techFilter !== "All")
      result = result.filter((p) => p.techs.includes(techFilter));

    result.sort((a, b) => {
      const [sortBy, sortOrder] = sortConfig.split("-");
      let comparison = 0;
      if (sortBy === "name") comparison = a.name.localeCompare(b.name);
      if (sortBy === "role") comparison = a.role.localeCompare(b.role);
      if (sortBy === "date")
        comparison =
          new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
      return sortOrder === "asc" ? comparison : -comparison;
    });

    return result;
  }, [search, roleFilter, techFilter, sortConfig]);

  // 5. LÓGICA DE PAGINACIÓN APLICADA SOBRE LOS DATOS YA FILTRADOS
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
      <Reveal className="mb-12">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-4 text-white">
          Talent Hub.
        </h1>
        <p className="text-xl text-gray-400 font-light max-w-2xl">
          Explora la red de ingenieros y especialistas que han evolucionado su
          stack tecnológico con nosotros.
        </p>
      </Reveal>

      <div className="bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-2xl shadow-2xl overflow-hidden pb-4">
        {/* TOOLBAR */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-6 border-b border-white/10 bg-white/[0.01]">
          <div className="relative w-full lg:w-72">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar por nombre o email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#288B88] focus:bg-white/[0.05] transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <Dropdown
              icon={<Filter size={14} />}
              value={roleFilter}
              options={roleOptions}
              onChange={setRoleFilter}
            />
            <Dropdown
              icon={<Filter size={14} />}
              value={techFilter}
              options={techOptions}
              onChange={setTechFilter}
            />
            <Dropdown
              icon={<ArrowUpDown size={14} className="text-[#288B88]" />}
              prefix="Orden:"
              value={sortConfig}
              options={sortOptions}
              onChange={setSortConfig}
            />
          </div>
        </div>

        {/* TABLA DE DATOS */}
        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-gray-500 bg-white/[0.01]">
                <th className="px-6 py-4 font-medium">Miembro</th>
                <th className="px-6 py-4 font-medium">Rol & Stack</th>
                <th className="px-6 py-4 font-medium text-center">
                  Nivel
                </th>{" "}
                {/* Ahora dice Nivel */}
                <th className="px-6 py-4 font-medium text-center">
                  Disponibilidad
                </th>
                <th className="px-6 py-4 font-medium text-center">LinkedIn</th>
                <th className="px-6 py-4 font-medium text-right">CV</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-24 text-center text-gray-500 font-light"
                  >
                    No se encontraron perfiles con estos filtros.
                  </td>
                </tr>
              ) : (
                paginatedData.map((profile) => (
                  <tr
                    key={profile.id}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border border-white/20 bg-gradient-to-br ${profile.avatarGradient}`}
                        >
                          {profile.emoji}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-white">
                            {profile.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {profile.email}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-sm text-gray-300">
                          {profile.role}
                        </span>
                        <div className="flex gap-2">
                          {profile.techs.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-gray-400 bg-white/[0.03]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>

                    {/* MOSTRANDO 'profile.level' en lugar de experience */}
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                        <Briefcase size={14} className="text-[#288B88]" />
                        {profile.level}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                        <Clock size={14} className="text-[#E8D33F]" />
                        {profile.availability}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-center">
                      {/* LinkedIn Icon con rounded-lg (cuadrado suavizado) en lugar de rounded-full */}
                      <a
                        href={profile.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 text-gray-500 hover:text-[#0077B5] hover:border-[#0077B5]/50 hover:bg-[#0077B5]/10 transition-all duration-300"
                        title="Ver perfil de LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={profile.cvUrl}
                        download={`${profile.name.replace(" ", "_")}_CV.pdf`}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10 text-gray-300 bg-white/[0.03] hover:bg-white/[0.08] hover:text-white transition-all"
                      >
                        <Download size={14} /> Descargar
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* CONTROLES DE PAGINACIÓN */}
        {filteredAndSortedData.length > 0 && (
          <div className="px-6 py-4 border-t border-white/10 bg-white/[0.01] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-gray-500">
              Mostrando{" "}
              <span className="text-white">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              -{" "}
              <span className="text-white">
                {Math.min(
                  currentPage * itemsPerPage,
                  filteredAndSortedData.length,
                )}
              </span>{" "}
              de{" "}
              <span className="text-white">{filteredAndSortedData.length}</span>{" "}
              perfiles
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 rounded text-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400"
              >
                Anterior
              </button>

              {/* Indicador numérico de página */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded text-sm flex items-center justify-center transition-colors ${
                        currentPage === page
                          ? "bg-[#288B88]/20 text-[#288B88] border border-[#288B88]/50"
                          : "text-gray-400 border border-transparent hover:border-white/10 hover:bg-white/5"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 rounded text-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
