import React, { useState } from 'react';
import api from '../api';

type ImportRowError = { row: number; message: string };
type ImportResult = { totalRows: number; created: number; errors?: ImportRowError[] };

const ImportDepenses: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ImportResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(null);
    setError(null);
    const f = e.target.files?.[0] || null;
    setFile(f);
  };

  const onUpload = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await api.post('/api/import/depenses', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(res.data);
    } catch (e: unknown) {
      const message =
        (typeof e === 'object' && e && 'response' in e && (e as any).response?.data?.error) ||
        (e instanceof Error ? e.message : null) ||
        'Erreur import';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Importer des dépenses (CSV / Excel)</h1>
      <p className="text-gray-600 mb-6">
        Formats acceptés: .csv, .xlsx, .xls. Utilisez le modèle si besoin: 
        <a className="text-blue-600 underline ml-1" href="/templates/import-depenses-template.csv" target="_blank" rel="noreferrer">Télécharger le modèle</a>.
      </p>

      <div className="bg-white rounded border p-4">
        <label htmlFor="import-file" className="block text-sm font-medium text-gray-700 mb-2">Fichier à importer</label>
        <input
          id="import-file"
          name="import-file"
          type="file"
          title="Sélectionner le fichier à importer"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={onSelect}
        />
        <button
          onClick={onUpload}
          disabled={!file || loading}
          className={`ml-3 px-4 py-2 rounded text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? 'Import en cours...' : 'Importer'}
        </button>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 border border-red-200 rounded">{error}</div>
      )}

      {result && (
        <div className="mt-4 p-3 bg-green-50 text-green-800 border border-green-200 rounded">
          <div><span className="font-semibold">Total lignes:</span> {result.totalRows}</div>
          <div><span className="font-semibold">Créées:</span> {result.created}</div>
          {(() => {
            const errs: ImportRowError[] = result.errors ?? [];
            if (errs.length === 0) return null;
            return (
              <details className="mt-2">
                <summary className="cursor-pointer">Voir les erreurs ({errs.length})</summary>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  {errs.slice(0, 50).map((err: ImportRowError, idx: number) => (
                    <li key={idx}>Ligne {err.row}: {err.message}</li>
                  ))}
                  {errs.length > 50 && (
                    <li>... et {errs.length - 50} autres</li>
                  )}
                </ul>
              </details>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default ImportDepenses;
