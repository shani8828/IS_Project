import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 border-t border-slate-800 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="bg-blue-600 p-2 rounded-lg"><Shield className="text-white" size={20} /></div> */}
              <span className="font-black tracking-tighter text-2xl text-white uppercase">LobbyVision</span>
            </div>
            <p className="text-slate-500 max-w-sm">An Information System project developed by ISE group members at IIT Kharagpur.</p>
          </div>
          {/* <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project</span>
              <a href="#" className="text-sm text-slate-500 hover:text-white">Architecture</a>
              <a href="#" className="text-sm text-slate-500 hover:text-white">API Docs</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Team</span>
              <a href="#" className="text-sm text-slate-500 hover:text-white">About Us</a>
              <a href="#" className="text-sm text-slate-500 hover:text-white">Contributions</a>
            </div>
          </div> */}
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-900 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700">© 2026 ISE IIT KGP | Lobby Monitoring System</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
