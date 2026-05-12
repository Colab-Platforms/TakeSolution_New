import React, { useState, useRef, useEffect } from 'react';
import { Filter, Calendar, ChevronDown, FileText, Download } from 'lucide-react';

const FinancialResult = () => {
    const years = ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18'] as const;
    type Year = typeof years[number];
    const [selectedYear, setSelectedYear] = useState<Year>('FY26');
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

    const financialData: Record<Year, Array<{ quarter: string; title: string; link: string }>> = {
        FY26: [
            { quarter: 'Q3', title: 'Consolidated_Q3_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Q3/Consolidated_Q3_FY26_TSL.pdf' },
            { quarter: 'Q3', title: 'Standalone_Q3_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Q3/Standalone_Q3_FY26_TSL.pdf' },
            { quarter: 'Q2', title: 'Consolidated_Q2_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Q2/Consolidated_Q2_FY26_TSL.pdf' },
            { quarter: 'Q2', title: 'Standalone_Q2_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Q2/Standalone_Q2_FY26_TSL.pdf' },
            { quarter: 'Q1', title: 'Consolidated_Q1_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Consolidated_Q1_FY26_TSL.pdf' },
            { quarter: 'Q1', title: 'Standalone_Q1_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Standalone_Q1_FY26_TSL.pdf' }
        ],
        FY25: [
            { quarter: 'Q4', title: 'Consolidated_Q4_TSL', link: '/assets/investordata/financial-results/FY-2025/Q4/Consolidated_Q4_TSL.pdf' },
            { quarter: 'Q4', title: 'Standalone_Q4_TSL', link: '/assets/investordata/financial-results/FY-2025/Q4/Standalone_Q4_TSL.pdf' },
            { quarter: 'Q3', title: 'Consolidated_Q3_FY25', link: '/assets/investordata/financial-results/FY-2025/Q3/Consolidated_Q3_FY25.pdf' },
            { quarter: 'Q3', title: 'Standalone_Q3_FY25', link: '/assets/investordata/financial-results/FY-2025/Q3/Standalone_Q3_FY25.pdf' },
            { quarter: 'Q2', title: 'Consolidated_Q2_FY25', link: '/assets/investordata/financial-results/FY-2025/Q2/Consolidated_Q2_FY25.pdf' },
            { quarter: 'Q2', title: 'Standalone_Q2_FY25', link: '/assets/investordata/financial-results/FY-2025/Q2/Standalone_Q2_FY25.pdf' },
            { quarter: 'Q1', title: 'Consolidated_Q1_FY_25', link: '/assets/investordata/financial-results/FY-2025/Q1/Consolidated_Q1_FY_25.pdf' },
            { quarter: 'Q1', title: 'Standalone_Q1_FY_25', link: '/assets/investordata/financial-results/FY-2025/Q1/Standalone_Q1_FY_25.pdf' }
        ],
        FY24: [
            { quarter: 'Q4', title: 'take-sebi-qtr_4_consolidated-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q4/take-sebi-qtr_4_consolidated-2023-24.pdf' },
            { quarter: 'Q4', title: 'take-sebi-qtr_4_stand_alone-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q4/take-sebi-qtr_4_stand_alone-2023-24.pdf' },
            { quarter: 'Q3', title: 'take-sebi-qtr_3_consolidated-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q3/take-sebi-qtr_3_consolidated-2023-24.pdf' },
            { quarter: 'Q3', title: 'take-sebi-qtr_3_stand_alone-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q3/take-sebi-qtr_3_stand_alone-2023-24.pdf' },
            { quarter: 'Q2', title: 'take-sebi-qtr_2_consolidated-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q2/take-sebi-qtr_2_consolidated-2023-24.pdf' },
            { quarter: 'Q2', title: 'take-sebi-qtr_2_stand_alone-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q2/take-sebi-qtr_2_stand_alone-2023-24.pdf' },
            { quarter: 'Q1', title: 'take-sebi-qtr_1_consolidated-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q1/take-sebi-qtr_1_consolidated-2023-24.pdf' },
            { quarter: 'Q1', title: 'take-sebi-qtr_1_stand_alone-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q1/take-sebi-qtr_1_stand_alone-2023-24.pdf' }
        ],
        FY23: [
            { quarter: 'Q3', title: 'Final Outcome_Q3_FY23_STX', link: '/assets/investordata/financial-results/FY-2023/Q3/Final Outcome_Q3_FY23_STX.pdf' },
            { quarter: 'Q2', title: 'Final_Outcome_Reg33_BM_211022', link: '/assets/investordata/financial-results/FY-2023/Q2/Final_Outcome_Reg33_BM_211022.pdf' },
            { quarter: 'Q1', title: 'Intimation Outcome_BM_120822', link: '/assets/investordata/financial-results/FY-2023/Q1/Intimation Outcome_BM_120822.pdf' }
        ],
        FY22: [
            { quarter: 'Q4', title: 'Earnings Release', link: '/assets/investordata/financial-results/FY-2022/Q4/Earnings Release.pdf' },
            { quarter: 'Q4', title: 'Financial Results', link: '/assets/investordata/financial-results/FY-2022/Q4/Financial Results.pdf' },
            { quarter: 'Q3', title: 'Financial Results', link: '/assets/investordata/financial-results/FY-2022/Q3/Financial Results.pdf' },
            { quarter: 'Q2', title: 'Financial Results', link: '/assets/investordata/financial-results/2.-Financial-Results-30.09.2021.pdf' },
            { quarter: 'Q1', title: 'Financial Results', link: '/assets/investordata/financial-results/1.-Financial-Results-30.06.2021.pdf' }
        ],
        FY21: [
            { quarter: 'Q4', title: 'Financial Results', link: '/assets/investordata/financial-results/4.-Financial-Results-31.03.2021.pdf' },
            { quarter: 'Q3', title: 'Financial Results', link: '/assets/investordata/financial-results/3.-Financial-Results-31.12.2020.pdf' },
            { quarter: 'Q2', title: 'Financial Results', link: '/assets/investordata/financial-results/2.-Financial-Results-30.09.2020.pdf' },
            { quarter: 'Q1', title: 'Financial Results', link: '/assets/investordata/financial-results/1.-Financial-Results-30.06.2020.pdf' }
        ],
        FY20: [
            { quarter: 'Q4', title: 'Consolidated Results', link: '/assets/investordata/financial-results/FY-2020/Q-4/Consolidated Results.pdf' },
            { quarter: 'Q4', title: 'Standalone Result', link: '/assets/investordata/financial-results/FY-2020/Q-4/Standalone Result.pdf' },
            { quarter: 'Q3', title: 'take-sebi-qtr_3_consolidated-2019-20', link: '/assets/investordata/financial-results/FY-2020/Q-3/take-sebi-qtr_3_consolidated-2019-20.pdf' },
            { quarter: 'Q2', title: 'take-sebi-qtr_2_consolidated-2019-20', link: '/assets/investordata/financial-results/FY-2020/Q-2/take-sebi-qtr_2_consolidated-2019-20.pdf' },
            { quarter: 'Q1', title: 'Consolidated Financial Results', link: '/assets/investordata/financial-results/FY-2020/Q-1/Consolidated Financial Results.pdf' }
        ],
        FY19: [
            { quarter: 'Q4', title: '2.Financials', link: '/assets/investordata/financial-results/FY-2019/Q-4/2.Financials.pdf' },
            { quarter: 'Q3', title: 'take-sebi-qtr_3_consolidated-2018-19', link: '/assets/investordata/financial-results/FY-2019/Q-3/take-sebi-qtr_3_consolidated-2018-19.pdf' },
            { quarter: 'Q2', title: 'TAKE-CFS-SEBI-Q2-FY19', link: '/assets/investordata/financial-results/FY-2019/Q-2/TAKE-CFS-SEBI-Q2-FY19.xlsx.pdf' },
            { quarter: 'Q1', title: 'Consolidated FInancials', link: '/assets/investordata/financial-results/FY-2019/Q-1/Consolidated FInancials.pdf' }
        ],
        FY18: [
            { quarter: 'Q4', title: 'take-sebi-qtr_4_consolidated-2017-18', link: '/assets/investordata/financial-results/FY-2018/Q4/take-sebi-qtr_4_consolidated-2017-18.pdf' },
            { quarter: 'Q3', title: 'Consolidated FS', link: '/assets/investordata/financial-results/FY-2018/Q3/Consolidated FS.pdf' },
            { quarter: 'Q2', title: 'Earnings Release', link: '/assets/investordata/financial-results/Quarter ended September 30, 2017 Earnings Release.pdf' },
            { quarter: 'Q1', title: 'Earnings Release', link: '/assets/investordata/financial-results/Quarter ended June 30, 2017 Earnings Release.pdf' }
        ]
    };

    const currentResults = financialData[selectedYear] || [];

    // Reverse results to show Q1 at the top if needed, or leave as is. Based on image, Q1 is at the top.
    const sortedResults = [...currentResults].reverse(); // Depending on original data order, but let's reverse to match image (Q1, Q1, Q2, Q2, Q3, Q3)
    // Actually original data has Q3 at top. Let's reverse it to match image which has Q1 at top.
    const displayResults = [...currentResults].reverse();

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-semibold mb-2 text-[#0f172a]">Financial Result</h2>
                    <p className="text-zinc-500 text-[15px] max-w-xl">
                        Access and download all official financial result materials, including consolidated reports and
                        supplementary data.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm">
                        <Filter className="w-4 h-4" />
                        <span>Filter by</span>
                    </div>
                    
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm"
                        >
                            <Calendar className="w-4 h-4 text-zinc-400" />
                            <span>Financial Year: {selectedYear}</span>
                            <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-xl shadow-lg z-10 py-1 overflow-hidden">
                                {years.map((year) => (
                                    <button
                                        key={year}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                                            selectedYear === year 
                                                ? 'bg-[#eef2ff] text-[#4f46e5] font-semibold' 
                                                : 'text-zinc-600 hover:bg-zinc-50'
                                        }`}
                                        onClick={() => {
                                            setSelectedYear(year as Year);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
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
                                        <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100">Quarter</th>
                                        <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100">Document Name</th>
                                        <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayResults.map((item, index) => {
                                        // The original quarter string might be "Quarter 3", but let's map it to "Q3" or assume it's already "Q3"
                                        const qText = item.quarter.replace('uarter ', '');
                                        return (
                                            <tr key={index} className="hover:bg-zinc-50/50 transition-colors">
                                                <td className="px-6 py-4 border-b border-zinc-50">
                                                    <span className="text-sm font-medium text-zinc-500">FY-{selectedYear.replace('FY', '20')}</span>
                                                </td>
                                                <td className="px-6 py-4 border-b border-zinc-50">
                                                    <span className="inline-flex items-center justify-center px-2.5 py-1 bg-[#f1f5f9] text-zinc-600 text-xs font-semibold rounded-md min-w-[32px]">
                                                        {qText}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 border-b border-zinc-50">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-[#f8faff] flex items-center justify-center border border-zinc-100">
                                                            <FileText className="w-4 h-4 text-[#4f46e5]" />
                                                        </div>
                                                        <span className="text-sm font-semibold text-zinc-700">{item.title}</span>
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
                                Showing <span className="text-zinc-600 font-semibold">{displayResults.length}</span> documents for {selectedYear}
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

export default FinancialResult;

