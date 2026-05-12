"use client"
import React, { useState } from 'react';
import { BarChart2, FileText, Info, Building2, FileCheck, Users, Layers } from 'lucide-react';
import Disclosure from '../../components/investor/Disclosure';
import FinancialResult from '../../components/investor/FinancialResult';
import AnnualReport from '../../components/investor/AnnualReport';
import BoardOfDirectors from '../../components/investor/BoardOfDirectors';
import CorporateGovernance from '../../components/investor/CorporateGovernance';
import InvestorCorner from '../../components/investor/InvestorCorner';
import SubsidiaryFinancials from '../../components/investor/SubsidiaryFinancials';

const InvestorPage = () => {
    const [activeTab, setActiveTab] = useState('financial-result');

    const tabs = [
        { id: 'financial-result', label: 'Financial Result', icon: BarChart2, component: <FinancialResult /> },
        { id: 'annual-report', label: 'Annual Report', icon: FileText, component: <AnnualReport /> },
        { id: 'investor-corner', label: 'Investor Corner', icon: Info, component: <InvestorCorner /> },
        { id: 'corporate-governance', label: 'Corporate Governance', icon: Building2, component: <CorporateGovernance /> },
        { id: 'disclosure', label: 'Disclosure', icon: FileCheck, component: <Disclosure /> },
        { id: 'board-directors', label: 'Board of Directors', icon: Users, component: <BoardOfDirectors /> },
        { id: 'subsidiary-financials', label: 'Subsidiary Financials', icon: Layers, component: <SubsidiaryFinancials /> },
    ];

    return (
        <div className="min-h-screen bg-[#f8faff] text-zinc-900">
            {/* Header / Hero Section is removed or minimized based on image, but we can keep a simple top bar if needed. Image just shows tabs at the top of a light blue/white bg. */}
            <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col gap-8">
                    {/* Horizontal Navigation */}
                    <div className="flex flex-wrap items-center gap-2 mb-2 border-b border-zinc-200/50 pb-6 overflow-x-auto no-scrollbar">
                        <div className="flex gap-2 min-w-max px-2">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                                            isActive
                                                ? 'bg-[#eef2ff] text-[#4f46e5] shadow-[0_2px_10px_rgb(79,70,229,0.1)]'
                                                : 'bg-transparent text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700'
                                        }`}
                                    >
                                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#4f46e5]' : 'text-zinc-400'}`} />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Component Rendering Area */}
                    <div className="w-full">
                        {tabs.find(tab => tab.id === activeTab)?.component}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InvestorPage;
