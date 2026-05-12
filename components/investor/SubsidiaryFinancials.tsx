import React, { useState, useRef, useEffect } from 'react';
import { Filter, Calendar, ChevronDown, FileText, Download } from 'lucide-react';

const SubsidiaryFinancials = () => {
    const years = ['FY-2024', 'FY-2023', 'FY-2022', 'FY-2021', 'FY-2020', 'FY-2019', 'FY-2018', 'FY-2017'] as const;
    type Year = typeof years[number];
    const [selectedYear, setSelectedYear] = useState<Year>('FY-2024');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const subsidiaryData: Record<Year, Array<{ description: string; link: string }>> = {
        'FY-2024': [{ description: 'Subsidiary Company Financials 2023-24', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2023-24.pdf' }],
        'FY-2023': [{ description: 'Subsidiary Company Financials 2022-23', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2022-23.pdf' }],
        'FY-2022': [{ description: 'Subsidiary Company Financials 2021-22', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2021-22.pdf' }],
        'FY-2021': [{ description: 'Subsidiary Company Financials 2020-21', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2020-21.pdf' }],
        'FY-2020': [{ description: 'Subsidiary Company Financials 2019-20', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2019-20.pdf' }],
        'FY-2019': [{ description: 'Subsidiary Company Financials 2018-19', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2018-19.pdf' }],
        'FY-2018': [{ description: 'Subsidiary Company Financials 2017-18', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2017-18.pdf' }],
        'FY-2017': [{ description: 'Subsidiary Company Financials 2016-17', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2016-17.pdf' }]
    };

    const displayResults = subsidiaryData[selectedYear] || [];

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-semibold mb-2 text-[#0f172a]">Subsidiary Financials</h2>
                    <p className="text-zinc-500 text-[15px] max-w-xl">
                        Access and download all official subsidiary financials materials, including consolidated reports and
                        supplementary data.
                    </p>
                </div>

                <div className="flex items-center gap-3 relative" ref={dropdownRef}>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm">
                        <Filter className="w-4 h-4" />
                        <span>Filter by</span>
                    </div>
                    
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center justify-between w-[220px] px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-zinc-400" />
                            <span>Financial Year: {selectedYear.replace('FY-', 'FY')}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 w-[220px] bg-white border border-zinc-200 rounded-xl shadow-lg z-10 py-1 overflow-hidden">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                                        selectedYear === year 
                                            ? 'bg-[#eef2ff] text-[#4f46e5] font-semibold' 
                                            : 'text-zinc-600 hover:bg-zinc-50'
                                    }`}
                                    onClick={() => {
                                        setSelectedYear(year as Year);
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    Financial Year: {year.replace('FY-', 'FY')}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Results Table */}
            <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-zinc-100 overflow-hidden flex flex-col">
                {displayResults.length > 0 ? (
                    <>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100">Year</th>
                                        <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100">Document Name</th>
                                        <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayResults.map((item, index) => {
                                        return (
                                            <tr key={index} className="hover:bg-zinc-50/50 transition-colors">
                                                <td className="px-6 py-4 border-b border-zinc-50">
                                                    <span className="text-sm font-medium text-zinc-500">{selectedYear}</span>
                                                </td>
                                                <td className="px-6 py-4 border-b border-zinc-50">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-[#f8faff] flex items-center justify-center border border-zinc-100">
                                                            <FileText className="w-4 h-4 text-[#4f46e5]" />
                                                        </div>
                                                        <span className="text-sm font-semibold text-zinc-700">{item.description}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 border-b border-zinc-50 text-right">
                                                    <a 
                                                        href={item.link} 
                                                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#f1f5f9] hover:bg-[#e2e8f0] text-zinc-700 text-[13px] font-medium rounded-lg transition-colors" 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Download className="w-3.5 h-3.5" />
                                                        PDF
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between px-6 py-4 bg-[#f8faff]/50 border-t border-zinc-100">
                            <span className="text-xs font-medium text-zinc-400">
                                Showing <span className="text-zinc-600 font-semibold">{displayResults.length}</span> document{displayResults.length !== 1 ? 's' : ''} for {selectedYear}
                            </span>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                <span className="text-xs font-medium text-zinc-500">System operational</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="py-20 text-center">
                        <div className="text-4xl mb-4 opacity-20 flex justify-center"><FileText className="w-12 h-12" /></div>
                        <p className="text-zinc-500 font-medium">No documents found for {selectedYear}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubsidiaryFinancials;



