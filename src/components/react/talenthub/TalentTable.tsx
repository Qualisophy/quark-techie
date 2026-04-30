import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  Briefcase,
  Clock,
  Linkedin,
} from "lucide-react";
import { Dropdown } from "../shared/ui/Dropdown";
import { talentsData } from "../../../data/talents";

export const TalentTable = () => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [techFilter, setTechFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState("date-desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
    { label: "Recientes", value: "date-desc" },
    { label: "Nombre (A-Z)", value: "name-asc" },
  ];

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
      let comp =
        sortBy === "name"
          ? a.name.localeCompare(b.name)
          : new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
      return sortOrder === "asc" ? comp : -comp;
    });
    return result;
  }, [search, roleFilter, techFilter, sortConfig]);

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="w-full bg-transparent font-sans">
      {/* Toolbar Transparente */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-8 border-b border-white/5 bg-white/[0.01]">
        <div className="relative w-full lg:w-96">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
            size={20}
          />
          <input
            type="text"
            placeholder="Buscar por nombre o email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm text-white focus:border-[#288B88] outline-none backdrop-blur-md"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <Dropdown
            icon={<Filter size={14} />}
            value={roleFilter}
            options={roleOptions}
            onChange={setRoleFilter}
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
              <tr
                key={profile.id}
                className="hover:bg-white/[0.03] transition-all group"
              >
                <td className="px-8 py-7">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border border-white/10 bg-gradient-to-br shadow-lg ${profile.avatarGradient}`}
                    >
                      {profile.emoji}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-[#288B88] transition-colors">
                        {profile.name}
                      </div>
                      <div className="text-[11px] text-white/40">
                        {profile.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-7">
                  <div className="text-sm text-gray-300">{profile.role}</div>
                  <div className="flex gap-2 mt-2">
                    {profile.techs.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-8 py-7 text-sm text-white/60">
                  <Briefcase size={14} className="inline mr-2 text-[#288B88]" />{" "}
                  {profile.level}
                </td>
                <td className="px-8 py-7 text-sm text-[#D9C58F]">
                  <Clock size={14} className="inline mr-2" />{" "}
                  {profile.availability}
                </td>
                <td className="px-8 py-7 text-center">
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    className="inline-block p-2 rounded-lg bg-white/5 text-white/20 hover:text-[#0077B5] transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                </td>
                <td className="px-8 py-7 text-right">
                  <a
                    href={profile.cvUrl}
                    download
                    className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/10 text-xs font-bold hover:bg-white hover:text-black transition-all backdrop-blur-sm"
                  >
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
        <div>
          Mostrando {paginatedData.length} de {filteredAndSortedData.length}{" "}
          perfiles
        </div>
        <div className="flex gap-6 items-center">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="hover:text-white transition-colors disabled:opacity-10"
          >
            Anterior
          </button>
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-lg text-xs transition-all ${currentPage === i + 1 ? "bg-[#288B88]/20 text-[#288B88] border border-[#288B88]/30" : "hover:bg-white/5 text-white/20"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="hover:text-white transition-colors disabled:opacity-10"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
