import React from 'react';
import { FileText } from 'lucide-react';

const InvestorCorner = () => {
    // Data for different sections
    const sections = [
        {
            title: 'Notice of the Extra Ordinary General Meeting',
            subtitle: 'Notice Report',
            items: [
                { year: '2026', link: '/assets/investordata/investor-corner/extra-ordinary-general-meeting/TS-EOGM-Notice-Final.pdf' },
                { year: '2025', link: '/assets/investordata/investor-corner/extra-ordinary-general-meeting/Notice of EOGM 2025.pdf' },
                { year: '2024', link: '/assets/investordata/investor-corner/extra-ordinary-general-meeting/Notice_EGM_TSL_2024.pdf' },
                { year: '2021', link: '/assets/investordata/investor-corner/extra-ordinary-general-meeting/Final_EGM_Notice_Sept29_2021.pdf' }
            ]
        },
        {
            title: 'EGM Voting Results',
            subtitle: 'Voting Result',
            items: [
                { year: '2026', link: '/assets/investordata/investor-corner/EGM Voting Results/EGM Voting results 2026.pdf' },
                { year: '2025', link: '/assets/investordata/investor-corner/EGM Voting Results/EGM Voting Results 2025.pdf' },
                { year: '2024', link: '/assets/investordata/investor-corner/EGM Voting Results/EGM Voting Results 2024.pdf' },
                { year: '2021', link: '/assets/investordata/investor-corner/EGM Voting Results/Reg44_Voting_Results_261021.pdf' }
            ]
        },
        {
            title: 'Notice of the Annual General Meeting',
            subtitle: 'Notice Report',
            items: [
                { year: '2025', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2025.pdf' },
                { year: '2024', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2024.pdf' },
                { year: '2023', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2023.pdf' },
                { year: '2022', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2022.pdf' },
                { year: '2021', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2021.pdf' },
                { year: '2020', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2020.pdf' },
                { year: '2019', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/take-solution-notice-2019.pdf' },
                { year: '2018', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/Notice-2018-FINAL.pdf' },
            ]
        },
        {
            title: 'AGM Voting Results',
            subtitle: 'Voting Result',
            items: [
                { year: '2025', link: '/assets/investordata/investor-corner/AGM Voting Results/AGM voting results 2025.pdf' },
                { year: '2024', link: '/assets/investordata/investor-corner/AGM Voting Results/AGM voting results 2024.pdf' },
                { year: '2023', link: '/assets/investordata/investor-corner/AGM Voting Results/AGM voting results 2023.pdf' },
                { year: '2022', link: '/assets/investordata/investor-corner/AGM Voting Results/Voting_Results_Scrutinizer_Report_AGM_261222.pdf' },
                { year: '2021', link: '/assets/investordata/investor-corner/AGM Voting Results/Voting_Results_2021.pdf' },
                { year: '2020', link: '/assets/investordata/investor-corner/AGM Voting Results/AGM PROCEEDINGS 2020.pdf' },
                { year: '2019', link: '/assets/investordata/investor-corner/AGM Voting Results/agm-voting-08aug2019.pdf' },
                { year: '2018', link: '/assets/investordata/investor-corner/AGM Voting Results/agm-voting-10aug2018.pdf' },
            ]
        },
        {
            title: 'Notice of the Postal Ballot',
            subtitle: 'Notice Report',
            items: [
                { year: '2023', link: '/assets/investordata/investor-corner/Notice of the Postal Ballot/Take_Postal_Ballot_Notice_FY22-23.pdf' },
                { year: '2022', link: '/assets/investordata/investor-corner/Notice of the Postal Ballot/Take_Postal_Ballot_Notice_1.pdf' },
                { year: '2022', link: '/assets/investordata/investor-corner/Notice of the Postal Ballot/Postal_Ballot_Notice_TSL.pdf' },
            ]
        }
    ];

    return (
        <div className="w-full">
            <div className="mb-10">
                <h2 className="text-3xl font-semibold mb-2 text-[#0f172a]">Investor Corner</h2>
                <p className="text-zinc-500 text-[15px] max-w-2xl">
                    Access and download all official investor corner materials, including consolidated reports and
                    supplementary data.
                </p>
            </div>

            <div className="space-y-12">
                {sections.map((section, idx) => (
                    <div key={idx}>
                        <h4 className="text-[15px] font-semibold text-zinc-700 mb-6 flex items-center gap-4">
                            {section.title}
                            <div className="flex-1 h-px bg-zinc-200/60"></div>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {section.items.map((item, index) => (
                                <a 
                                    key={index} 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block group p-6 rounded-2xl bg-[#f8faff] border border-zinc-100 hover:border-zinc-200 shadow-[0_2px_10px_rgb(0,0,0,0.01)] hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-10">
                                        <span className="text-2xl font-semibold text-zinc-700 group-hover:text-[#4f46e5] transition-colors">{item.year}</span>
                                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-zinc-200/80 shadow-sm group-hover:border-[#4f46e5]/30 transition-colors">
                                            <FileText className="w-4 h-4 text-zinc-400 group-hover:text-[#4f46e5] transition-colors" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-600">{section.subtitle}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 p-8 bg-zinc-900 text-white rounded-3xl text-center shadow-2xl overflow-hidden relative group">
                <h5 className="text-xl font-semibold mb-2">Need Assistance?</h5>
                <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">Our Investor Helpdesk is available to assist you with any dividend or share-related queries.</p>
                <button className="px-8 py-2.5 bg-white text-zinc-900 rounded-lg font-semibold text-sm transition-transform shadow-lg hover:bg-zinc-100">
                    Contact Registrar
                </button>
            </div>
        </div>
    );
};

export default InvestorCorner;
