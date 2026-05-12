import React from 'react';
import { Briefcase, Layers, Download, FileText, AlertCircle, BookOpen } from 'lucide-react';

const CorporateGovernance = () => {
    // Corporate Governance Policies
    const policies = [
        { title: 'Code of Conduct for Directors & Senior Management Personnel', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Code of Conduct for Directors and Senior Management Personnel.pdf' },
        { title: 'Code of Conduct for Prohibition of Insider Trading', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/CODE OF CONDUCT FOR PROHIBITION OF INSIDER TRADING.pdf' },
        { title: 'Dividend Distribution Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Dividend-Distribution-Policy.pdf' },
        { title: 'Handbook on Investors\' Rights', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Investors’ Rights Handbook.pdf' },
        { title: 'Nomination, Remuneration and Evaluation Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Nomination and Remuneration Policy - TSL.pdf' },
        { title: 'Policy on Disclosure on Material Events', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/policy-on-disclosure-on-material-events.pdf' },
        { title: 'Policy on Prevention of Sexual harassment at Workplace', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Policy on Prevention of Sexual Harrassment at Workplace.pdf' },
        { title: 'Whistle Blower Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/whistle-blower-policy.pdf' },
        { title: 'Code of Conduct for Independent Directors', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Code of Conduct for Independent Directors.pdf' },
        { title: 'Authorization of KMP under Regulation 30', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Authorisation_KMP_Reg30(5)_TSL.docx' },
        { title: 'CSR Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Corporate-Social-Responsibility.pdf' },
        { title: 'Familiarisation Programme', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/FAMILIARISATION PROGRAMME FOR INDEPENDENT DIRECTORS.pdf' },
        { title: 'Details of Familiarization Programme of TSL', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/POLICY ON RELATED PARTY TRANSACTIONS.pdf' },
        { title: 'Policy for Determining Material Subsidiaries', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Policy on Determination of Material Subsidiary.pdf' },
        { title: 'Policy on Diversity of Board of Directors', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Policy on Diversity of Board.pdf' },
        { title: 'Policy on Preservation of Documents and Archival of Documents', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Policy-on-Preservation-of-Documents-and-Archival-of-Documents.pdf' },
        { title: 'Policy for Registrars and Share Transfer Agents', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/policy-for-registrars-and-share-transfer-agents.pdf' },
        { title: 'Take Investor_Grievances_Redressal_Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Take Investor_Grievances_Redressal_Policy (1).pdf' },
        { title: 'Take Policy-on-Materiality-of-and-dealing-with-related-party-transactions', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Take Policy-on-Materiality-of-and-dealing-with-related-party-transactions (1).pdf' },
        { title: 'Take Risk-Management-policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Take Risk-Management-policy (1).pdf' },
        { title: 'Take Vigil-Mechanism-Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Take Vigil-Mechanism-Policy (1).pdf' }
    ];

    // Mandatory Dematerialisation Documents
    const dematDocuments = [
        { title: 'Mandatory Demat For Transfer - Second Reminder to Shareholders', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/mandatory-demat-for-transfer-second-reminder-to-shareholders.pdf' },
        { title: 'BSE Circular - Mandatory Demat For Transfer', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/BSE-circular- mandatory-demat-for-transfer.pdf' },
        { title: 'KYC letter A', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/KYC letter A.pdf' },
        { title: 'Mandatory Demat For Transfer - First Reminder to Shareholders', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/mandatory-demat-for-transfer-first-reminder-to-shareholders.pdf' },
        { title: 'NSE Circular - Mandatory Demat For Transfer', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/NSE-circular-mandatory-demat-for-transfer.pdf' },
        { title: 'SEBI Circular Notification', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/SEBI-gazette-notification-june-8-2018.pdf' }
    ];

    // Investor Grievance
    const investorGreviance = [
        { title: 'Investor Grievance', link: '/assets/investordata/corporate-governance/investorGreviance/Investor Grievance (1).pdf' },
    ];

    // MOA and AOA
    const moaAndAoa = [
        { title: 'MOA & AOA', link: '/assets/investordata/corporate-governance/MOAAndAOA/MOA & AOA.pdf' },
    ];

    const sections = [
        {
            title: 'Corporate Governance Policies',
            subtitle: 'Official frameworks guiding our operations and conduct.',
            icon: Briefcase,
            items: policies,
        },
        {
            title: 'Mandatory Dematerialisation',
            subtitle: 'Guidelines and circulars for share transfer requests.',
            icon: Layers,
            items: dematDocuments,
        },
        {
            title: 'Investor Grievance',
            subtitle: 'Policies and procedures for handling investor grievances.',
            icon: AlertCircle,
            items: investorGreviance,
        },
        {
            title: 'MOA AND AOA',
            subtitle: 'Memorandum and Articles of Association.',
            icon: BookOpen,
            items: moaAndAoa,
        }
    ];

    return (
        <div className="w-full">
            <div className="space-y-24">
                {sections.map((section, idx) => {
                    const Icon = section.icon;
                    return (
                        <div key={idx} className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                            {/* Left Side: Section Info */}
                            <div className="lg:w-1/3 flex-shrink-0">
                                <div className="sticky top-28">
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-zinc-100 flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-[#4f46e5]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0f172a] mb-3">{section.title}</h3>
                                    <p className="text-zinc-500 text-[15px] leading-relaxed">
                                        {section.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Documents Grid */}
                            <div className="lg:w-2/3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {section.items.map((item, index) => (
                                        <a 
                                            key={index} 
                                            href={item.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="group flex flex-col bg-white rounded-2xl border border-zinc-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#4f46e5]/20 transition-all duration-300"
                                        >
                                            <div className="p-5 flex-1 flex items-start gap-4">
                                                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-[#f8faff] border border-zinc-100 flex items-center justify-center group-hover:bg-[#eef2ff] group-hover:border-[#4f46e5]/20 transition-colors">
                                                    <FileText className="w-5 h-5 text-zinc-400 group-hover:text-[#4f46e5] transition-colors" />
                                                </div>
                                                <h4 className="text-[14px] font-semibold text-[#0f172a] leading-snug group-hover:text-[#4f46e5] transition-colors line-clamp-3">
                                                    {item.title}
                                                </h4>
                                            </div>
                                            
                                            <div className="px-5 py-4 border-t border-zinc-50 flex items-center justify-between bg-zinc-50/30 rounded-b-2xl">
                                                <div className="flex items-center gap-2">
                                                    <span className="px-2.5 py-1 bg-[#f1f5f9] text-zinc-600 text-[11px] font-semibold uppercase tracking-wider rounded-md">
                                                        PDF Document
                                                    </span>
                                                    <span className="text-zinc-400 text-[11px] font-medium">• 3.2 MB</span>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center group-hover:bg-[#4f46e5] group-hover:text-white transition-colors text-zinc-500">
                                                    <Download className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CorporateGovernance;


