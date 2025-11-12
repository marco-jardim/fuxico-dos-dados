import { useMemo, useState } from 'react';
import { dataBrokers } from './data.js';

const CATEGORY_LABELS = {
  comerciais: 'Corretores Comerciais',
  publicos: 'Plataformas Públicas',
  ilegais: 'Corretores Ilegais',
};

const CATEGORY_EMOJIS = {
  comerciais: '🏢',
  publicos: '🏛️',
  ilegais: '🚫',
};

const DATA_CATEGORY_DEFINITIONS = [
  { key: 'documentos', label: 'Documentos oficiais', emoji: '🪪' },
  { key: 'pessoais', label: 'Dados pessoais', emoji: '🧑' },
  { key: 'contato', label: 'Contato e localização', emoji: '📬' },
  { key: 'financeiros', label: 'Financeiros e crédito', emoji: '💳' },
  { key: 'marketing', label: 'Perfis demográficos e consumo', emoji: '🛍️' },
  { key: 'judicial', label: 'Registros judiciais', emoji: '⚖️' },
  { key: 'profissionais', label: 'Vínculos profissionais e corporativos', emoji: '🏢' },
  { key: 'reputacionais', label: 'Reputacionais e sanções', emoji: '🕵️' },
  { key: 'governamentais', label: 'Registros governamentais', emoji: '🏛️' },
];

const DATA_CATEGORY_META = DATA_CATEGORY_DEFINITIONS.reduce((accumulator, definition) => {
  accumulator[definition.key] = definition;
  return accumulator;
}, {});

const SORTABLE_HEADERS = [
  { key: 'categoria', label: 'Categoria' },
  { key: 'name', label: 'Nome' },
  { key: 'legalidade', label: 'Legalidade' },
  { key: 'setor', label: 'Setor' },
];

const OBSERVATION_SUMMARY_LENGTH = 140;

const legalidadeTone = (value) => {
  const lower = value.toLowerCase();
  if (lower.startsWith('legal')) {
    return 'status-legal';
  }
  if (lower.startsWith('ilegal')) {
    return 'status-ilegal';
  }
  return 'status-cinzenta';
};

const createSummary = (text) =>
  text.length > OBSERVATION_SUMMARY_LENGTH
    ? `${text.slice(0, OBSERVATION_SUMMARY_LENGTH)}…`
    : text;

const toggleSelection = (value, setter) => {
  setter((prev) =>
    prev.includes(value)
      ? prev.filter((item) => item !== value)
      : [...prev, value],
  );
};

function App() {
  const dataset = useMemo(() => {
    return Object.entries(dataBrokers).flatMap(([categoriaKey, items]) => {
      const categoria = CATEGORY_LABELS[categoriaKey] ?? categoriaKey;
      return items.map((item) => {
        const dadosCategorias = Array.isArray(item.dados) ? item.dados : [];
        const dadosResumo = dadosCategorias.length
          ? dadosCategorias
              .map((group) => {
                const meta = DATA_CATEGORY_META[group.categoria] ?? {
                  label: group.categoria,
                  emoji: '❓',
                };
                return `${meta.label}: ${group.especificacao.join(', ')}`;
              })
              .join(' | ')
          : '';

        return {
          ...item,
          categoria,
          categoriaKey,
          categoriaEmoji: CATEGORY_EMOJIS[categoriaKey] ?? '🔍',
          fontes: item.fontes ?? [],
          dadosCategorias,
          dadosResumo,
        };
      });
    });
  }, []);

  const categoryOptions = useMemo(
    () =>
      Object.entries(CATEGORY_LABELS).map(([key, label]) => ({
        key,
        label,
        emoji: CATEGORY_EMOJIS[key] ?? '❓',
      })),
    [],
  );

  const legalidadeOptions = useMemo(() => {
    const unique = new Set(dataset.map((item) => item.legalidade));
    return Array.from(unique).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }, [dataset]);

  const setorOptions = useMemo(() => {
    const unique = new Set(dataset.map((item) => item.setor));
    return Array.from(unique).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }, [dataset]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(
    categoryOptions.map((option) => option.key),
  );
  const [selectedLegalidades, setSelectedLegalidades] = useState([]);
  const [selectedSetores, setSelectedSetores] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  // Combina filtros e busca em tempo real
  const filteredData = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    return dataset.filter((item) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.categoriaKey);

      const matchesLegalidade =
        selectedLegalidades.length === 0 ||
        selectedLegalidades.includes(item.legalidade);

      const matchesSetor =
        selectedSetores.length === 0 || selectedSetores.includes(item.setor);

      const matchesSearch =
        normalizedTerm.length === 0 ||
        [
          item.name,
          item.setor,
          item.dadosResumo,
          item.legalidade,
          item.observacoes,
          item.fontes.join(' '),
        ].some((field) => field.toLowerCase().includes(normalizedTerm));

      return matchesCategory && matchesLegalidade && matchesSetor && matchesSearch;
    });
  }, [dataset, selectedCategories, selectedLegalidades, selectedSetores, searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) {
      return filteredData;
    }

    const sorted = [...filteredData].sort((a, b) => {
      const valueA = String(a[sortConfig.key] ?? '');
      const valueB = String(b[sortConfig.key] ?? '');
      return valueA.localeCompare(valueB, 'pt-BR', { sensitivity: 'base' });
    });

    return sortConfig.direction === 'desc' ? sorted.reverse() : sorted;
  }, [filteredData, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategories(categoryOptions.map((option) => option.key));
    setSelectedLegalidades([]);
    setSelectedSetores([]);
    setSortConfig({ key: 'name', direction: 'asc' });
  };

  const downloadAsCsv = () => {
    const header = [
      'Categoria',
      'Nome',
      'Legalidade',
      'Setor',
      'Dados coletados',
      'Link',
      'Fontes',
      'Observações',
    ];

    const rows = sortedData.map((item) => [
      item.categoria,
      item.name,
      item.legalidade,
      item.setor,
      item.dadosResumo,
      item.link || '-',
      item.fontes.length > 0 ? item.fontes.join(' | ') : '-',
      item.observacoes,
    ]);

    const escapeCell = (cell) => `"${String(cell ?? '').replace(/"/g, '""')}"`;
    const csvContent = [header, ...rows]
      .map((row) => row.map(escapeCell).join(';'))
      .join('\r\n');

    const blob = new Blob([`\uFEFF${csvContent}`], {
      type: 'text/csv;charset=utf-8;',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `fuxico-dos-dados-${new Date().toISOString().slice(0, 10)}.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) {
      return '↕';
    }
    return sortConfig.direction === 'asc' ? '▲' : '▼';
  };

  return (
    <div className="app">
      <div className="container">
        <header className="page-header">
          <h1 className="title">Fuxico dos Dados</h1>
          <p className="subtitle">
            Uma radiografia do mercado de dados brasileiro. Explore, filtre e
            descubra quem coleta, vende ou expõe informações pessoais no país.
          </p>
        </header>

        <section className="filters-card" aria-label="Filtros de pesquisa">
          <div className="filter-row">
            <label className="filter-label" htmlFor="search">
              Busca rápida
            </label>
            <input
              id="search"
              className="search-input"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Procure por nome, setor, dados ou observações"
            />
          </div>

          <div className="filter-row">
            <span className="filter-label">Categoria</span>
            <div className="pill-group">
              {categoryOptions.map((option) => {
                const isActive = selectedCategories.includes(option.key);
                return (
                  <button
                    key={option.key}
                    type="button"
                    className={`pill ${isActive ? 'pill-active' : ''}`}
                    onClick={() => toggleSelection(option.key, setSelectedCategories)}
                    aria-pressed={isActive}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <details className="advanced-filters">
            <summary>Filtros avançados</summary>
            <div className="filter-row">
              <span className="filter-label">Legalidade</span>
              <div className="pill-group">
                {legalidadeOptions.map((option) => {
                  const isActive = selectedLegalidades.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      className={`pill pill-sm ${isActive ? 'pill-active' : ''}`}
                      onClick={() => toggleSelection(option, setSelectedLegalidades)}
                      aria-pressed={isActive}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="filter-row">
              <span className="filter-label">Setor</span>
              <div className="pill-group">
                {setorOptions.map((option) => {
                  const isActive = selectedSetores.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      className={`pill pill-sm ${isActive ? 'pill-active' : ''}`}
                      onClick={() => toggleSelection(option, setSelectedSetores)}
                      aria-pressed={isActive}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </details>

          <div className="filter-actions">
            <button
              type="button"
              className="button button-ghost"
              onClick={resetFilters}
            >
              Limpar filtros
            </button>
            <button
              type="button"
              className="button button-primary"
              onClick={downloadAsCsv}
              disabled={sortedData.length === 0}
            >
              Baixar CSV
            </button>
          </div>
        </section>

        <section className="results-card" aria-live="polite">
          <div className="results-header">
            <p>
              Mostrando <strong>{sortedData.length}</strong> de{' '}
              <strong>{dataset.length}</strong> atores catalogados
            </p>
          </div>

          <div className="category-legend" aria-label="Legenda de categorias">
            {categoryOptions.map((option) => (
              <div key={option.key} className="legend-item">
                <span
                  className="legend-emoji"
                  role="img"
                  aria-label={option.label}
                  title={option.label}
                >
                  {option.emoji}
                </span>
                <span className="legend-label">{option.label}</span>
              </div>
            ))}
          </div>

          <div
            className="data-category-legend"
            aria-label="Legenda dos tipos de dados coletados"
          >
            {DATA_CATEGORY_DEFINITIONS.map((definition) => (
              <div key={definition.key} className="legend-item legend-item-data">
                <span
                  className="legend-emoji"
                  role="img"
                  aria-label={definition.label}
                  title={definition.label}
                >
                  {definition.emoji}
                </span>
                <span className="legend-label">{definition.label}</span>
              </div>
            ))}
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  {SORTABLE_HEADERS.map((header) => (
                    <th key={header.key} scope="col">
                      <button
                        type="button"
                        className="sortable"
                        onClick={() => handleSort(header.key)}
                      >
                        {header.label}
                        <span className="sort-indicator">
                          {getSortIndicator(header.key)}
                        </span>
                      </button>
                    </th>
                  ))}
                  <th scope="col">Dados coletados</th>
                  <th scope="col">Link</th>
                  <th scope="col">Fontes</th>
                  <th scope="col">Observações</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="empty-state">
                      Nenhum resultado encontrado. Ajuste os filtros ou limpe a busca.
                    </td>
                  </tr>
                ) : (
                  sortedData.map((item) => (
                    <tr key={`${item.categoriaKey}-${item.name}`}>
                      <td data-label="Categoria">
                        <span
                          className="category-emoji"
                          role="img"
                          aria-label={item.categoria}
                          title={item.categoria}
                        >
                          {item.categoriaEmoji}
                        </span>
                        <span className="sr-only">{item.categoria}</span>
                      </td>
                      <td data-label="Nome">
                        <span className="name">{item.name}</span>
                      </td>
                      <td data-label="Legalidade">
                        <span className={`status-badge ${legalidadeTone(item.legalidade)}`}>
                          {item.legalidade}
                        </span>
                      </td>
                      <td data-label="Setor">
                        <span className="tag">{item.setor}</span>
                      </td>
                      <td data-label="Dados coletados">
                        <div className="data-category-grid">
                          {item.dadosCategorias.length > 0 ? (
                            item.dadosCategorias.map((group, index) => {
                              const meta = DATA_CATEGORY_META[group.categoria] ?? {
                                label: group.categoria,
                                emoji: '❓',
                              };
                              const description = group.especificacao.join(', ');
                              const label = `${meta.label}: ${description}`;

                              return (
                                <span
                                  key={`${item.name}-dados-${group.categoria}-${index}`}
                                  className="data-category-emoji"
                                  role="img"
                                  aria-label={label}
                                  title={label}
                                >
                                  {meta.emoji}
                                </span>
                              );
                            })
                          ) : (
                            <span className="text-muted">Sem detalhes</span>
                          )}
                        </div>
                      </td>
                      <td data-label="Link">
                        {item.link ? (
                          <a
                            className="link-button"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Acessar
                          </a>
                        ) : (
                          <span className="text-muted">Sem link</span>
                        )}
                      </td>
                      <td data-label="Fontes">
                        {item.fontes.length > 0 ? (
                          <ul className="source-list">
                            {item.fontes.map((fonte, index) => (
                              <li key={`${item.name}-fonte-${index}`}>
                                <a
                                  className="source-link"
                                  href={fonte}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Fonte {index + 1}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-muted">Sem fontes</span>
                        )}
                      </td>
                      <td data-label="Observações">
                        <details className="note-details">
                          <summary>{createSummary(item.observacoes)}</summary>
                          <p>{item.observacoes}</p>
                        </details>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="page-footer">
          <p>
            Projeto criado para fins educativos, em conformidade com a LGPD. Nenhum dado
            sensível é manipulado aqui; este site apenas compila informações públicas sobre
            atores conhecidos no ecossistema de dados.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;